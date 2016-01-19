require 'digest/sha1'
require_relative 'state'
require_relative 'status'

class Verifier < State
  attr_reader :digest

  def initialize(id, sequence, setup: true)
    super(id)
    @sequence = sequence
    set if setup
  end

  def set
    @digest = Verifier.conn.get(key).tap do |value|
      Verifier.conn.del(key) unless value.nil?
    end
  end

  def check(status: Status)
    return false if digest.nil?

    sequence = sequence.map { |color| color.to_s[0] }.join("") if sequence.is_a? Array

    if @result.nil?
      @result = digest == Digest::SHA1.hexdigest(@sequence)
      status.new(id).set(result)
    end

    @result
  end

  def key
    @key ||= "captcha-#{id}"
  end

  def to_h
    @hash ||= { id: @id, digest: check }
  end
end
