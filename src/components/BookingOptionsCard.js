import { useMemo } from "react";
import { FormControlLabel, Checkbox } from "@mui/material";

const BookingOptionsCard = ({ results, propWidth, propWidth1 }) => {
  const stopsStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const resultsStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div
      className="relative w-[296.62px] h-[106px] text-left text-3xl text-dimgray-300 font-components-button-large"
      style={stopsStyle}
    >
      <b
        className="absolute top-[0px] left-[0px] tracking-[0.26px] inline-block w-[65.26px]"
        style={resultsStyle}
      >
        {results}
      </b>
      <FormControlLabel
        className="absolute top-[50px] left-[0px]"
        label="1 Stop"
        labelPlacement="end"
        control={<Checkbox size="medium" />}
      />
      <FormControlLabel
        className="absolute top-[86px] left-[0px]"
        label="2 Stops"
        labelPlacement="end"
        control={<Checkbox size="medium" />}
      />
    </div>
  );
};

export default BookingOptionsCard;
