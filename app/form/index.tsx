import type { FormProps } from "antd";
import { Affix, Alert, Button, Col, Form, Input, Row, Typography } from "antd";
import { formData } from "./data";
import type { FormStructure } from "./types";
import Editor, { type OnMount } from "@monaco-editor/react";
import { useRef, useState } from "react";
import type { editor } from "monaco-editor";
import { PlayCircleOutlined } from "@ant-design/icons";
import { RenderForm } from "./render-form";
import { validateAndTransformEditorValue } from "./utils";

export function FormPage() {
  const [form] = Form.useForm();
  const [formJSON, setFormJSON] = useState<FormStructure>(formData);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);

  const onFinish: FormProps["onFinish"] = (values) => {
    alert(`Success: ${values}`);
  };

  const onFinishFailed: FormProps["onFinishFailed"] = (errorInfo) => {
    alert(`Failed: ${errorInfo}`);
  };

  const getEditorValue = () => editorRef.current?.getValue();

  const handleEditorInit: OnMount = (editor, monaco) => {
    editorRef.current = editor;
  };

  const handleRun = () => {
    const value = getEditorValue();

    let formStructure: FormStructure;
    try {
      formStructure = validateAndTransformEditorValue(value);

      setFormJSON(formStructure);
      setErrorMessage(null);
      form.resetFields();
    } catch (e: unknown) {
      if (e instanceof Error) setErrorMessage(e.message);
    }
  };

  return (
    <main className="px-3 py-3">
      <header className="flex justify-center">
        <Typography.Title>Dynamic form demo</Typography.Title>
      </header>

      <section className="mb-6 flex flex-col justify-center items-center">
        <Affix offsetTop={50}>
          <Button
            className="w-[fit-content]"
            type="primary"
            icon={<PlayCircleOutlined />}
            size={"large"}
            onClick={handleRun}
          >
            Run
          </Button>
        </Affix>

        {errorMessage && (
          <Alert className="mt-6" message={errorMessage} type="error" />
        )}
      </section>

      <Row gutter={[64, 64]}>
        <Col
          xs={{
            span: 24,
            order: 2,
          }}
          md={{
            span: 12,
            order: 1,
          }}
        >
          <section className="sm:h-[100vh] h-[40vh]">
            <Editor
              defaultLanguage="json"
              defaultValue={JSON.stringify(formJSON, null, 2)}
              onMount={handleEditorInit}
            />
          </section>
        </Col>

        <Col
          xs={{
            span: 24,
            order: 1,
          }}
          md={{
            span: 12,
            order: 2,
          }}
        >
          <Typography.Title level={2}>{formJSON.title}</Typography.Title>
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
        </Col>
      </Row>
    </main>
  );
}
