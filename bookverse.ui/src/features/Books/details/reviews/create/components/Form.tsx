import { Grid } from "@mui/material";
import useRequestFormik from "../hooks/useRequestFormik.ts";
import { addReviewFormDetails } from "../common/formDetails.ts";
import ReviewFormContainer from "./ReviewFormContainer.tsx";

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
    <ReviewFormContainer
      onSubmit={handleSubmit}
      width={width}
      isLoading={isLoading}
      columns={columns}
      isLogin={isLogin}
      title={title}
      fullWidth={fullWidth}
    >
      <Grid container spacing={2}>
        {addReviewFormDetails.map(({ xs, sm, md, ...item }) => (
          <Grid item key={item.key} xs={xs} sm={sm} md={md}>
            {renderFields(item)}
          </Grid>
        ))}
      </Grid>
    </ReviewFormContainer>
  );
};

export default Form;
