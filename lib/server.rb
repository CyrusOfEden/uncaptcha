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
  on "captcha" do
    res.headers["Content-Type"] = "application/json"

    # GET /captcha
    on get, root do
      res.write Captcha.new.to_json
    end

    # POST /captcha/:id?seq=
    on post, ":id", param("seq") do |id, seq|
      res.write Verifier.new(id, seq).to_json
    end

    # GET /captcha/:id
    on get, ":id" do |id|
      res.write Status.new(id).to_json
    end
  end
end
