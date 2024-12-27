import { validationSchema } from "./json-schema-validator";
import type { FormStructure } from "./types";
import ajv from "ajv";

const validate = new ajv().compile(validationSchema);

export const validateAndTransformEditorValue = (
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

  const isValid = validate(valueJson);

  if (!isValid) {
    throw new Error("Invalid JSON Structure");
  }

  return valueJson as FormStructure;
};
