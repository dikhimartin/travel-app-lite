import { useState, useCallback } from "react";
import {
  FormControlLabel,
  Radio,
  Autocomplete,
  TextField,
  Icon,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useNavigate } from "react-router-dom";

const HeroContainer = () => {
  const [
    selectOutlinedDateTimePickerValue,
    setSelectOutlinedDateTimePickerValue,
  ] = useState(null);
  const navigate = useNavigate();

  const onSearchTextClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  const onSearchFlightsButtonClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="self-stretch flex flex-col items-center justify-start text-center text-42xl text-primary-contrast font-baloo-bhai">
        <header className="self-stretch bg-primary-contrast h-[77px] flex flex-row py-[22px] px-20 box-border items-center justify-center sticky w-full top-[0] [background:white] text-left text-sm text-darkslategray-200 font-components-button-large lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
          <div className="flex-1 flex flex-row items-center justify-between">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[174px] h-[33px] overflow-hidden shrink-0">
              <img
                className="absolute h-[96.97%] w-[99.82%] top-[1.59%] right-[0.18%] bottom-[1.44%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/symbols.svg"
              />
            </button>
            <div className="flex flex-row items-center justify-end gap-[36px] sm:flex">
              <div className="flex flex-row items-center justify-end gap-[30px] md:hidden">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm font-components-button-large text-cornflowerblue-200 text-left inline-block">
                  Explore
                </button>
                <div
                  className="relative cursor-pointer"
                  onClick={onSearchTextClick}
                >
                  Search
                </div>
               
              </div>
              <div className="flex flex-row items-center justify-center gap-[12px]">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0 hidden md:flex"
                  alt=""
                  src="/notification2.svg"
                />
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/notification3.svg"
                />
                <img
                  className="rounded-19xl w-9 h-9 object-cover"
                  alt=""
                  src="/top_avatar1@2x.png"
                />
              </div>
            </div>
          </div>
        </header>
        <div className="self-stretch relative h-[640px]">
          <div className="absolute w-full top-[0px] right-[0px] left-[0px] [background:linear-gradient(78.78deg,_#114f8b_5.2%,_#2a9ad7)] h-[639.91px]" />
          <img
            className="absolute w-full top-[0.4px] right-[0px] left-[0px] max-w-full overflow-hidden h-[640px] object-cover"
            alt=""
            src="/banner--background1@2x.png"
          />
          <div className="absolute top-[0px] left-[0px] w-full h-[640px] flex flex-col py-0 px-[140px] box-border items-center justify-center gap-[43px] md:pl-[30px] md:pr-[30px] md:box-border">
            <div className="self-stretch flex flex-col items-center justify-start gap-[5px]">
              <div className="self-stretch relative leading-[67px] sm:text-23xl sm:leading-[48px]">{`Let’s explore & travel the world`}</div>
              <div className="self-stretch relative text-5xl leading-[32px] font-components-button-large">
                Find the best destinations and the most popular stays!
              </div>
            </div>
            <div className="self-stretch rounded-3xs bg-primary-contrast flex flex-col p-5 items-start justify-start gap-[4px] text-left text-xl text-darkslategray-300 font-components-button-large md:flex-col sm:mt-5">
              <div className="self-stretch overflow-hidden flex flex-row p-[5px] items-center justify-start gap-[5px] sm:flex-col sm:items-start">
                <b className="flex-1 relative tracking-[0.04em] uppercase sm:w-full sm:pb-2.5 sm:mb-1.5 sm:[border-bottom:1px] sm:[border-bottom-style:solid] sm:border-b-whitesmoke-0 sm:flex-[unset] sm:self-stretch">
                  Search flights
                </b>
                <div className="flex flex-row items-center justify-start sm:w-full">
                  <div className="relative w-[216.53px] h-[38px] sm:w-[100%!important]">
                    <FormControlLabel
                      className="absolute top-[0px] left-[0px]"
                      label="Return"
                      labelPlacement="end"
                      control={<Radio size="medium" />}
                    />
                    <FormControlLabel
                      className="absolute top-[0px] left-[106px]"
                      label="One-way"
                      labelPlacement="end"
                      control={<Radio color="primary" checked size="medium" />}
                    />
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
                    defaultValue="Singapore -  Changi (SIN)"
                    size="medium"
                  />
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start sm:flex-[unset] sm:self-stretch">
                    <div className="self-stretch rounded box-border h-14 flex flex-col py-0 px-3 items-start justify-start border-[1px] border-solid border-gray-500">
                      <div className="bg-primary-contrast h-0.5 flex flex-row py-0 px-1 box-border items-center justify-start">
                        <div className="relative tracking-[0.15px] leading-[12px]">
                          Arrival
                        </div>
                      </div>
                      <div className="self-stretch overflow-hidden flex flex-row py-[15px] px-0 items-center justify-start gap-[8px] text-center text-dimgray-200">
                        <div className="hidden flex-row items-start justify-start gap-[8px]">
                          <div className="flex flex-col items-start justify-start">
                            <div className="rounded-2xl bg-gainsboro-100 flex flex-row p-1 items-center justify-start">
                              <div className="rounded-45xl bg-silver w-6 h-6 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                                <div className="self-stretch flex-1 relative tracking-[0.4px] leading-[166%] flex items-center justify-center">
                                  F
                                </div>
                              </div>
                              <div className="flex flex-col py-[3px] px-1.5 items-start justify-start text-left text-smi text-gray-400">
                                <div className="relative tracking-[0.16px] leading-[18px]">
                                  Chip
                                </div>
                              </div>
                              <img
                                className="relative w-6 h-6 overflow-hidden shrink-0"
                                alt=""
                                src="/cancel2.svg"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start">
                            <div className="rounded-2xl bg-gainsboro-100 flex flex-row p-1 items-center justify-start">
                              <div className="rounded-45xl bg-silver w-6 h-6 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                                <div className="self-stretch flex-1 relative tracking-[0.4px] leading-[166%] flex items-center justify-center">
                                  F
                                </div>
                              </div>
                              <div className="flex flex-col py-[3px] px-1.5 items-start justify-start text-left text-smi text-gray-400">
                                <div className="relative tracking-[0.16px] leading-[18px]">
                                  Chip
                                </div>
                              </div>
                              <img
                                className="relative w-6 h-6 overflow-hidden shrink-0"
                                alt=""
                                src="/cancel2.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 relative text-base tracking-[0.15px] leading-[24px] text-gray-400 text-left">
                          Los Angeles (LA)
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex-1 sm:flex-[unset] sm:self-stretch">
                    <DatePicker
                      label="Date"
                      value={selectOutlinedDateTimePickerValue}
                      onChange={(newValue) => {
                        setSelectOutlinedDateTimePickerValue(newValue);
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
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default HeroContainer;
