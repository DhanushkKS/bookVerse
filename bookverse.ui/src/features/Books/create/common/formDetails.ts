import { FormField } from "../../../../types/types.ts";
import { generateUniqueKey } from "../../../../utils/generateUniqueKeys.ts";
import { INPUT_TYPES } from "../../../../constants.ts";

export const createBookFormDetails: FormField[] = [
  {
    key: generateUniqueKey("title"),
    name: "title",
    label: "Title",
    type: INPUT_TYPES.TEXT,
    required: true,
    xs: 12,
    sm: 12,
    md: 6,
  },
  {
    key: generateUniqueKey("author"),
    name: "author",
    label: "Author",
    type: INPUT_TYPES.TEXT,
    required: true,
    xs: 12,
    sm: 12,
    md: 6,
  },
  {
    key: generateUniqueKey("genre"),
    name: "genre",
    label: "Genre",
    type: INPUT_TYPES.TEXT,
    required: false,
    xs: 12,
    sm: 12,
    md: 6,
  },
  {
    key: generateUniqueKey("publishedYear"),
    name: "publishedYear",
    label: "Published Year",
    type: INPUT_TYPES.TEXT,
    required: false,
    xs: 12,
    sm: 12,
    md: 6,
  },
];
