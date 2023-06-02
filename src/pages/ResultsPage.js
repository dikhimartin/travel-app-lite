import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SearchFormSectionContainer from "../components/SearchFormSectionContainer";
import FilterContainer from "../components/FilterContainer";
import FlightInfoContainer from "../components/FlightInfoContainer";
import BookingContainer from "../components/BookingContainer";
import NewsletterContainer from "../components/NewsletterContainer";

const ResultsPage = () => {
  const navigate = useNavigate();

  const onFickleflightLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onExploreTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);


  return (
    <div className="relative bg-primary-contrast w-full overflow-hidden flex flex-col items-start justify-start text-left text-base text-cornflowerblue-300 font-components-button-large">
      <header className="self-stretch bg-primary-contrast h-[77px] flex flex-row py-[22px] px-20 box-border items-center justify-center sticky w-full top-[0] [background:white] text-left text-sm text-darkslategray-200 font-components-button-large lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
        <div className="flex-1 flex flex-row items-center justify-between">
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[174px] h-[33px] overflow-hidden shrink-0"
            onClick={onFickleflightLogoClick}
          >
            <img
              className="absolute h-[96.97%] w-[99.82%] top-[1.59%] right-[0.18%] bottom-[1.44%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/webscreen.svg"
            />
          </button>
          <div className="flex flex-row items-center justify-end gap-[36px] sm:flex">
            <div className="flex flex-row items-center justify-end gap-[30px] md:hidden">
              <div
                className="relative cursor-pointer"
                onClick={onExploreTextClick}
              >
                Home
              </div>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm font-components-button-large text-cornflowerblue-200 text-left inline-block">
                Search
              </button>
            </div>
            <div className="flex flex-row items-center justify-center gap-[12px]">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0 hidden md:flex"
                alt=""
                src="/notification2.svg"
              />
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/notification4.svg"
              />
              <img
                className="rounded-19xl w-9 h-9 object-cover"
                alt=""
                src="/top_avatar1@2x.png"
              />
            </div>
          </div>
        </div>
      </header>
      <div className="mb-20 self-stretch [background:linear-gradient(100.3deg,_#114f8b,_#2a9ad7)] flex flex-col items-start justify-start text-left text-42xl text-primary-contrast font-baloo-bhai">
        <div className="self-stretch relative h-[362px] sm:h-[480px]">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] [background:linear-gradient(78.78deg,_#114f8b_5.2%,_#2a9ad7)]" />
          <img
            className="absolute h-full w-full top-[0.4px] right-[0px] bottom-[-0.4px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/banner-background1@2x.png"
          />
          <SearchFormSectionContainer />
        </div>
      </div>

      <div className="self-stretch flex flex-row py-[50px] px-20 items-start justify-center lg:p-10 lg:box-border md:py-5 md:px-6 md:box-border">
        <FilterContainer />
        <div className="flex-1 flex flex-row items-start justify-start gap-[24px] md:flex-col md:gap-[80]">
          <FlightInfoContainer />
          <div className="rounded-md bg-primary-contrast w-[257px] flex flex-col pt-0 px-0 pb-5 box-border items-start justify-start gap-[18px] md:w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[14px]">
              <b className="self-stretch relative tracking-[0.04em] uppercase">
                Recently booked
              </b>
              <img
                className="self-stretch relative max-w-full overflow-hidden h-px shrink-0"
                alt=""
                src="/vector-21.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-xs text-cornflowerblue-200 font-inter">
              <BookingContainer
                airlineLogo="/icon.svg"
                singaporeAirlines="Singapore Airlines"
                price="$1128"
                depCode="SIN"
                depName="Singapore"
                arrCode="LAX"
                arrName="Los Angeles"
                flightClass="Economy"
                numPeople="2 Adults"
                expedia="Expedia"
                timeAgo="1s ago!"
              />
              <BookingContainer
                airlineLogo="/icon1.svg"
                singaporeAirlines="American Airlines"
                price="$1024"
                depCode="SFO"
                depName="San Francisco"
                arrCode="SIN"
                arrName="Singapore"
                flightClass="First Class"
                numPeople="1 Adults"
                expedia="Kayak"
                timeAgo="2s ago!"
                propTextAlign="right"
              />
              <BookingContainer
                airlineLogo="/icon2.svg"
                singaporeAirlines="Japan Airlines"
                price="$2996"
                depCode="PHX"
                depName="Phoenix"
                arrCode="DXB"
                arrName="Dubai"
                flightClass="Economy"
                numPeople="3 Adults"
                expedia="Skyscanner"
                timeAgo="3s ago!"
                propTextAlign="left"
              />
              <div className="self-stretch rounded-[3px] bg-cornflowerblue-400 flex flex-row py-[7px] px-2.5 items-center justify-center gap-[4px]">
                <div className="relative leading-[16px]">Show more</div>
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/icon--back.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsletterContainer />
    </div>
  );
};

export default ResultsPage;
