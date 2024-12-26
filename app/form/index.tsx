import type { FormProps } from "antd";
import { Button, Form, Input, Typography } from "antd";
import { formData } from "./data";
import type { FormInput, FormSection } from "./types";

function RenderForm({ formData }: { formData: (FormSection | FormInput)[] }) {
  return (
    <>
      {formData.map((node) => {
        if (node.nodeType == "input") {
          return (
            <Form.Item
              key={node.name}
              label={node.label}
              name={node.name}
              rules={[{ required: node.required }]}
            >
              <Input {...(node.inputMeta || {})} />
            </Form.Item>
          );
        }

        return (
          <div className="pl-3 pt-3" key={node.title}>
            <Typography.Paragraph className="font-bold">
              {node.title}
            </Typography.Paragraph>

            <RenderForm formData={node.children} />
          </div>
        );
      })}
    </>
  );
}

export function FormPage() {
  const onFinish: FormProps["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <main className="px-3 py-3">
      <header className="mb-4">
        <Typography.Title>Dynamic form demo</Typography.Title>
      </header>

      <section className="max-w-[50vw]">
        <Typography.Title level={2}>{formData.title}</Typography.Title>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <RenderForm formData={formData.children} />

          <Form.Item label={null} className="float-right mt-3">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </section>
    </main>
  );
}
