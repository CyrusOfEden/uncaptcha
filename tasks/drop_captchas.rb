require 'pry'
require 'redis'
require_relative '../lib/captcha'

Redis.new.del(Captcha::SET)

binding.pry
