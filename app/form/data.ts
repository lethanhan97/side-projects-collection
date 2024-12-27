import type { FormStructure } from "./types";

export const formData: FormStructure = {
  title: "Form title",
  children: [
    {
      nodeType: "input",
      inputType: "text",
      name: "username",
      label: "Username",
      required: true,
      inputMeta: {
        placeholder: "Username",
      },
    },
    {
      nodeType: "input",
      inputType: "text",
      name: "age",
      label: "Age",
      required: true,
      inputMeta: {
        type: "number",
        placeholder: "Age",
      },
    },
    {
      nodeType: "input",
      inputType: "text",
      name: "password",
      label: "Password",
      required: true,
      inputMeta: {
        type: "password",
        placeholder: "Password",
      },
    },
    {
      nodeType: "section",
      title: "Nested section",
      children: [
        {
          nodeType: "input",
          inputType: "text",
          name: "hobby",
          label: "Hobby",
          required: true,
          inputMeta: {
            placeholder: "Username",
          },
        },
        {
          nodeType: "section",
          title: "Nested section 2",
          children: [
            {
              nodeType: "input",
              inputType: "text",
              name: "jobTitle",
              label: "Job Title",
              required: false,
              inputMeta: {
                placeholder: "Software Engineer",
              },
            },
          ],
        },
        {
          nodeType: "input",
          inputType: "text",
          name: "placeOfBirth",
          label: "Place Of Birth",
          required: true,
          inputMeta: {
            type: "input",
            placeholder: "Hanoi",
          },
        },
      ],
    },
  ],
};
