import React, { useState } from "react";
import Logo from "../components/fragments/Logo";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@material-ui/core/styles";

import Display from "../components/fragments/Display";
export default function PatientCheck() {
  return (
    <div>
      <Grid spacing={3}>
        <Grid item xs={12}>
          <Logo />
        </Grid>
        <Grid item xs={12}>
          <Display />
        </Grid>
      </Grid>
    </div>
  );
}
