(function() {
  let settings = {
    url: "http://127.0.0.1:9292"
  };
  let state = {};
  let elements = {};

  const pipe = (value) => ({
    value,
    valueOf() {
      return this.value;
    },
    to(fn, ...args) {
      this.value = fn(this.value, ...args);
      return this;
    },
    call(method, ...args) {
      this.value[method](...args);
      return this;
    },
    apply(fn, ...args) {
      fn(this.value, ...args);
      return this;
    }
  });

  const url = (path) => `${settings.url}${path}`;

  const request = (type, url, fn) => {
    let req = new XMLHttpRequest();
    req.open(type.toUpperCase(), url);
    req.addEventListener("load", function() {
      if (this.readyState === 4 && this.status === 200) {
        fn(this.responseText);
      }
    });
    req.send();
    return req;
  }

  const q = (selector, parent) =>
    Array.prototype.slice.call((parent || document).querySelectorAll(selector));

  const show = (element) => element.style.display = "block";
  const hide = (element) => element.style.display = "hidden";

  const addClass = (element, cls) => element.classList.add(cls);
  const removeClass = (element, cls) => element.classList.remove(cls);

  const getAttr = (element, attr) => element.getAttribute(attr, value);
  const setAttr = (element, attr, value) => element.setAttribute(attr, value);

  // Add the stylesheet to the current document
  q("head")[0].appendChild(
    pipe(document.createElement("link"))
      .apply(setAttr, "rel", "stylesheet")
      .apply(setAttr, "type", "text/css")
      .apply(setAttr, "href", `${settings.url}/public/c.css`)
      .valueOf());

  function getCaptcha() {
    request("get", url("/captcha"), (res) => {
      let {id, image} = JSON.parse(res);
      state.id = id;
      state.image = image;

      setAttr(elements.input, "value", id);
      setAttr(elements.image, "src", `data:image/gif;base64,${image}`);
    });
  }

  function verifyCaptcha() {
    request("post", url(`/captcha/${state.id}?seq=${state.sequence}`), (res) => {
      let {id, status} = JSON.parse(res);
      if (id !== state.id) return;
      state.status = status;

      setAttr(elements.image, "src", "");
    });
  }

  function bootstrap() {
    let container = q("#uncaptcha")[0];
    container.innerHTML = `
      <img id="uncaptcha-image">
      <input type="hidden" name="uncaptcha-id" id="uncaptcha_id">
    `;
    elements.image = q("#uncaptcha-image")[0];
    elements.input = q("#uncaptcha_id")[0];
    getCaptcha();
  }

  window.state = state; // for debugging purposes.

  document.addEventListener("DOMContentLoaded", bootstrap);
})();
