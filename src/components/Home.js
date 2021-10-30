import React from "react";
import Button from "@mui/material/Button";
import PatientInfo from "./fragments/PatientInfo";
import HnButton from "./fragments/HnButton";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@mui/material/Paper";

export default function Home() {
  return (
    <div>
      <Grid spacing={3}>
        <Grid item xs={12}>
          <PatientInfo />
        </Grid>
      </Grid>
    </div>
  );
}
