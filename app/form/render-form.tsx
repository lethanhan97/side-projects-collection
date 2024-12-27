import { Form, Input, Typography } from "antd";
import type { FormInput, FormSection } from "./types";

export function RenderForm({
  formData,
}: {
  formData: (FormSection | FormInput)[];
}) {
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
