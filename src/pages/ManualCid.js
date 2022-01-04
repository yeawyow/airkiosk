import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";
import Logo from "../components/fragments/Logo";
import { Typography, Toolbar } from "@mui/material";
import Notification from "../components/fragments/Notification";
import * as manualCidAction from "../actions/manualCid.action";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    minWidth: 200,
    // minHeight: 80,
  },
  buttonText: {
    fontSize: 80,
  },
  buttonText2: {
    fontSize: 50,
  },
}));

export default function ManualCid() {
  let navigete = useNavigate();

  const dispatch = useDispatch();

  const manualCidReducer = useSelector(
    ({ manualCidReducer }) => manualCidReducer
  );
  const notificationReducer = useSelector(
    ({ notificationReducer }) => notificationReducer
  );
  const classes = useStyles();

  return (
    <div>
      <Grid
        spacing={3}
        container
        justifyContent={"center"}
        direction="column"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Logo />
        </Grid>
        <Grid item>
          <Typography variant="h5">
            กรุณาระบุหมายเลขบัตรประชาชน หรือ หมายเลข HN
            {manualCidReducer.display}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={12}>
          <TextField
            inputProps={{ style: { fontSize: 80 } }} // font size of input text
            fullWidth
            value={manualCidReducer.display.join("")}
            // value={cid}
            //disabled
            label="หมายเลขบัตรประชาชน"
          />
        </Grid>
      </Grid>
      <Toolbar />
      <div className={classes.root}>
        <Box
          sx={{
            width: 800,

            // backgroundColor: "primary.dark",
          }}
        >
          <Grid
            container
            display="flex"
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={9}></Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(manualCidAction.btnPress(1));
                }}
              >
                <span className={classes.buttonText}>1</span>
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(manualCidAction.btnPress(2));
                }}
              >
                <span className={classes.buttonText}>2</span>
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(manualCidAction.btnPress(3));
                }}
              >
                <span className={classes.buttonText}>3</span>
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(manualCidAction.btnPress(4));
                }}
              >
                <span className={classes.buttonText}>4</span>
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(manualCidAction.btnPress(5));
                }}
              >
                <span className={classes.buttonText}>5</span>
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(manualCidAction.btnPress(6));
                }}
              >
                <span className={classes.buttonText}>6</span>
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(manualCidAction.btnPress(7));
                }}
              >
                <span className={classes.buttonText}>7</span>
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(manualCidAction.btnPress(8));
                }}
              >
                <span className={classes.buttonText}>8</span>
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                // onClick={() => onAddArray("9")}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(manualCidAction.btnPress(9));
                }}
              >
                <span className={classes.buttonText}>9</span>
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                color="warning"
                className={classes.button}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(manualCidAction.clearNumber());
                }}
              >
                <span className={classes.buttonText2}>แก้ไข</span>
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                // onClick={() => onAddArray("0")}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(manualCidAction.btnPress(0));
                }}
              >
                <span className={classes.buttonText}>0</span>
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                //disabled={buttonOk}
                variant="contained"
                color="success"
                className={classes.button}
                // onClick={() => submitArray(numbers.join(""))}
                //onClick={handlePatient}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(
                    manualCidAction.patientCheck(
                      {
                        ...manualCidReducer,
                      },
                      navigete
                    )
                  );
                }}
              >
                <span className={classes.buttonText2}>ตกลง</span>
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Notification notify={notificationReducer} />
      </div>
    </div>
  );
}
