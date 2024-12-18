import { useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import generateInputField from "../../../helpers/generateInputField.jsx";
import { useLocalStorage } from "../../../hooks/useLocalStorage.js";
import { validationSchema } from "../validationSchema/validationSchema.ts";
import { useLogInMutation } from "../../../redux/auth/api.ts";
import { LoginPayload } from "../../../redux/auth/types.ts";
import { FieldItem } from "../../../types/types.ts";

const useRequestFormik = () => {
  const navigate = useNavigate();
  const { setItem } = useLocalStorage();
  const [
    signIn,
    {
      isError: signInIsError,
      error: signInError,
      isSuccess: signInIsSuccess,
      data: signInData,
      isLoading,
    },
  ] = useLogInMutation();
  const onLoginSubmit = async (values: LoginPayload) => {
    await signIn({ ...values });
  };

  useEffect(() => {
    if (signInData && signInData?.token) {
      setItem("user", signInData);
    }
    if (signInIsError) {
      console.log(signInError);
    }
  }, [signInData, signInIsError, signInError, setItem, isLoading]);

  useEffect(() => {
    if (signInIsSuccess) {
      console.log("signIn success", signInIsSuccess);
      navigate("/");
      window.location.reload(); //for now
    }
  }, [signInIsSuccess, navigate]);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await onLoginSubmit(values);
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
