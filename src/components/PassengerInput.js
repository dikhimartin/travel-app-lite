import { useState } from "react";
import {
  TextField,
  Box, 
  Typography, 
  Button
} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const PassengerInput = () => {
    const [adultCount, setAdultCount] = useState(0);
    const [childCount, setChildCount] = useState(0);
    const [infantCount, setInfantCount] = useState(0);

    const increment = (type) => {
        switch (type) {
            case 'adult':
            setAdultCount(adultCount + 1);
            break;
            case 'child':
            setChildCount(childCount + 1);
            break;
            case 'infant':
            setInfantCount(infantCount + 1);
            break;
            default:
            break;
        }
    };
    const decrement = (type) => {
        switch (type) {
            case 'adult':
                setAdultCount(adultCount - 1 >= 0 ? adultCount - 1 : 0);
            break;
            case 'child':
                setChildCount(childCount - 1 >= 0 ? childCount - 1 : 0);
            break;
            case 'infant':
                setInfantCount(infantCount - 1 >= 0 ? infantCount - 1 : 0);
            break;
            default:
            break;
        }
    };
  
    return (
     <>
      <div className="mb-2 flex items-center">
        <Typography variant="subtitle1" className="min-w-[100px]">
          Adult
        </Typography>
        <IconButton size="small" onClick={() => decrement('adult')}>
          <RemoveIcon />
        </IconButton>
        <TextField
          type="number"
          size="small"
          value={adultCount}
          InputProps={{ inputProps: { min: 0 }, readOnly: true }}
          className="mx-1 w-16 text-center"
        />
        <IconButton size="small" onClick={() => increment('adult')}>
          <AddIcon />
        </IconButton>
      </div>
      <div className="mb-2 flex items-center">
        <Typography variant="subtitle1" className="min-w-[100px]">
          Child
        </Typography>
        <IconButton size="small" onClick={() => decrement('child')}>
          <RemoveIcon />
        </IconButton>
        <TextField
          type="number"
          size="small"
          value={childCount}
          InputProps={{ inputProps: { min: 0 }, readOnly: true }}
          className="mx-1 w-16 text-center"
        />
        <IconButton size="small" onClick={() => increment('child')}>
          <AddIcon />
        </IconButton>
      </div>
      <div className="mb-2 flex items-center">
        <Typography variant="subtitle1" className="min-w-[100px]">
          Infant
        </Typography>
        <IconButton size="small" onClick={() => decrement('infant')}>
          <RemoveIcon />
        </IconButton>
        <TextField
          type="number"
          size="small"
          value={infantCount}
          InputProps={{ inputProps: { min: 0 }, readOnly: true }}
          className="mx-1 w-16 text-center"
        />
        <IconButton size="small" onClick={() => increment('infant')}>
          <AddIcon />
        </IconButton>
      </div>

     </>
    );
  };
  
  export default PassengerInput;
  

