import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurnantCategory";
import image1 from "../images/img1.jpg";
import { IoArrowBack } from "react-icons/io5"; 

const RestaurantMenu = () => {
  const { resId } = useParams();
  const navigate = useNavigate();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (!resInfo) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    sla,
  } = resInfo?.cards?.[2]?.card?.card?.info || {};

  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  return (
    <div className="text-gray-800">
      
      <div className="relative w-full h-96 md:h-96 rounded-b-3xl overflow-hidden">
        <img
          src={image1}
          alt="Restaurant Banner"
          className="object-cover w-full h-full"
        />
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 bg-white  hover:bg-opacity-80 text-gray-800 p-2 rounded-full shadow cursor-pointer "
          title="Go back"
        >
          <IoArrowBack className="w-5 h-5" />
        </button>
      </div>

  
      <div className="px-4 py-4">
        <div className="flex items-center gap-3 text-sm font-nunito mb-2">
          <span className="flex items-center gap-1 text-orange-500 font-semibold">
            ⭐ {avgRating || "4.5"}
          </span>
          <span className="text-orange-500 font-semibold">Free</span>
          <span className="text-orange-500 font-semibold">
            {sla?.slaString || "20 min"}
          </span>
        </div>

        <h1 className="text-xl font-bold font-montserrat">{name}</h1>
        <p className="text-gray-600 text-sm mb-2">
          {cuisines?.join(", ") || "No cuisines listed"}
        </p>
        <p className="text-gray-500 text-sm mb-4">{costForTwoMessage}</p>

        <p className="text-xs text-gray-500 font-nunito leading-snug mb-6">
          Maecenas sed diam eget risus varius blandit sit amet non magna. Integer
          posuere erat a ante venenatis.
        </p>

       
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 mb-4">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() =>
                setShowIndex(index === showIndex ? null : index)
              }
              className={`px-4 py-1 text-sm whitespace-nowrap rounded-full border transition ${
                showIndex === index
                  ? "bg-orange-500 text-white border-orange-500"
                  : "text-gray-700 border-gray-300"
              }`}
            >
              {category?.card?.card?.title}
            </button>
          ))}
        </div>
      </div>

   
      <div className="px-4 pb-10">
        {categories.map((category, index) => (
          <RestaurantCategory
            key={index}
            data={category?.card?.card}
            showItems={index === showIndex}
            setShowIndex={() =>
              setShowIndex(index === showIndex ? null : index)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
