require 'digest/sha1'
require_relative 'state'
require_relative 'status'

class Verifier < State
  attr_reader :digest

  def initialize(id, sequence = nil, setup: true)
    super(id)

    return unless setup

    @sequence = if sequence.is_a? Array
      sequence.map { |color| color.to_s[0] }.join("")
    else
      sequence
    end

    set
  end

  def set
    @digest = Verifier.conn.get(key).tap do |value|
      Verifier.conn.del(key) unless value.nil?
    end
  end

  def check(status: Status)
    return false if @digest.nil?

    if @result.nil?
      @result = @digest == Digest::SHA1.hexdigest(@sequence)
      status.new(id).set(@result)
    end

    @result
  end

  def key
    @key ||= "captcha-#{id}"
  end

  def to_h
    @hash ||= { id: @id, status: check }
  end
end
