var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/highlight.js/styles/github-dark-dimmed.css
var require_github_dark_dimmed = __commonJS({
  "node_modules/highlight.js/styles/github-dark-dimmed.css"(exports, module2) {
    module2.exports = "/build/_assets/github-dark-dimmed-NVKMPVQH.css";
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toModule(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require("remix"));
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/home/kai/repos/demo-website-remix/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links
});
var import_remix2 = __toModule(require("remix"));

// app/styles/global.css
var global_default = "/build/_assets/global-ZMRKJM22.css";

// app/styles/dark.css
var dark_default = "/build/_assets/dark-FZEP2DZB.css";

// route-module:/home/kai/repos/demo-website-remix/app/root.tsx
var links = () => {
  return [
    { rel: "stylesheet", href: global_default },
    {
      rel: "stylesheet",
      href: dark_default,
      media: "(prefers-color-scheme: dark)"
    }
  ];
};
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null)));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement(Document, {
    title: "Error!"
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "There was an error"), /* @__PURE__ */ React.createElement("p", null, error.message), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("p", null, "Hey, developer, you should replace this with what you want your users to see."))));
}
function CatchBoundary() {
  let caught = (0, import_remix2.useCatch)();
  let message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ React.createElement("p", null, "Oops! Parece que has entrado a una p\xE1gina que a\xFAn no existe.");
      break;
    case 404:
      message = /* @__PURE__ */ React.createElement("p", null, "Oops! Parece que has entrado a una p\xE1gina que a\xFAn no existe.");
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ React.createElement(Document, {
    title: `${caught.status} ${caught.statusText}`
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("h1", null, caught.status, ": ", caught.statusText), message));
}
function Document({
  children,
  title
}) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), title ? /* @__PURE__ */ React.createElement("title", null, title) : null, /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), process.env.NODE_ENV === "development" && /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}
function Layout({ children }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "remix-app"
  }, /* @__PURE__ */ React.createElement("header", {
    className: "remix-app__header"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container remix-app__header-content"
  }, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/",
    title: "Home"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "remix-app__header-home-link"
  }, "Kai")), /* @__PURE__ */ React.createElement("nav", {
    "aria-label": "Main navigation",
    className: "remix-app__header-nav"
  }, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/"
  }, "Inicio")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "blog"
  }, "Blog")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/kaitakami/",
    target: "_blank"
  }, "GitHub")))))), /* @__PURE__ */ React.createElement("div", {
    className: "remix-app__main"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container remix-app__main-content"
  }, children)), /* @__PURE__ */ React.createElement("footer", {
    className: "remix-app__footer"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container remix-app__footer-content"
  }, /* @__PURE__ */ React.createElement("p", null, "\xA9 Kai Takami"))));
}

// route-module:/home/kai/repos/demo-website-remix/app/routes/demos/actions.tsx
var actions_exports = {};
__export(actions_exports, {
  action: () => action,
  default: () => ActionsDemo,
  meta: () => meta
});
var import_react = __toModule(require("react"));
var import_remix3 = __toModule(require("remix"));
function meta() {
  return { title: "Actions Demo" };
}
var action = async ({ request }) => {
  let formData = await request.formData();
  let answer = formData.get("answer");
  if (typeof answer !== "string") {
    return (0, import_remix3.json)("Come on, at least try!", { status: 400 });
  }
  if (answer !== "egg") {
    return (0, import_remix3.json)(`Sorry, ${answer} is not right.`, { status: 400 });
  }
  return (0, import_remix3.redirect)("/demos/correct");
};
function ActionsDemo() {
  let actionMessage = (0, import_remix3.useActionData)();
  let answerRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    if (actionMessage && answerRef.current) {
      answerRef.current.select();
    }
  }, [actionMessage]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "remix__page"
  }, /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("h2", null, "Actions!"), /* @__PURE__ */ React.createElement("p", null, "This form submission will send a post request that we handle in our `action` export. Any route can export an action to handle data mutations."), /* @__PURE__ */ React.createElement(import_remix3.Form, {
    method: "post",
    className: "remix__form"
  }, /* @__PURE__ */ React.createElement("h3", null, "Post an Action"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("i", null, "What is more useful when it is broken?")), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("div", null, "Answer:"), /* @__PURE__ */ React.createElement("input", {
    ref: answerRef,
    name: "answer",
    type: "text"
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", null, "Answer!")), actionMessage ? /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, actionMessage)) : null)), /* @__PURE__ */ React.createElement("aside", null, /* @__PURE__ */ React.createElement("h3", null, "Additional Resources"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Guide:", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://remix.run/guides/data-writes"
  }, "Data Writes")), /* @__PURE__ */ React.createElement("li", null, "API:", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://remix.run/api/conventions#action"
  }, "Route Action Export")), /* @__PURE__ */ React.createElement("li", null, "API:", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://remix.run/api/remix#useactiondata"
  }, /* @__PURE__ */ React.createElement("code", null, "useActionData"))))));
}

// route-module:/home/kai/repos/demo-website-remix/app/routes/demos/correct.tsx
var correct_exports = {};
__export(correct_exports, {
  default: () => NiceWork
});
function NiceWork() {
  return /* @__PURE__ */ React.createElement("h1", null, "You got it right!");
}

// route-module:/home/kai/repos/demo-website-remix/app/routes/demos/params.tsx
var params_exports = {};
__export(params_exports, {
  default: () => Boundaries,
  meta: () => meta2
});
var import_remix4 = __toModule(require("remix"));
function meta2() {
  return { title: "Boundaries Demo" };
}
function Boundaries() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "remix__page"
  }, /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(import_remix4.Outlet, null)), /* @__PURE__ */ React.createElement("aside", null, /* @__PURE__ */ React.createElement("h2", null, "Click these Links"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "."
  }, "Start over")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "one"
  }, "Param: ", /* @__PURE__ */ React.createElement("i", null, "one"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "two"
  }, "Param: ", /* @__PURE__ */ React.createElement("i", null, "two"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "this-record-does-not-exist"
  }, "This will be a 404")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "shh-its-a-secret"
  }, "And this will be 401 Unauthorized")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "kaboom"
  }, "This one will throw an error")))));
}

// route-module:/home/kai/repos/demo-website-remix/app/routes/demos/params/index.tsx
var params_exports2 = {};
__export(params_exports2, {
  default: () => Boundaries2
});
function Boundaries2() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "Params"), /* @__PURE__ */ React.createElement("p", null, "When you name a route segment with $ like", " ", /* @__PURE__ */ React.createElement("code", null, "routes/users/$userId.js"), ", the $ segment will be parsed from the URL and sent to your loaders and actions by the same name."), /* @__PURE__ */ React.createElement("h2", null, "Errors"), /* @__PURE__ */ React.createElement("p", null, "When a route throws and error in it's action, loader, or component, Remix automatically catches it, won't even try to render the component, but it will render the route's ErrorBoundary instead. If the route doesn't have one, it will bubble up to the routes above it until it hits the root."), /* @__PURE__ */ React.createElement("p", null, "So be as granular as you want with your error handling."), /* @__PURE__ */ React.createElement("h2", null, "Not Found"), /* @__PURE__ */ React.createElement("p", null, "(and other", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses"
  }, "client errors"), ")"), /* @__PURE__ */ React.createElement("p", null, "Loaders and Actions can throw a ", /* @__PURE__ */ React.createElement("code", null, "Response"), " instead of an error and Remix will render the CatchBoundary instead of the component. This is great when loading data from a database isn't found. As soon as you know you can't render the component normally, throw a 404 response and send your app into the catch boundary. Just like error boundaries, catch boundaries bubble, too."));
}

// route-module:/home/kai/repos/demo-website-remix/app/routes/demos/params/$id.tsx
var id_exports = {};
__export(id_exports, {
  CatchBoundary: () => CatchBoundary2,
  ErrorBoundary: () => ErrorBoundary2,
  default: () => ParamDemo,
  loader: () => loader,
  meta: () => meta3
});
var import_remix5 = __toModule(require("remix"));
var loader = async ({ params }) => {
  if (params.id === "this-record-does-not-exist") {
    throw new Response("Not Found", { status: 404 });
  }
  if (params.id === "shh-its-a-secret") {
    throw (0, import_remix5.json)({ webmasterEmail: "hello@remix.run" }, { status: 401 });
  }
  if (params.id === "kaboom") {
    lol();
  }
  return { param: params.id };
};
function ParamDemo() {
  let data = (0, import_remix5.useLoaderData)();
  return /* @__PURE__ */ React.createElement("h1", null, "The param is ", /* @__PURE__ */ React.createElement("i", {
    style: { color: "red" }
  }, data.param));
}
function CatchBoundary2() {
  let caught = (0, import_remix5.useCatch)();
  let message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ React.createElement("p", null, "Looks like you tried to visit a page that you do not have access to. Maybe ask the webmaster (", caught.data.webmasterEmail, ") for access.");
    case 404:
      message = /* @__PURE__ */ React.createElement("p", null, "Looks like you tried to visit a page that does not exist.");
    default:
      message = /* @__PURE__ */ React.createElement("p", null, "There was a problem with your request!", /* @__PURE__ */ React.createElement("br", null), caught.status, " ", caught.statusText);
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "Oops!"), /* @__PURE__ */ React.createElement("p", null, message), /* @__PURE__ */ React.createElement("p", null, "(Isn't it cool that the user gets to stay in context and try a different link in the parts of the UI that didn't blow up?)"));
}
function ErrorBoundary2({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "Error!"), /* @__PURE__ */ React.createElement("p", null, error.message), /* @__PURE__ */ React.createElement("p", null, "(Isn't it cool that the user gets to stay in context and try a different link in the parts of the UI that didn't blow up?)"));
}
var meta3 = ({ data }) => {
  return {
    title: data ? `Param: ${data.param}` : "Oops..."
  };
};

// route-module:/home/kai/repos/demo-website-remix/app/routes/demos/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => Index,
  links: () => links2,
  meta: () => meta4
});
var import_remix6 = __toModule(require("remix"));

// app/styles/demos/about.css
var about_default = "/build/_assets/about-GGM5BPB3.css";

// route-module:/home/kai/repos/demo-website-remix/app/routes/demos/about.tsx
var meta4 = () => {
  return {
    title: "About Remix"
  };
};
var links2 = () => {
  return [{ rel: "stylesheet", href: about_default }];
};
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "about"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "about__intro"
  }, /* @__PURE__ */ React.createElement("h2", null, "About Us"), /* @__PURE__ */ React.createElement("p", null, "Ok, so this page isn't really ", /* @__PURE__ */ React.createElement("em", null, "about us"), ", but we did want to show you a few more things Remix can do."), /* @__PURE__ */ React.createElement("p", null, "Did you notice that things look a little different on this page? The CSS that we import in the route file and include in its", " ", /* @__PURE__ */ React.createElement("code", null, "links"), " export is only included on this route and its children."), /* @__PURE__ */ React.createElement("p", null, "Wait a sec...", /* @__PURE__ */ React.createElement("em", null, "its children"), "? To understand what we mean by this,", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://remix.run/tutorial/4-nested-routes-params"
  }, "read all about nested routes in the docs"), "."), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement(import_remix6.Outlet, null)));
}

// route-module:/home/kai/repos/demo-website-remix/app/routes/demos/about/index.tsx
var about_exports2 = {};
__export(about_exports2, {
  default: () => AboutIndex
});
var import_remix7 = __toModule(require("remix"));
function AboutIndex() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "You are looking at the index route for the ", /* @__PURE__ */ React.createElement("code", null, "/about"), " URL segment, but there are nested routes as well!"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, /* @__PURE__ */ React.createElement(import_remix7.Link, {
    to: "whoa"
  }, "Check out one of them here."))));
}

// route-module:/home/kai/repos/demo-website-remix/app/routes/demos/about/whoa.tsx
var whoa_exports = {};
__export(whoa_exports, {
  default: () => AboutIndex2
});
var import_remix8 = __toModule(require("remix"));
function AboutIndex2() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Whoa, this is a nested route! We render the ", /* @__PURE__ */ React.createElement("code", null, "/about"), " layout route component, and its ", /* @__PURE__ */ React.createElement("code", null, "Outlet"), " renders our route component. \u{1F92F}"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, /* @__PURE__ */ React.createElement(import_remix8.Link, {
    to: ".."
  }, "Go back to the ", /* @__PURE__ */ React.createElement("code", null, "/about"), " index."))));
}

// route-module:/home/kai/repos/demo-website-remix/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index2,
  loader: () => loader2,
  meta: () => meta5
});
var import_remix9 = __toModule(require("remix"));
var loader2 = () => {
  let data = {
    resources: [
      {
        name: "Remix Docs",
        url: "https://remix.run/docs"
      },
      {
        name: "React Router Docs",
        url: "https://reactrouter.com/docs"
      },
      {
        name: "Remix Discord",
        url: "https://discord.gg/VBePs6d"
      }
    ],
    demos: [
      {
        to: "demos/actions",
        name: "Actions"
      },
      {
        to: "demos/about",
        name: "Nested Routes, CSS loading/unloading"
      },
      {
        to: "demos/params",
        name: "URL Params and Error Boundaries"
      }
    ]
  };
  return (0, import_remix9.json)(data);
};
var meta5 = () => {
  return {
    title: "Kai Takami",
    description: "Mi sitio web en construcci\xF3n :)"
  };
};
function Index2() {
  let data = (0, import_remix9.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "remix__page"
  }, /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("h2", null, "Hola \u{1F30A}"), /* @__PURE__ */ React.createElement("p", null, "Este sitio web est\xE1 en construcci\xF3n")));
}

// route-module:/home/kai/repos/demo-website-remix/app/routes/blog.tsx
var blog_exports = {};
__export(blog_exports, {
  default: () => Blog,
  links: () => links3,
  loader: () => loader3,
  meta: () => meta6
});
var import_github_dark_dimmed = __toModule(require_github_dark_dimmed());
var import_remix10 = __toModule(require("remix"));
var loader3 = (whatthis) => {
  return null;
};
var links3 = () => {
  return [
    {
      rel: "stylesheet",
      href: import_github_dark_dimmed.default
    }
  ];
};
function Blog() {
  return /* @__PURE__ */ React.createElement(import_remix10.Outlet, null);
}
var meta6 = () => {
  return {
    title: "Blog | Kai Takami",
    description: "Blog posts de Kai Takami"
  };
};

// mdx:/home/kai/repos/demo-website-remix/app/routes/blog/crear-una-startup-con-17.mdx
var crear_una_startup_con_17_exports = {};
__export(crear_una_startup_con_17_exports, {
  attributes: () => attributes,
  default: () => crear_una_startup_con_17_default,
  filename: () => filename,
  headers: () => headers,
  links: () => links4,
  meta: () => meta7
});
var import_react2 = __toModule(require("react"));
var attributes = {
  "title": "Numbax - Mi historia creando una startup con 17 a\xF1os",
  "date": new Date(16570656e5),
  "meta": {
    "title": "Numbax - Mi historia creando una startup con 17 a\xF1os"
  }
};
function MDXContent(props = {}) {
  const _components = Object.assign({
    h2: "h2",
    h3: "h3",
    p: "p",
    h4: "h4",
    pre: "pre",
    code: "code",
    span: "span"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement(_components.h2, null, "Numbax - Mi historia creando una startup con 17 a\xF1os"), "\n", attributes.date.toDateString(), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.h3, null, "Introducci\xF3n"), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.p, null, "En este blog compartir\xE9 cosas que ni siquiera los cofundadores de Numbax saben. Un proyecto que comenz\xF3 a inicios de a\xF1o (2021) de la mano de Juan y Francisco. Un proyecto que paso por diversas etapas: desde una comunidad crypto hasta una app disruptiva que cambiar\xEDa la manera en la que se aprende en las instituciones tradicionales. Entre 6 meses despu\xE9s, en junio del 2021 tome una decisi\xF3n que me marcar\xEDa de por vida."), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.h4, null, "\xBFQu\xE9 es Numbax?"), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.pre, null, /* @__PURE__ */ import_react2.default.createElement(_components.code, {
    className: "hljs language-js"
  }, /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "function"), " ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-title hljs-function"
  }, "explainNumbax"), "(", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-params"
  }), ") {\n  ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "return"), " ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-string"
  }, "'Ed-tech enfocada en gamificar la experiencia de aprendizaje en el aula tradicional.'"), ";\n}\n")), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.h3, null, "\xBFC\xF3mo entre a Numbax?"), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.p, null, "Pura coincidencia. Yo estaba regalando invitaciones de clubhouse, las ofrec\xED por un grupo de founders y future founders de startups. Juan me envi\xF3 un mensaje y le di una invitaci\xF3n. Yo vi su foto de perfil, se ve\xEDa un chico joven, no pude aguantar la curiosidad y le pregunt\xE9 cuantos a\xF1os ten\xEDa. Nos empezamos a conocer y organizamos una videollamada. Me presento sus proyectos y yo le presente los m\xEDos. En ese entonces ya hab\xEDan pasado 4 meses de haber dejado mi otro proyecto (18E). Me presento Numbax, sinceramente, yo no entend\xED mucho de lo que trataba, parec\xEDa un proyecto temporal para la pandemia. La videollamada termin\xF3 y no hab\xEDa planes de volver a hablar, a decir verdad pens\xE9 que no \xEDbamos a volver a tener contacto. Pero algo de la presentaci\xF3n de Juan me dejo con una espina en mi subconsciente. Una espina lo suficientemente grande para de vez en cuando pensar en el proyecto. Despu\xE9s de una semana recuerdo estar pregunt\xE1ndome si enviar o no un mensaje a Juan de las ideas que tuve durante esa semana. Por alguna raz\xF3n mi mente decidi\xF3 enviar el mensaje y fue algo que marc\xF3 un antes y un despu\xE9s en mi vida."), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.pre, null, /* @__PURE__ */ import_react2.default.createElement(_components.code, {
    className: "hljs language-js"
  }, /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "function"), " ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-title hljs-function"
  }, "findJuan"), "(", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-params"
  }), ") {\n  ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "return"), " ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-string"
  }, "'Join a startup'"), ";\n}\n")), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.p, null, "Volvimos a hacer otra videollamada, repentinamente entro Francisco y por primera vez est\xE1bamos los 3 juntos. Jam\xE1s pens\xE9 que esa ser\xEDa la 1ra de muchas reuniones."), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.h3, null, "Una vez dentro de Numbax..."), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.p, null, "Me ofrec\xED a ayudarles y estuve durante una semana haciendo trabajos principalmente de dise\xF1o, cree el logo de Numbax, redis\xE9\xF1anos la landing page, entre otras cosas. Pasaron 2 semanas, y volvimos a tener una reuni\xF3n, entre c\xF3mo cofundador a Numbax. Un momento que no voy a olvidar, recuerdo muy bien una semana antes estar pensando todos los d\xEDas si tendr\xEDa las agallas de decirle a Juan y a Francisco si me aceptaban como cofundador, no tuve las agallas pero por suerte Juan lo propuso y entre como cofundador."), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.p, null, "Despu\xE9s de esa charla mi mente cambi\xF3, Numbax era lo primero y lo \xFAltimo que pensaba todos los d\xEDas. Estaba enamorado del proyecto y hab\xEDa tenido la suerte de estar rodeado de otros 2 cofundadores maravillosos. Entre como CTO de la empresa, fue mucha responsabilidad en un inicio. Muchas aprendizajes, entre tantos entend\xED lo que es trabajar en una startup. \u201CCuando uno trabaja en una startup tiene que dar por hecho dos cosas, 1ro el aprendizaje es el pan de cada d\xEDa, 2do te encargar\xE1n hacer muchas cosas que no sabes hacer\u201D. Uno aprende a lidiar con la incertidumbre y las dudas siguiendo hacia adelante."), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.pre, null, /* @__PURE__ */ import_react2.default.createElement(_components.code, {
    className: "hljs language-js"
  }, /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "const"), " ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-title hljs-function"
  }, "joinNumbax"), " = (", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-params"
  }), ") => {\n  ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "return"), " ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-string"
  }, "'CTO??!!'"), "\n}\n")), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.h3, null, "El camino"), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.p, null, "Dentro de Numbax mi mayor enemigo fue WordPress, aprend\xED a usarlo en muy poco tiempo, y llegu\xE9 a borrar los recursos de la p\xE1gina web (por suerte no fue a mayores y logr\xE9 recuperar la informaci\xF3n), instale plug-ins que no tuve que instalar, pase horas intentando descifrar c\xF3mo cambiar el color de un bot\xF3n y mil cosas m\xE1s. Al final de todo fue un buen aprendizaje y logramos construir una landing page moderna y atractiva."), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.p, null, "Empezamos a entrevistar a profesores, contactamos a decenas de profesores y solo nos respondieron 3. Incluso hicimos una campa\xF1a en un grupo con m\xE1s de 10 mil docentes. Fracaso rotundamente. Hab\xEDamos creado un formulario conectado con calendly en nuestra p\xE1gina web que no sirvi\xF3 de mucho. En fin\u2026 por suerte le dimos al clavo y conocimos a un profesor que es un experto en tecnolog\xEDa para profesores. Ese d\xEDa volv\xED a ver la luz al fondo del t\xFAnel."), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.p, null, "El proyecto sigui\xF3 con sus altibajos y mucho karaoke para subir los \xE1nimos \u{1F643}."), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.p, null, "Mi relaci\xF3n con Juan y Francisco mejor\xF3 mucho, una lecci\xF3n que aprend\xED: cuando se trabaja en un proyecto remoto se debe entablar una relaci\xF3n (Entre los cofundadores) de amistad tambi\xE9n. No solo de socios. Al final del proyecto termine con 2 amigos espectaculares que se que van a lograr cosas muy grandes y hacer un impacto positivo a la sociedad."), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.pre, null, /* @__PURE__ */ import_react2.default.createElement(_components.code, {
    className: "hljs language-js"
  }, /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "const"), " results = ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-string"
  }, "' Two great friends :)'"), "\n}\n")), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.h4, null, "Este blog continuar\xE1..."), "\n", /* @__PURE__ */ import_react2.default.createElement("iframe", {
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
  return MDXLayout ? /* @__PURE__ */ import_react2.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var crear_una_startup_con_17_default = MDXContent;
var filename = "crear-una-startup-con-17.mdx";
var headers = typeof attributes !== "undefined" && attributes.headers;
var meta7 = typeof attributes !== "undefined" && attributes.meta;
var links4 = void 0;

// mdx:/home/kai/repos/demo-website-remix/app/routes/blog/sistema-de-productividad.mdx
var sistema_de_productividad_exports = {};
__export(sistema_de_productividad_exports, {
  attributes: () => attributes2,
  default: () => sistema_de_productividad_default,
  filename: () => filename2,
  headers: () => headers2,
  links: () => links5,
  meta: () => meta8
});
var import_react3 = __toModule(require("react"));
var attributes2 = {
  "title": "Creando un sistema de productividad",
  "date": new Date(16589664e5),
  "meta": {
    "title": "Convertirse en la mejor versi\xF3n de uno mismo"
  }
};
function MDXContent2(props = {}) {
  const _components = Object.assign({
    h2: "h2",
    h3: "h3",
    p: "p"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement(_components.h2, null, "Convertirse en la mejor versi\xF3n de uno mismo"), "\n", attributes2.date.toDateString(), "\n", /* @__PURE__ */ import_react3.default.createElement(_components.h3, null, "Introducci\xF3n"), "\n", /* @__PURE__ */ import_react3.default.createElement(_components.p, null, "En este blog compartir\xE9 el proceso de crear un sistema para ser m\xE1s productivo y lograr conseguir mis objetivos al final del d\xEDa. Qu\xE9date si est\xE1s interesado o interesada en aprender las herramientas que utilizar\xE9."), "\n", /* @__PURE__ */ import_react3.default.createElement(_components.h3, null, "\xBFEn qu\xE9 situaci\xF3n estoy?"), "\n", /* @__PURE__ */ import_react3.default.createElement(_components.p, null, "No es la primera vez que creo un sistema para mejorarme, he creado sistemas para ser m\xE1s disciplinado, pero tambi\xE9n para dejar de ser tan estricto. He estado en ambos lados, ahora estoy buscando el equilibrio, cuando fui muy disciplinado ten\xEDa burnouts que me dejaban inactivo durante varios d\xEDas. Cuando decid\xEDa tomarme un descanso, pues... No hac\xEDa nada. Tengo 18 a\xF1os, durante los \xFAltimos a\xF1os me he enfocado en desarrollar h\xE1bitos que me permitan vivir una vida sana y de crecimiento. Este a\xF1o deje de consumir az\xFAcares procesados, tambi\xE9n retome el ejercicio despu\xE9s de dejarlo durante dos a\xF1os, ahora dedico gran parte de mi tiempo a estudiar programaci\xF3n. C\xF3mo puedes leer, tengo tiempo y es por eso que decid\xED empezar a experimentar en crear un sistema adecuado a m\xED."), "\n", /* @__PURE__ */ import_react3.default.createElement(_components.h3, null, "Importante"), "\n", /* @__PURE__ */ import_react3.default.createElement(_components.p, null, "Todos somos diferentes, este es mi sistema y que a m\xED me funcione no significa que a ti te vaya a funcionar, si est\xE1s interesada o interesado en crear tu propio sistema env\xEDame un mensaje por ", /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "https://twitter.com/kaitakami_/",
    target: "_blank"
  }, "twitter"), " y hablemos :)"), "\n", /* @__PURE__ */ import_react3.default.createElement(_components.h2, null, "Lo que me hace falta"), "\n", /* @__PURE__ */ import_react3.default.createElement(_components.p, null, 'Hubo \xE9pocas en las que hac\xEDa agendas y las divid\xEDa minuto por minuto. No funciono. Hubo \xE9pocas en las que simplemente "flu\xEDa". Tampoco funciono. \xDAltimamente, creo listas de tareas y hago las tareas cuando tengo energ\xEDa. Desgraciadamente, de esta manera no consigo acabar todas las tareas al final del d\xEDa. Lo que hace falta es un equilibrio, crear un calendario y dividir mi agenda no por minutos sino por bloques y colores.'), "\n", /* @__PURE__ */ import_react3.default.createElement(_components.h3, null, "\xBFC\xF3mo y con qu\xE9?"), "\n", /* @__PURE__ */ import_react3.default.createElement(_components.p, null, 'He probado decenas de apps y softwares de productividad. Los mejores fueron notion y google calendar (por el momento). Notion te permite tener un to do list, un habit manager, un journal y muchas cosas m\xE1s. Lo mejor es que hay templates gratuitas que las puedes encontrar con una b\xFAsqueda en tu navegador. Google calendar es genial por la compatibilidad que tiene con otros dispositivos. Divid\xED mi agenda en cuatro colores. Rojo para salud. Es decir, ejercicio, lectura, meditaci\xF3n y mi rutina ma\xF1anera de la cual hablar\xE9 dentro de poco. Amarillo para trabajo. Verde para mi tiempo libre, parece ser no necesario, pero es crucial para evitar sentirse saturado. Azul para programaci\xF3n. Programaci\xF3n ocupa 8 horas de mi agenda, es como mi full-time job. Salud o "Health" ocupa 6 horas y media. Work ocupa 1 hora y el restante es free time.'), "\n", /* @__PURE__ */ import_react3.default.createElement(_components.h3, null, "\xBFY los bloques?"), "\n", /* @__PURE__ */ import_react3.default.createElement(_components.p, null, 'Parece que es una agenda t\xEDpica dividida en minutos, y ciertamente s\xED, sin embargo, est\xE1 pensado para dividirse en bloques del m\xE9todo de estudio pomodoro. Divid\xED mis horas de programaci\xF3n en 8 sesiones. Cada hora son 2 pomodoros, 25 minutos trabajando y 5 minutos de descanso. Pasa lo mismo con lo dem\xE1s. Que la agenda diga que una actividad comienza a cierta hora y termina a otra no significa que tengo que ser rigurosamente estricto para cumplir con esto. Lo \xFAnico que significa son l\xEDmites. Por ejemplo, si sal\xED a hacer ejercicio y llevo 30 minutos, pero a\xFAn faltan 15 minutos seg\xFAn la agenda, puedo tomarme de descanso los 15 minutos restantes. El objetivo es hacer las cosas en el tiempo reservado. El tiempo libre tambi\xE9n est\xE1 dividido por bloques. Los llamo "free time blocks" y son 15 minutos por bloque.'), "\n", /* @__PURE__ */ import_react3.default.createElement(_components.h3, null, "Morning Routine"), "\n", /* @__PURE__ */ import_react3.default.createElement(_components.p, null, "Para iniciar el d\xEDa con el pie derecho dedico mis primeros 45 minutos en tomar un vaso de agua (5 min), meditar (10 min), cardio (15 min), caminar (10 min) y escuchar algo que haga mi cerebro trabajar (15 min). De esta manera estoy al 100% con energ\xEDa de iniciar el d\xEDa. Si tengo mucho sue\xF1o en vez de meditar primero hago ejercicio. Me despierto a las 6 de la ma\xF1ana todos los d\xEDas. Intento dormir 8 horas."), "\n", /* @__PURE__ */ import_react3.default.createElement(_components.h3, null, "Estoy viviendo el proceso"), "\n", /* @__PURE__ */ import_react3.default.createElement(_components.p, null, "Este no es el sistema definitivo, es apenas el inicio pero ir\xE9 escribiendo m\xE1s ", /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "https://kaitakami.com/blog/",
    target: "_blank"
  }, "blogs"), " cuando encuentre mejoras a este sistema."), "\n", /* @__PURE__ */ import_react3.default.createElement(_components.h2, null, "Final"), "\n", /* @__PURE__ */ import_react3.default.createElement(_components.p, null, "Gracias por leer hasta ac\xE1, si encuentras mejoras o quisieras ", /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "https://twitter.com/kaitakami_/",
    target: "_blank"
  }, "compartirme algo"), " no lo dudes!"), "\n", /* @__PURE__ */ import_react3.default.createElement("iframe", {
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
  return MDXLayout ? /* @__PURE__ */ import_react3.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var sistema_de_productividad_default = MDXContent2;
var filename2 = "sistema-de-productividad.mdx";
var headers2 = typeof attributes2 !== "undefined" && attributes2.headers;
var meta8 = typeof attributes2 !== "undefined" && attributes2.meta;
var links5 = void 0;

// mdx:/home/kai/repos/demo-website-remix/app/routes/blog/vivir-en-japon.mdx
var vivir_en_japon_exports = {};
__export(vivir_en_japon_exports, {
  attributes: () => attributes3,
  default: () => vivir_en_japon_default,
  filename: () => filename3,
  headers: () => headers3,
  links: () => links6,
  meta: () => meta9
});
var import_react4 = __toModule(require("react"));
var attributes3 = {
  "title": "La realidad de vivir en Jap\xF3n",
  "date": new Date(16591392e5),
  "meta": {
    "title": "La realidad de vivir en Jap\xF3n"
  }
};
function MDXContent3(props = {}) {
  const _components = Object.assign({
    h2: "h2",
    h3: "h3",
    p: "p"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, /* @__PURE__ */ import_react4.default.createElement(_components.h2, null, "La realidad de vivir en Jap\xF3n"), "\n", attributes3.date.toDateString(), "\n", /* @__PURE__ */ import_react4.default.createElement(_components.h3, null, "Introducci\xF3n"), "\n", /* @__PURE__ */ import_react4.default.createElement(_components.p, null, "Llevo casi 3 a\xF1os viviendo en Jap\xF3n,"), "\n", /* @__PURE__ */ import_react4.default.createElement("iframe", {
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
  return MDXLayout ? /* @__PURE__ */ import_react4.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var vivir_en_japon_default = MDXContent3;
var filename3 = "vivir-en-japon.mdx";
var headers3 = typeof attributes3 !== "undefined" && attributes3.headers;
var meta9 = typeof attributes3 !== "undefined" && attributes3.meta;
var links6 = void 0;

// mdx:/home/kai/repos/demo-website-remix/app/routes/blog/reto-blog.mdx
var reto_blog_exports = {};
__export(reto_blog_exports, {
  attributes: () => attributes4,
  default: () => reto_blog_default,
  filename: () => filename4,
  headers: () => headers4,
  links: () => links7,
  meta: () => meta10
});
var import_react5 = __toModule(require("react"));
var attributes4 = {
  "title": "Reto | Escribir un blog diario",
  "date": new Date(16590528e5),
  "meta": {
    "title": "Reto | Escribir un blog diario"
  }
};
function MDXContent4(props = {}) {
  const _components = Object.assign({
    h2: "h2",
    h3: "h3",
    p: "p"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, /* @__PURE__ */ import_react5.default.createElement(_components.h2, null, "Reto: Escribir un blog diario"), "\n", attributes4.date.toDateString(), "\n", /* @__PURE__ */ import_react5.default.createElement(_components.h3, null, "Introducci\xF3n"), "\n", /* @__PURE__ */ import_react5.default.createElement(_components.p, null, "En este blog te compartir\xE9 por qu\xE9 voy a escribir un blog diario durante agosto de 2022."), "\n", /* @__PURE__ */ import_react5.default.createElement(_components.h3, null, "De donde nace"), "\n", /* @__PURE__ */ import_react5.default.createElement(_components.p, null, "Cree este ", /* @__PURE__ */ import_react5.default.createElement("a", {
    href: "https://kaitakami.com/blog/",
    target: "_blank"
  }, "blog"), " con 2 objetivos."), "\n", /* @__PURE__ */ import_react5.default.createElement("ul", null, /* @__PURE__ */ import_react5.default.createElement("li", null, /* @__PURE__ */ import_react5.default.createElement(_components.p, null, "Compartir mis aprendizajes y experiencias.")), /* @__PURE__ */ import_react5.default.createElement("li", null, /* @__PURE__ */ import_react5.default.createElement(_components.p, null, "Aprender a escribir."))), "\n", /* @__PURE__ */ import_react5.default.createElement(_components.p, null, "Sin embargo, hace m\xE1s de 1 mes que cree este blog y solo he subido 3 posts. No es que no escriba, escribo seguido en Notion, pero lo intento perfeccionar tanto que tardo meses en terminarlo. \xDAltimamente, vi un video de Ali Abdaal\xA0en donde compart\xEDa que le llevo m\xE1s de 80 videos para conseguir su primer video monetizado en YouTube. Todos comienzan dando el primer paso. Qu\xE9 mejor manera de hacerlo que iniciar este reto.\nSin embargo, hace m\xE1s de 1 mes que cree este blog y solo he subido 3 posts. No es que no escriba, escribo seguido en Notion, pero lo intento perfeccionar tanto que tardo meses en terminarlo. \xDAltimamente, vi un video de ", /* @__PURE__ */ import_react5.default.createElement("a", {
    href: "https://youtube.com/c/aliabdaal",
    target: "_blank"
  }, "Ali Abdaal"), " en donde compart\xEDa que tuvo que crear m\xE1s de 80 videos para conseguir su primer video monetizado en youtube. Todos comienzan dando el primer paso. Qu\xE9 mejor manera de hacerlo que iniciar este reto."), "\n", /* @__PURE__ */ import_react5.default.createElement(_components.h3, null, "\xBFC\xF3mo?"), "\n", /* @__PURE__ */ import_react5.default.createElement(_components.p, null, "No esperes blogs de alt\xEDsima calidad, espera blogs cortos, entretenidos y educativos. Escribir\xE9 de programaci\xF3n, desarrollo personal, Jap\xF3n y cultura. Va a ser un viaje divertido :)"), "\n", /* @__PURE__ */ import_react5.default.createElement(_components.p, null, "Mi sitio web est\xE1 en un ", /* @__PURE__ */ import_react5.default.createElement("a", {
    href: "https://github.com/kaitakami/demo-website-remix",
    target: "_blank"
  }, "repositorio p\xFAblico en github"), ". Para crear un nuevo blog es tan sencillo como crear un archivo mdx y hacer un redeploy del sitio web. Sin embargo, volver\xE9 a crear este sitio web de una manera m\xE1s estructurada y din\xE1mica, con comentarios e interacci\xF3n. De hecho... Cree este sitio web en 30 minutos con ", /* @__PURE__ */ import_react5.default.createElement("a", {
    href: "https://remix.run/",
    target: "_blank"
  }, "Remix"), ", un framework de JavaScript."), "\n", /* @__PURE__ */ import_react5.default.createElement(_components.h3, null, "Final"), "\n", /* @__PURE__ */ import_react5.default.createElement(_components.p, null, "Gracias por leer hasta ac\xE1, si encuentras mejoras o quisieras que escribiese sobre un tema espec\xEDfico ", /* @__PURE__ */ import_react5.default.createElement("a", {
    href: "https://twitter.com/kaitakami_/",
    target: "_blank"
  }, "comp\xE1rtemelo por twitter"), ". Van a ser 31 d\xEDas llenos de pensamientos."), "\n", /* @__PURE__ */ import_react5.default.createElement("iframe", {
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
  return MDXLayout ? /* @__PURE__ */ import_react5.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var reto_blog_default = MDXContent4;
var filename4 = "reto-blog.mdx";
var headers4 = typeof attributes4 !== "undefined" && attributes4.headers;
var meta10 = typeof attributes4 !== "undefined" && attributes4.meta;
var links7 = void 0;

// route-module:/home/kai/repos/demo-website-remix/app/routes/blog/index.tsx
var blog_exports2 = {};
__export(blog_exports2, {
  default: () => BlogIndex
});
var import_remix11 = __toModule(require("remix"));
function BlogIndex() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Cree este sitio web provisional para poder empezar a subir mis blogs :)"), "Me puedes dar feedback en", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://twitter.com/kaitakami_/",
    target: "_blank"
  }, "twitter"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix11.Link, {
    to: "7"
  }, "El infierno de los cursos de programaci\xF3n")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix11.Link, {
    to: "6"
  }, "Deje de comer az\xFAcar procesada por un mes")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix11.Link, {
    to: "5"
  }, "Los videojuegos nos forman")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix11.Link, {
    to: "reto-blog"
  }, "Reto: Escribir un blog diario")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix11.Link, {
    to: "sistema-de-productividad"
  }, "Mi sistema de productividad")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix11.Link, {
    to: "crear-una-startup-con-17"
  }, "Crear una startup con 17 a\xF1os \u{1F4BB}"))), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("iframe", {
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
}

// mdx:/home/kai/repos/demo-website-remix/app/routes/blog/5.mdx
var __exports = {};
__export(__exports, {
  attributes: () => attributes5,
  default: () => __default,
  filename: () => filename5,
  headers: () => headers5,
  links: () => links8,
  meta: () => meta11
});
var import_react6 = __toModule(require("react"));
var attributes5 = {
  "title": "Los videojuegos nos forman",
  "date": new Date(16592256e5),
  "meta": {
    "title": "Los videojuegos nos forman"
  }
};
function MDXContent5(props = {}) {
  const _components = Object.assign({
    h2: "h2",
    h3: "h3",
    p: "p"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, /* @__PURE__ */ import_react6.default.createElement(_components.h2, null, "La realidad de vivir en Jap\xF3n"), "\n", attributes5.date.toDateString(), "\n", /* @__PURE__ */ import_react6.default.createElement(_components.h3, null, "Un vistazo"), "\n", /* @__PURE__ */ import_react6.default.createElement(_components.p, null, "He jugado a videojuegos por m\xE1s de 10,000 horas en 18 a\xF1os. Ser\xEDa como jugar 416 d\xEDas seguidos sin descanso. Fui adicto a los videojuegos, supere la adicci\xF3n y volv\xED a caer. Sin embargo, sigo pensando que los videojuegos no son malos, una gran parte de mi personalidad actual es gracias a los videojuegos. En este blog hablaremos de:"), "\n", /* @__PURE__ */ import_react6.default.createElement("ul", null, /* @__PURE__ */ import_react6.default.createElement("li", null, "Los videojuegos son malos"), "\n", /* @__PURE__ */ import_react6.default.createElement("li", null, "Los videojuegos crean modelos mentales"), "\n", /* @__PURE__ */ import_react6.default.createElement("li", null, "El l\xEDmite y la mala influencia"), "\n", /* @__PURE__ */ import_react6.default.createElement("li", null, "Los videojuegos simulan la realidad")), "\n", /* @__PURE__ */ import_react6.default.createElement(_components.h3, null, "Los videojuegos"), "\n", /* @__PURE__ */ import_react6.default.createElement(_components.p, null, "Muchas personas creen que los videojuegos como una perdida de tiempo, otros tienen una opini\xF3n m\xE1s formada de que los videojuegos influyen negativamente en la forma de pensar en las personas. Personalmente, los videojuegos influyen de manera diferente en cada persona, depende de la etapa, el tipo de videojuego, el ambiente, entre otras cosas. No es algo que se puede encasillar como una sola cosa. Lo que si se puede hacer es aprender a como usarlos de manera que nos ayuden a mejorarnos a nosotros mismos. Eso es de lo que quiero hablar hoy, especialmente de como influyen a ni\xF1os y ni\xF1as."), "\n", /* @__PURE__ */ import_react6.default.createElement(_components.h3, null, "Los videojuegos crean modelos mentales"), "\n", /* @__PURE__ */ import_react6.default.createElement(_components.p, null, '\xBFQu\xE9 son los modelos mentales? Un modelo mental, seg\xFAn James Clear es "es una explicaci\xF3n de c\xF3mo funciona algo. La frase "modelo mental" es un t\xE9rmino general para cualquier tipo de concepto, framework o visi\xF3n del mundo que uno lleva en su mente". Okay... \xBFY qu\xE9 tiene esto que ver con videojuegos? Los videojuegos inconscientemente nos estan educando. Si alguna vez jugaste videojuegos cuando eras un estudiante seguro pensaste "Ojal\xE1 me aprendiera las cosas que aprendo en el instituto igual de r\xE1pido que el nombre de [material / objetos del videojuego]". Parece que memorizar cosas cuando nos estamos divirtiendo es sencillo. As\xED como aprendemos las cosas que hay en el videojuego, tambi\xE9n aprendemos a c\xF3mo jugarlo. Si quieres ganar tienes que aprenderte el mapa, las estrategias, combinaciones, etc... Es justo esto a lo que me refiero con "modelos mentales". Mediante la pr\xE1ctica y observaci\xF3n se empieza a comprender como funcionan las "cosas" dentro del videojuego. No te olvides de los modelos mentales porque volver\xE9 a hablar de ellos dentro de poco.'), "\n", /* @__PURE__ */ import_react6.default.createElement(_components.h3, null, "El l\xEDmite y la mala influencia"), "\n", /* @__PURE__ */ import_react6.default.createElement(_components.p, null, 'La curva de aprendizaje de un videojuego es una long tail (cola larga). Simplificando, el 20% del tiempo que juegas aprendes el 80% del juego, el restante 80% del tiempo lo dedicas en aprender y perfeccionar ese 20% del juego. Y es ese restante 20% que marca la diferencia entre si pasas a la siguiente liga o no, y tambi\xE9n marca el l\xEDmite. Pero... \xBFDe qu\xE9 l\xEDmite hablas? Cualquier gamer ha sentido esa sensaci\xF3n de que llego un punto en el juego en donde el crecimiento empieza a ser reducido, en donde m\xE1s que pasarla bien se quiere ser competitivo e intentar entre el ranking. No digo que eso est\xE9 mal, pero esto puede empezar adicciones si no se controla.  Tambi\xE9n, desgraciadamente con las "malas influencias" es muy com\xFAn caer en las adicciones de otros.\nEse l\xEDmite es algo que uno solo puede descubrir por propia cuenta experimentando. Esto, sin embargo, tambi\xE9n nos forma modelos mentales.'), "\n", /* @__PURE__ */ import_react6.default.createElement(_components.h3, null, "Los videojuegos simulan la realidad"), "\n", /* @__PURE__ */ import_react6.default.createElement(_components.p, null, 'No hablo de los videojuegos que tienen como objetivo simular la realidad (metaverso). Hablo de (casi) todo tipo de videojuego. Por ejemplo, Minecraft, eres un ser humano en medio de la nada buscando sobrevivir. Tomas decisiones todo el tiempo: "\xBFGasto mi tiempo cortando \xE1rboles o mejor voy a las minas?", "\xBFConstruyo mi casa en el desierto o en una monta\xF1a?", "\xBFEncanto mi espada o mi arco?", etc. Aprendemos de estas decisiones y la siguiente vez tomamos una mejor decisi\xF3n: "Oh! Me mataron por seguir este camino :( no volver\xE9 a pasar por aqu\xED". Esto puede ser algo habitual para cualquier persona adulta, es obvio, no te tropiezas con la misma piedra dos veces. Sin embargo, para un ni\xF1o o ni\xF1a no lo es. En la nueva generaci\xF3n de j\xF3venes usualmente tuvieron esa experiencia en los videojuegos. Los videojuegos pueden ser negativos si no se controlan, pero tambi\xE9n puede ayudar exponencialmente a aprender y desarrollar mejores formas de pensamiento. Otro ejemplo... Clash of Clans, tienes una aldea y tienes que administrar tu oro, tus gemas, elixir, elixir oscuro, etc. "\xBFUso el dinero en mejorar mi mina de oro o mejor espero a mejorar la torre de magos?", "\xBFAtaco esta aldea o la otra?", etc. Clash of Clans te puede ense\xF1ar a pensar en el retorno a largo plazo. Tambi\xE9n a conocerte a ti mismo (a tus tropas). Y muchas otras cosas que se pueden aprender de los videojuegos. Recientemente, aprend\xED del poker a tener paciencia y calcular posibilidades. Es decisi\xF3n de uno mismo que tanto quiere extrapolar los aprendizajes ocultos que tienen los videojuegos. Pero todos tenemos ese poder.'), "\n", /* @__PURE__ */ import_react6.default.createElement(_components.h3, null, "Final"), "\n", /* @__PURE__ */ import_react6.default.createElement(_components.p, null, "En fin... No quiero alargar mucho el blog, estar\xE9 subiendo m\xE1s blogs relacionados con videojuegos.\nGracias por leer hasta ac\xE1, si encuentras mejoras o quisieras que escribiese sobre un tema espec\xEDfico, ", /* @__PURE__ */ import_react6.default.createElement("a", {
    href: "https://twitter.com/kaitakami_/",
    target: "_blank"
  }, "comp\xE1rtemelo por twitter"), " :)"));
  return MDXLayout ? /* @__PURE__ */ import_react6.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var __default = MDXContent5;
var filename5 = "5.mdx";
var headers5 = typeof attributes5 !== "undefined" && attributes5.headers;
var meta11 = typeof attributes5 !== "undefined" && attributes5.meta;
var links8 = void 0;

// mdx:/home/kai/repos/demo-website-remix/app/routes/blog/6.mdx
var __exports2 = {};
__export(__exports2, {
  attributes: () => attributes6,
  default: () => __default2,
  filename: () => filename6,
  headers: () => headers6,
  links: () => links9,
  meta: () => meta12
});
var import_react7 = __toModule(require("react"));
var attributes6 = {
  "title": "Deje de comer az\xFAcar procesada por un mes",
  "date": new Date(1659312e6),
  "meta": {
    "title": "Deje de comer az\xFAcar procesada por un mes"
  }
};
function MDXContent6(props = {}) {
  const _components = Object.assign({
    h2: "h2",
    h3: "h3",
    p: "p"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react7.default.createElement(import_react7.default.Fragment, null, /* @__PURE__ */ import_react7.default.createElement(_components.h2, null, "Dejar de comer az\xFAcar fue de lo mejor de este a\xF1o"), "\n", attributes6.date.toDateString(), "\n", /* @__PURE__ */ import_react7.default.createElement(_components.h3, null, "Un vistazo"), "\n", /* @__PURE__ */ import_react7.default.createElement(_components.p, null, "\xBFPor qu\xE9 una persona dejar\xEDa de comer az\xFAcar? Un peque\xF1o dulce no hace da\xF1o..."), "\n", /* @__PURE__ */ import_react7.default.createElement("img", {
    style: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "35%"
    },
    src: "https://media.giphy.com/media/xT0GqmMxHiIRcE2LgQ/giphy.gif",
    alt: "Gif"
  }), "\n", /* @__PURE__ */ import_react7.default.createElement(_components.p, null, 'Realmente no, puede que comer az\xFAcar de vez en cuando no haga da\xF1o, pero el objetivo fue hacer una "desintoxicaci\xF3n" de todo lo dulce que he comido estos \xFAltimos a\xF1os (que no ha sido poco). \xBFVali\xF3 la pena? S\xED. \xBFLo seguir\xE9 haciendo? Pues...'), "\n", /* @__PURE__ */ import_react7.default.createElement(_components.p, null, "En este blog te compartir\xE9:"), "\n", /* @__PURE__ */ import_react7.default.createElement("ul", null, /* @__PURE__ */ import_react7.default.createElement("li", null, "\xBFDesintoxicaci\xF3n?"), "\n", /* @__PURE__ */ import_react7.default.createElement("li", null, "\xBFC\xF3mo lo hice?"), "\n", /* @__PURE__ */ import_react7.default.createElement("li", null, "Mi salud mejor\xF3 dr\xE1sticamente"), "\n", /* @__PURE__ */ import_react7.default.createElement("li", null, "Seguir con este h\xE1bito... \xBFS\xED o no?")), "\n", /* @__PURE__ */ import_react7.default.createElement(_components.h3, null, "\xBFDesintoxicaci\xF3n?"), "\n", /* @__PURE__ */ import_react7.default.createElement(_components.p, null, 'Antes de comenzar, \xBFQu\xE9 significa hacer una desintoxicaci\xF3n? Tal vez alguna vez has escuchado el t\xE9rmino "Detox de dopamina", en pocas palabras, esto significa hacer un balance de los niveles de dopamina que hay en nuestro cuerpo. Con desintoxicaci\xF3n de az\xFAcar me refiero a que mi cuerpo pueda limpiar todo aquello que el constante consumo de az\xFAcar procesada dejo en mi cuerpo.'), "\n", /* @__PURE__ */ import_react7.default.createElement(_components.h3, null, "\xBFC\xF3mo lo hice?"), "\n", /* @__PURE__ */ import_react7.default.createElement(_components.p, null, "No. No es f\xE1cil, pero vale la pena. Yo era un gran consumidor de todo tipo de az\xFAcar. Comenzando con el hecho de que hoy en d\xEDa el az\xFAcar procesada se encuentra en casi todos los alimentos: cereal, aderezo, pan, yogur, salsas, bebidas que compras en el ", /* @__PURE__ */ import_react7.default.createElement("a", {
    href: "https://www.thefreedictionary.com/Konbini",
    target: "_blank"
  }, "konbini"), ", etc. Por primera vez en mi vida, antes de consumir un alimento revisaba la informaci\xF3n nutricional. Al inicio fue un dolor de cabeza descubrir que tantos productos tienen az\xFAcar. Constantemente ten\xEDa hambre y no ten\xEDa nada que comer como snack. Despu\xE9s de la primera semana empece a ver cambios, no fue hasta la 3ra / 4ta semana que empece a dejar de querer alimentos con az\xFAcar procesada."), "\n", /* @__PURE__ */ import_react7.default.createElement("img", {
    style: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "35%"
    },
    src: "https://media.giphy.com/media/j2MQaogcHXDAT1Sj5Y/giphy.gif",
    alt: "Gif"
  }), "\n", /* @__PURE__ */ import_react7.default.createElement(_components.p, null, "Despu\xE9s de m\xE1s de un mes, al volver a comer az\xFAcar procesada me supo horrible. De las mejores sensaciones que he tenido hasta el momento, en ese momento me di cuenta de que hab\xEDa logrado superar este h\xE1bito tan da\xF1ino de buscar no solo az\xFAcar pero cualquier alimento con el cual saciar el hambre a medio d\xEDa."), "\n", /* @__PURE__ */ import_react7.default.createElement(_components.h3, null, "Mi salud mejor\xF3 dr\xE1sticamente"), "\n", /* @__PURE__ */ import_react7.default.createElement(_components.p, null, "Deje de sentirme desganado a medio d\xEDa, mi nivel de energ\xEDa aumento, tambi\xE9n mi fuerza de voluntad. Mi piel cambi\xF3 a mejor. Puede parecer una exageraci\xF3n, pero en pocas semanas se pueden ver cambios, y sin duda alguna se lo recomiendo a cualquier persona."), "\n", /* @__PURE__ */ import_react7.default.createElement(_components.h3, null, "Seguir con este h\xE1bito... \xBFS\xED o no?"), "\n", /* @__PURE__ */ import_react7.default.createElement(_components.p, null, "S\xED, obvio que s\xED! No veo raz\xF3n para volver al mismo punto de antes. Es m\xE1s, me es dif\xEDcil imaginarme consumiendo la cantidad de az\xFAcar que consum\xEDa hace 2 meses. Sin embargo... De vez en cuando darse un lujo no viene mal, especialmente en ocasiones especiales (no com\xED pastel en mi cumplea\xF1os)."), "\n", /* @__PURE__ */ import_react7.default.createElement(_components.h3, null, "Final"), "\n", /* @__PURE__ */ import_react7.default.createElement(_components.p, null, "Gracias por leer hasta ac\xE1, en esta ocasi\xF3n decid\xED usar gifs para hacer m\xE1s divertido el blog, \xBFTe gusta o solo te distrae? Si encuentras mejoras o quisieras que escribiese sobre un tema espec\xEDfico, ", /* @__PURE__ */ import_react7.default.createElement("a", {
    href: "https://twitter.com/kaitakami_/",
    target: "_blank"
  }, "comp\xE1rtemelo por twitter"), " :)"), "\n", /* @__PURE__ */ import_react7.default.createElement("img", {
    style: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "35%"
    },
    src: "https://media.giphy.com/media/j2ersR5s9rDnUpMDBI/giphy.gif",
    alt: "Gif"
  }), "\n", /* @__PURE__ */ import_react7.default.createElement("iframe", {
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
  return MDXLayout ? /* @__PURE__ */ import_react7.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var __default2 = MDXContent6;
var filename6 = "6.mdx";
var headers6 = typeof attributes6 !== "undefined" && attributes6.headers;
var meta12 = typeof attributes6 !== "undefined" && attributes6.meta;
var links9 = void 0;

// mdx:/home/kai/repos/demo-website-remix/app/routes/blog/7.mdx
var __exports3 = {};
__export(__exports3, {
  attributes: () => attributes7,
  default: () => __default3,
  filename: () => filename7,
  headers: () => headers7,
  links: () => links10,
  meta: () => meta13
});
var import_react8 = __toModule(require("react"));
var attributes7 = {
  "title": "El infierno de los cursos",
  "date": new Date(16593984e5),
  "meta": {
    "title": "El infierno de los cursos"
  }
};
function MDXContent7(props = {}) {
  const _components = Object.assign({
    h2: "h2",
    h3: "h3",
    p: "p",
    h4: "h4"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react8.default.createElement(import_react8.default.Fragment, null, /* @__PURE__ */ import_react8.default.createElement(_components.h2, null, "Basta ya de tantos bootcamps y cursos de programaci\xF3n"), "\n", attributes7.date.toDateString(), "\n", /* @__PURE__ */ import_react8.default.createElement(_components.h3, null, "Un vistazo"), "\n", /* @__PURE__ */ import_react8.default.createElement(_components.p, null, 'Hoy estaba viendo a un youtuber promocionando su "bootcamp" que te llevar\xE1 de 0 a conseguir un empleo full-stack. Honestamente, cualquier persona que te venda algo parecido te est\xE1 mintiendo, vendi\xE9ndote los posibles resultados, no el proceso.'), "\n", /* @__PURE__ */ import_react8.default.createElement("img", {
    style: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "35%"
    },
    src: "https://media.giphy.com/media/scZPhLqaVOM1qG4lT9/giphy.gif",
    alt: "Gif"
  }), "\n", /* @__PURE__ */ import_react8.default.createElement(_components.p, null, "En este blog te compartir\xE9:"), "\n", /* @__PURE__ */ import_react8.default.createElement("ul", null, /* @__PURE__ */ import_react8.default.createElement("li", null, "Tutorial Hell"), "\n", /* @__PURE__ */ import_react8.default.createElement("li", null, "500 d\xF3lares no son suficientes"), "\n", /* @__PURE__ */ import_react8.default.createElement("li", null, "La realidad de programar"), "\n", /* @__PURE__ */ import_react8.default.createElement("li", null, "Mi aporte...")), "\n", /* @__PURE__ */ import_react8.default.createElement(_components.h3, null, "Tutorial Hell"), "\n", /* @__PURE__ */ import_react8.default.createElement(_components.p, null, "Si llevas un tiempo programando sabes de qu\xE9 estoy hablando. Comienzas un curso y consigues hacer algo complicado viendo el curso. Cuando te toca hacerlo por propia cuenta no sabes ni por donde comenzar. El tutorial hell o infierno de los tutoriales es la situaci\xF3n en donde pasamos de tutorial a tutorial sin poner en pr\xE1ctica lo aprendido.", /* @__PURE__ */ import_react8.default.createElement("br", null), ' He hecho cursos en diferentes plataformas, no voy a decir nombres para evitar problemas,  pero me refiero a las que ya todos conocen. La gran mayor\xEDa de cursos suelen tender a crear este "tutorial hell". Y no... un examen no lo soluciona. La \xFAnica manera de conseguir pasar el tutorial hell es:'), "\n", /* @__PURE__ */ import_react8.default.createElement("ul", null, /* @__PURE__ */ import_react8.default.createElement("li", null, "No entrar al tutorial hell, o..."), "\n", /* @__PURE__ */ import_react8.default.createElement("li", null, "Pasar a la pr\xE1ctica y pensar e investigar hasta llegar a la soluci\xF3n")), "\n", /* @__PURE__ */ import_react8.default.createElement(_components.p, null, 'Programar es una experiencia maravillosa. Literalmente tienes el poder en tus manos de crear lo que se te imagine. Programar es resolver problemas. Requiere de un pensamiento profundo e investigaci\xF3n. Hacer un bootcamp o curso solo te da la "teor\xEDa". Lo que realmente te hace programador es la "pr\xE1ctica" y el poder llevar tus ideas al c\xF3digo.'), "\n", /* @__PURE__ */ import_react8.default.createElement(_components.h3, null, "500 d\xF3lares no son suficientes"), "\n", /* @__PURE__ */ import_react8.default.createElement("img", {
    style: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "35%"
    },
    src: "https://media.giphy.com/media/l0G18VKQy7UOU3eJW/giphy.gif",
    alt: "Gif"
  }), "\n", /* @__PURE__ */ import_react8.default.createElement(_components.p, null, "No necesitas ni un d\xF3lar para aprender a programar. El verdadero dilema del programador/a autodidacta es cu\xE1l ruta seguir. Hay contenido en exceso, pero el tiempo es escaso. Hablar\xE9 sobre esto m\xE1s adelante. Pero como ya mencione, solo necesitas un computador y conexi\xF3n a internet para aprender a programar.", /* @__PURE__ */ import_react8.default.createElement("br", null), "\nNo estoy diciendo que pagar dinero no tiene sentido, cada quien hace lo que quiera con su dinero, a lo que me refiero es que no necesariamente necesitas comprar cursos para aprender a programar. Hay comunidades de calidad gratuitas en discord. Hay tutoriales y cursos organizados hechos por personas con experiencia gratis. Si quieres empezar a hacer proyectos tambi\xE9n hay mucho contenido en internet.", /* @__PURE__ */ import_react8.default.createElement("br", null), "\nLo que todo programador necesita es tiempo, y no solo tiempo para aprender, tambi\xE9n tiempo para fallar. Y personalmente pienso que la gran mayor\xEDa de los cursos no nos dan esta oportunidad. Si una persona no tiene el profesor indicado, puede que deje de programar despu\xE9s de su primer fracaso. Ese es el gran riesgo. Una de las plataformas que recomiendo es ", /* @__PURE__ */ import_react8.default.createElement("a", {
    href: "https://scrimba.com/",
    target: "_blank"
  }, "Scrimba"), ", ah\xED te ense\xF1an de una manera divertida y te ponen a practicar bastante seguido."), "\n", /* @__PURE__ */ import_react8.default.createElement(_components.h3, null, "La realidad de programar"), "\n", /* @__PURE__ */ import_react8.default.createElement(_components.p, null, "Programar no es f\xE1cil, es retador. Cada d\xEDa un nuevo reto, un problema que solucionar. Para algunos (incluy\xE9ndome), esa es la magia de programar, otros ven a la programaci\xF3n diferente. Siento que eso es algo que cada programador tiene que buscar. Una vez que lo encuentras, se convierte en tu motivaci\xF3n. Lo mejor es que nunca es lo mismo, pero todo est\xE1 conectado. Aunque al final del d\xEDa siempre termino as\xED:"), "\n", /* @__PURE__ */ import_react8.default.createElement("img", {
    style: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "35%"
    },
    src: "https://media.giphy.com/media/Dh5q0sShxgp13DwrvG/giphy.gif",
    alt: "Disfrutando"
  }), "\n", /* @__PURE__ */ import_react8.default.createElement(_components.h3, null, "Mi propuesta..."), "\n", /* @__PURE__ */ import_react8.default.createElement(_components.p, null, "Para m\xED, empezar a programar con 15 a\xF1os me fue dif\xEDcil. Habiendo tantos recursos no sab\xEDa por donde comenzar, de hecho cuando ten\xEDa 14 a\xF1os escrib\xED mi primera l\xEDnea de c\xF3digo en ", /* @__PURE__ */ import_react8.default.createElement("a", {
    href: "https://en.wikipedia.org/wiki/C_(programming_language)",
    target: "_blank"
  }, "C"), '. Hice muchos cursos de HTML y CSS, tambi\xE9n de JavaScript. Los tres pilares para comenzar en el desarrollo web. Mi propuesta es: Crear un "roadmap" (ruta de aprendizaje) completamente gratuito para personas que quieren comenzar en la programaci\xF3n. Si quieres que esto suceda solo es necesario que una persona me lo pida por ', /* @__PURE__ */ import_react8.default.createElement("a", {
    href: "https://twitter.com/kaitakami_/",
    target: "_blank"
  }, "twitter"), "."), "\n", /* @__PURE__ */ import_react8.default.createElement(_components.h2, null, "Final"), "\n", /* @__PURE__ */ import_react8.default.createElement(_components.p, null, "Gracias por leer hasta ac\xE1, si encuentras mejoras o quisieras ", /* @__PURE__ */ import_react8.default.createElement("a", {
    href: "https://twitter.com/kaitakami_/",
    target: "_blank"
  }, "compartirme algo"), " no lo dudes! Qu\xE9 te parecieron los gifs?"), "\n", /* @__PURE__ */ import_react8.default.createElement(import_react8.default.Fragment, null, /* @__PURE__ */ import_react8.default.createElement("iframe", {
    className: "qp_iframe",
    src: "https://poll-maker.com/frame4418559x483544bB-139",
    seamless: "seamless",
    frameBorder: "no",
    style: {
      border: 0,
      background: "transparent",
      width: "100%",
      height: 480
    }
  }), /* @__PURE__ */ import_react8.default.createElement("div", {
    id: "qp_foot4418559",
    style: {
      width: "100%",
      padding: 5,
      textAlign: "center"
    }
  }, /* @__PURE__ */ import_react8.default.createElement("a", {
    href: "https://poll-maker.com/poll4418559x483544bB-139"
  })), /* @__PURE__ */ import_react8.default.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: ""
    }
  })), "\n", /* @__PURE__ */ import_react8.default.createElement(_components.h2, null, "Suscr\xEDbete al newsletter!"), "\n", /* @__PURE__ */ import_react8.default.createElement(_components.h4, null, "Hay sorpresa para las primeras 10 personas :)"), "\n", /* @__PURE__ */ import_react8.default.createElement("iframe", {
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
  return MDXLayout ? /* @__PURE__ */ import_react8.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var __default3 = MDXContent7;
var filename7 = "7.mdx";
var headers7 = typeof attributes7 !== "undefined" && attributes7.headers;
var meta13 = typeof attributes7 !== "undefined" && attributes7.meta;
var links10 = void 0;

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/demos/actions": {
    id: "routes/demos/actions",
    parentId: "root",
    path: "demos/actions",
    index: void 0,
    caseSensitive: void 0,
    module: actions_exports
  },
  "routes/demos/correct": {
    id: "routes/demos/correct",
    parentId: "root",
    path: "demos/correct",
    index: void 0,
    caseSensitive: void 0,
    module: correct_exports
  },
  "routes/demos/params": {
    id: "routes/demos/params",
    parentId: "root",
    path: "demos/params",
    index: void 0,
    caseSensitive: void 0,
    module: params_exports
  },
  "routes/demos/params/index": {
    id: "routes/demos/params/index",
    parentId: "routes/demos/params",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: params_exports2
  },
  "routes/demos/params/$id": {
    id: "routes/demos/params/$id",
    parentId: "routes/demos/params",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports
  },
  "routes/demos/about": {
    id: "routes/demos/about",
    parentId: "root",
    path: "demos/about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/demos/about/index": {
    id: "routes/demos/about/index",
    parentId: "routes/demos/about",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: about_exports2
  },
  "routes/demos/about/whoa": {
    id: "routes/demos/about/whoa",
    parentId: "routes/demos/about",
    path: "whoa",
    index: void 0,
    caseSensitive: void 0,
    module: whoa_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/blog": {
    id: "routes/blog",
    parentId: "root",
    path: "blog",
    index: void 0,
    caseSensitive: void 0,
    module: blog_exports
  },
  "routes/blog/crear-una-startup-con-17": {
    id: "routes/blog/crear-una-startup-con-17",
    parentId: "routes/blog",
    path: "crear-una-startup-con-17",
    index: void 0,
    caseSensitive: void 0,
    module: crear_una_startup_con_17_exports
  },
  "routes/blog/sistema-de-productividad": {
    id: "routes/blog/sistema-de-productividad",
    parentId: "routes/blog",
    path: "sistema-de-productividad",
    index: void 0,
    caseSensitive: void 0,
    module: sistema_de_productividad_exports
  },
  "routes/blog/vivir-en-japon": {
    id: "routes/blog/vivir-en-japon",
    parentId: "routes/blog",
    path: "vivir-en-japon",
    index: void 0,
    caseSensitive: void 0,
    module: vivir_en_japon_exports
  },
  "routes/blog/reto-blog": {
    id: "routes/blog/reto-blog",
    parentId: "routes/blog",
    path: "reto-blog",
    index: void 0,
    caseSensitive: void 0,
    module: reto_blog_exports
  },
  "routes/blog/index": {
    id: "routes/blog/index",
    parentId: "routes/blog",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: blog_exports2
  },
  "routes/blog/5": {
    id: "routes/blog/5",
    parentId: "routes/blog",
    path: "5",
    index: void 0,
    caseSensitive: void 0,
    module: __exports
  },
  "routes/blog/6": {
    id: "routes/blog/6",
    parentId: "routes/blog",
    path: "6",
    index: void 0,
    caseSensitive: void 0,
    module: __exports2
  },
  "routes/blog/7": {
    id: "routes/blog/7",
    parentId: "routes/blog",
    path: "7",
    index: void 0,
    caseSensitive: void 0,
    module: __exports3
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=/build/index.js.map
