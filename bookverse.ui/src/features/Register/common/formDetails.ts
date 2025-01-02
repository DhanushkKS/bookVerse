import { generateUniqueKey } from "../../../utils/generateUniqueKeys.js";
import { INPUT_TYPES } from "../../../constants.js";

export const registerFormDetails = [
  {
    key: generateUniqueKey("firstName"),
    name: "firstName",
    label: "First Name",
    type: INPUT_TYPES.TEXT,
    required: true,
    xs: 6,
    sm: 6,
    md: 6,
  },
  {
    key: generateUniqueKey("lastName"),
    name: "lastName",
    label: "Last Name",
    type: INPUT_TYPES.TEXT,
    required: true,
    xs: 6,
    sm: 6,
    md: 6,
  },
  {
    key: generateUniqueKey("email"),
    name: "email",
    label: "Email",
    type: INPUT_TYPES.EMAIL,
    required: true,
    xs: 6,
    sm: 6,
    md: 6,
  },

  {
    key: generateUniqueKey("password"),
    name: "password",
    label: "Password",
    type: INPUT_TYPES.PASSWORD,
    required: true,
    xs: 6,
    sm: 6,
    md: 6,
  },
  {
    key: generateUniqueKey("confirmPassword"),
    name: "confirmPassword",
    label: "Confirm Password",
    type: INPUT_TYPES.PASSWORD,
    xs: 6,
    sm: 6,
    md: 6,
  },
];
