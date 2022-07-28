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
var global_default = "/build/_assets/global-U4FO56JQ.css";

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
  }, "' Two great friends :)'"), "\n}\n")), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.h4, null, "Este blog continuar\xE1..."));
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
  }, "compartirme algo"), " no lo dudes!"));
  return MDXLayout ? /* @__PURE__ */ import_react3.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var sistema_de_productividad_default = MDXContent2;
var filename2 = "sistema-de-productividad.mdx";
var headers2 = typeof attributes2 !== "undefined" && attributes2.headers;
var meta8 = typeof attributes2 !== "undefined" && attributes2.meta;
var links5 = void 0;

// route-module:/home/kai/repos/demo-website-remix/app/routes/blog/index.tsx
var blog_exports2 = {};
__export(blog_exports2, {
  default: () => BlogIndex
});
var import_remix11 = __toModule(require("remix"));
function BlogIndex() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Cree este sitio web provisional para poder empezar a subir mis blogs :)"), "Me puedes dar feedback en ", /* @__PURE__ */ React.createElement("a", {
    href: "https://twitter.com/kaitakami_/",
    target: "_blank"
  }, "twitter"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix11.Link, {
    to: "sistema-de-productividad"
  }, "Mi sistema de productividad"), /* @__PURE__ */ React.createElement(import_remix11.Link, {
    to: "crear-una-startup-con-17"
  }, "Crear una startup con 17 a\xF1os \u{1F4BB}"))));
}

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
  "routes/blog/index": {
    id: "routes/blog/index",
    parentId: "routes/blog",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: blog_exports2
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=/build/index.js.map
