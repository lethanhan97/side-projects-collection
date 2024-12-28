import { Typography } from "antd";
import type { Route } from "./home/+types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dynamic form builder" },
    { name: "description", content: "Form builder based on Ant Design" },
  ];
}

export default function Home() {
  return (
    <Typography.Paragraph className="p-8">Coming soon 😍</Typography.Paragraph>
  );
}
