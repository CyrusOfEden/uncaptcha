require_relative 'state'

class Status < State
  EXPIRE_TIME = 60 # 1 minute

  def set(status)
    Status.conn.set(key, status, EX: EXPIRE_TIME)
  end

  def check
    @status ||= Status.conn.get(key).tap do |value|
      Status.conn.del(key) unless value.nil?
    end
    @status == "true"
  end

  def key
    @key ||= "captcha-#{id}-status"
  end
end
