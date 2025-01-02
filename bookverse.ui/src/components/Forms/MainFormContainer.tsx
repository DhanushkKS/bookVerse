import { Box } from "@mui/material";
import { ReactNode } from "react";

type MainFormContainerProps = {
  children: ReactNode;
};
export const MainFormContainer = ({ children }: MainFormContainerProps) => {
  return (
    <>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        component="main"
        minWidth="100vw"
        minHeight="100vh"
        py={0}
        sx={{ background: "#e0e0e0" }}
      >
        {children}
      </Box>
    </>
  );
};
