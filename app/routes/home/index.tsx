import type { Route } from "./+types";
import type { CollapseProps, FormProps } from "antd";
import { Alert, Button, Col, Collapse, Form, Row, Typography } from "antd";
import { formData } from "./data";
import Editor, { type OnMount } from "@monaco-editor/react";
import { useRef, useState } from "react";
import type { editor } from "monaco-editor";
import { PlayCircleOutlined } from "@ant-design/icons";
import type { FormStructure } from "../../components/dynamic-form/types";
import { validateAndTransformEditorValue } from "../../components/dynamic-form/utils";
import { DynamicForm } from "../../components/dynamic-form";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dynamic form demo" },
    { name: "description", content: "JSON based dynamic form demo" },
  ];
}

const accordionItems: CollapseProps["items"] = [
  {
    key: "1",
    label: "What is it?",
    children: (
      <>
        <Typography.Paragraph>
          It's a demo of a dynamic form that can be generated from a pre-defined
          JSON structure. I came up with the idea when I was thinking of a
          simple challenge for my friend (Minh Tien, I'm looking at you 👀).
        </Typography.Paragraph>
        <Typography.Paragraph>
          It's a simple Proof of Concept, so it's not supporting all of the form
          items available. This is mainly to show how one can render a tree
          structure using React
        </Typography.Paragraph>
      </>
    ),
  },
  {
    key: "2",
    label: "How to use it?",
    children: (
      <Typography.Paragraph>
        Simply edit the JSON on the code editor on the left and click the "Run"
        button. The idea is that there are 2 types of nodes: "input" and
        "section". "Input" nodes describe the actual form field, while "Section"
        nodes contains a children of either "input" or "section" nodes
      </Typography.Paragraph>
    ),
  },
];

export default function Home() {
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
    <div className="p-8">
      <header className="flex justify-center">
        <Typography.Title>Dynamic form demo</Typography.Title>
      </header>

      <section className="my-6">
        <Collapse items={accordionItems} accordion />
      </section>

      <section className="mb-6 flex flex-col justify-center items-center">
        <Button
          className="w-[fit-content]"
          type="primary"
          icon={<PlayCircleOutlined />}
          size={"large"}
          onClick={handleRun}
        >
          Run
        </Button>

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
          <DynamicForm
            formData={formJSON}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          />
        </Col>
      </Row>
    </div>
  );
}
