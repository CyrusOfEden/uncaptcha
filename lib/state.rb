require 'redis'

class State
  attr_reader :id

  def self.conn
    @redis ||= Redis.new
  end

  def initialize(id)
    @id = id
  end
end
