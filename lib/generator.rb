require 'base64'
require 'digest/sha1'
require 'RMagick'

class Generator
  attr_accessor :colors, :dimensions

  include Magick

  # To allow for Generator.new { |config| ... }, where config is the generator instance
  def initialize
    yield self if block_given?
  end

  # A shot has multiple frames. It has an active color and a delay.
  def shot(active:, delay:)
    panel_width = self.dimensions[:width] / self.colors[:order].size

    Image.new(self.dimensions[:width], self.dimensions[:height]).tap do |frame|
      self.colors[:order].each.with_index do |color, index|
        color_code = if color == active
          self.colors[:active][color]
        else
          self.colors[:inactive][color]
        end

        panel_width.times do |x| # 1–80
          panel_width.times do |y| # 1–80
            frame.pixel_color((index * panel_width) + x, y, color_code)
          end
        end
      end
      frame.delay = delay
    end
  end

  # A scene has multiple shots. It has an active color, which may or may not be nil.
  def scene(color)
    image = ImageList.new.tap do |scene|
      # Add shots to the scene
      scene << shot(active: color, delay: 85)
      scene << shot(active: nil, delay: 15)
    end
    # Write the scene to a temporary file, because ImageMagick cannot
    # infer the type of an arbitrary blob. Here, it can set metadata based on
    # on the file based on the .gif extension we use to write the file.
    blob = nil
    Dir.mktmpdir do |tmpdir|
      path = File.join(tmpdir, "#{color || 'base'}.gif")
      image.deconstruct.write(path)
      blob = File.open(path, 'rb').read
    end
    blob
  end

  # A lazily-built hash of all the scenes.
  def scenes
    @scenes ||= Hash.new do |hash, color|
      hash[color] = scene(color)
    end
  end

  # Build the gif for a specific sequence.
  # Returns a hash containing the SHA1-encoded order and the base64-encoded gif.
  def build(order)
    image = ImageList.new.tap do |scene|
      blobs = [scenes[:base], *order.map { |color| scenes[color.to_sym] }]
      scene.from_blob(*blobs)
      scene.iterations = 1
    end.deconstruct.to_blob
    # sequence is the first character of each color as a string
    sequence = order.map { |color| color.to_s[0] }.join("")

    { sequence: Digest::SHA1.hexdigest(sequence),
      image: Base64.encode64(image).gsub("\n", "") }
  end
end
