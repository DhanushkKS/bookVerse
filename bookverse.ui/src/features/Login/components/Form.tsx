import { PrimaryDetailsContainer } from "../../../components/Forms/PrimaryDetailsContainer";
import { Grid } from "@mui/material";
import { loginFormDetails } from "../common/formDetails";
import useRequestFormik from "../hooks/useRequestFormik";

type FormProps = {
  width?: string | number;
  title?: string;
  columns?: number;
  isLogin?: boolean;
  fullWidth?: boolean;
};

const Form = ({ columns, isLogin, title, width, fullWidth }: FormProps) => {
  const { renderFields, handleSubmit, isLoading } = useRequestFormik();

  return (
    <PrimaryDetailsContainer
      title={title}
      width={width}
      isLogin={isLogin}
      columns={columns}
      onSubmit={handleSubmit}
      fullWidth={fullWidth}
      isLoading={isLoading}
    >
      <Grid container spacing={2}>
        {loginFormDetails.map(({ xs, sm, md, ...item }) => (
          <Grid item key={item.key} xs={xs} sm={sm} md={md}>
            {renderFields(item)}
          </Grid>
        ))}
      </Grid>
    </PrimaryDetailsContainer>
  );
};

export default Form;
