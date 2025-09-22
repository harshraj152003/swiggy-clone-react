import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, costForTwo, avgRating, sla, cloudinaryImageId } = resData.info;
  const { deliveryTime } = sla;

  
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="Restaurant Logo"
        src={CDN_URL + cloudinaryImageId}
      />

      <div className="res-card-content">
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>

        <div className="card-details">
          <span className="rating">⭐ {avgRating}</span>
          <span>•</span>
          <span>{deliveryTime} minutes</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;