import React, { useEffect } from "react";
//import Card from "@mui/material/Card";
//import CardHeader from "@mui/material/CardHeader";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Unstable_Grid2";
import { useDispatch, useSelector } from "react-redux";
import { checkPatient } from "../app/patientSlice";
import { useNavigate } from "react-router-dom";
import { useGetAllAttractionsQuery } from "../app/services/attraction";
import Swal from "sweetalert2";

export default function Patient() {
  let navigate = useNavigate();
  const patientData = useSelector((state) => state.patient?.patientData);
  //const cid = useSelector((state) => state.mqttcon?.cardId?.data?.cid);
  const { data, error, isLoading, isSuccess, isFetching } =
    useGetAllAttractionsQuery(patientData.cid);
  const dispatch = useDispatch();
  console.log(data);

  // const { cid, Hn, fname } = data;
  // console.log(cid, Hn);
  /*if (patientData?.cid) {
    // dispatch();
  } else {
    navigate("/");
  }*/

  return (
    <div>
      {patientData.cid ? (
        error ? (
          <>error</>
        ) : isLoading ? (
          <>loading</>
        ) : data ? (
          data?.map((patient) => {
            return (
              <>
                <Container
                  component="main"
                  maxWidth="lg"
                  sx={{ mb: 4 }}
                  key={patient.cid}
                >
                  <Paper
                    variant="outlined"
                    sx={{ my: { xs: 3, md: 3 }, p: { xs: 2, md: 3 } }}
                  >
                    <Stack direction="row" alignItems="center" gap={1}>
                      <Typography variant="h5">HN:</Typography>
                      <Typography variant="h5">{patient.Hn}</Typography>
                    </Stack>

                    <Grid container spacing={2}>
                      <Grid item xs={2} sm={3}>
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
                      <Grid item sm={8}>
                        <Box>
                          <Stack direction="row" alignItems="center" gap={1}>
                            <Typography variant="h5">id:</Typography>
                            <Typography variant="h5">{patient.cid}</Typography>
                          </Stack>
                        </Box>
                        <Box>
                          <Stack direction="row" alignItems="center" gap={1}>
                            <Typography variant="h3">
                              {patient.fname} {patient.Lname}
                            </Typography>
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
                            <Typography variant="h5">{}</Typography>
                          </Stack>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <Box>
                          <Stack direction="row" alignItems="center" gap={1}>
                            <Typography variant="h5">อายุ:</Typography>
                            <Typography variant="h5">{}</Typography>
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
              </>
            );
          })
        ) : (
          Swal.fire({
            title: "Error!",
            text: "Do you want to continue",
            icon: "error",
            confirmButtonText: "Cool",
          })
        )
      ) : (
        navigate("/")
      )}
    </div>
  );
}
