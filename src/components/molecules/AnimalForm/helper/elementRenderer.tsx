import React from "react";
import { Dropdown, Numeric, TextArea, TextBox } from "../../../atoms";
import {
  DROPDOWN_COMPONENT,
  DROPDOWN_STYLE,
  TEXTBOX_COMPONENT,
  TEXTBOX_STYLE,
  NUMERIC_COMPONENT,
  NUMERIC_STYLE,
  TEXTAREA_COMPONENT,
  TEXTAREA_STYLE,
} from "../../../../constants/renderer-components.constant";

const KeysToComponentMap = {
  Dropdown,
  Textbox: TextBox,
  Numeric,
  Textarea: TextArea,
};

// converts an array into an object with the attributes needed for the options prop
function createObjectArray(array) {
  const objectArray = [];
  for (let index = 0; index < array.length; index += 1) {
    objectArray[index] = {
      key: index,
      value: array[index],
      displayName: array[index],
      selected: false,
    };
  }

  return objectArray;
}

// TODO Implement all types of fields
function rendererComponent(config, handleFunction, formData) {
  let rederElement = null;

  if (typeof KeysToComponentMap[config.FieldType] !== "undefined") {
    switch (config.FieldType) {
      case DROPDOWN_COMPONENT:
        rederElement = React.createElement(
          KeysToComponentMap[config.FieldType],
          {
            key: config.FieldName,
            onChange: handleFunction,
            placeholder: config.FieldName,
            description: config.FieldName,
            options: createObjectArray(
              config.FieldOptions.slice(1, -1).split(",")
            ),
            value:
              config.FieldName in formData ? formData[config.FieldName] : "",
            dropdownstyle: DROPDOWN_STYLE,
          }
        );
        break;
      case TEXTBOX_COMPONENT:
        rederElement = React.createElement(
          KeysToComponentMap[config.FieldType],
          {
            key: config.FieldName,
            onChange: handleFunction,
            placeholder: config.FieldName,
            description: config.FieldName,
            value:
              config.FieldName in formData ? formData[config.FieldName] : "",
            textBoxStyle: TEXTBOX_STYLE,
          }
        );
        break;
      case NUMERIC_COMPONENT:
        rederElement = React.createElement(
          KeysToComponentMap[config.FieldType],
          {
            key: config.FieldName,
            onChange: handleFunction,
            placeholder: config.FieldName,
            description: config.FieldName,
            numericStyle: NUMERIC_STYLE,
          }
        );
        break;
      case TEXTAREA_COMPONENT:
        rederElement = React.createElement(
          KeysToComponentMap[config.FieldType],
          {
            key: config.FieldName,
            onChange: handleFunction,
            placeholder: config.FieldName,
            description: config.FieldName,
            value:
              config.FieldName in formData ? formData[config.FieldName] : "",
            textAreaStyle: TEXTAREA_STYLE,
          }
        );
        break;
      default:
        rederElement = null;
    }
  }

  return rederElement;
}

// creates a group of elements with the same type to create the components
function renderType(data, page, type, handleFunction, formData) {
  const values = [];

  data.forEach((element) => {
    if (element.FormSection === page && element.FieldType === type) {
      values.push(element);
    }
  });

  return values.map((element) =>
    rendererComponent(element, handleFunction, formData)
  );
}

export default renderType;
