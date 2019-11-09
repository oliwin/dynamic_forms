import { Form } from "./FormService";
import { FormGroup } from "@angular/forms";

export interface IOption {
  label: string;
  value: any;
}

export interface Field {
  name: string;
  type: string;
  options: IOption[];
  required: boolean;
  order: number;
  validator: string[] | string;
  disabled?: boolean;
  value?: number;
  isSubmit?: boolean;
  multiple?: boolean;
  placeholder?: string;
}

export interface IForm {
  name: string;
  fields?: Field[];
  parent?: string;
  label?: string;
  order?: number;
}

export interface RefsField {
  source: string;
  depends: string;
  rules: any[];
}

export interface RootObject {
  title: string;
  forms: IForm[];
  refsField: RefsField[];
}

export interface IReferenceForm {
  source: Form;
  reference: Form;
  sourceField: string;
  referenceField: string;
  rules: string[];
}

export enum EFieldActions {
  VALIDATE = "validate",
  INVALIDATE = "invalidate",
  DISABLE = "disable",
  ENABLE = "enable",
  READONLY = "readonly",
  CHANGED = "changed",
  RESET = "reset",
  SETVALUE = "setvalue"
}

export enum EFormElements {
  INPUT = "input",
  RADIO = "radio",
  TEXTAREA = "textarea",
  SELECT = "select"
}

export interface IFormObject {
  formName: string;
  form: FormGroup;
}

export const _JSON = {
  title: "Форма 1",
  forms: [
    {
      fields: [
        {
          name: "document",
          type: "input",
          required: true,
          validator: ["string"],
          placeholder: "Документ",
          order: 1
        },
        {
          name: "seria",
          type: "input",
          validator: "string",
          placeholder: "Серия",
          order: 2
        }
      ],
      name: "Form1",
      label: "Блок 1",
      order: 1
    },
    {
      name: "Form2",
      fields: [
        {
          name: "name",
          type: "input",
          required: true,
          validator: "string",
          placeholder: "Имя"
        },
        {
          name: "age",
          type: "input",
          validator: "number",
          placeholder: "Возраст"
        }
      ],
      parent: "Form1",
      label: "Блок 2",
      order: 1
    },

    {
      name: "Form3",
      parent: "Form1",
      fields: [
        {
          name: "hobby",
          type: "input",
          validator: "string",
          placeholder: "Хобби",
          order: 2
        },

        {
          name: "books",
          type: "select",
          options: [
            { label: "Пушкин", value: 1 },
            { label: "Толстой", value: 2 },
            { label: "Лермонтов", value: 3 }
          ],
          placeholder: "Книги",
          order: 1
        }
      ],
      label: "Блок 3",
      order: 3
    },

    {
      name: "Form4",
      fields: [
        {
          name: "date",
          type: "inputDate",
          value: "2019-11-04T00:00:00",
          placeholder: "Дата рождения",
          order: 1
        },

        {
          name: "sex",
          type: "radio",
          placeholder: "Сложность",
          order: 2,
          options: [
            { label: "Легко", value: 1 },
            { label: "Средне", value: 2 },
            { label: "Сложно", value: 3 }
          ]
        }
      ],
      parent: "Form3",
      label: "Блок 4",
      order: 4
    },

    {
      name: "Form5",
      parent: "Form1",
      label: "Блок 5",
      fields: [
        {
          name: "position",
          type: "textarea",
          validator: "string",
          placeholder: "Назначение",
          order: 1
        }
      ]
    }
  ],
  refsField: [
    {
      source: "Form1.document",
      depends: "Form5.position",
      rules: ["disable"]
    }
  ]
} as RootObject;
