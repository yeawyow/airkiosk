import React, { useEffect } from "react";
//import Card from "@mui/material/Card";
//import CardHeader from "@mui/material/CardHeader";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Unstable_Grid2";
import { useDispatch, useSelector } from "react-redux";
import MQTTConnect from "../components/MQTT_Connector/Connection";
import PersonIcon from "@mui/icons-material/Person";
export default function Patient() {
  const patient = useSelector((state) => state.patient?.patientData);
  const cid = useSelector((state) => state.mqttcon?.cardId?.data?.cid);

  const dispatch = useDispatch();
  useEffect(() => {});
  return (
    <div>
      <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 3 }, p: { xs: 2, md: 3 } }}
        >
          <Typography variant="h6" gutterBottom>
            ข้อมูลส่วนตัว
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={2} sm={3}>
              {" "}
              <Box
                sx={{
                  display: "flex",
                  "& > :not(style)": {
                    // m: 1,
                    width: 200,
                    height: 200,
                  },
                }}
              >
                <Paper variant="outlined" />
              </Box>
            </Grid>
            <Grid item sm={5}>
              <Box>
                <Stack direction="row" alignItems="center" gap={1}>
                  <Typography variant="h5">ชื่อ-สกุล:</Typography>
                  <Typography variant="h5">{patient.fullname}</Typography>
                </Stack>
              </Box>
              <Box>
                <Stack direction="row" alignItems="center" gap={1}>
                  <Typography variant="h5">หมายเลขบัตร:</Typography>
                  <Typography variant="h5">{patient.cid}</Typography>
                </Stack>
              </Box>
              <Box>
                <Stack direction="row" alignItems="center" gap={1}>
                  <Typography variant="h5">สิทธิหลัก:</Typography>
                  <Typography variant="h5">{}</Typography>
                </Stack>
              </Box>
              <Box>
                <Stack direction="row" alignItems="center" gap={1}>
                  <Typography variant="h5">สิทธิรอง:</Typography>
                  <Typography variant="h5">{}</Typography>
                </Stack>
              </Box>
              <Box>
                <Stack direction="row" alignItems="center" gap={1}>
                  <Typography variant="h5">เบอร์โทรศัพท์:</Typography>
                  <Typography variant="h5">{patient.tell}</Typography>
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box>
                <Stack direction="row" alignItems="center" gap={1}>
                  <Typography variant="h5">HN:</Typography>
                  <Typography variant="h5">{patient.hn}</Typography>
                </Stack>
              </Box>
              <Box>
                <Stack direction="row" alignItems="center" gap={1}>
                  <Typography variant="h5">อายุ:</Typography>
                  <Typography variant="h5">{patient.age_y}</Typography>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
      <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 3 }, p: { xs: 2, md: 3 } }}
        >
          <Typography variant="h6" gutterBottom>
            เข้ารับบริการ
          </Typography>
          <Grid container spacing={2}>
            <Grid item sm={6}></Grid>
            <Grid item sm={6}></Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}
