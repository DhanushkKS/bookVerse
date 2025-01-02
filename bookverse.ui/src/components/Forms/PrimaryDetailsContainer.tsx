import React from "react";
import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import { FormFooter } from "./FormFooter";

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

export const PrimaryDetailsContainer = ({
  children,
  width,
  title,
  columns,
  isLogin = false,
  onSubmit,
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
            sx={{ border: "none", padding: "32px", borderRadius: "20px" }}
            elevation={5}
          >
            <Box
              component={"div"}
              display={"flex"}
              width="100%"
              justifyContent="center"
            >
              {/*TODO: Add Logo later...*/}
              {/*<CardMedia*/}
              {/*  component="img"*/}
              {/*  image={Logo}*/}
              {/*  alt="logo"*/}
              {/*  sx={{*/}
              {/*    border: "solid 1px",*/}
              {/*    paddingTop: "16px",*/}
              {/*    maxWidth: "450px",*/}
              {/*    maxHeight: "300px",*/}
              {/*    objectFit: "contain",*/}
              {/*  }}*/}
              {/*/>*/}
              <CardHeader
                title={<Typography variant="h2">BookVerse</Typography>}
              />
            </Box>
            <CardHeader
              title={
                <Typography variant={"h5"} component="div">
                  {title}
                </Typography>
              }
            />
            <CardContent>{children}</CardContent>
            <FormFooter
              columns={columns}
              isLogin={isLogin}
              fullWidth={fullWidth}
              isLoading={isLoading}
            />
          </Card>
        </form>
      </Box>
    </Box>
  );
};
