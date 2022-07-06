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
  }, "Kai Takami")), /* @__PURE__ */ React.createElement("nav", {
    "aria-label": "Main navigation",
    className: "remix-app__header-nav"
  }, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/"
  }, "Inicio")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "blog"
  }, "Blog")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/kaitakami/"
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
    title: "Marius Espejo",
    description: "Marius Espejo's personal site"
  };
};
function Index2() {
  let data = (0, import_remix9.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "remix__page"
  }, /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("h2", null, "This site is a work in progress."), /* @__PURE__ */ React.createElement("p", null, "Trying to learn some Remix! \u{1F604}")));
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
    title: "Blog | Marius Espejo",
    description: "Blog posts by Marius Espejo"
  };
};

// mdx:/home/kai/repos/demo-website-remix/app/routes/blog/first-post.mdx
var first_post_exports = {};
__export(first_post_exports, {
  attributes: () => attributes,
  default: () => first_post_default,
  filename: () => filename,
  headers: () => headers,
  links: () => links4,
  meta: () => meta7
});
var import_react2 = __toModule(require("react"));
var attributes = {
  "title": "My first about post about... making my first post!",
  "date": new Date(163944e7),
  "meta": {
    "title": "My First Post",
    "description": "cool!"
  }
};
function MDXContent(props = {}) {
  const _components = Object.assign({
    h2: "h2",
    h3: "h3",
    p: "p",
    a: "a",
    code: "code",
    pre: "pre",
    span: "span",
    em: "em",
    ul: "ul",
    li: "li"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement(_components.h2, null, "My first about post about... making my first post!"), "\n", attributes.date.toDateString(), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.h3, null, "First of all how did I get this page to render?"), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.p, null, "Remix has ", /* @__PURE__ */ import_react2.default.createElement(_components.a, {
    href: "https://remix.run/docs/en/v1/guides/mdx"
  }, "built-in support for MDX"), ", it automatically will treat each ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, ".mdx"), " file witin ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, "/routes"), " like a route module. Just like regular components.\nBasically that means an MDX file is automatically a page! There's really not much work to do."), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.h3, null, "Syntax Highlighting"), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.p, null, "The only thing I really needed to setup was some syntax highlighting, e.g. you should notice the following code block should already be pre-styled with my currently selected theme:"), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.pre, null, /* @__PURE__ */ import_react2.default.createElement(_components.code, {
    className: "hljs language-js"
  }, /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "function"), " ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-title hljs-function"
  }, "helloWorld"), "(", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-params"
  }), ") {\n  ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "return"), " ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-string"
  }, "'hello!'"), ";\n}\n")), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.p, null, "To achieve this first of all I had to update the base ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, "remix.config.js"), " to now have the ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, "mdx"), " property."), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.pre, null, /* @__PURE__ */ import_react2.default.createElement(_components.code, {
    className: "hljs language-js"
  }, /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-variable hljs-language"
  }, "module"), ".", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-property"
  }, "exports"), " = {\n  ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "// ... existing config here"), "\n  ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "mdx"), ": ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "async"), " (filename) => {\n    ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "const"), " [rehypeHighlight] = ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "await"), " ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-title hljs-class"
  }, "Promise"), ".", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-title hljs-function"
  }, "all"), "([\n      ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-title hljs-function"
  }, "import"), "(", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-string"
  }, "'rehype-highlight'"), ").", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-title hljs-function"
  }, "then"), "(", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-function"
  }, "(", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-params"
  }, "mod"), ") =>"), " mod.", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-property"
  }, "default"), "),\n    ]);\n    ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "return"), " {\n      ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "rehypePlugins"), ": [rehypeHighlight],\n    };\n  },\n};\n")), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.p, null, "Notice that we are using ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, "rehype-highlight"), " as a plugin which ultimately will use ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, "highlight.js"), " behind the scenes to transform our html."), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.p, null, "There are actually other ways to do this, for example you could also use a remark plugin instead or a plugin which uses PrismJS.\nHonestly this MDX ecosystem is still very new to me so I'm not quite sure yet what's the best approach. Will look into that more later!"), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.p, null, "The ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, "rehype-highlight"), " plugin was the example used in the docs so I just ran with it."), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.p, null, "Anyways, once you have that config change I then started configuring my blog routing."), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.h3, null, "Let's take a moment to talk about the routing"), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.p, null, "As an example I currently (at the time of writing) have the following files:"), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.pre, null, /* @__PURE__ */ import_react2.default.createElement(_components.code, {
    className: "hljs language-bash"
  }, "app/routes/blog.tsx --> The layout ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"parent"'), "\napp/routes/blog/index.tsx --> The ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"index route"'), " ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " /blog\napp/routes/blog/first-post.mdx --> The post you", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-string"
  }, "'re reading!\n"))), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.p, null, "The distinction between ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, "blog.tsx"), " and ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, "blog/index.tsx"), " here was initially very confusing to me.\nHowever it started to make a little bit more sense when I remeber how the same sort of ideas work with React Route 6."), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.p, null, "For example in React Router that routing might look like this:"), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.pre, null, /* @__PURE__ */ import_react2.default.createElement(_components.code, {
    className: "hljs language-jsx"
  }, "<", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-title hljs-class"
  }, "Routes"), ">\n  ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "xml"
  }, /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-tag"
  }, "<", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-name"
  }, "Route"), " ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "path"), "=", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"/"'), " ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "element"), "=", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-string"
  }, "{"), "<", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "App"), " />"), "}>\n    ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-tag"
  }, "<", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-name"
  }, "Route"), " ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "index"), " ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "element"), "=", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-string"
  }, "{"), "<", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "Home"), " />"), "} />\n    ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-tag"
  }, "<", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-name"
  }, "Route"), " ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "path"), "=", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"blog"'), " ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "element"), "=", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-string"
  }, "{"), "<", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "Blog"), " />"), "}>\n      ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-tag"
  }, "<", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-name"
  }, "Route"), " ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "path"), "=", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"first-post"'), " ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "element"), "=", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-string"
  }, "{"), "<", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "FirstPost"), " />"), "} />\n      ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-tag"
  }, "<", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-name"
  }, "Route"), " ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "index"), " ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "element"), "=", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-string"
  }, "{"), "<", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "BlogIndex"), " />"), "} />\n    ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-tag"
  }, "</", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-name"
  }, "Route"), ">"), "\n  ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-tag"
  }, "</", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-name"
  }, "Route"), ">")), "\n</", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-title hljs-class"
  }, "Routes"), ">\n")), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.p, null, "In the above example the element ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, "<Blog />"), " basically houses the common layout/logic for all of the children below it. It specifically needs to render an ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, "<Outlet />"), " to define where the nested routes will render.\nThat's basically the same exact idea here in Remix, except that structure is being defined using the file system. Once I wrapped my head around that it made a litte bit more sense."), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.h3, null, "Now back to syntax highlighting..."), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.p, null, "Now that we have that structure in place, the only thing left to do is setup up our ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, "highlight.js"), " CSS file to specifically load in ", /* @__PURE__ */ import_react2.default.createElement(_components.em, null, "only"), " for our blog routing. This is because we likely won't need those styles anywhere else but in the blog posts."), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.p, null, "In addition to that Remix seems to optimize what CSS is sent ", /* @__PURE__ */ import_react2.default.createElement(_components.em, null, "per page"), ". Meaning to enable our syntax highlighting we'd have to include the styles in each page. That seems overkill, so instead we're going to load it inside our ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, "blog.tsx"), " (which again remember wraps the underlying nested children) so that we only define it once across all blog posts."), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.pre, null, /* @__PURE__ */ import_react2.default.createElement(_components.code, {
    className: "hljs language-ts"
  }, /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "import"), " styles ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "from"), " ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-string"
  }, "'highlight.js/styles/github-dark-dimmed.css'"), "; ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "// change this to your desired theme"), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "import"), " ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "type"), " { ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-title hljs-class"
  }, "LinksFunction"), ", ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-title hljs-class"
  }, "LoaderFunction"), " } ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "from"), " ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-string"
  }, "'remix'"), ";\n", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "import"), " { ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-title hljs-class"
  }, "MetaFunction"), ", ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-title hljs-class"
  }, "Outlet"), " } ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "from"), " ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"remix"'), ";\n\n", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "export"), " ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "const"), " ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "links"), ": ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-title hljs-class"
  }, "LinksFunction"), " = ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-function"
  }, "() =>"), " {\n  ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "return"), " [\n    {\n      ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "rel"), ": ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-string"
  }, "'stylesheet'"), ",\n      ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "href"), ": styles,\n    },\n  ];\n}\n\n", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "export"), " ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "default"), " ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "function"), " ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-title hljs-function"
  }, "Blog"), "(", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-params"
  }), ") {\n  ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "return"), " (\n    ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "xml"
  }, /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-tag"
  }, "<", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-name"
  }, "Outlet"), " />")), "\n  );\n}\n\n")), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.p, null, "Now if you're able to see all of the above code blocks with proper highlighting then I must've done it right!"), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.h2, null, "Where to go from here"), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.ul, null, "\n", /* @__PURE__ */ import_react2.default.createElement(_components.li, null, "In general the site's stlyes and look/feel is still pretty plain. I'll need to improve that to something... reasonable.", "\n", /* @__PURE__ */ import_react2.default.createElement(_components.ul, null, "\n", /* @__PURE__ */ import_react2.default.createElement(_components.li, null, "Looking to add tailwind since I've been wanting to learn that anyways"), "\n"), "\n"), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.li, null, "A challenge to figure out: how to display nested attributes from the parent ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, "blog.tsx"), "? For example what if I wanted to determine the title or date of a specific blog post so that I can render it consistently across all posts?", "\n", /* @__PURE__ */ import_react2.default.createElement(_components.ul, null, "\n", /* @__PURE__ */ import_react2.default.createElement(_components.li, null, "Actually I noticed Kent C. Dodd's blog doesn't utilize Remix's built-in MDX route modules. I have a feeling it's because of maybe one of these concerns"), "\n"), "\n"), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.li, null, "I need to improve the ", /* @__PURE__ */ import_react2.default.createElement(_components.a, {
    href: "/blog"
  }, "base blog page"), " to dynamically determine the full list of blog posts", "\n", /* @__PURE__ */ import_react2.default.createElement(_components.ul, null, "\n", /* @__PURE__ */ import_react2.default.createElement(_components.li, null, "I'll probably need to read from the file system then utilize frontmatter to determine titles, dates, etc."), "\n"), "\n"), "\n"), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.p, null, "Anyways that's it for now!"));
  return MDXLayout ? /* @__PURE__ */ import_react2.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var first_post_default = MDXContent;
var filename = "first-post.mdx";
var headers = typeof attributes !== "undefined" && attributes.headers;
var meta7 = typeof attributes !== "undefined" && attributes.meta;
var links4 = void 0;

// route-module:/home/kai/repos/demo-website-remix/app/routes/blog/index.tsx
var blog_exports2 = {};
__export(blog_exports2, {
  default: () => BlogIndex
});
var import_remix11 = __toModule(require("remix"));
function BlogIndex() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "I should probably list out the articles here eh?"), "Here you go.", /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix11.Link, {
    to: "first-post"
  }, "First Post"))));
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
  "routes/blog/first-post": {
    id: "routes/blog/first-post",
    parentId: "routes/blog",
    path: "first-post",
    index: void 0,
    caseSensitive: void 0,
    module: first_post_exports
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
