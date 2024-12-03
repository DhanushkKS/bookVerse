import { useFormik } from "formik";
import generateInputField from "../../../helpers/generateInputField.jsx";
import { useSignInMutation } from "../../../redux/auth/api.js";
import { useEffect, useRef } from "react";
import { useLocalStorage } from "../../../hooks/useLocalStorage.js";
import { useNavigate } from "react-router-dom";
import { validationSchema } from "../validationSchema/validationSchema.ts";

const useRequestFormik = () => {
  const navigate = useNavigate();
  const hasNavigatedRef = useRef(false);
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
  ] = useSignInMutation();
  const onLoginSubmit = async (values) => {
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
  const renderFields = (field) => {
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
