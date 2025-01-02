import { useFormik } from "formik";
import { useAddBookMutation } from "../../../../redux/books/api.ts";
import { CreateBookPayload } from "../../../../redux/books/types.ts";
import { FieldItem } from "../../../../types/types.ts";
import generateInputField from "../../../../helpers/generateInputField.tsx";
import { useLocalStorage } from "../../../../hooks/useLocalStorage.ts";
import { useNavigate } from "react-router-dom";

type UserInfo = {
  token: string;
  userInfo: {
    email: string;
    id: string;
  };
};
const useRequestFormik = () => {
  const navigate = useNavigate();
  const { getItem } = useLocalStorage();
  const userData = getItem<UserInfo>("user");
  const userId = userData?.userInfo.id.toString();
  const [addBook, { isLoading }] = useAddBookMutation();
  const onAddBookSubmit = async (
    values: Omit<CreateBookPayload, "createdBy">,
  ) => {
    if (!userId) {
      console.error("User ID is not available in local storage.");
      return;
    }
    const bookData: CreateBookPayload = { ...values, createdBy: userId };
    await addBook(bookData);
    await navigate("/books");
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      genre: "",
      publishedYear: "",
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
