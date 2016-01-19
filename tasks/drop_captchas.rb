require 'pry'
require 'redis'
require_relative '../lib/uncaptcha/captcha'

Redis.new.del(Uncaptcha::Captcha::SET)

binding.pry
