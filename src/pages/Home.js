import React, { useState } from "react";
import Button from "@mui/material/Button";
import PatientInfo from "../components/fragments/PatientInfo";
import Logo from "../components/fragments/Logo";
import HnButton from "../components/fragments/HnButton";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@mui/material/Paper";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Display from "../components/fragments/Display";

export default function Home() {
  const [calculation, setSalculation] = useState([]);
  const handleClick = (e) => {
    const value = e.target.value;
    console.log(value);
    setSalculation({ calculation: [...calculation, value] }, () => {
      // props.triggerCalculation(calculation.join(""));
    });
  };

  return (
    <div>
      <Grid spacing={3}>
        <Grid item xs={12}>
          <Logo />
        </Grid>
        <Grid item xs={12}>
          <PatientInfo />

          <Button
            variant="contained"
            onClick={handleClick}
            name="C"
            value="clear"
          >
            d
          </Button>
          <Button
            variant="contained"
            onClick={handleClick}
            name="+/-"
            value="posNeg"
          />
          <Button onClick={handleClick} name="%" value="perc" />
          <Button onClick={handleClick} name="/" value="/" />

          <Button onClick={handleClick} name="7" value="7">
            7
          </Button>
          <Button onClick={handleClick} name="8" value="8" />
          <Button onClick={handleClick} name="9" value="9" />
          <Button onClick={handleClick} name="x" value="*" />

          <Button onClick={handleClick} name="4" value="4" />
          <Button onClick={handleClick} name="5" value="5" />
          <Button onClick={handleClick} name="6" value="6" />
          <Button onClick={handleClick} name="-" value="-" />

          <Button onClick={handleClick} name="3" value="3" />
          <Button onClick={handleClick} name="2" value="2" />
          <Button onClick={handleClick} name="1" value="1" />
          <Button onClick={handleClick} name="+" value="+" />

          <Button onClick={handleClick} name="0" value="0" />
          <Button onClick={handleClick} name="." value="." />
          <Button onClick={handleClick} name="&#8592;" value="back" />
          <Button onClick={handleClick} name="=" value="=" />
        </Grid>
      </Grid>
      <Display calculation={calculation} />
    </div>
  );
}
