import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { Typography, Toolbar } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

export default function PatientInfo() {
  return (
    <div>
      <Grid
        spacing={3}
        container
        justifyContent={"center"}
        direction="column"
        alignItems="center"
      >
        <Grid item></Grid>
        <Grid item>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Word of the Day
              </Typography>

              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
           
          </Card>
          <Typography variant="h5">ข้อมูลส่วนตัว</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
