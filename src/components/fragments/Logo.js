import React from "react";
import Grid from "@mui/material/Grid";
import logo from "../../images/logomoph.png";
import { Typography } from "@mui/material";

export default function Logo() {
  return (
    <div>
      <Grid
        container
        justifyContent={"center"}
        direction="column"
        alignItems="center"
      >
        <Grid item>
          <img src={logo} width={"200"} />
        </Grid>
        <Grid item>
          <Typography variant="h2">โรงพยาบาลอากาศอำนวย</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
