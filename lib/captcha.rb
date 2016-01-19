require 'json/ext'
require 'redis'

require_relative 'state'
require_relative 'verifier'

# A Captcha, when created, returns an image and persists the pattern digest.
class Captcha < State
  SET = "uncaptchas"
  ID = "captcha_id"
  EXPIRE_TIME = 60 * 5 # 5 minutes

  attr_reader :image

  # Dependency injection, in case another key-encoder wants to be used
  def initialize(encoder: Verifier)
    # Get a random captcha from the Redis Set
    data = JSON.parse(Captcha.conn.srandmember(SET), symbolize_names: true)

    super(Captcha.conn.incr(ID))
    @image = data[:image]
    @sequence = data[:sequence]

    # Set the digest value in Redis, but with an expiry.
    Captcha.conn.set(encoder.new(@id).key, @sequence, EX: EXPIRE_TIME)
  end

  def to_h
    @hash ||= { id: @id, image: @image }
  end
end
