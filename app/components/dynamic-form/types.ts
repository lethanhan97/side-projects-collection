import type { InputProps } from "antd";

type FormInputText = {
  inputType: "text";
};

type BaseFormInput = {
  nodeType: "input";
  inputType: string;
  name: string;
  label: string;
  required: boolean;
  inputMeta?: InputProps;
};

export type FormInput = FormInputText & BaseFormInput;

export type FormSection = {
  nodeType: "section";
  title: string;
  children: (FormSection | FormInput)[];
};

export type FormStructure = {
  title: string;
  children: (FormSection | FormInput)[];
};
