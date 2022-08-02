import {
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/home/kai/repos/demo-website-remix/app/routes/blog/reto-blog.mdx?browser
init_react();

// mdx:/home/kai/repos/demo-website-remix/app/routes/blog/reto-blog.mdx
init_react();
var import_react = __toModule(require_react());
var attributes = {
  "title": "Reto | Escribir un blog diario",
  "date": new Date(16590528e5),
  "meta": {
    "title": "Reto | Escribir un blog diario"
  }
};
function MDXContent(props = {}) {
  const _components = Object.assign({
    h2: "h2",
    h3: "h3",
    p: "p"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement(_components.h2, null, "Reto: Escribir un blog diario"), "\n", attributes.date.toDateString(), "\n", /* @__PURE__ */ import_react.default.createElement(_components.h3, null, "Introducci\xF3n"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "En este blog te compartir\xE9 por qu\xE9 voy a escribir un blog diario durante agosto de 2022."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.h3, null, "De donde nace"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "Cree este ", /* @__PURE__ */ import_react.default.createElement("a", {
    href: "https://kaitakami.com/blog/",
    target: "_blank"
  }, "blog"), " con 2 objetivos."), "\n", /* @__PURE__ */ import_react.default.createElement("ul", null, /* @__PURE__ */ import_react.default.createElement("li", null, /* @__PURE__ */ import_react.default.createElement(_components.p, null, "Compartir mis aprendizajes y experiencias.")), /* @__PURE__ */ import_react.default.createElement("li", null, /* @__PURE__ */ import_react.default.createElement(_components.p, null, "Aprender a escribir."))), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "Sin embargo, hace m\xE1s de 1 mes que cree este blog y solo he subido 3 posts. No es que no escriba, escribo seguido en Notion, pero lo intento perfeccionar tanto que tardo meses en terminarlo. \xDAltimamente, vi un video de Ali Abdaal\xA0en donde compart\xEDa que le llevo m\xE1s de 80 videos para conseguir su primer video monetizado en YouTube. Todos comienzan dando el primer paso. Qu\xE9 mejor manera de hacerlo que iniciar este reto.\nSin embargo, hace m\xE1s de 1 mes que cree este blog y solo he subido 3 posts. No es que no escriba, escribo seguido en Notion, pero lo intento perfeccionar tanto que tardo meses en terminarlo. \xDAltimamente, vi un video de ", /* @__PURE__ */ import_react.default.createElement("a", {
    href: "https://youtube.com/c/aliabdaal",
    target: "_blank"
  }, "Ali Abdaal"), " en donde compart\xEDa que tuvo que crear m\xE1s de 80 videos para conseguir su primer video monetizado en youtube. Todos comienzan dando el primer paso. Qu\xE9 mejor manera de hacerlo que iniciar este reto."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.h3, null, "\xBFC\xF3mo?"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "No esperes blogs de alt\xEDsima calidad, espera blogs cortos, entretenidos y educativos. Escribir\xE9 de programaci\xF3n, desarrollo personal, Jap\xF3n y cultura. Va a ser un viaje divertido :)"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "Mi sitio web est\xE1 en un ", /* @__PURE__ */ import_react.default.createElement("a", {
    href: "https://github.com/kaitakami/demo-website-remix",
    target: "_blank"
  }, "repositorio p\xFAblico en github"), ". Para crear un nuevo blog es tan sencillo como crear un archivo mdx y hacer un redeploy del sitio web. Sin embargo, volver\xE9 a crear este sitio web de una manera m\xE1s estructurada y din\xE1mica, con comentarios e interacci\xF3n. De hecho... Cree este sitio web en 30 minutos con ", /* @__PURE__ */ import_react.default.createElement("a", {
    href: "https://remix.run/",
    target: "_blank"
  }, "Remix"), ", un framework de JavaScript."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.h3, null, "Final"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "Gracias por leer hasta ac\xE1, si encuentras mejoras o quisieras que escribiese sobre un tema espec\xEDfico ", /* @__PURE__ */ import_react.default.createElement("a", {
    href: "https://twitter.com/kaitakami_/",
    target: "_blank"
  }, "comp\xE1rtemelo por twitter"), ". Van a ser 31 d\xEDas llenos de pensamientos."));
  return MDXLayout ? /* @__PURE__ */ import_react.default.createElement(MDXLayout, {
    ...props
  }, _content) : _content;
}
var reto_blog_default = MDXContent;
var headers = typeof attributes !== "undefined" && attributes.headers;
var meta = typeof attributes !== "undefined" && attributes.meta;
var links = void 0;
export {
  reto_blog_default as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/blog/reto-blog-DRYVCANP.js.map
