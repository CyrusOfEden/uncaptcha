# Uncaptcha

Simple, fun captchas for your forms.

_Disclaimer: I am making no claims about the security of this captcha. I've only attempted to obfuscate as much as I can._

## Running It Off The Community Server

**Embedding**

```html
<!-- Add this element to your form,
     where you'd like the captcha to appear.-->
<div class="uncaptcha"></div>

<!-- Add this script tag, where you add your scripts -->
<script src="/path/to/c.js"></script>
```

**Verifying**

Uncaptcha will add a hidden input to your form, something like this:

```html
<input type="hidden" id="uncaptcha_id" name="uncaptcha[id]" value="#">
```

The value of this input will the the ID of the captcha that your server would need to verify on submission of the form. This is as simple as sending a `GET` request to `path/to/captcha/:id`, where `:id` is the ID of the submitted captcha. The response will be similar to the following, where `status` is the status of the captcha:

```json
{
  "id": 253,
  "status": true
}
```

_N.B. You can only check the status of a captcha once. This is to prevent checking against the same validated captcha._

## Running It On Your Own

**Dependencies**

- Ruby 2.3.0
- Node 5.4.0
- Redis 3.0.0

**Setup**

1. Clone the repo
2. `npm install` and `bundle install`
3. `ruby tasks/generate_captchas.rb`. Feel free to exit out of the pry binding.
4. Modify the URL on line 3 of `src/index.js`, as needed.
5. `npm run build`

**Running**

`rackup config.ru`

**Embedding**

```html
<!-- Add this element to your form,
     where you'd like the captcha to appear.-->
<div class="uncaptcha"></div>

<!-- Add this script tag, where you add your scripts -->
<script src="URL/public/c.js"></script>
```

Make sure to modify URL to the URL you set previously.

**Verifying**

Uncaptcha will add a hidden input to your form, something like this:

```html
<input type="hidden" id="uncaptcha_id" name="uncaptcha[id]" value="#">
```

The value of this input will the the ID of the captcha that your server would need to verify on submission of the form. This is as simple as sending a `GET` request to `/captcha/:id`, where `:id` is the ID of the submitted captcha. The response will be similar to the following, where `status` is the status of the captcha:

```json
{
  "id": 253,
  "status": true
}
```

_N.B. You can only check the status of a captcha once. This is to prevent checking against the same validated captcha._
