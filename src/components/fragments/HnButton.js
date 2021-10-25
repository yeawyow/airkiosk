import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function HnButton() {
  const [numbers, setNumber] = React.useState([]);
  console.log(numbers);

  const onAddArray = (event) => {
    setNumber((numbers) => [...numbers, event.target.value]);
  };

  const onClearArray = () => {
    setNumber((numbers) => []);
  };
  console.log(numbers.join(""));
  return (
    <Box sx={{ "& button": { m: 1 } }}>
      <FormControl variant="standard" fullWidth sx={{ m: 1 }}>
        <TextField
          mask="9999-9999-9999-9999"
          id="numbers"
          value={numbers.join("")}
          disabled
          label="หมายเลขบัตรประชาชน"
        />
      </FormControl>
      <div>
        <Button
          variant="outlined"
          size="large"
          type="button"
          onClick={onAddArray}
          value={7}
          // disabled={values.value}
        >
          7
        </Button>
        <Button variant="outlined" size="large" onClick={onAddArray} value={8}>
          8
        </Button>
        <Button variant="outlined" size="large" onClick={onAddArray} value={9}>
          9
        </Button>
        <Button variant="outlined" size="large" onClick={onClearArray}>
          ลบ
        </Button>
      </div>
      <div>
        <Button variant="outlined" size="large" onClick={onAddArray} value={4}>
          4
        </Button>
        <Button variant="outlined" size="large" onClick={onAddArray} value={5}>
          5
        </Button>
        <Button variant="outlined" size="large" onClick={onAddArray} value={6}>
          6
        </Button>
        <Button variant="outlined" size="large" onClick={onClearArray}>
          ลบ
        </Button>
      </div>
      <div>
        <Button variant="outlined" size="large" onClick={onAddArray} value={1}>
          1
        </Button>
        <Button variant="outlined" size="large" onClick={onAddArray} value={2}>
          2
        </Button>
        <Button variant="outlined" size="large" onClick={onAddArray} value={3}>
          3
        </Button>
        <Button variant="outlined" size="large" onClick={onAddArray} value={0}>
          0
        </Button>
      </div>
    </Box>
  );
}
