require 'digest/sha1'
require_relative 'state'
require_relative 'status'

# A Verifier uses the persisted digest from Captcha to compare an attempt.
# Deletes the digest once attempted to prevent multiple tries on the same Captcha.
# It then persists the status accordingly.
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

  # Add the ability to inject an alternative state manager
  def check(persist: Status)
    # If there is no Captcha or it hasn't been verified yet
    return false if @digest.nil?

    # Set result if it hasn't been set already
    if @result.nil?
      @result = @digest == Digest::SHA1.hexdigest(@sequence)
      # Save the status
      persist.new(id).set(@result)
    end

    @result
  end

  def key
    @key ||= "captcha-#{id}-digest"
  end

  def to_h
    @hash ||= { id: @id, status: check }
  end
end
