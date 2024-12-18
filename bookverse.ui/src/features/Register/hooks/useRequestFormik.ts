import { useFormik } from "formik";
import generateInputField from "../../../helpers/generateInputField.jsx";
import { useRegisterMutation } from "../../../redux/auth/api.js";
import { useLocalStorage } from "../../../hooks/useLocalStorage.js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { validationSchema } from "../validationSchema/validationSchema.ts";
import { RegisterPayload } from "../../../redux/auth/types.ts";
import { FieldItem } from "../../../types/types.ts";

const useRequestFormik = () => {
  const navigate = useNavigate();
  const { setItem } = useLocalStorage();
  const [register, { error, data, isLoading, isSuccess, isError }] =
    useRegisterMutation();

  const registerOnSubmit = async (values: RegisterPayload["user"]) => {
    await register({
      user: values,
    }).unwrap();
  };
  useEffect(() => {
    if (data?.token) {
      setItem("user", data);
    }
    if (isError) {
      console.log(error);
    }
  }, [setItem, data, error, isError]);

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
      window.location.reload();
    }
  }, [isSuccess, navigate]);

  const formik = useFormik({
    initialValues: {
      //
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const password = values["password"];
      const { confirmPassword, ...rest } = values;
      if (password !== confirmPassword) {
        console.error("Passwords don't match");
        return;
      }
      try {
        console.log("onSubmit", rest);
        await registerOnSubmit(rest);
      } catch (error) {
        console.log("Failed to register user", error);
      }
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
