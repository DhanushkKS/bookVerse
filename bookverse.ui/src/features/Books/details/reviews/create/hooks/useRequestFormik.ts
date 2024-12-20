import { useFormik } from "formik";
import { useAddReviewMutation } from "../../../../../../redux/reviews/api.ts";
import { Review } from "../../../../../../redux/reviews/types.ts";
import { FieldItem } from "../../../../../../types/types.ts";
import generateInputField from "../../../../../../helpers/generateInputField.tsx";

const useRequestFormik = () => {
  const [addReview, { isLoading }] = useAddReviewMutation();
  const onAddReviewSubmit = async (values: Partial<Review>) => {
    await addReview({ ...values });
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
