import { CDN_URL } from "../utils/constants";
import { FaStar } from "react-icons/fa";
const RestuarantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, sla } = resData?.info; //optional chaining
  return (
    <div className="grid gap-3 cursor-pointer items-center justify-stretch grid-flow-row ">
      <div className=" w-full h-full relative overflow-hidden filter">
        <img
          className=" w-60 h-40 object-cover rounded-2xl "
          src={CDN_URL + resData.info.cloudinaryImageId}
          alt="dishImg"
        />
      </div>
      <div className="ml-3 overflow-y-auto">
        <h1 className=" text-lg font-bold text-gray-900 overflow-hidden w-full text-ellipsis whitespace-nowrap  break-words">
          {name}
        </h1>
        <h2 className="grid grid-flow-col items-center mt-[2px] gap-[2px] justify-start">
          <p>
            <FaStar />
          </p>
          <p className="text-lg font-bold text-gray-900 overflow-hidden w-full break-words">
            <span>{avgRating} •</span> {sla?.slaString}
          </p>
        </h2>
        <h3 className="grid items-center mt-[2px] gap-[2px]">
          <p className="text-base font-light overflow-hidden w-full text-ellipsis whitespace-nowrap break-words">
            {cuisines.join(", ")}
          </p>
          <p className="text-base font-light overflow-hidden w-full text-ellipsis whitespace-nowrap break-words">
            Location
          </p>
        </h3>
      </div>
    </div>
  );
};

export default RestuarantCard;
