import { Grid } from "@mui/material";
import useRequestFormik from "../hooks/useRequestFormik.ts";
import { PrimaryDetailsContainer } from "../../../../components/Forms/PrimaryDetailsContainer.tsx";
import { createBookFormDetails } from "../common/formDetails.ts";

type FormProps = {
  width?: string | number;
  title?: string;
  columns?: number;
  isLogin?: boolean;
  fullWidth?: boolean;
};
// todo: Need to update/or create new primary details container for use non auth forms
const Form = ({ columns, isLogin, title, width, fullWidth }: FormProps) => {
  const { renderFields, handleSubmit, isLoading } = useRequestFormik();

  return (
    <PrimaryDetailsContainer
      title={title}
      width={width}
      isLogin={false}
      columns={columns}
      onSubmit={handleSubmit}
      fullWidth={fullWidth}
      isLoading={isLoading}
    >
      <Grid container spacing={2}>
        {createBookFormDetails.map(({ xs, sm, md, ...item }) => (
          <Grid item key={item.key} xs={xs} sm={sm} md={md}>
            {renderFields(item)}
          </Grid>
        ))}
      </Grid>
    </PrimaryDetailsContainer>
  );
};

export default Form;
