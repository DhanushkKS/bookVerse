import { useFormik } from "formik";
import { useAddBookMutation } from "../../../../redux/books/api.ts";
import { Book } from "../../../../redux/books/types.ts";
import { FieldItem } from "../../../../types/types.ts";
import generateInputField from "../../../../helpers/generateInputField.tsx";

const useRequestFormik = () => {
  // const navigate = useNavigate();
  const [
    addBook,
    {
      // isError: signInIsError,
      // error: signInError,
      // isSuccess: signInIsSuccess,
      // data: signInData,
      isLoading,
    },
  ] = useAddBookMutation();
  const onAddBookSubmit = async (values: Book) => {
    await addBook({ ...values });
  };

  const formik = useFormik({
    initialValues: {
      id: "",
      title: "",
      author: "",
      genre: "",
      publishedYear: "",
      createdBy: "",
    },
    // validationSchema: validationSchema,
    onSubmit: async (values) => {
      //TODO: Id should be auto generated from backend. CreatedBy should be get from local Storage
      await onAddBookSubmit(values);
    },
  });
  const renderFields = (field: FieldItem) => {
    return generateInputField(field, formik);
  };

  const { handleSubmit, handleChange } = formik;
  return {
    renderFields,
    handleSubmit,
    handleChange,
    isLoading,
  };
};
export default useRequestFormik;
