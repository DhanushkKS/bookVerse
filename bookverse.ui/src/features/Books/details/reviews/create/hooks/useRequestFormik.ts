import { useFormik } from "formik";
import { useAddReviewMutation } from "../../../../../../redux/reviews/api.ts";
import { Review } from "../../../../../../redux/reviews/types.ts";
import { FieldItem } from "../../../../../../types/types.ts";
import generateInputField from "../../../../../../helpers/generateInputField.tsx";
import { getUserId } from "../../../../../../utils/getUserId.ts";

const useRequestFormik = (bookId: string) => {
  const [addReview, { isLoading }] = useAddReviewMutation();
  const userId = getUserId();
  const onAddReviewSubmit = async (values: Partial<Review>) => {
    await addReview({ ...values, bookId, userId });
  };

  const formik = useFormik({
    initialValues: {
      comment: "",
    },
    // validationSchema: validationSchema,
    onSubmit: async (values) => {
      //TODO: Id should be auto generated from backend. CreatedBy should be get from local Storage
      await onAddReviewSubmit(values);
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
