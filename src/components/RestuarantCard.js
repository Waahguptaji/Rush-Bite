import { CDN_URL } from "../utils/constants";
const RestuarantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating } = resData?.info; //optional chaining
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="dishImg"
        src={CDN_URL + resData.info.cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(",  ")}</h4>
      <h4>{avgRating}stars</h4>
      <h4>{resData.info.sla.deliveryTime} mins</h4>
    </div>
  );
};
export default RestuarantCard;
