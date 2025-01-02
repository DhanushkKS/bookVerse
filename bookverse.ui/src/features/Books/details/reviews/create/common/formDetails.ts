import { FormField } from "../../../../../../types/types.ts";
import { generateUniqueKey } from "../../../../../../utils/generateUniqueKeys.ts";
import { INPUT_TYPES } from "../../../../../../constants.ts";

export const addReviewFormDetails: FormField[] = [
  {
    key: generateUniqueKey("review"),
    name: "comment",
    label: "Add review",
    type: INPUT_TYPES.TEXT,
    required: true,
    xs: 12,
    sm: 12,
    md: 6,
  },
];
