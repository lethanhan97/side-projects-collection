import type { FormProps } from "antd";
import { Button, Col, Form, Input, Row, Typography } from "antd";
import { formData } from "./data";
import type { FormInput, FormSection, FormStructure } from "./types";
import Editor from "@monaco-editor/react";
import { useRef, useState } from "react";
import type { editor } from "monaco-editor";
import { PlayCircleOutlined } from "@ant-design/icons";

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
  const [formJSON, setFormJSON] = useState<FormStructure>(formData);
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);

  const onFinish: FormProps["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const getEditorValue = () => editorRef.current?.getValue();

  const handleRun = () => {
    const value = getEditorValue();
    const formStructure = validateAndTransformValue(value);

    setFormJSON(formStructure);
  };

  const validateAndTransformValue = (
    value: string | undefined
  ): FormStructure => {
    if (!value) {
      throw new Error("Invalid value");
    }

    let valueJson: Record<string, unknown>;
    try {
      valueJson = JSON.parse(value);
    } catch (e) {
      throw new Error("Invalid JSON");
    }

    // TODO: Proper validation
    return valueJson as FormStructure;
  };

  return (
    <main className="px-3 py-3">
      <header className="flex justify-center">
        <Typography.Title>Dynamic form demo</Typography.Title>
      </header>

      <section className="mb-12 flex justify-center">
        <Button
          type="primary"
          icon={<PlayCircleOutlined />}
          size={"large"}
          onClick={handleRun}
        >
          Run
        </Button>
      </section>

      <Row gutter={64}>
        <Col span={12}>
          <section>
            <Editor
              height="90vh"
              defaultLanguage="json"
              defaultValue={JSON.stringify(formJSON, null, 2)}
              onMount={(editor) => (editorRef.current = editor)}
            />
          </section>
        </Col>

        <Col span={12}>
          <section>
            <Typography.Title level={2}>{formData.title}</Typography.Title>
            <Form
              name={formJSON.title}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <RenderForm formData={formJSON.children} />

              <Form.Item label={null} className="float-right mt-3">
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </section>
        </Col>
      </Row>
    </main>
  );
}
