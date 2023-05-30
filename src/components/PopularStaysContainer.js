import { useCallback } from "react";
import HotelCard1 from "./HotelCard1";

const PopularStaysContainer = () => {
  const onViewAllStaysButtonClick = useCallback(() => {
    // Please sync "Hotels Page" to the project
  }, []);

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-left text-11xl text-darkslategray-300 font-components-button-large">
      <div className="self-stretch flex flex-row items-center justify-center">
        <div className="flex-1 relative h-[35px]">
          <b className="absolute top-[0px] left-[0px] tracking-[0.04em] capitalize inline-block w-[1105.34px] sm:text-3xl">
            Popular Stays
          </b>
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-primary-contrast rounded-12xl flex flex-row items-start justify-start gap-[10px] md:hidden"
          onClick={onViewAllStaysButtonClick}
        >
          <div className="relative text-lg tracking-[0.04em] font-medium font-components-button-large text-cornflowerblue-300 text-right inline-block w-[140.66px] shrink-0">
            View all stays
          </div>
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/arrowright10.svg"
          />
        </button>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start ml-[-12px] mr-[-12px] text-base lg:pr-10 lg:box-border lg:ml-[-12px] lg:mr-[-50px] md:mr-[-50px] md:ml-[-12px] sm:flex-col sm:pr-0 sm:box-border sm:mr-[-12px] sm:ml-[-12px]">
        <HotelCard1
          matterhornSuitesImage="/unsplashrlwe8f8anoc2@2x.png"
          entireBungalow="Entire bungalow"
          matterhornSuites="Matterhorn Suites"
          night="$575/night"
          reviews="(60 reviews)"
          prop="4.9"
          vector="/vector10.svg"
        />
        <HotelCard1
          matterhornSuitesImage="/unsplashtsn8bpopveo1@2x.png"
          entireBungalow="2-Story beachfront suite"
          matterhornSuites="Discovery Shores"
          night="$360/night"
          reviews="(116 reviews)"
          prop="4.8"
          vector="/vector11.svg"
          propFlex="1"
          propGap="11px"
          propWidth="37.54%"
          propRight="62.46%"
        />
        <HotelCard1
          matterhornSuitesImage="/unsplashrlwe8f8anoc3@2x.png"
          entireBungalow="Single deluxe hut"
          matterhornSuites="Arctic Hut "
          night="$420/night"
          reviews="(78 reviews)"
          prop="4.7"
          vector="/vector12.svg"
          propFlex="1"
          propGap="5px"
          propWidth="37.58%"
          propRight="62.42%"
        />
        <HotelCard1
          matterhornSuitesImage="/unsplashyqrybvxug5q1@2x.png"
          entireBungalow="Deluxe King Room"
          matterhornSuites="Lake Louise Inn"
          night="$244/night"
          reviews="(63 reviews)"
          prop="4.6"
          vector="/vector13.svg"
          propFlex="unset"
          propGap="11px"
          propWidth="37.54%"
          propRight="62.46%"
        />
      </div>
      <div className="rounded-12xl bg-primary-contrast hidden flex-row items-start justify-start gap-[10px] text-right text-lg text-cornflowerblue-300 md:flex md:mt-4">
        <div className="relative tracking-[0.04em] font-medium inline-block w-[140.66px] shrink-0 md:w-auto">
          View all stays
        </div>
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src="/arrowright11.svg"
        />
      </div>
    </div>
  );
};

export default PopularStaysContainer;
