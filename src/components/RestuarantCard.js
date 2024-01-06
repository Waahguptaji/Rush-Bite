import { CDN_URL } from "../utils/constants";
const RestuarantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, sla } = resData?.info; //optional chaining
  return (
    <div className="container m-4 p-4 w-[250px] h-[350px] rounded-lg flex-col items-center ">
      <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={CDN_URL + resData.info.cloudinaryImageId}
          alt="dishImg"
        />
        <div className="p-2 overflow-y-auto">
          <h1 className="title-font text-lg font-medium text-gray-900">
            {name}
          </h1>
          <h2 className="text-base font-medium text-gray-900 mb-1">
            ⭐️{avgRating} stars • {sla?.slaString}
          </h2>
          <p className="leading-relaxed mb-3">{cuisines.join(", ")}</p>
        </div>
      </div>
    </div>
  );
};

export default RestuarantCard;
