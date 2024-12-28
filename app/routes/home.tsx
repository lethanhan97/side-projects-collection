import { Typography } from "antd";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Home" }, { name: "description", content: "About me! ☺️" }];
}

export default function HomePage() {
  return (
    <Typography.Paragraph className="p-8">
      Hi, I'm An! Better home page coming soon!
    </Typography.Paragraph>
  );
}
