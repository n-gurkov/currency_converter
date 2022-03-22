import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "../index.css";

export default function BasicSelect(props) {
  const handleChange = (event) => {
    props.setSelect(event.target.value);
  };

  return (
    <Box>
      <FormControl>
        <Select
          className="App-inputs"
          onChange={handleChange}
          value={props.value}
        >
          {Object.keys(props.items).map((key) => (
            <MenuItem key={key} value={props.items[key]}>
              {key}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
