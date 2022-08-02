import {
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/home/kai/repos/demo-website-remix/app/routes/blog/vivir-en-japon.mdx?browser
init_react();

// mdx:/home/kai/repos/demo-website-remix/app/routes/blog/vivir-en-japon.mdx
init_react();
var import_react = __toModule(require_react());
var attributes = {
  "title": "La realidad de vivir en Jap\xF3n",
  "date": new Date(16591392e5),
  "meta": {
    "title": "La realidad de vivir en Jap\xF3n"
  }
};
function MDXContent(props = {}) {
  const _components = Object.assign({
    h2: "h2",
    h3: "h3",
    p: "p"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement(_components.h2, null, "La realidad de vivir en Jap\xF3n"), "\n", attributes.date.toDateString(), "\n", /* @__PURE__ */ import_react.default.createElement(_components.h3, null, "Introducci\xF3n"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "Llevo casi 3 a\xF1os viviendo en Jap\xF3n,"), "\n", /* @__PURE__ */ import_react.default.createElement("iframe", {
    src: "https://embeds.beehiiv.com/eb2aa2c1-0717-4026-8fd6-766b64c8a5d1",
    "data-test-id": "beehiiv-embed",
    width: "100%",
    height: 320,
    frameBorder: 0,
    scrolling: "no",
    style: {
      borderRadius: 4,
      border: "2px solid #e5e7eb",
      margin: 0,
      backgroundColor: "transparent"
    }
  }));
  return MDXLayout ? /* @__PURE__ */ import_react.default.createElement(MDXLayout, {
    ...props
  }, _content) : _content;
}
var vivir_en_japon_default = MDXContent;
var headers = typeof attributes !== "undefined" && attributes.headers;
var meta = typeof attributes !== "undefined" && attributes.meta;
var links = void 0;
export {
  vivir_en_japon_default as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/blog/vivir-en-japon-G2VKI6JF.js.map
