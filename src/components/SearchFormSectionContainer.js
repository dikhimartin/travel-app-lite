import { useState } from "react";
import { Autocomplete, TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const SearchFormSectionContainer = () => {
  const [dateFieldDateTimePickerValue, setDateFieldDateTimePickerValue] =
    useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="md:mb-10 self-stretch [background:linear-gradient(100.3deg,_#114f8b,_#2a9ad7)] flex flex-col items-start justify-start text-left text-42xl text-primary-contrast font-baloo-bhai">
        <div className="self-stretch relative h-[362px] sm:h-[480px]">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] [background:linear-gradient(78.78deg,_#114f8b_5.2%,_#2a9ad7)]" />
          <img
            className="absolute h-full w-full top-[0.4px] right-[0px] bottom-[-0.4px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/banner-background1@2x.png"
          />
          <div className="absolute w-full top-[calc(50%_-_96.5px)] right-[0px] left-[0px] flex flex-col py-0 px-20 box-border items-center justify-center gap-[20px] md:pl-[30px] md:pr-[30px] md:box-border md:w-full md:top-[calc(44%_-_96.5px_-_0px)] sm:w-full sm:top-[calc(32%_-_96.5px_-_0px)]">
            <div className="self-stretch flex flex-col items-center justify-start">
              <div className="self-stretch relative leading-[67px] md:text-23xl md:leading-[48px] sm:text-12xl sm:leading-[40px]">
                Where are you off too?
              </div>
            </div>
            <div className="self-stretch rounded-3xs bg-primary-contrast flex flex-row p-5 items-start justify-start md:flex-col">
              <div className="flex-1 flex flex-row items-start justify-start md:w-full md:flex-[unset] md:self-stretch sm:flex-col">
                <div className="flex-1 flex flex-col p-[5px] items-center justify-center sm:w-full sm:flex-[unset] sm:self-stretch">
                  <Autocomplete
                    className="self-stretch"
                    disablePortal
                    options={[
                      "Singapore (SIN)",
                      "Sydney (SYD)",
                      "Siem Reap (REP)",
                      "Shanghai (PVG)Sanya (SYX)",
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
                    defaultValue="Singapore -  Changi (SIN)"
                    size="medium"
                  />
                </div>
                <div className="flex-1 flex flex-col p-[5px] items-center justify-center sm:w-full sm:flex-[unset] sm:self-stretch">
                  <Autocomplete
                    className="self-stretch"
                    sx={{ width: "100%" }}
                    disablePortal
                    options={[
                      "Clark (CRK)",
                      "Launceston (LST)",
                      "Kalibo (KLO)",
                      "Colombo CMB",
                      "Melbourne (AVV)",
                      "Los Angeles (LA)",
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
                    defaultValue="Los Angeles (LA)"
                    size="medium"
                  />
                </div>
                <div className="flex-1 flex flex-col p-[5px] items-center justify-center sm:w-full sm:flex-[unset] sm:self-stretch">
                  <div className="self-stretch">
                    <DatePicker
                      label="Date"
                      value={dateFieldDateTimePickerValue}
                      onChange={(newValue) => {
                        setDateFieldDateTimePickerValue(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          color="primary"
                          variant="outlined"
                          size="medium"
                          renderInput={{ placeholder: "01/05/2022" }}
                          helperText=""
                          fullWidth
                        />
                      )}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col p-[5px] items-center justify-center md:w-full md:text-left">
                <button className="cursor-pointer [border:none] p-0 bg-orange-200 rounded w-[164px] h-14 overflow-hidden shrink-0 flex flex-col items-center justify-center [transition:0.3s] hover:bg-darkorange md:mr-[auto] sm:w-[100%!important]">
                  <div className="relative text-mini tracking-[0.46px] leading-[26px] uppercase font-medium font-components-button-large text-primary-contrast text-center inline-block w-[146.98px]">
                    Search flights
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default SearchFormSectionContainer;
