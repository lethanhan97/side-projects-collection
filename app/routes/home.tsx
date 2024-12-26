import type { Route } from "./+types/home";
import { Form } from "../form";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dynamic form demo" },
    { name: "description", content: "JSON based dynamic form demo" },
  ];
}

export default function Home() {
  return <Form />;
}
