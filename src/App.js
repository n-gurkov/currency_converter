import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import CurrencySelect from "./components/BasicSelect";
import BasicTextFields from "./components/BasicTextFields";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import axios from "axios";
import "./index.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/400.css";

function App() {
  const [currencyFrom, setcurrencyFrom] = useState(1);
  const [currencyTo, setcurrencyTo] = useState(1);
  const [valueFrom, setvalueFrom] = useState("");
  const [valueTo, setvalueTo] = useState("");

  const counter = (event, flag) => {
    if (flag === true) {
      setvalueFrom(event);
      setvalueTo(((event / currencyFrom) * currencyTo).toFixed(4)-0);
    } else {
      setvalueTo(event);
      setvalueFrom(((event / currencyTo) * currencyFrom).toFixed(4)-0);
    }
  };

  const valuesChange = () => {
    setvalueFrom(valueTo);
    setvalueTo(valueFrom);
    setcurrencyTo(currencyFrom);
    setcurrencyFrom(currencyTo);
  };

  const [allValues, setAllValues] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}${process.env.REACT_APP_API}`)
      .then(({ data }) => {
        setAllValues(data.rates);
      })
      .catch(() => {
        return [];
      });
  }, []);

  return (
    <Container className="root" maxWidth="sm">
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={5}></Grid>

          <Grid item xs={7}>
            <div className="Header">Конвертер валют</div>
          </Grid>

          <Grid container alignItems="center" textAlign="right">
            <Grid item xs={4.5}>
              <div>Вы переводите из</div>
            </Grid>
            <Grid item xs={0.5}></Grid>
            <Grid item xs={3.2}>
              <CurrencySelect
                items={allValues}
                setSelect={setcurrencyFrom}
                value={currencyFrom}
              />
            </Grid>

            <Grid item xs={0.5}>
              <div className="MainText">в </div>
            </Grid>

            <Grid item xs={3}>
              <CurrencySelect
                items={allValues}
                setSelect={setcurrencyTo}
                value={currencyTo}
              />
            </Grid>

            <Grid item xs={5}></Grid>

            <Grid item xs={3.2}>
              <BasicTextFields
                counter={counter}
                value={valueFrom}
                flag={true}
              />
            </Grid>

            <Grid item xs={0.5}>
              <div className="MainText">=</div>
            </Grid>

            <Grid item xs={3}>
              <BasicTextFields counter={counter} value={valueTo} flag={false} />
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={5}></Grid>

            <Grid item xs={7}>
              <div className="SwapButton">
                <button className="SwapButton" onClick={valuesChange}>
                  поменять валюты местами
                </button>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
