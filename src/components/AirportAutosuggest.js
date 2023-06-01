import React, { useState, useEffect } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import axios from 'axios';

const AirportAutosuggest = ({ value, onChange, label }) => {
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
    }, 0);

    return () => clearTimeout(delayTimer);
  }, [searchQuery]);

  const fetchSuggestions = async () => {
    try {
      const response = await axios.post(
        'http://localhost:7700/indexes/airport/search',
        {
          q: searchQuery,
          facets: [],
          attributesToHighlight: ['*'],
          highlightPreTag: '<ais-highlight-0000000000>',
          highlightPostTag: '</ais-highlight-0000000000>',
          limit: 21,
          offset: 0
        }
      );
      setSuggestions(response.data.hits.map((hit) => `${hit.airportCode} - ${hit.airportName} (${hit.cityName}, ${hit.countryName})`));
    } catch (error) {
      console.error('Error fetching airport suggestions:', error);
      setSuggestions([]);
    }
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
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
          label={label}
          variant="outlined"
          placeholder=""
          helperText=""
          onChange={handleInputChange}
        />
      )}
      value={searchQuery}
      onChange={(_, newValue) => {
        setSearchQuery(newValue);
        const airportCode = newValue?.split(' - ')[0]; // Extracting airport code from the selected value
        onChange(airportCode);
      }}
      size="medium"
    />
  );
};

export default AirportAutosuggest;
