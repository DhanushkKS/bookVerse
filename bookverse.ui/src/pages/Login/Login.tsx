import LoginFeature from "../../features/Login/index.jsx";
import { MainFormContainer } from "../../components/Forms/MainFormContainer.jsx";

const LoginPage = () => {
  return (
    <>
      <MainFormContainer>
        <LoginFeature />
      </MainFormContainer>
    </>
  );
};

export default LoginPage;
