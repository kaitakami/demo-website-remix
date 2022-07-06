import {
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/home/kai/repos/demo-website-remix/app/routes/blog/first-post.mdx?browser
init_react();

// mdx:/home/kai/repos/demo-website-remix/app/routes/blog/first-post.mdx
init_react();
var import_react = __toModule(require_react());
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
  const _content = /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement(_components.h2, null, "My first about post about... making my first post!"), "\n", attributes.date.toDateString(), "\n", /* @__PURE__ */ import_react.default.createElement(_components.h3, null, "First of all how did I get this page to render?"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "Remix has ", /* @__PURE__ */ import_react.default.createElement(_components.a, {
    href: "https://remix.run/docs/en/v1/guides/mdx"
  }, "built-in support for MDX"), ", it automatically will treat each ", /* @__PURE__ */ import_react.default.createElement(_components.code, null, ".mdx"), " file witin ", /* @__PURE__ */ import_react.default.createElement(_components.code, null, "/routes"), " like a route module. Just like regular components.\nBasically that means an MDX file is automatically a page! There's really not much work to do."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.h3, null, "Syntax Highlighting"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "The only thing I really needed to setup was some syntax highlighting, e.g. you should notice the following code block should already be pre-styled with my currently selected theme:"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.pre, null, /* @__PURE__ */ import_react.default.createElement(_components.code, {
    className: "hljs language-js"
  }, /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "function"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-title hljs-function"
  }, "helloWorld"), "(", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-params"
  }), ") {\n  ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "return"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, "'hello!'"), ";\n}\n")), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "To achieve this first of all I had to update the base ", /* @__PURE__ */ import_react.default.createElement(_components.code, null, "remix.config.js"), " to now have the ", /* @__PURE__ */ import_react.default.createElement(_components.code, null, "mdx"), " property."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.pre, null, /* @__PURE__ */ import_react.default.createElement(_components.code, {
    className: "hljs language-js"
  }, /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-variable hljs-language"
  }, "module"), ".", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-property"
  }, "exports"), " = {\n  ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "// ... existing config here"), "\n  ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "mdx"), ": ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "async"), " (filename) => {\n    ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "const"), " [rehypeHighlight] = ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "await"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-title hljs-class"
  }, "Promise"), ".", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-title hljs-function"
  }, "all"), "([\n      ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-title hljs-function"
  }, "import"), "(", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, "'rehype-highlight'"), ").", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-title hljs-function"
  }, "then"), "(", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-function"
  }, "(", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-params"
  }, "mod"), ") =>"), " mod.", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-property"
  }, "default"), "),\n    ]);\n    ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "return"), " {\n      ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "rehypePlugins"), ": [rehypeHighlight],\n    };\n  },\n};\n")), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "Notice that we are using ", /* @__PURE__ */ import_react.default.createElement(_components.code, null, "rehype-highlight"), " as a plugin which ultimately will use ", /* @__PURE__ */ import_react.default.createElement(_components.code, null, "highlight.js"), " behind the scenes to transform our html."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "There are actually other ways to do this, for example you could also use a remark plugin instead or a plugin which uses PrismJS.\nHonestly this MDX ecosystem is still very new to me so I'm not quite sure yet what's the best approach. Will look into that more later!"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "The ", /* @__PURE__ */ import_react.default.createElement(_components.code, null, "rehype-highlight"), " plugin was the example used in the docs so I just ran with it."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "Anyways, once you have that config change I then started configuring my blog routing."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.h3, null, "Let's take a moment to talk about the routing"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "As an example I currently (at the time of writing) have the following files:"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.pre, null, /* @__PURE__ */ import_react.default.createElement(_components.code, {
    className: "hljs language-bash"
  }, "app/routes/blog.tsx --> The layout ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"parent"'), "\napp/routes/blog/index.tsx --> The ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"index route"'), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " /blog\napp/routes/blog/first-post.mdx --> The post you", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, "'re reading!\n"))), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "The distinction between ", /* @__PURE__ */ import_react.default.createElement(_components.code, null, "blog.tsx"), " and ", /* @__PURE__ */ import_react.default.createElement(_components.code, null, "blog/index.tsx"), " here was initially very confusing to me.\nHowever it started to make a little bit more sense when I remeber how the same sort of ideas work with React Route 6."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "For example in React Router that routing might look like this:"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.pre, null, /* @__PURE__ */ import_react.default.createElement(_components.code, {
    className: "hljs language-jsx"
  }, "<", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-title hljs-class"
  }, "Routes"), ">\n  ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "xml"
  }, /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-tag"
  }, "<", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-name"
  }, "Route"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "path"), "=", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"/"'), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "element"), "=", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, "{"), "<", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "App"), " />"), "}>\n    ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-tag"
  }, "<", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-name"
  }, "Route"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "index"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "element"), "=", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, "{"), "<", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "Home"), " />"), "} />\n    ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-tag"
  }, "<", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-name"
  }, "Route"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "path"), "=", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"blog"'), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "element"), "=", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, "{"), "<", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "Blog"), " />"), "}>\n      ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-tag"
  }, "<", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-name"
  }, "Route"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "path"), "=", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"first-post"'), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "element"), "=", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, "{"), "<", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "FirstPost"), " />"), "} />\n      ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-tag"
  }, "<", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-name"
  }, "Route"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "index"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "element"), "=", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, "{"), "<", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "BlogIndex"), " />"), "} />\n    ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-tag"
  }, "</", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-name"
  }, "Route"), ">"), "\n  ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-tag"
  }, "</", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-name"
  }, "Route"), ">")), "\n</", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-title hljs-class"
  }, "Routes"), ">\n")), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "In the above example the element ", /* @__PURE__ */ import_react.default.createElement(_components.code, null, "<Blog />"), " basically houses the common layout/logic for all of the children below it. It specifically needs to render an ", /* @__PURE__ */ import_react.default.createElement(_components.code, null, "<Outlet />"), " to define where the nested routes will render.\nThat's basically the same exact idea here in Remix, except that structure is being defined using the file system. Once I wrapped my head around that it made a litte bit more sense."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.h3, null, "Now back to syntax highlighting..."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "Now that we have that structure in place, the only thing left to do is setup up our ", /* @__PURE__ */ import_react.default.createElement(_components.code, null, "highlight.js"), " CSS file to specifically load in ", /* @__PURE__ */ import_react.default.createElement(_components.em, null, "only"), " for our blog routing. This is because we likely won't need those styles anywhere else but in the blog posts."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "In addition to that Remix seems to optimize what CSS is sent ", /* @__PURE__ */ import_react.default.createElement(_components.em, null, "per page"), ". Meaning to enable our syntax highlighting we'd have to include the styles in each page. That seems overkill, so instead we're going to load it inside our ", /* @__PURE__ */ import_react.default.createElement(_components.code, null, "blog.tsx"), " (which again remember wraps the underlying nested children) so that we only define it once across all blog posts."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.pre, null, /* @__PURE__ */ import_react.default.createElement(_components.code, {
    className: "hljs language-ts"
  }, /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "import"), " styles ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "from"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, "'highlight.js/styles/github-dark-dimmed.css'"), "; ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "// change this to your desired theme"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "import"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "type"), " { ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-title hljs-class"
  }, "LinksFunction"), ", ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-title hljs-class"
  }, "LoaderFunction"), " } ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "from"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, "'remix'"), ";\n", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "import"), " { ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-title hljs-class"
  }, "MetaFunction"), ", ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-title hljs-class"
  }, "Outlet"), " } ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "from"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"remix"'), ";\n\n", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "export"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "const"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "links"), ": ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-title hljs-class"
  }, "LinksFunction"), " = ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-function"
  }, "() =>"), " {\n  ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "return"), " [\n    {\n      ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "rel"), ": ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, "'stylesheet'"), ",\n      ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "href"), ": styles,\n    },\n  ];\n}\n\n", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "export"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "default"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "function"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-title hljs-function"
  }, "Blog"), "(", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-params"
  }), ") {\n  ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "return"), " (\n    ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "xml"
  }, /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-tag"
  }, "<", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-name"
  }, "Outlet"), " />")), "\n  );\n}\n\n")), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "Now if you're able to see all of the above code blocks with proper highlighting then I must've done it right!"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.h2, null, "Where to go from here"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.ul, null, "\n", /* @__PURE__ */ import_react.default.createElement(_components.li, null, "In general the site's stlyes and look/feel is still pretty plain. I'll need to improve that to something... reasonable.", "\n", /* @__PURE__ */ import_react.default.createElement(_components.ul, null, "\n", /* @__PURE__ */ import_react.default.createElement(_components.li, null, "Looking to add tailwind since I've been wanting to learn that anyways"), "\n"), "\n"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.li, null, "A challenge to figure out: how to display nested attributes from the parent ", /* @__PURE__ */ import_react.default.createElement(_components.code, null, "blog.tsx"), "? For example what if I wanted to determine the title or date of a specific blog post so that I can render it consistently across all posts?", "\n", /* @__PURE__ */ import_react.default.createElement(_components.ul, null, "\n", /* @__PURE__ */ import_react.default.createElement(_components.li, null, "Actually I noticed Kent C. Dodd's blog doesn't utilize Remix's built-in MDX route modules. I have a feeling it's because of maybe one of these concerns"), "\n"), "\n"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.li, null, "I need to improve the ", /* @__PURE__ */ import_react.default.createElement(_components.a, {
    href: "/blog"
  }, "base blog page"), " to dynamically determine the full list of blog posts", "\n", /* @__PURE__ */ import_react.default.createElement(_components.ul, null, "\n", /* @__PURE__ */ import_react.default.createElement(_components.li, null, "I'll probably need to read from the file system then utilize frontmatter to determine titles, dates, etc."), "\n"), "\n"), "\n"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "Anyways that's it for now!"));
  return MDXLayout ? /* @__PURE__ */ import_react.default.createElement(MDXLayout, {
    ...props
  }, _content) : _content;
}
var first_post_default = MDXContent;
var headers = typeof attributes !== "undefined" && attributes.headers;
var meta = typeof attributes !== "undefined" && attributes.meta;
var links = void 0;
export {
  first_post_default as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/blog/first-post-KRH3CM6V.js.map
