import { useMemo } from "react";

const FlightContainer = ({
  airlineIcon,
  airlineName,
  departureAirport,
  arrivalAirport,
  departureDate,
  arrivalDate,
  h55MNonStop,
  s730,
  propTransform,
}) => {
  const turkishIconStyle = useMemo(() => {
    return {
      transform: propTransform,
    };
  }, [propTransform]);

  return (
    <div className="self-stretch rounded-md bg-primary-contrast flex flex-row py-0 pr-1.5 pl-[25px] items-center justify-center gap-[50px] text-left text-base text-dimgray-300 font-components-button-large border-[0.7px] border-solid border-lightgray sm:flex-col sm:p-5 sm:box-border">
      <div className="w-1/5 flex flex-row items-center justify-start gap-[7px] md:flex-col sm:flex-row sm:w-[100%!important]">
        <img
          className="relative w-[34.77px] h-[46px] sm:[transform:scale(0.8)]"
          alt=""
          src={airlineIcon}
          style={turkishIconStyle}
        />
        <div className="relative tracking-[0.26px]">{airlineName}</div>
      </div>
      <div className="flex-1 flex flex-row items-center justify-between text-2xl text-cornflowerblue-200 sm:flex-[unset] sm:self-stretch">
        <div className="relative w-[93px] h-[52px] mq428small:w-20">
          <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-base">
            {departureDate}
          </div>
          <div className="absolute w-[79.51%] top-[63.46%] left-[0%] text-base tracking-[0.26px] text-dimgray-100 inline-block mq428small:text-base">
            {departureAirport}
          </div>
        </div>
        <div className="relative w-[121px] h-[55px] text-center text-base text-gray-100 sm:[transform:scale(0.9)]">
          <img
            className="absolute h-[27.46%] w-[88.52%] top-[0%] right-[5.5%] bottom-[72.54%] left-[5.98%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/flighticon.svg"
          />
          <div className="absolute top-[65.45%] left-[0%] tracking-[0.21px] mq428small:text-smi">
            {h55MNonStop}
          </div>
        </div>
        <div className="relative w-[91px] h-[52px] text-right mq428small:w-20">
          <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-base">
            {arrivalDate}
          </div>
          <div className="absolute w-[81.25%] top-[63.46%] left-[17.65%] text-base tracking-[0.26px] text-dimgray-100 inline-block mq428small:text-base">
            {arrivalAirport}
          </div>
        </div>
      </div>
      <div className="w-32 flex flex-row items-center justify-center text-center text-5xl text-orange-100">
        <img
          className="relative w-px h-[100px] sm:hidden"
          alt=""
          src="/vector-1.svg"
        />
        <b className="flex-1 relative tracking-[0.34px]">{s730}</b>
      </div>
    </div>
  );
};

export default FlightContainer;
