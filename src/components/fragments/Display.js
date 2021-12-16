import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

const Display = (props) => {
  return (
    <div className="display">
      <div className="display__current"></div>
      <Grid item xs={12} lg={12}>
        <TextField
          inputProps={{ style: { fontSize: 80 } }} // font size of input text
          fullWidth
          // value={numbers.hn.join("")}
          value={props.cid}
          //disabled
          label="หมายเลขบัตรประชาชน"
        />
      </Grid>
    </div>
  );
};

export default Display;
