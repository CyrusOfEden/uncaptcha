require 'json/ext' # use the C extension
require 'redis'
require 'pry'
require_relative '../lib/captcha'
require_relative '../lib/generator'

colors = [:blue, :red, :purple, :green, :yellow]

generator = Generator.new do |config|
  config.dimensions = {
    height: 80,
    width: 400
  }
  config.colors = {
    order: colors,
    active: colors.zip([
      '#0074d9', '#ff4136', '#b10dc9', '#2ecc40', '#ffdc00'
    ]).to_h,
    inactive: colors.zip([
      '#4dc1ff', '#ff8e83', '#fe5aff', '#7bff8d', '#ffff4d'
    ]).to_h
  }
end

redis = Redis.new

# If the number of elements in the set is less than the length of the product below
if redis.scard(Captcha::SET) < colors.size ** 4
  # Calculate the cartesian product of colors of length 4
  product = colors.product(colors, colors, colors)

  product.each do |order|
    redis.sadd(Captcha::SET, generator.build(order).to_json)
  end
end

binding.pry
