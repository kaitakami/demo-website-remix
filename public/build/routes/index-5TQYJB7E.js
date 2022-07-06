import {
  useLoaderData
} from "/build/_shared/chunk-RDYF4RHT.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/home/kai/repos/demo-website-remix/app/routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();
var meta = () => {
  return {
    title: "Marius Espejo",
    description: "Marius Espejo's personal site"
  };
};
function Index() {
  let data = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    className: "remix__page"
  }, /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("h2", null, "This site is a work in progress."), /* @__PURE__ */ React.createElement("p", null, "Trying to learn some Remix! \u{1F604}")));
}
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/index-5TQYJB7E.js.map
