import React, { useState } from "react";
import Button from "@mui/material/Button";
import PatientInfo from "../components/fragments/PatientInfo";
import Logo from "../components/fragments/Logo";
import Grid from "@mui/material/Grid";
import Display from "../components/fragments/Display";

export default function Home() {
  return (
    <div>
      <Grid spacing={3}>
        <Grid item xs={12}>
          <Logo />
        </Grid>
        <Grid item xs={12}>
          <PatientInfo />
        </Grid>
      </Grid>
    </div>
  );
}
