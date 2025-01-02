import { useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import generateInputField from "../../../helpers/generateInputField.jsx";
import { validationSchema } from "../validationSchema/validationSchema.ts";
import { useLogInMutation } from "../../../redux/auth/api.ts";
import { LoginPayload } from "../../../redux/auth/types.ts";
import { FieldItem } from "../../../types/types.ts";
import { useDispatch } from "../../../store";
import { setUser } from "../../../redux/useSlice.ts";

const useRequestFormik = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
      // setItem("user", signInData);
      dispatch(
        setUser({
          token: signInData?.token,
          userInfo: {
            id: signInData?.id,
            email: signInData?.email,
          },
        }),
      );
    }
    if (signInIsError) {
      console.log(signInError);
    }
  }, [signInData, signInIsError, signInError, isLoading, dispatch]);

  useEffect(() => {
    if (signInIsSuccess) {
      console.log("signIn success", signInIsSuccess);
      navigate("/");
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
