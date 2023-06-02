import SearchFormSectionContainer from "../components/SearchFormSectionContainer";

const HeroContainer = () => {
  return (
     <>
      <div className="self-stretch flex flex-col items-center justify-start text-center text-42xl text-primary-contrast font-baloo-bhai" >
        <div className="self-stretch relative h-[640px]">
          <div className="absolute w-full top-[0px] right-[0px] left-[0px] [background:linear-gradient(78.78deg,_#114f8b_5.2%,_#2a9ad7)] h-[639.91px]" />
          <img
            className="absolute w-full top-[0.4px] right-[0px] left-[0px] max-w-full overflow-hidden h-[640px] object-cover"
            alt=""
            src="/banner--background1@2x.png"
            />
        </div>
      </div>
      <SearchFormSectionContainer titletext="Search Flight" />
     </>
  );
};

export default HeroContainer;
