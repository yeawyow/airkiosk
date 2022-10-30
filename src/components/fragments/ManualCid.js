import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";
import Logo from "./Logo";
import { Typography, Toolbar } from "@mui/material";
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
  const [submitButton, setsubmitButton] = useState(true);
  const [buttonNumber, setbuttonNumber] = useState(false);
  const [cid, setcid] = useState([]);
  const dispatch = useDispatch();
  const length = cid.length;
  const classes = useStyles();

  useEffect(() => {
    // Update the document title using the browser API
    if (length == 13) {
      setsubmitButton(false);
      setbuttonNumber(true);
    }
  });
  return (
    <div>
      <Grid
        spacing={3}
        container
        justifyContent={"center"}
        direction="column"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h5">
            กรุณาระบุหมายเลขบัตรประชาชน หรือ หมายเลข HN {length}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={12}>
          <TextField
            inputProps={{ style: { fontSize: 80 } }} // font size of input text
            fullWidth
            value={cid.join("")}
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
                  setcid([...cid, 1]);
                }}
                disabled={buttonNumber}
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
                  setcid([...cid, 2]);
                }}
                disabled={buttonNumber}
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
                  setcid([...cid, 3]);
                }}
                disabled={buttonNumber}
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
                  setcid([...cid, 4]);
                }}
                disabled={buttonNumber}
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
                  setcid([...cid, 5]);
                }}
                disabled={buttonNumber}
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
                  setcid([...cid, 6]);
                }}
                disabled={buttonNumber}
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
                  setcid([...cid, 7]);
                }}
                disabled={buttonNumber}
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
                  setcid([...cid, 8]);
                }}
                disabled={buttonNumber}
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
                  setcid([...cid, 9]);
                }}
                disabled={buttonNumber}
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
                  setcid([]);
                  setbuttonNumber(false);
                  setsubmitButton(true);
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
                  setcid([...cid, 0]);
                }}
                disabled={buttonNumber}
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
                disabled={submitButton}
                // onClick={() => submitArray(numbers.join(""))}
                //onClick={handlePatient}
                onClick={(e) => {
                  e.preventDefault();
                  /* dispatch(
                    manualCidAction.patientCheck(
                      {
                        ...manualCidReducer,
                      },
                      navigete
                    )
                  );*/
                }}
              >
                <span className={classes.buttonText2}>ตกลง</span>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}