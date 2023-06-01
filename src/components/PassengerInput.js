import {
  TextField,
  Typography, 
} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const PassengerInput = ({ form, handlePassengerChange }) => {
  const increment = (passengerType) => {
    const passengerCount = form.travellers.filter((traveller) => traveller.passenger_type === passengerType).length;
    handlePassengerChange(passengerType, passengerCount + 1);
  };
  
  const decrement = (passengerType) => {
    const passengerCount = form.travellers.filter((traveller) => traveller.passenger_type === passengerType).length;
    const newCount = passengerCount > 0 ? passengerCount - 1 : 0;
    handlePassengerChange(passengerType, newCount);
  };

  const renderPassengerInput = (passengerType, label) => {
    const passengerCount = form.travellers.filter((traveller) => traveller.passenger_type === passengerType).length;

    return (
      <div className="mb-2 flex items-center">
        <Typography variant="subtitle1" className="min-w-[100px]">
          {label}
        </Typography>
        <IconButton size="small" onClick={() => decrement(passengerType)}>
          <RemoveIcon />
        </IconButton>
        <TextField
          type="number"
          size="small"
          value={passengerCount}
          InputProps={{ inputProps: { min: 0 }, readOnly: true }}
          className="mx-1 w-16 text-center"
        />
        <IconButton size="small" onClick={() => increment(passengerType)}>
          <AddIcon />
        </IconButton>
      </div>
    );
  };

  return (
    <>
      {renderPassengerInput('adult', 'Adult')}
      {renderPassengerInput('child', 'Child')}
      {renderPassengerInput('infant', 'Infant')}
    </>
  );
};

export default PassengerInput;

  

