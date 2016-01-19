require 'json/ext'
require 'redis'

require_relative 'verifier'

class Captcha
  SET = "uncaptchas"
  ID = "captcha_id"
  EXPIRE_TIME = 60 * 5 # 5 minutes

  attr_reader :image

  def self.conn
    @redis ||= Redis.new
  end

  def initialize
    raw_data = Captcha.conn.srandmember(SET)
    data = JSON.parse(raw_data, symbolize_names: true)

    @id = Captcha.conn.incr(ID)
    @image = data[:image]
    @sequence = data[:sequence]

    Captcha.set(@id, @sequence, EX: EXPIRE_TIME)
  end
end
