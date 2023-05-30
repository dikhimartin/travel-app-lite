import BookingOptionsCard from "./BookingOptionsCard";

const FilterContainer = () => {
  return (
    <div className="w-[253px] flex flex-col items-start justify-start gap-[39px] text-left text-xl text-dimgray-300 font-components-button-large lg:hidden">
      <div className="relative w-[228px] h-[47px]">
        <div className="absolute top-[0px] left-[0px] w-[228px] flex flex-col items-start justify-start gap-[24px]">
          <div className="relative tracking-[0.26px] inline-block w-[219.41px]">
            10 out of 177 Results
          </div>
          <img className="relative w-[228px] h-px" alt="" src="/vector-2.svg" />
        </div>
      </div>
      <BookingOptionsCard results="Stops" />
      <BookingOptionsCard
        results="Booking Options"
        propWidth="221px"
        propWidth1="189.03px"
      />
      <BookingOptionsCard
        results="Flight Experience"
        propWidth="310.8px"
        propWidth1="198.04px"
      />
      <img className="relative w-[228px] h-px" alt="" src="/vector-2.svg" />
      <BookingOptionsCard
        results="Airlines"
        propWidth="181px"
        propWidth1="87.77px"
      />
    </div>
  );
};

export default FilterContainer;
