import { Button, Form, Typography, type FormProps } from "antd";
import type { FormStructure } from "./types";
import { RenderForm } from "./render-form";

export function DynamicForm({
  formData,
  onFinish,
  onFinishFailed,
}: {
  formData: FormStructure;
  onFinish: FormProps["onFinish"];
  onFinishFailed: FormProps["onFinishFailed"];
}) {
  return (
    <Form
      name={formData.title}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Typography.Title level={2}>{formData.title}</Typography.Title>
      <RenderForm formData={formData.children} />

      <Form.Item label={null} className="float-right mt-3">
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
