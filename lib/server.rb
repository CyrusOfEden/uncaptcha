require 'cuba'
require_relative 'captcha'
require_relative 'status'
require_relative 'verifier'

Cuba.use Rack::Static,
  urls: "/uncaptcha.js",
  root: "public/uncaptcha.js"

Cuba.use Rack::Static,
  urls: "/uncaptcha.css",
  root: "public/uncaptcha.css"

Cuba.define do
  on get, "captcha" do
    res.write Captcha.new.to_json
  end

  on post, "captcha/:id", param("seq") do |id, sequence|
    res.write Verifier.new(id, sequence).to_json
  end

  on post, "captcha/:id/status" do |id|
    res.write Status.new(id).to_json
  end
end
