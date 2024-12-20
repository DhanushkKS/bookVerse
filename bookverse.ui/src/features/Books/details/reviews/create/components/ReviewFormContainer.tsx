import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
} from "@mui/material";
import React from "react";

type PrimaryDetailsContainerProps = {
  children: React.ReactNode;
  width?: string | number;
  title?: string;
  columns?: number;
  isLogin?: boolean;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  fullWidth?: boolean;
  isLoading?: boolean;
};

const ReviewFormContainer = ({
  children,
  width,
  title,
  onSubmit,
  columns,
  isLogin = false,
  fullWidth = false,
  isLoading = false,
}: PrimaryDetailsContainerProps) => {
  return (
    <Box width={width} p={4}>
      <Box
        width="100%"
        component="div"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <form onSubmit={onSubmit}>
          <Card
            sx={{ border: "solid 1px", padding: "32px", borderRadius: "20px" }}
            elevation={5}
          >
            <Box
              component={"div"}
              display={"flex"}
              width="100%"
              justifyContent="center"
            >
              <CardContent>{children}</CardContent>
              <Button
                disabled={isLoading}
                variant="contained"
                type="submit"
                fullWidth={fullWidth}
                sx={{ margin: "16px 0" }}
              >
                Add Review
                {isLoading && (
                  <CircularProgress size={24} sx={{ marginLeft: 2 }} />
                )}
              </Button>
            </Box>
          </Card>
        </form>
      </Box>
    </Box>
  );
};
export default ReviewFormContainer;
