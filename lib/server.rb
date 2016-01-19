require 'cuba'
require_relative 'captcha'

Cuba.use Rack::Static,
  urls: "/uncaptcha.js",
  root: "public/uncaptcha.js"

Cuba.use Rack::Static,
  urls: "/uncaptcha.css",
  root: "public/uncaptcha.css"

Cuba.define do
  on get, "captcha" do
  end

  on post, "captcha/:id", param("seq") do |sequence|
  end
end
