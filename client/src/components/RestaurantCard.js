import { CDN_URL } from "../utils/constants.js";

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = resData?.info || {};

  const deliveryTime = sla?.deliveryTime;

  return (
    <div className="relative p-3 bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300">
      
      <img
        className="w-full h-40 object-cover rounded-xl"
        alt={name}
        src={CDN_URL + cloudinaryImageId}
      />

     
      <div className="mt-3 space-y-1">
        <h3 className="text-lg font-semibold truncate">{name}</h3>
        <p className="text-sm text-gray-500 truncate">{cuisines?.join(", ")}</p>

        <div className="flex items-center justify-between text-sm text-gray-600 mt-1">
          <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded font-medium text-xs">
            ⭐ {avgRating || "N/A"}
          </span>
          <span>{deliveryTime || "N/A"} mins</span>
        </div>

        <p className="text-sm font-medium text-gray-800">{costForTwo || "N/A"}</p>
      </div>
    </div>
  );
};


export const withPromtedLabel = (RestaurantCard) => {
  return (props) => (
    <div className="relative">
      <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-0.5 rounded z-10">
        PROMOTED
      </div>
      <RestaurantCard {...props} />
    </div>
  );
};

export default RestaurantCard;
