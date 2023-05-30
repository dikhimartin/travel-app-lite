import { useCallback } from "react";
import HeroContainer from "../components/HeroContainer";
import RecentSearchesContainer from "../components/RecentSearchesContainer";
import PopularDestinationsContainer from "../components/PopularDestinationsContainer";
import RecommendedHolidayCardContaine from "../components/RecommendedHolidayCardContaine";
import HotelCard1 from "../components/HotelCard1";
import FooterSection from "../components/FooterSection";

const Homepage = () => {
  const onViewAllStaysButtonClick = useCallback(() => {
    // Please sync "Hotels Page" to the project
  }, []);

  return (
    <div className="relative bg-primary-contrast w-full overflow-hidden flex flex-col items-center justify-start gap-[69px] text-left text-11xl text-darkslategray-300 font-components-button-large hover:[background:linear-gradient(#fff,_#fff),_#87550a] sm:w-full sm:hover:bg-orange-200">
      <HeroContainer />
      <div className="w-full flex flex-col py-0 px-20 box-border items-center justify-start gap-[80px] max-w-[1280px] md:pl-[30px] md:pr-[30px] md:box-border">
        <RecentSearchesContainer />
        <PopularDestinationsContainer />
        <div className="self-stretch flex flex-col items-start justify-center gap-[24px]">
          <div className="self-stretch flex flex-row items-center justify-start">
            <b className="flex-1 relative tracking-[0.04em] capitalize sm:text-3xl">
              Recommended Holidays
            </b>
            <button className="cursor-pointer [border:none] p-0 bg-primary-contrast rounded-12xl w-[199.89px] flex flex-row items-start justify-start gap-[10px] md:hidden">
              <div className="relative text-lg tracking-[0.04em] font-medium font-components-button-large text-cornflowerblue-300 text-right inline-block w-[165.89px] shrink-0">
                View all holidays
              </div>
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/arrowright8.svg"
              />
            </button>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start ml-[-16px] mr-[-16px] md:ml-[-16px] md:mr-[-16px] md:flex-wrap">
            <RecommendedHolidayCardContaine
              packageDetails="/unsplash5mv818tzxeo1@2x.png"
              packageDestination="Bali"
              packageDuration="4D3N"
              packagePrice="$899"
            />
            <RecommendedHolidayCardContaine
              packageDetails="/switzerlandimage@2x.png"
              packageDestination="Swiss"
              packageDuration="6D5N"
              packagePrice="$900"
            />
            <RecommendedHolidayCardContaine
              packageDetails="/boracayimage@2x.png"
              packageDestination="Boracay"
              packageDuration="5D4N"
              packagePrice="$699"
            />
            <RecommendedHolidayCardContaine
              packageDetails="/palawanimage@2x.png"
              packageDestination="Palawan"
              packageDuration="4D3N"
              packagePrice="$789"
            />
          </div>
          <div className="rounded-12xl bg-primary-contrast w-[199.89px] hidden flex-row items-start justify-start gap-[10px] text-right text-lg text-cornflowerblue-300 md:flex md:[mrgin-top:16px]">
            <div className="relative tracking-[0.04em] font-medium inline-block w-[165.89px] shrink-0 md:w-auto">
              View all holidays
            </div>
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/arrowright9.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
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
          <div className="self-stretch flex flex-row items-center justify-start ml-[-12px] mr-[-12px] lg:pr-10 lg:box-border lg:ml-[-12px] lg:mr-[-50px] md:mr-[-50px] md:ml-[-12px] sm:flex-col sm:pr-0 sm:box-border sm:mr-[-12px] sm:ml-[-12px]">
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
      </div>
      <FooterSection
        subscribeSectionBackgroun="/subscribe-section-background@2x.png"
        logo="/logo1.svg"
        socialIcons="/social-icons1.svg"
      />
    </div>
  );
};

export default Homepage;
