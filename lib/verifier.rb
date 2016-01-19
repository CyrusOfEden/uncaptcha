require 'digest/sha1'
require_relative 'status'

class Verifier
  attr_reader :id, :digest

  def self.conn
    @redis ||= Redis.new
  end

  def initialize(id)
    key = encode_key(id)

    @id = id
    @digest = Verifier.conn.get(key)

    Verifier.conn.del(key)
  end

  def check(sequence)
    return false if digest.nil?

    sequence = sequence.map { |color| color.to_s[0] }.join("") if sequence.is_a? Array
    result = digest == Digest::SHA1.hexdigest(sequence)

    Status.new(id).set(result)

    result
  end

  private

  def encode_key(id)
    "captcha-#{id}"
  end
end
