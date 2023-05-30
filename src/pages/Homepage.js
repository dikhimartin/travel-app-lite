import HeroContainer from "../components/HeroContainer";
import RecentSearchesContainer from "../components/RecentSearchesContainer";
import PopularDestinationsContainer from "../components/PopularDestinationsContainer";
import RecommendedHolidaysContainer from "../components/RecommendedHolidaysContainer";
import PopularStaysContainer from "../components/PopularStaysContainer";
import FooterSection from "../components/FooterSection";

const Homepage = () => {
  return (
    <div className="relative bg-primary-contrast w-full overflow-hidden flex flex-col items-center justify-start gap-[69px] hover:[background:linear-gradient(#fff,_#fff),_#87550a] sm:w-full sm:hover:bg-orange-200">
      <HeroContainer />
      <div className="w-full flex flex-col py-0 px-20 box-border items-center justify-start gap-[80px] max-w-[1280px] md:pl-[30px] md:pr-[30px] md:box-border">
        <RecentSearchesContainer />
        <PopularDestinationsContainer />
        <RecommendedHolidaysContainer />
        <PopularStaysContainer />
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
