require 'digest/sha1'
require_relative 'state'
require_relative 'status'

class Verifier < State
  attr_reader :digest

  def initialize(id, setup: true)
    super(id)
    set if setup
  end

  def set
    @digest = Verifier.conn.get(key).tap do |value|
      Verifier.conn.del(key) unless value.nil?
    end
  end

  def check(sequence, status: Status)
    return false if digest.nil?

    sequence = sequence.map { |color| color.to_s[0] }.join("") if sequence.is_a? Array
    (digest == Digest::SHA1.hexdigest(sequence)).tap do |result|
      status.new(id).set(result)
    end
  end

  def key
    @key ||= "captcha-#{id}"
  end
end
