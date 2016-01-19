require 'json/ext'
require 'redis'

require_relative 'state'
require_relative 'verifier'

class Captcha < State
  SET = "uncaptchas"
  ID = "captcha_id"
  EXPIRE_TIME = 60 * 5 # 5 minutes

  attr_reader :image

  def initialize(verifier: Verifier)
    raw_data = Captcha.conn.srandmember(SET)
    data = JSON.parse(raw_data, symbolize_names: true)

    super(Captcha.conn.incr(ID))
    @image = data[:image]
    @sequence = data[:sequence]

    Captcha.conn.set(verifier.new(@id).key, @sequence, EX: EXPIRE_TIME)
  end
end
