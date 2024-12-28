import { Typography } from "antd";
import type { Route } from "./+types/builder";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dynamic form builder" },
    { name: "description", content: "Form builder based on Ant Design" },
  ];
}

export default function FormBuilderPage() {
  return (
    <Typography.Paragraph className="p-8">Coming soon 😍</Typography.Paragraph>
  );
}
