import { useMemo } from "react";

const BookingContainer = ({
  airlineLogo,
  singaporeAirlines,
  price,
  depCode,
  depName,
  arrCode,
  arrName,
  flightClass,
  numPeople,
  expedia,
  timeAgo,
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
          <img className="relative w-6 h-6" alt="" src={airlineLogo} />
          <div className="relative leading-[16px]">{singaporeAirlines}</div>
        </div>
        <div className="relative text-base leading-[24px] font-semibold text-gray-200 text-right">
          {price}
        </div>
      </div>
      <div className="self-stretch rounded bg-whitesmoke-100 flex flex-row p-2 items-center justify-start gap-[7px] text-base text-cornflowerblue-200">
        <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
          <div className="relative font-semibold">{depCode}</div>
          <div className="relative text-xs text-lightslategray">{depName}</div>
        </div>
        <img
          className="relative w-[48.83px] h-[11.96px]"
          alt=""
          src="/flight-icon.svg"
        />
        <div className="flex-1 flex flex-col items-end justify-start gap-[2px]">
          <div className="relative font-semibold">{arrCode}</div>
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
        <div className="flex-1 flex flex-row items-start justify-start gap-[8px]">
          <img
            className="relative w-4 h-4 overflow-hidden shrink-0"
            alt=""
            src="/calender.svg"
          />
          <div className="relative leading-[16px]">{numPeople}</div>
        </div>
      </div>
      <div className="self-stretch flex flex-row pt-2 px-0 pb-0 items-center justify-between border-t-[1px] border-solid border-whitesmoke-200">
        <div className="relative leading-[16px]">
          <span>{`Booked on `}</span>
          <span className="text-royalblue">{expedia}</span>
        </div>
        <div className="relative leading-[16px] font-semibold text-orange-100">
          {timeAgo}
        </div>
      </div>
    </div>
  );
};

export default BookingContainer;
