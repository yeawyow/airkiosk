import React, { useState } from "react";
import MQTTConnect from "../components/MQTT_Connector/Connection";
import Grid from "@mui/material/Grid";

export default function IdCard() {
  return (
    <div>
      <Grid
        container
        justifyContent={"center"}
        direction="column"
        alignItems="center"
      >
        <Grid item xs={12}>
          <img src="././images/idcard.png" width="500" />
        </Grid>
      </Grid>
      <MQTTConnect />
    </div>
  );
}
