import aboutUsImg from "../images/aboutUsImg.jpeg";
import TestimonialSlider from "./TestimonialSlider";

const AboutUs = () => {
  return (
    <div className="grid grid-flow-row bg-gray-200 w-full h-full ">
      <div className="flex">
        <div className="flex flex-col justify-center ml-40 mb-10 tracking-wider">
          <h1 className="font-bold text-5xl mb-4">A Neighborhood of Good</h1>
          <p className="leading-relaxed font-normal">
            At RushBite, we celebrate the people behind every order. Our mission
            is to empower and grow local economies. When consumers get their
            goods, local merchants get business, and Rushers get paid.
          </p>
        </div>
        <img
          className="clipPath w-1/2  mt-6 mr-40 shadow-lg "
          src={aboutUsImg}
          alt="women delivering"
        />
      </div>
      <hr className="mt-6 w-3/4 mx-auto" />
      <div className="flex flex-col items-center ">
        <h1 className=" text-center font-bold my-10 tracking-wide text-xl">
          Valuable reviews of our loving Customers.
        </h1>
        <div className="max-w-xs w-full shadow-md">
          <TestimonialSlider />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
