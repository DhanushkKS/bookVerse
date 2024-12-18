export type Book = {
  id: string;
  title: string;
  author: string;
  genre: string;
  publishedYear: string;
};
export type FormField = {
  key: string;
  name: string;
  label: string;
  type: string;
  required?: boolean;
  xs?: number;
  sm?: number;
  md?: number;
};
export type FieldItem = Omit<FormField, "sm" | "md" | "xs">;
