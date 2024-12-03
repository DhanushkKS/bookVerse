import { TextField } from "@mui/material";
import React from "react";

/**
 * return input field based on type
 * @param {Object} input
 * @param {Object} formik
 * @param {Array} options
 * @returns React.JSX.Element
 */
const generateInputField = (input, formik) => {
  //only implemented text field
  return (
    <TextField
      key={input.key}
      type={input.type}
      label={input.label}
      name={input.name}
      required={input.required}
      multiline={input.multiline}
      rows={input.rows}
      disabled={input.disabled}
      fullWidth
      value={formik.values[input.name]}
      onChange={formik.handleChange}
      error={formik.errors[input.name] && formik.touched[input.name]}
      helperText={
        formik.errors[input.name] &&
        formik.touched[input.name] &&
        formik.errors[input.name]
      }
    />
  );
};
export default generateInputField;
