import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import BasicSelect from "./components/BasicSelect";
import BasicTextFields from "./components/BasicTextFields";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import axios from "axios";
import "./index.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/400.css";

function App() {
  const [select1, setSelect1] = useState("");
  const [select2, setSelect2] = useState("");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const counter = (event, flag) => {
    if (flag === true) {
      setValue1(event);
      setValue2(((event / select1) * select2).toFixed(4));
    } else {
      setValue2(event);
      setValue1(((event / select2) * select1).toFixed(4));
    }
  };

  const valuesChange = () => {
    setValue1(value2);
    setValue2(value1);
    setSelect2(select1);
    setSelect1(select2);
  };

  const [allValues, setAllValues] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.currencyfreaks.com/latest?apikey=f69289ef015844e9b512d536114acc62"
      )
      .then(({ data }) => {
        setAllValues(data.rates);
      });
  }, []);

  return (
    <Container className="root" maxWidth="sm">
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={5}></Grid>

          <Grid item xs={7}>
            <div className="AppHeader">Конвертер валют</div>
          </Grid>

          <Grid container alignItems="center">
            <Grid item xs={5}>
              <div className="AppText">Вы переводите из</div>
            </Grid>

            <Grid item xs={3.2}>
              <BasicSelect
                items={allValues}
                setSelect={setSelect1}
                value={select1}
              />
            </Grid>

            <Grid item xs={0.5}>
              <div className="AppText2">в </div>
            </Grid>

            <Grid item xs={3}>
                <BasicSelect
                  items={allValues}
                  setSelect={setSelect2}
                  value={select2}
                />
            </Grid>

            <Grid item xs={5}></Grid>

            <Grid item xs={3.2}>
              <BasicTextFields 
                counter={counter} 
                value={value1} 
                flag={true} 
              />
            </Grid>

            <Grid item xs={0.5}>
              <div className="AppText2">=</div>
            </Grid>

            <Grid item xs={3}>
              <BasicTextFields 
                counter={counter} 
                value={value2} 
                flag={false} 
              />
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={5}></Grid>

            <Grid item xs={7}>
              <div className="App-bottom">
                <Button onClick={valuesChange}>поменять валюты местами</Button>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
