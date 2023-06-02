import { useMemo } from "react";

const FlightSegment = ({
  airlineIcon,
  airlineName,
  price,
  depCode,
  depName,
  depTime,
  depDate,
  arrCode,
  arrName,
  arrTime,
  arrDate,
  flightClass,
  flightDuration,
  propTextAlign,
}) => {
  const arrNameStyle = useMemo(() => {
    return {
      textAlign: propTextAlign,
    };
  }, [propTextAlign]);

  return (
    <div className="self-stretch rounded-md flex flex-col p-2.5 items-start justify-start gap-[10px] text-left text-xs text-lightslategray font-inter border-[1px] border-solid border-whitesmoke-200">
      <div className="self-stretch flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-start gap-[4px]">
          <img className="relative w-6 h-6" alt="" src={airlineIcon} />
          <div className="relative leading-[16px]">{airlineName}</div>
        </div>
        <div className="relative text-base leading-[24px] font-semibold text-gray-200 text-right">
          {price}
        </div>
      </div>
      <div className="self-stretch rounded bg-whitesmoke-100 flex flex-row p-2 items-center justify-start gap-[7px] text-base text-cornflowerblue-200">
        <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
          <div className="relative font-semibold">{depTime}</div>
          <div className="relative font-semibold">{depCode}</div>
          <div className="relative text-xs mb-2">{depDate}</div>
          <div className="relative text-xs text-lightslategray">{depName}</div>
        </div>
        <div className="relative w-[121px] h-[55px] text-center text-base text-gray-100 sm:[transform:scale(0.9)]">
            <img
            className="relative w-[48.83px] h-[11.96px]"
            alt=""
            src="/flight-icon.svg"
            />
            <div className="absolute text-xs top-[65.45%] left-[0%] tracking-[0.21px] mq428small:text-smi">
                {flightDuration}
            </div>        
        </div>
        <div className="flex-1 flex flex-col items-end justify-start gap-[2px]">
          <div className="relative font-semibold">{arrTime}</div>
          <div className="relative font-semibold">{arrCode}</div>
          <div className="relative text-xs mb-2">{arrDate}</div>
          <div
            className="relative text-xs text-lightslategray text-right"
            style={arrNameStyle}
            >
                {arrName}
          </div>
        </div>
      </div>
      <div className="self-stretch rounded flex flex-row items-center justify-start gap-[20px]">
        <div className="flex-1 flex flex-row items-start justify-start gap-[8px]">
          <img
            className="relative w-4 h-4 overflow-hidden shrink-0"
            alt=""
            src="/class-icon.svg"
          />
          <div className="relative leading-[16px]">{flightClass}</div>
        </div>
      </div>
    
    </div>
  );
};

export default FlightSegment;
