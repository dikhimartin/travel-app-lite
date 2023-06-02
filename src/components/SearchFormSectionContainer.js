import { useState, useCallback, useRef, useEffect } from "react";
import {
  FormControlLabel,
  Radio,
  TextField,
  RadioGroup,
  Alert
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useNavigate } from "react-router-dom";
import AirportAutosuggest from '../components/AirportAutosuggest';
import PassengerInput from '../components/PassengerInput';
// import Api from "../config/api"

const SearchFormSectionContainer = () => {
    // const api = new Api()
    const navigate = useNavigate();
    const [errorVisible, setErrorVisible] = useState(false);
    const [isReturnDateVisible, setReturnDateVisible] = useState(false);
    const [isTooltipVisible, setTooltipVisible] = useState(false);
    const tooltipRef = useRef(null);
  
    useEffect(() => {
      document.addEventListener('click', handleOutsideClick);
      return () => {
        document.removeEventListener('click', handleOutsideClick);
      };
    }, []);  
  
    // Form
    const [form, setForm] = useState({
      departure_airport_code: "",
      arrival_airport_code: "",
      departure_date: new Date().toISOString().split("T")[0],
      return_date: new Date().toISOString().split("T")[0],
      trip_type: "Oneway",
      travellers: [],
    });
  
    const validateForm = () => {
      const {
        departure_airport_code,
        arrival_airport_code,
        departure_date,
        return_date,
        trip_type,
        travellers,
      } = form;
  
      if (
        isEmpty(departure_airport_code) ||
        isEmpty(arrival_airport_code) ||
        isEmpty(departure_date) ||
        travellers.length === 0
      ) {
        showError();
        return false;
      }
  
      if (trip_type === "Roundtrip" && isEmpty(return_date)) {
        showError();
        return false;
      }
  
      return true;
    };
  
    const isEmpty = (value) => {
      return value === "" || value === undefined || value === null;
    };
  
    const showError = () => {
      setErrorVisible(true);
      setTimeout(() => {
        setErrorVisible(false);
      }, 3000); // Hide the error message after 3 seconds
    };
  
    const handleChange = useCallback((event) => {
      const { name, value } = event.target;
      if (name === "trip_type") {
        setReturnDateVisible(value === "Roundtrip");
      } 
      if (name === "departure_date" || name === "return_date") {
        if(value != null){
          // Handle date changes
          const formattedDate = value.toISOString().split("T")[0];
          setForm((prevForm) => ({
            ...prevForm,
            [name]: formattedDate,
          }));
        }
      } else {
        // Handle other input changes
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
      }
    }, []);
  
  
    // Select passenger
    const toggleTooltip = () => {
      setTooltipVisible(true);
    };
    
    const handleOutsideClick = (event) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
        setTooltipVisible(false);
      }
    };
    
    const handlePassengerChange = (passengerType, count) => {
      const updatedTravellers = form.travellers.filter((traveller) => traveller.passenger_type !== passengerType);
    
      for (let i = 0; i < count; i++) {
        updatedTravellers.push({
          first_name: "Unknown",
          is_guest: true,
          passenger_type: passengerType,
        });
      }
    
      setForm((prevForm) => ({
        ...prevForm,
        travellers: updatedTravellers,
      }));
    };
  
    const getPassengerCount = () => {
      const passengerCount = {};
    
      form.travellers.forEach((traveller) => {
        passengerCount[traveller.passenger_type] = (passengerCount[traveller.passenger_type] || 0) + 1;
      });
    
      let totalCount = "";
      Object.keys(passengerCount).forEach((passengerType, index) => {
        totalCount += `${passengerCount[passengerType]} ${passengerType}`;
    
        if (index !== Object.keys(passengerCount).length - 1) {
          totalCount += ", ";
        }
      });
    
      return totalCount;
    };
    
    // Search Flights
    const onSearchFlightsButtonClick = useCallback(() => {
      if (!validateForm()) {
        return;
      }
  
      const payload = {
        cabin_type_code: "Y",
        carriers: [
          {
            airline_code: "",
          },
        ],
        departing_arrival_from: "00:00",
        departing_arrival_to: "23:00",
        departing_departure_from: "00:00",
        departing_departure_to: "23:00",
        flights: [
          {
            departure_airport_code: form.departure_airport_code,
            departure_city_code: form.departure_airport_code,
            arrival_airport_code: form.arrival_airport_code,
            arrival_city_code: form.arrival_airport_code,
            departure_date: form.departure_date,
          },
        ],
        is_personal_trip: false,
        returning_arrival_from: "00:00",
        returning_arrival_to: "23:00",
        returning_departure_from: "00:00",
        returning_departure_to: "23:00",
        travellers: form.travellers,
        trip_type_code: form.trip_type,
        third_party: ["SQ"],
      };
  
      console.log(payload);
      navigate(`/results-page/`);
    }, [form, navigate]);
  

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className="absolute top-[0px] left-[0px] w-full h-[640px] flex flex-col py-0 px-[140px] box-border items-center justify-center gap-[43px] md:pl-[30px] md:pr-[30px] md:box-border">
          {errorVisible && (
            <Alert severity="error" onClose={() => setErrorVisible(false)} className="fixed top-5 left-1/2 transform -translate-x-1/2 w-full max-w-md mx-auto">
              Please fill in all required fields.
            </Alert>
          )}        
          <div className="self-stretch rounded-3xs bg-primary-contrast flex flex-col p-5 items-start justify-start gap-[4px] text-left text-xl text-darkslategray-300 font-components-button-large md:flex-col sm:mt-5">
            <div className="self-stretch overflow-hidden flex flex-row p-[5px] items-center justify-start gap-[5px] sm:flex-col sm:items-start">
              <b className="flex-1 relative tracking-[0.04em] uppercase sm:w-full sm:pb-2.5 sm:mb-1.5 sm:[border-bottom:1px] sm:[border-bottom-style:solid] sm:border-b-whitesmoke-0 sm:flex-[unset] sm:self-stretch">
                Search flights
              </b>
              <div className="flex flex-row items-center justify-start sm:w-full">
                <div className="relative w-[216.53px] h-[38px] sm:w-[100%!important]">
                  <RadioGroup
                      defaultValue="Oneway"
                      value={form.trip_type}
                      onChange={(event, value) => handleChange({ target: { name: "trip_type", value } })} >                 
                      <FormControlLabel 
                        value="Oneway"
                        className="absolute top-[0px] left-[0px]"
                        control={<Radio />} 
                        label="One-way" 
                      />
                      <FormControlLabel 
                        value="Roundtrip"
                        className="absolute top-[0px] left-[106px]"
                        control={<Radio />} 
                        label="Roundtrip" 
                      />
                  </RadioGroup>
                </div>
              </div>
            </div>
            
            <div className="self-stretch flex flex-row items-start justify-start text-xs text-gray-300 md:flex-col">
              <div className="flex-1 flex flex-row p-[5px] items-start justify-start gap-[10px] md:w-full md:flex-[unset] md:self-stretch sm:flex-col">
                <AirportAutosuggest
                    value={form.departure_airport_code}
                    onChange={(value) => handleChange({ target: { name: "departure_airport_code", value } })}
                    label="Departure"
                  />

                <AirportAutosuggest
                  value={form.arrival_airport_code}
                  onChange={(value) => handleChange({ target: { name: "arrival_airport_code", value } })}
                  label="Arrival"
                />
            
                <div className="self-stretch flex-1 sm:flex-[unset] sm:self-stretch">
                  <DatePicker
                    label="Departure Date"
                    value={form.departure_date ? new Date(form.departure_date) : null}
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
                {isReturnDateVisible && (
                  <div className="self-stretch flex-1 sm:flex-[unset] sm:self-stretch">
                    <DatePicker
                      label="Return Date"
                      value={form.return_date ? new Date(form.return_date) : null}
                      onChange={(return_date) =>
                        handleChange({ target: { name: "return_date", value: return_date } })
                      }
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
                )}

                <div onClick={toggleTooltip} className={`tooltip ${isTooltipVisible ? 'active' : ''}`} ref={tooltipRef}>
                  <TextField
                    label="Select Passenger"
                    InputProps={{
                      readOnly: true,
                    }}
                    value={`${getPassengerCount()} PAX`}
                  />
                  <div className="content">
                    <PassengerInput form={form} handlePassengerChange={handlePassengerChange} />
                    <i></i>
                  </div>
                </div>
              

              </div>
            </div>

            <div className="self-stretch flex flex-row items-start justify-start text-xs text-gray-300 md:flex-col">
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
    </>
  );
};





export default SearchFormSectionContainer;
