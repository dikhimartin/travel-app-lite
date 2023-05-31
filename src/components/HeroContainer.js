import { useState, useCallback, useEffect } from "react";
import {
  FormControlLabel,
  Radio,
  Autocomplete,
  TextField,
  RadioGroup,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useNavigate } from "react-router-dom";
import Api from "../config/api"


const HeroContainer = () => {
  const navigate = useNavigate();
  const api = new Api()

  const [form, setForm] = useState({
    departure: "Singapore (SIN)",
    arrival: "Singapore (SIN)",
    departure_date: new Date(),
    trip_type: "one-way",
  });

  const onSearchFlightsButtonClick = useCallback(() => {
    const raw = {
      departure: form.departure,
      arrival: form.arrival,
      departure_date: form.departure_date,
      trip_type: form.trip_type,
    };

    const { data } =  api.get(`/integration/city/airport`)
    console.log(data);
    
    // axios.get('https://api.example.com/data')
    // .then(response => {
    //   // Handle the response data
    //   console.log(response.data);
    // })
    // .catch(error => {
    //   // Handle any errors
    //   console.error(error);
    // });

    console.log(JSON.stringify(raw));
    // navigate(`/results-page/`);
  }, [form, navigate]);

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="self-stretch flex flex-col items-center justify-start text-center text-42xl text-primary-contrast font-baloo-bhai">
        <div className="self-stretch relative h-[640px]">
          <div className="absolute w-full top-[0px] right-[0px] left-[0px] [background:linear-gradient(78.78deg,_#114f8b_5.2%,_#2a9ad7)] h-[639.91px]" />
          <img
            className="absolute w-full top-[0.4px] right-[0px] left-[0px] max-w-full overflow-hidden h-[640px] object-cover"
            alt=""
            src="/banner--background1@2x.png"
          />
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] w-full h-[640px] flex flex-col py-0 px-[140px] box-border items-center justify-center gap-[43px] md:pl-[30px] md:pr-[30px] md:box-border">
        <div className="self-stretch rounded-3xs bg-primary-contrast flex flex-col p-5 items-start justify-start gap-[4px] text-left text-xl text-darkslategray-300 font-components-button-large md:flex-col sm:mt-5">
          <div className="self-stretch overflow-hidden flex flex-row p-[5px] items-center justify-start gap-[5px] sm:flex-col sm:items-start">
            <b className="flex-1 relative tracking-[0.04em] uppercase sm:w-full sm:pb-2.5 sm:mb-1.5 sm:[border-bottom:1px] sm:[border-bottom-style:solid] sm:border-b-whitesmoke-0 sm:flex-[unset] sm:self-stretch">
              Search flights
            </b>
            <div className="flex flex-row items-center justify-start sm:w-full">
              <div className="relative w-[216.53px] h-[38px] sm:w-[100%!important]">
                <RadioGroup
                    defaultValue="one-way"
                    value={form.trip_type}
                    onChange={(event, value) => handleChange({ target: { name: "trip_type", value } })} >                 
                  <FormControlLabel 
                    value="return"
                    className="absolute top-[0px] left-[0px]"
                    control={<Radio />} 
                    label="Return" 
                    />
                  <FormControlLabel 
                    value="one-way"
                    className="absolute top-[0px] left-[106px]"
                    control={<Radio />} 
                    label="One-way" 
                  />
                </RadioGroup>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start text-xs text-gray-300 md:flex-col">
            <div className="flex-1 flex flex-row p-[5px] items-start justify-start gap-[10px] md:w-full md:flex-[unset] md:self-stretch sm:flex-col">
            <Autocomplete
              className="self-stretch flex-1 sm:flex-[unset] sm:self-stretch"
              disablePortal
              options={[
                "Singapore (SIN)",
                "Sydney (SYD)",
                "Siem Reap (REP)",
                "Shanghai (PVG)",
                "Sanya (SYX)",
              ]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  color="primary"
                  label="Departure"
                  variant="outlined"
                  placeholder=""
                  helperText=""
                />
              )}
              value={form.departure}
              onChange={(event, value) => handleChange({ target: { name: "departure", value } })}
              size="medium"
            />
            <Autocomplete
              className="self-stretch flex-1 sm:flex-[unset] sm:self-stretch"
              disablePortal
              options={[
                "Singapore (SIN)",
                "Sydney (SYD)",
                "Siem Reap (REP)",
                "Shanghai (PVG)",
                "Sanya (SYX)",
              ]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  color="primary"
                  label="Arrival"
                  variant="outlined"
                  placeholder=""
                  helperText=""
                />
              )}
              value={form.arrival}
              onChange={(event, value) => handleChange({ target: { name: "arrival", value } })}              
              size="medium"
            />
              <div className="self-stretch flex-1 sm:flex-[unset] sm:self-stretch">
                <DatePicker
                  label="Departure Date"
                  value={form.departure_date}
                  onChange={(departure_date) => handleChange({ target: { name: "departure_date", value: departure_date } })}                  
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      color="primary"
                      variant="outlined"
                      size="medium"
                      helperText=""
                      fullWidth
                    />
                  )}
                />
              </div>
            </div>
            <div className="flex flex-col p-[5px] items-center justify-center text-center text-mini text-primary-contrast md:w-full md:text-left">
              <div
                className="rounded bg-orange-200 w-[164px] h-14 overflow-hidden shrink-0 flex flex-col items-center justify-center [transition:0.3s] cursor-pointer hover:bg-darkorange md:mr-[auto] sm:w-[100%!important]"
                onClick={onSearchFlightsButtonClick}
              >
                <div className="relative tracking-[0.46px] leading-[26px] uppercase font-medium inline-block w-[146.98px]">
                  Search flights
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default HeroContainer;
