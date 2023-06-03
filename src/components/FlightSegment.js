import React, { useMemo } from "react";

const FlightSegment = ({
  flight,
  price,
  flightClass,
  propTextAlign,
}) => {
  const arrNameStyle = useMemo(() => {
    return {
      textAlign: propTextAlign,
    };
  }, [propTextAlign]);

  return (
    <>
      <div className="self-stretch rounded-md flex flex-col p-2.5 justify-start gap-[10px] text-left text-xs text-lightslategray font-inter border-[1px] border-solid border-whitesmoke-200">
       {flight.airlines.map((airlines, index) => {
          let firstRoutes, lastRoute;
          if (index === 0) {
            firstRoutes = airlines.routes[0];
            lastRoute = airlines.routes[airlines.routes.length - 1];
          }
          if (index === flight.airlines.length - 1) {
            firstRoutes = airlines.routes[0];
            lastRoute = airlines.routes[airlines.routes.length - 1];
          }


          const departureDate = new Date(firstRoutes.departure_date);
          const arrivalDate = new Date(lastRoute.arrival_date);
          
          const depTime = departureDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true, timeZone: "UTC" });
          const arrTime = arrivalDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true, timeZone: "UTC" });
          
          const depDate = departureDate.toLocaleDateString("en", { day: "numeric", month: "short", timeZone: "UTC" });
          const arrDate = arrivalDate.toLocaleDateString("en", { day: "numeric", month: "short", timeZone: "UTC" });


          const transit = (() => {
            let stop = airlines?.routes ? airlines.routes.length - 1 : 0;
            if (stop === 0) {
              return "Non-Stop";
            }
            if (stop === 1) {
              return "1 Stop";
            }
            return "2+ Stops";
          })();
          
          return (
              <React.Fragment key={index}>
                <div className="self-stretch flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center justify-start gap-[4px]">
                    {airlines
                      ? airlines.detail.map((ic, i) => (
                        <img key={i} alt="" src={ic.airline_icon || ""} className="relative w-6 h-6" />
                      ))
                      : ""}
                    <div className="relative leading-[16px]">
                      {airlines
                        ? airlines.detail.length > 1
                          ? ` ${t("bookTrip.multipleAirlines")}`
                          : airlines.detail[0]?.airline_name || ""
                        : ""}
                    </div>
                  </div>

                  <div className="relative text-base leading-[24px] font-semibold text-gray-200 text-right">
                    {price} 
                  </div>
                </div>

                <div className="self-stretch rounded bg-whitesmoke-100 flex flex-row p-2 items-center justify-start gap-[7px] text-base text-cornflowerblue-200">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                    <div className="relative font-semibold">{depTime}</div>
                    <div className="relative font-semibold">{firstRoutes.departure_airport_code}</div>
                    <div className="relative text-xs mb-2">{depDate}</div>
                    <div className="relative text-xs text-lightslategray">{airlines.departure_city_name}</div>
                  </div>
                  <div className="relative w-[121px] h-[55px] text-center text-base text-gray-100 sm:[transform:scale(0.9)]">
                      <img
                      className="relative w-[48.83px] h-[11.96px]"
                      alt=""
                      src="/flight-icon.svg"
                      />
                      <div className="absolute text-xs top-[65.45%] left-[13%] tracking-[0.21px] mq428small:text-smi">
                          {airlines.total_string_duration} ({transit})
                      </div>        
                  </div>
                  <div className="flex-1 flex flex-col items-end justify-start gap-[2px]">
                    <div className="relative font-semibold">{arrTime}</div>
                    <div className="relative font-semibold">{lastRoute.arrival_airport_code }</div>
                    <div className="relative text-xs mb-2">{arrDate}</div>
                    <div
                      className="relative text-xs text-lightslategray text-right"
                      style={arrNameStyle}
                      >
                          {airlines.arrival_city_name}
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
                {index != flight.airlines.length - 1 && <div className="dashed-divider"></div>}


              </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default FlightSegment;
