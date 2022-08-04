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
    h3: "h3"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement(_components.h2, null, "El futuro de este blog"), "\n", attributes.date.toDateString(), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, 'Hoy estaba viendo a un youtuber promocionando su "bootcamp" que te llevar\xE1 de 0 a conseguir un empleo full-stack. Honestamente, cualquier persona que te venda algo parecido te est\xE1 mintiendo, vendi\xE9ndote los posibles resultados, no el proceso.'), "\n", /* @__PURE__ */ import_react.default.createElement("img", {
    style: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "35%"
    },
    src: "https://media.giphy.com/media/scZPhLqaVOM1qG4lT9/giphy.gif",
    alt: "Gif"
  }), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "En este blog te compartir\xE9:"), "\n", /* @__PURE__ */ import_react.default.createElement("ul", null, /* @__PURE__ */ import_react.default.createElement("li", null, "Tutorial Hell"), "\n", /* @__PURE__ */ import_react.default.createElement("li", null, "500 d\xF3lares no son suficientes"), "\n", /* @__PURE__ */ import_react.default.createElement("li", null, "La realidad de programar"), "\n", /* @__PURE__ */ import_react.default.createElement("li", null, "Mi aporte...")), "\n", /* @__PURE__ */ import_react.default.createElement(_components.h3, null, "Tutorial Hell"));
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
//# sourceMappingURL=/build/routes/blog/futuro-de-este-blog-OHUY7OO6.js.map
