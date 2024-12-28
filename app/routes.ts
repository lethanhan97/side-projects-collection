import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
    index("routes/home/index.tsx"),
    route("/form-builder", "routes/builder.tsx"),
  ]),
] satisfies RouteConfig;
