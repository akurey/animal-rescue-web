import React from "react";
import { Dropdown, Numeric, TextArea, TextBox } from "../../../atoms";

const KeysToComponentMap = {
  Dropdown,
  Textbox: TextBox,
  Numeric,
  Textarea: TextArea,
};

// converts an array into an object with the attributes needed for the options prop
function createObjectArray(array) {
  const objectArray = [];
  for (let index = 0; index < array.length; index++) {
    objectArray[index] = {
      value: array[index],
      displayName: array[index],
      selected: false,
    };
  }

  return objectArray;
}

// creates a group of elements with the same type to create the components
function renderType(data, page, type, handleFunction) {
  const values = [];

  data.forEach((element) => {
    if (element.FormSection === page && element.FieldType === type) {
      values.push(element);
    }
  });

  return values.map((element) => rendererComponent(element, handleFunction));
}

// create the component of an element
function rendererComponent(config, handleFunction) {
  if (typeof KeysToComponentMap[config.FieldType] !== "undefined") {
    if (config.FieldType === "Dropdown") {
      return React.createElement(KeysToComponentMap[config.FieldType], {
        key: config.FieldName,
        onChange: handleFunction,
        placeholder: config.FieldName,
        options: createObjectArray(config.FieldOptions.slice(1, -1).split(",")),
        dropdownStyle: "form-field--dropdown",
      });
    }
    if (config.FieldType === "Textbox") {
      React.createElement(KeysToComponentMap[config.FieldType], {
        key: config.FieldName,
        onChange: handleFunction,
        placeholder: config.FieldName,
        textBoxStyle: "form-field--textbox",
      });
    } else if (config.FieldType === "Numeric") {
      React.createElement(KeysToComponentMap[config.FieldType], {
        key: config.FieldName,
        onChange: handleFunction,
        placeholder: config.FieldName,
        numericStyle: "form-field--numeric",
        name: config.FieldName.toLowerCase().replace(" ", "-"),
      });
    }
    return React.createElement(KeysToComponentMap[config.FieldType], {
      key: config.FieldName,
      placeholder: config.FieldName,
      textAreaStyle: "form-field--textarea",
      onChange: handleFunction,
    });
  }
}

export default renderType;
