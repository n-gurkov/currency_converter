import React from "react";
import Box from "@mui/material/Box";
import "../index.css";

export default function BasicTextFields(props) {
  const handleChange = (event) => {
    props.counter(event.target.value, props.flag);
  };

  return (
    <Box>
      <input  className = "CurrencyInput" onChange={handleChange} value={props.value} />
    </Box>
  );
}