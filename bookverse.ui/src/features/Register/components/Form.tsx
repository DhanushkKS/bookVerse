import { PrimaryDetailsContainer } from "../../../components/Forms/PrimaryDetailsContainer";
import { Grid } from "@mui/material";
import { registerFormDetails } from "../common/formDetails";
import useRequestFormik from "../hooks/useRequestFormik";

type FormProps = {
  columns?: number;
  isLogin?: boolean;
  title?: string;
  width?: string | number;
};

const Form = ({ columns, isLogin, title, width }: FormProps) => {
  const { renderFields, handleSubmit } = useRequestFormik();

  return (
    <PrimaryDetailsContainer
      title={title}
      width={width}
      isLogin={isLogin}
      columns={columns}
      onSubmit={handleSubmit}
    >
      <Grid container spacing={2}>
        {registerFormDetails.map(({ xs, sm, md, ...item }) => (
          <Grid item key={item.key} xs={xs} sm={sm} md={md}>
            {renderFields(item)}
          </Grid>
        ))}
      </Grid>
    </PrimaryDetailsContainer>
  );
};

export default Form;
