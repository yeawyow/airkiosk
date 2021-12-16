import React from "react";
import Grid from "@mui/material/Grid";
import { Typography, Toolbar } from "@mui/material";

export default function PatientInfo() {
  return (
    <div>
      {" "}
      <Grid
        spacing={3}
        container
        justifyContent={"center"}
        direction="column"
        alignItems="center"
      >
        <Grid item></Grid>
        <Grid item>
          <Typography variant="h5">กรุณาเสียบบัตรประชาชน</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
