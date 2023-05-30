import FooterSection from "./FooterSection";

const NewsletterContainer = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start">
      <FooterSection
        subscribeSectionBackgroun="/newsletter-section-background1@2x.png"
        logo="/logo3.svg"
        socialIcons="/social-icons3.svg"
      />
    </div>
  );
};

export default NewsletterContainer;
