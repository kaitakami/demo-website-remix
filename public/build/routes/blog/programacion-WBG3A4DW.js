import {
  require_github_dark_dimmed
} from "/build/_shared/chunk-5MVHN2LV.js";
import {
  import_react_router_dom
} from "/build/_shared/chunk-RDYF4RHT.js";
import {
  React,
  __toModule,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/home/kai/repos/demo-website-remix/app/routes/blog/programacion.tsx?browser
init_react();

// app/routes/blog/programacion.tsx
init_react();
var import_github_dark_dimmed = __toModule(require_github_dark_dimmed());
var links = () => {
  return [
    {
      rel: "stylesheet",
      href: import_github_dark_dimmed.default
    }
  ];
};
function Blog() {
  return /* @__PURE__ */ React.createElement(import_react_router_dom.Outlet, null);
}
var meta = () => {
  return {
    title: "Blog | Kai Takami",
    description: "Blog posts de Kai Takami"
  };
};
export {
  Blog as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/blog/programacion-WBG3A4DW.js.map
