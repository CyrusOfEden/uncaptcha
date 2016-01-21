require 'redis'

class State
  attr_reader :id

  # A separate connection for each model
  def self.conn
    @redis ||= Redis.new
  end

  # Default initializer
  def initialize(id)
    @id = id
  end

  # Expect children to implement a to_h method, which sould return a hash.
  def to_json
    to_h.to_json
  end
end
