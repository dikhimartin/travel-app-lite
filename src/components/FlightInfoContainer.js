import FlightContainer from "./FlightContainer";

const FlightInfoContainer = () => {
  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[12px] text-left text-lg text-dimgray-300 font-components-button-large md:flex-[unset] md:self-stretch">
      <div className="relative tracking-[0.26px] text-lightslategray">
        10 out of 177 Results
      </div>
      <FlightContainer
        turkish="/turkish.svg"
        singaporeAirlines="Turkish Airlines"
        aM="11:35 PM"
        h55MNonStop="33H 10M, 1-stop"
        aM1="4:45 PM"
        s730="S$ 723"
      />
      <div className="self-stretch rounded-md bg-primary-contrast flex flex-row py-0 pr-1.5 pl-[25px] items-center justify-center gap-[50px] text-base border-[0.7px] border-solid border-lightgray sm:flex-col sm:p-5 sm:box-border">
        <div className="w-1/5 flex flex-row items-center justify-start gap-[7px] md:flex-col sm:flex-row sm:w-[100%!important]">
          <img
            className="relative w-[34.77px] h-[46px] sm:[transform:scale(0.8)]"
            alt=""
            src="/sia.svg"
          />
          <div className="relative tracking-[0.26px]">Singapore Airlines</div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-between text-2xl text-cornflowerblue-200 sm:flex-[unset] sm:self-stretch">
          <div className="relative w-[93px] h-[52px] mq428small:w-20">
            <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-base">
              8:45 PM
            </div>
            <div className="absolute w-[79.51%] top-[63.46%] left-[0%] text-base tracking-[0.26px] text-dimgray-100 inline-block mq428small:text-base">
              SIN
            </div>
          </div>
          <div className="relative w-[129px] h-[55px] text-center text-base text-gray-100 sm:[transform:scale(0.9)]">
            <img
              className="absolute h-[27.46%] w-[83.03%] top-[0%] right-[8.26%] bottom-[72.54%] left-[8.71%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/flighticon.svg"
            />
            <div className="absolute top-[65.45%] left-[0%] tracking-[0.21px] mq428small:text-smi">
              15H 10M, 2-stops
            </div>
          </div>
          <div className="relative w-[91px] h-[52px] text-right mq428small:w-20">
            <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-base">
              7:55 PM
            </div>
            <div className="absolute w-[81.25%] top-[63.46%] left-[17.65%] text-base tracking-[0.26px] text-dimgray-100 inline-block mq428small:text-base">
              LAX
            </div>
          </div>
        </div>
        <div className="w-32 flex flex-row items-center justify-center text-center text-5xl text-orange-100">
          <img
            className="relative w-px h-[100px] sm:hidden"
            alt=""
            src="/vector-1.svg"
          />
          <b className="flex-1 relative tracking-[0.34px]">S$ 900</b>
        </div>
      </div>
      <FlightContainer
        turkish="/japan.svg"
        singaporeAirlines="Japan Airlines"
        aM="8:20 PM"
        h55MNonStop="17H 30M, 1-stop"
        aM1="9:50 PM"
        s730="S$ 859"
        propTransform="scale(0.8)"
      />
      <FlightContainer
        turkish="/ana.svg"
        singaporeAirlines="ANA"
        aM="6:35 PM"
        h55MNonStop="19H 15M, 1-stop"
        aM1="9:50 PM"
        s730="S$ 936"
        propTransform="scale(0.8)"
      />
      <FlightContainer
        turkish="/americanairlines.svg"
        singaporeAirlines="American Airlines"
        aM="8:20 PM"
        h55MNonStop="17H 30M, 1-stop"
        aM1="9:50 PM"
        s730="S$ 936"
        propTransform="unset"
      />
      <FlightContainer
        turkish="/turkish.svg"
        singaporeAirlines="Turkish Airlines"
        aM="11:35 PM"
        h55MNonStop="33H 10M, 1-stop"
        aM1="4:45 PM"
        s730="S$ 673"
        propTransform="unset"
      />
      <FlightContainer
        turkish="/japan1.svg"
        singaporeAirlines="Japan Airlines"
        aM="10:25 PM"
        h55MNonStop="26H 45M, 1-stop"
        aM1="9:10 AM"
        s730="S$ 859"
        propTransform="scale(0.8)"
      />
      <div className="relative w-[220px] h-[72px] text-center text-primary-contrast">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-cornflowerblue-200" />
        <div className="absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_81.5px)] tracking-[0.04em] font-medium">
          Show more results
        </div>
      </div>
    </div>
  );
};

export default FlightInfoContainer;
