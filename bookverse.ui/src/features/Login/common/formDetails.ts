import { generateUniqueKey } from "../../../utils/generateUniqueKeys.js";
import { INPUT_TYPES } from "../../../constants.js";

export const loginFormDetails = [
  {
    key: generateUniqueKey("email"),
    name: "email",
    label: "Email",
    type: INPUT_TYPES.EMAIL,
    required: true,
    xs: 12,
    sm: 12,
    md: 12,
  },
  {
    key: generateUniqueKey("password"),
    name: "password",
    label: "Password",
    type: INPUT_TYPES.PASSWORD,
    xs: 12,
    sm: 12,
    md: 12,
  },
];
