import React from "react";
import Button from "@mui/material/Button";
import PatientInfo from "./fragments/PatientInfo";
import HnButton from "./fragments/HnButton";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function Home() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item>
            <PatientInfo />
          </Item>
        </Grid>

        <Grid item xs={6}>
          <Item>
            <HnButton />
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}
