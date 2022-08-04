import {
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/home/kai/repos/demo-website-remix/app/routes/blog/8.mdx?browser
init_react();

// mdx:/home/kai/repos/demo-website-remix/app/routes/blog/8.mdx
init_react();
var import_react = __toModule(require_react());
function MDXContent(props = {}) {
  const _components = Object.assign({}, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null);
  return MDXLayout ? /* @__PURE__ */ import_react.default.createElement(MDXLayout, {
    ...props
  }, _content) : _content;
}
var __default = MDXContent;
var headers = typeof attributes !== "undefined" && attributes.headers;
var meta = typeof attributes !== "undefined" && attributes.meta;
var links = void 0;
export {
  __default as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/blog/8-BXOKX6XY.js.map
