import React, { useState } from "react";
//import Button from "@mui/material/Button";
import MQTTConnect from "./";
import Logo from "../components/fragments/Logo";
import Grid from "@mui/material/Grid";

export default function Home() {
  return (
    <div>
      <Grid spacing={3}>
        <Grid item xs={12}>
          <Logo />
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </div>
  );
}
