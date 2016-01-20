require 'cuba'
require_relative 'lib/captcha'
require_relative 'lib/status'
require_relative 'lib/verifier'

Cuba.use Rack::Static,
  urls: ["/public"]

Cuba.define do
  # GET /captcha
  on "captcha" do
    res.headers["Access-Control-Allow-Origin"] = "*"
    res.headers["Content-Type"] = "application/json; charset=utf-8"

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
