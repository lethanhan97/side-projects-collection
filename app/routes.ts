import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
    index("routes/home.tsx"),
    route("/dynamic-form", "routes/dynamic-form/index.tsx"),
    route("/form-builder", "routes/builder.tsx"),
  ]),
] satisfies RouteConfig;
