import CardActions from "@mui/material/CardActions";
import {
  Button,
  CircularProgress,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

type FormFooterProps = {
  columns?: number;
  isLogin: boolean;
  fullWidth?: boolean;
  isLoading: boolean;
};

export const FormFooter = ({
  columns = 12,
  isLogin,
  fullWidth = false,
  isLoading,
}: FormFooterProps) => {
  return (
    <>
      <CardActions sx={{ padding: "16px" }}>
        <Grid container spacing={1} rowSpacing={2}>
          <Grid item sm={columns} md={columns}>
            <Button
              disabled={isLoading}
              variant="contained"
              type="submit"
              fullWidth={fullWidth}
              sx={{ margin: "16px 0" }}
            >
              {isLogin ? "Sign In" : "Create Account"}
              {isLoading && (
                <CircularProgress size={24} sx={{ marginLeft: 2 }} />
              )}
            </Button>
          </Grid>
        </Grid>
      </CardActions>
      <Grid container spacing={2} mt={2}>
        <Grid
          item
          sm={12}
          md={12}
          xs={12}
          display={"flex"}
          justifyContent="center"
        >
          <Typography variant="caption">
            {isLogin ? "Don't have an account?" : "Have an account?"}
            &nbsp;
            <Link
              component={RouterLink}
              to={isLogin ? "/register" : "/login"}
              variant="caption"
              underline="none"
              color={"#fe5e7f"}
            >
              {isLogin ? "Create account" : "Sign In"}
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
