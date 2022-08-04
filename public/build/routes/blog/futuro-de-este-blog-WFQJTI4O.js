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
  "title": "El futuro de este blog",
  "date": new Date(16594848e5),
  "meta": {
    "title": "El futuro de este blog"
  }
};
function MDXContent(props = {}) {
  const _components = Object.assign({
    h2: "h2",
    p: "p",
    h3: "h3",
    a: "a",
    h4: "h4"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement(_components.h2, null, "El futuro de este blog"), "\n", attributes.date.toDateString(), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "En este blog te voy a compartir los pr\xF3ximos cambios que tendr\xE1 este blog. Ya paso cerca de un mes desde que cree este blog y \xFAltimamente estoy pensando a que direcci\xF3n va todo esto... Qu\xE9date si te interesa conocer las diferentes estrateg\xEDas que tengo en mente, si vienes del futuro puede que ya se hayan cumplicado \u{1F928}\nEn este blog te compartir\xE9:"), "\n", /* @__PURE__ */ import_react.default.createElement("ul", null, /* @__PURE__ */ import_react.default.createElement("li", null, "Divisi\xF3n de contenido"), "\n", /* @__PURE__ */ import_react.default.createElement("li", null, "Newsletter"), "\n", /* @__PURE__ */ import_react.default.createElement("li", null, "Frecuencia")), "\n", /* @__PURE__ */ import_react.default.createElement("img", {
    style: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "35%",
      minWidth: 290
    },
    src: "https://media.giphy.com/media/Vwz4zdntMXrUY/giphy.gif",
    alt: "Gif"
  }), "\n", /* @__PURE__ */ import_react.default.createElement(_components.h3, null, "Divisi\xF3n de contenido"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "A finales de este a\xF1o estar\xE9 trabajando en el nuevo sitio web, para esto he estado pensando en como organizar el blog para que sea f\xE1cil de leer.", /* @__PURE__ */ import_react.default.createElement("br", null), "\nA lo largo de este mes sub\xED blogs de desarrollo personal, productividad y programaci\xF3n. Pensandol\xF3 bien, no deber\xEDa de tener un blog mezclando diferentes tem\xE1ticas. El nuevo blog estar\xE1 dividido en 3. El principal de productividad y desarrollo personal. La segunda parte de programaci\xF3n. Y la tercera parte de startups."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.h3, null, "Newsletter"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "Para el blog principal de desarrollo personal y productividad ya cree un newsletter, sin embargo, creare un newsletter para cada blog. ", /* @__PURE__ */ import_react.default.createElement(_components.a, {
    href: "#suscribir"
  }, "Puedes suscribirte al email desde ahora"), " \u{1F604}", /* @__PURE__ */ import_react.default.createElement("br", null), '\nEn el newsletter principal estar\xE9 compartiendo los blogs pero tambi\xE9n un newsletter semanal con las "cosas" m\xE1s importantes que haya aprendido esa semana. Pueden ser art\xEDculos, videos, tweets, libros y otro tipo de contenido. Se pretende que el newsletter principal siempre sea gratuito. Recibe tu primer newsletter esta semana y dame feedback, eso me ayuda mucho para mejorar.'), "\n", /* @__PURE__ */ import_react.default.createElement(_components.h3, null, "Frecuencia"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "Este mes seguir\xE9 subiendo un blog diario, el contenido va a seguir siendo variado. A\xFAn no hay fecha para el nuevo blog, pero a m\xE1s tardar en diciembre ya estar\xE9 trabajando en ello. Despu\xE9s de este mes la frecuencia cambiar\xE1 y tambi\xE9n har\xE9 una divisi\xF3n temporal de los blogs como ya mencione. Subir\xE9 2 blogs semanales de desarrollo personal / productividad. Un blog de programaci\xF3n a la semana. El blog de startups no lo iniciar\xE9 pronto, pero cuando empiece a tener m\xE1s experiencias en el ecosistema empezar\xE9 a escribir."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.h3, null, "Bonus! Estrategia"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "Estoy seguro que esto cambiar\xE1 continuamente. Estuve pensando en implementar un sistema de referidos para el newsletter. Por otro lado me enfocar\xE9 en crear contenido primero y despu\xE9s empezar a compartir ese contenido"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.h2, null, /* @__PURE__ */ import_react.default.createElement("p", {
    id: "suscribir"
  }, "Suscr\xEDbete al newsletter!")), "\n", /* @__PURE__ */ import_react.default.createElement(_components.h4, null, "Hay sorpresa para las primeras 10 personas :)"), "\n", /* @__PURE__ */ import_react.default.createElement("iframe", {
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
//# sourceMappingURL=/build/routes/blog/futuro-de-este-blog-WFQJTI4O.js.map
