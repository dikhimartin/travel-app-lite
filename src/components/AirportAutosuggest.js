import React, { useState, useEffect } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import axios from 'axios';

const AirportAutosuggest = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      if(searchQuery){
        if (searchQuery.length > 0) {
          fetchSuggestions();
        } else {
          setSuggestions([]);
        }
      }
    }, 1000);

    return () => clearTimeout(delayTimer);
  }, [searchQuery]);

  const fetchSuggestions = async () => {
    try {
      // setLoading(true);
      const response = await axios.get(
        `https://api.api-ninjas.com/v1/airports?iata=${searchQuery}`,
        {
          headers: {
            'X-Api-Key': '8+f7J88ENto6mLMTkQmW+A==Qxlxc5nmAOi8Gf9t'
          }
        }
      );
      setSuggestions(response.data.map((airport) => `${airport.name} (${airport.iata})`));
    } catch (error) {
      console.error('Error fetching airport suggestions:', error);
      setSuggestions([]);
    } finally {
      // setLoading(false);
    }
  };

  const handleInputChange = (event, value) => {
    setSearchQuery(value);
  };

  return (
    <Autocomplete
      className="self-stretch flex-1 sm:flex-[unset] sm:self-stretch"
      disablePortal
      options={suggestions}
      renderInput={(params) => (
        <TextField
          {...params}
          color="primary"
          label="Departure"
          variant="outlined"
          placeholder=""
          helperText=""
          onChange={(event) => handleInputChange(event, event.target.value)}
        />
      )}
      value={searchQuery}
      onChange={(event, value) => setSearchQuery(value)}
      size="medium"
    />
  );
};

export default AirportAutosuggest;
