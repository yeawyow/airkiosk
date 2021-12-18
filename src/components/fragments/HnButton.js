import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";
import Logo from "../fragments/Logo";
import { Typography, Toolbar } from "@mui/material";
import { httpClient } from "../../utils/HttpClient";
import { server } from "./../../Constants";
import Notification from "./Notification";

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

export default function HnButton() {
  const classes = useStyles();
  const [numbers, setNumber] = useState([]);
  const [buttonok, setButtonok] = useState(true);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: null,
    type: null,
  });

  async function onAddArray(vNumber) {
    //setNumber({ hn: [...numbers.hn, vNumber] });
    await setNumber((numbers) => [...numbers, vNumber]);
    if (numbers.join("").length > 11) {
      setButtonok(false);

      //console.log(numbers.join("").length);
    }
    //prevState => [...prevState, obj1]
    //  console.log(numbers);
  }
  async function submitArray(cid) {
    try {
      let result = await httpClient.post(`${server.PATIENT_URL}/${cid}`);
      // console.log(JSON.stringify(result.data));
      setButtonok(true);
      if (result.data.msg == "notfound") {
        // console.log("nok");
        setNotify({
          isOpen: true,
          message: "ไม่พบข้อมูลของท่านในระบบ กรุณาติดต่อห้องบัตร",
          type: "warning",
        });
      } else {
        console.log(result.data);
      }
    } catch (error) {
      alert(JSON.stringify(error));
    }

    await setNumber((numbers) => (numbers = []));
  }
  const onClearArray = () => {
    setNumber((numbers) => (numbers = []));
  };
  //console.log(numbers.join(""));

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
          </Typography>
        </Grid>
        <Grid item xs={12} lg={12}>
          <TextField
            inputProps={{ style: { fontSize: 80 } }} // font size of input text
            fullWidth
            value={numbers.join("")}
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
                onClick={() => onAddArray("1")}
              >
                <span className={classes.buttonText}>1</span>
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => onAddArray("2")}
              >
                <span className={classes.buttonText}>2</span>
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => onAddArray("3")}
              >
                <span className={classes.buttonText}>3</span>
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => onAddArray("4")}
              >
                <span className={classes.buttonText}>4</span>
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => onAddArray("5")}
              >
                <span className={classes.buttonText}>5</span>
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => onAddArray("6")}
              >
                <span className={classes.buttonText}>6</span>
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => onAddArray("7")}
              >
                <span className={classes.buttonText}>7</span>
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => onAddArray("8")}
              >
                <span className={classes.buttonText}>8</span>
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => onAddArray("9")}
              >
                <span className={classes.buttonText}>9</span>
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                color="warning"
                className={classes.button}
                onClick={() => onClearArray()}
              >
                <span className={classes.buttonText2}>แก้ไข</span>
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => onAddArray("0")}
              >
                <span className={classes.buttonText}>0</span>
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                disabled={buttonok}
                variant="contained"
                color="success"
                className={classes.button}
                onClick={() => submitArray(numbers.join(""))}
              >
                <span className={classes.buttonText2}>ตกลง</span>
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Notification notify={notify} setNotify={setNotify} />
      </div>
    </div>
  );
}
