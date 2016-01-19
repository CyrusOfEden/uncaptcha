require 'json/ext'
require 'digest/sha1'
require 'redis'

module Uncaptcha
  class Captcha
    SET = "uncaptchas"

    attr_reader :image

    def self.conn
      @redis ||= Redis.new
    end

    def initialize
      data = JSON.parse(Captcha.conn.srandmember(SET), symbolize_names: true)
      @image = data[:image]
      @sequence = data[:sequence]
    end

    def check(sequence)
      sequence = sequence.map { |color| color.to_s[0] }.join("") if sequence.is_a? Array
      @sequence == Digest::SHA1.hexdigest(sequence)
    end
  end
end
