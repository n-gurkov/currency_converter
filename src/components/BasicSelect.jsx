import * as React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import "../index.css";

export default function CurrencySelect(props) {
  const handleChange = (event) => {
    props.setSelect(event.target.value);
  };

  return (
    <Box>
      <FormControl>
        <select
          className="CurrencySelect"
          onChange={handleChange}
          value={props.value}
        >
          {Object.keys(props.items).map((key) => (
            <option key={key} value={props.items[key]}>
              {key}
            </option>
          ))}
        </select>
      </FormControl>
    </Box>
  );
}
