import {
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/home/kai/repos/demo-website-remix/app/routes/blog/futuro-de-este-blog.mdx?browser
init_react();

// mdx:/home/kai/repos/demo-website-remix/app/routes/blog/futuro-de-este-blog.mdx
init_react();
var import_react = __toModule(require_react());
var attributes = {
  "title": "El infierno de los cursos",
  "date": new Date(16594848e5),
  "meta": {
    "title": "El infierno de los cursos"
  }
};
function MDXContent(props = {}) {
  const _components = Object.assign({
    h2: "h2",
    p: "p",
    h3: "h3",
    h4: "h4"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement(_components.h2, null, "El futuro de este blog"), "\n", attributes.date.toDateString(), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "En este blog te voy a compartir los pr\xF3ximos cambios que tendr\xE1 este blog. Ya paso cerca de un mes desde que cree este blog y \xFAltimamente estoy pensando a que direcci\xF3n va todo esto... Qu\xE9date si te interesa conocer las diferentes estrateg\xEDas que tengo en mente, si vienes del futuro puede que ya se hayan cumplicado \u{1F928}"), "\n", /* @__PURE__ */ import_react.default.createElement("img", {
    style: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "35%",
      minWidth: 290
    },
    src: "https://media.giphy.com/media/Vwz4zdntMXrUY/giphy.gif",
    alt: "Gif"
  }), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "En este blog te compartir\xE9:"), "\n", /* @__PURE__ */ import_react.default.createElement("ul", null, /* @__PURE__ */ import_react.default.createElement("li", null, "Divisi\xF3n de contenido"), "\n", /* @__PURE__ */ import_react.default.createElement("li", null, "Newsletter"), "\n", /* @__PURE__ */ import_react.default.createElement("li", null, "Frecuencia")), "\n", /* @__PURE__ */ import_react.default.createElement(_components.h3, null, "Divisi\xF3n de contenido"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.h2, null, "Suscr\xEDbete al newsletter!"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.h4, null, "Hay sorpresa para las primeras 10 personas :)"), "\n", /* @__PURE__ */ import_react.default.createElement("iframe", {
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
var futuro_de_este_blog_default = MDXContent;
var headers = typeof attributes !== "undefined" && attributes.headers;
var meta = typeof attributes !== "undefined" && attributes.meta;
var links = void 0;
export {
  futuro_de_este_blog_default as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/blog/futuro-de-este-blog-HLHKXO2A.js.map
