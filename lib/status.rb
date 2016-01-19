require_relative 'state'

# A Status returns the persisted status from the Verifier and deletes it,
# to prevent checking the status of a previously-verified Captcha.
class Status < State
  EXPIRE_TIME = 60 # 1 minute

  # Set the status, with an expiry
  def set(status)
    Status.conn.set(key, status, EX: EXPIRE_TIME)
  end

  # Get and delete the status from Redis
  def check
    @status ||= Status.conn.get(key).tap do |value|
      Status.conn.del(key) unless value.nil?
    end
    @status == "true"
  end

  def key
    @key ||= "captcha-#{id}-status"
  end

  def to_h
    @hash ||= { id: @id, status: check }
  end
end
