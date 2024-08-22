import React, { useState } from "react";
import FormControlComponent from "./FormControlComponent";

const TestFormControlComponent = () => {
  // Initial values for form fields
  const [values, setValues] = useState({
    textField: "",
    numberField: 0,
    radioField: "",
    switchField: false,
    checkboxField: false,
    selectField: "",
    dateField: "",
    textareaField: "",
  });

  // Fields configuration for testing
  const fields = [
    {
      type: "text",
      label: "Text Field",
      name: "textField",
    },
    {
      type: "number",
      label: "Number Field",
      name: "numberField",
    },
    {
      type: "radio",
      label: "Radio Field",
      name: "radioField",
      options: [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
      ],
    },
    {
      type: "switch",
      label: "Switch Field",
      name: "switchField",
    },
    {
      type: "checkbox",
      label: "Checkbox Field",
      name: "checkboxField",
    },
    {
      type: "select",
      label: "Select Field",
      name: "selectField",
      options: [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
      ],
    },
    {
      type: "date",
      label: "Date Field",
      name: "dateField",
    },
    {
      type: "textarea",
      label: "Textarea Field",
      name: "textareaField",
    },
  ];

  // Handle value changes
  const handleSetValues = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSave = (event) => {
    event.preventDefault();
    console.log("Form Submitted:", values);
  };

  return (
    <div>
      <h2>Test FormControlComponent</h2>
      <FormControlComponent
        fields={fields}
        values={values}
        setValues={handleSetValues}
        handleSave={handleSave}
      />
      <pre>{JSON.stringify(values, null, 2)}</pre>
    </div>
  );
};

export default TestFormControlComponent;
