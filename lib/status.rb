require 'redis'

class Status
  EXPIRE_TIME = 60 # 1 minute

  attr_reader :id

  def self.conn
    @redis ||= Redis.new
  end

  def initialize(id)
    @id = id
  end

  def set(status)
    Status.conn.set(encode_key(id), status, EX: EXPIRE_TIME)
  end

  def status
    key = encode_key(id)
    value = Status.conn.get(key)
    Status.conn.del(key)
    value
  end

  private

  def encode_key(id)
    "captcha-#{id}-status"
  end
end
