import React from "react";
import { Card, Grid } from "@mui/material";
import SiderComponent from "./layout/sider";
import TopnavComponent from "./layout/topNav";
import { Stack } from "@mui/system";

const DashLayout = (props) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={3} sm={2}>
        <SiderComponent />
      </Grid>

      <Grid item xs={9} sm={10}>
        <Stack spacing={1}>
          <TopnavComponent />
          <Card sx={{ minHeight: "90vh", paddingLeft: "1rem" }}>
            {props.children}
          </Card>
        </Stack>
      </Grid>
      {/* <Grid item xs={0} sm={1}></Grid> */}
    </Grid>
  );
};

export default DashLayout;
