import { TextField } from "@mui/material";

const FooterSection = ({ subscribeSectionBackgroun, logo, socialIcons }) => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start text-center text-lg text-cornflowerblue-300 font-components-button-large">
      <div className="self-stretch relative bg-aliceblue h-[529px] overflow-hidden shrink-0">
        <img
          className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[530px] object-cover"
          alt=""
          src={subscribeSectionBackgroun}
        />
        <div className="[position:relative!important] top-[52px] left-[auto!important] w-[549px] flex flex-col p-5 box-border items-center justify-start gap-[30px] ml-[auto] mr-[auto] md:py-6 md:px-0 md:box-border sm:pl-6 sm:pr-6 sm:box-border sm:ml-[auto] sm:mr-[auto] sm:[position:relative!important] sm:left-[auto!important] sm:w-full">
          <div className="self-stretch flex flex-col items-center justify-start gap-[7px]">
            <b className="self-stretch relative tracking-[0.04em] uppercase">
              subscribe to our newsletter
            </b>
            <b className="self-stretch relative text-11xl text-darkslategray-100">
              Get weekly updates
            </b>
          </div>
          <div className="self-stretch rounded-xl bg-primary-contrast shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] flex flex-col py-7 px-[30px] items-start justify-start gap-[17px] text-left text-slategray border-[1px] border-solid border-whitesmoke-200">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[34px]">
                Fill in your details to join the party!
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
              <div className="self-stretch flex flex-col items-start justify-start">
                <TextField
                  className="[border:none] bg-[transparent] self-stretch"
                  color="primary"
                  variant="outlined"
                  type="text"
                  label="Your name"
                  size="medium"
                  margin="none"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <TextField
                  className="[border:none] bg-[transparent] self-stretch"
                  color="primary"
                  variant="outlined"
                  type="text"
                  label="Email address"
                  size="medium"
                  margin="none"
                />
              </div>
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-orange-200 rounded w-[164px] h-14 overflow-hidden shrink-0 flex flex-col items-center justify-center hover:bg-darkorange sm:w-full sm:hover:bg-peru">
              <div className="overflow-hidden flex flex-col py-2 px-[22px] items-start justify-start">
                <div className="relative text-mini tracking-[0.46px] leading-[26px] uppercase font-medium font-components-button-large text-primary-contrast text-left">
                  submit
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <footer className="self-stretch [background:linear-gradient(91.74deg,_#0b5ba8_25.38%,_#299bd8)] flex flex-row py-[33px] px-[84px] items-start justify-start gap-[44px] text-left text-lg text-primary-contrast font-components-button-large lg:p-10 lg:box-border md:flex-col md:pt-10 md:px-6 md:pb-[30px] md:box-border sm:py-[30px] sm:px-6 sm:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[14px] mb-[40px!important] md:flex-[unset] md:self-stretch">
          <img
            className="relative w-[174px] h-[33px] overflow-hidden shrink-0"
            alt=""
            src={logo}
          />
          <div className="self-stretch relative leading-[27px]">
            Fickle Flight is your one-stop travel portal. We offer hassle free
            flight and hotel bookings. We also have all your flight needs in you
            online shop.
          </div>
          <img
            className="relative w-[130px] h-[30px]"
            alt=""
            src={socialIcons}
          />
        </div>
        <div className="relative box-border w-px h-[157.87px] border-r-[1px] border-solid border-gray-600 md:hidden" />
        <div className="flex-1 flex flex-row items-start justify-between text-base md:flex-[unset] md:self-stretch sm:flex-col">
          <div className="relative w-[197.33px] h-[159.76px] sm:mb-[40px!important]">
            <div className="absolute top-[47.76px] left-[0px] inline-block w-[135.67px]">
              About Us
            </div>
            <div className="absolute top-[0px] left-[0px] text-xl leading-[27px] font-medium inline-block w-[174.72px]">
              Company
            </div>
            <div className="absolute top-[78.76px] left-[0px] inline-block w-[84.28px]">
              News
            </div>
            <div className="absolute top-[109.76px] left-[0px] inline-block w-[115.11px]">
              Careers
            </div>
            <div className="absolute top-[140.76px] left-[0px] inline-block w-[197.33px]">
              How we work
            </div>
          </div>
          <div className="relative w-[197.33px] h-[159.76px] sm:mb-[40px!important]">
            <div className="absolute top-[47.76px] left-[0px] inline-block w-[109.63px]">
              Account
            </div>
            <div className="absolute top-[0px] left-[0px] text-xl leading-[27px] font-medium inline-block w-[131.56px]">
              Support
            </div>
            <div className="absolute top-[78.76px] left-[0px] inline-block w-[197.33px]">
              Support Center
            </div>
            <div className="absolute top-[109.76px] left-[0px] inline-block w-[52.99px]">
              FAQ
            </div>
            <div className="absolute top-[140.76px] left-[0px] inline-block w-[164.44px]">
              Accessibility
            </div>
          </div>
          <div className="relative w-[197.33px] h-[159.76px]">
            <div className="absolute top-[47.76px] left-[0px] inline-block w-[172.87px]">
              Covid Advisory
            </div>
            <div className="absolute top-[0px] left-[0px] text-xl leading-[27px] font-medium inline-block w-[76.65px]">
              More
            </div>
            <div className="absolute top-[78.76px] left-[0px] inline-block w-[135.36px]">
              Airline Fees
            </div>
            <div className="absolute top-[109.76px] left-[0px] inline-block w-[50.56px]">
              Tips
            </div>
            <div className="absolute top-[140.76px] left-[0px] inline-block w-[197.33px]">
              Quarantine Rules
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterSection;
