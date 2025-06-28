import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { SWIGGY_RESTAURANT_API } from "../utils/constants";

const Body = () => {
  const [ListOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(SWIGGY_RESTAURANT_API);
      const json = await data.json();

      const restaurants =
        json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      setListOfRestaurant(restaurants);
      setFilteredRestaurant(restaurants);
    } catch (error) {
      console.error("Failed to fetch restaurants", error);
    }
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus)
    return (
      <h1 className="text-center text-xl font-semibold text-red-600 mt-10 px-4">
        Looks like you're offline! Please check your internet connection.
      </h1>
    );

  return ListOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="px-4 py-4 md:px-6">

      {/* Greeting */}
      <h2 className="text-[20px] font-bold font-montserrat text-gray-900 mb-2">
        Hello Foodie, <span className="text-gray-500 font-normal font-nunito">Good Afternoon!</span>
      </h2>

      {/* Search Bar + Button */}
      <div className="flex gap-2 mb-6">
        {/* Search Input */}
        <div className="flex items-center flex-grow bg-gray-100 px-4 py-3 rounded-xl shadow-sm ring-1 ring-gray-200 focus-within:ring-2 focus-within:ring-purple-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103 10a7.5 7.5 0 0013.65 6.65z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search dishes, restaurants"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="bg-transparent outline-none w-full text-sm font-nunito placeholder:text-gray-500"
          />
        </div>

        {/* Search Button */}
        <button
          onClick={() => {
            const filtered = ListOfRestaurants.filter((res) =>
              res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filtered);
          }}
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-xl font-semibold font-nunito text-sm transition duration-200"
        >
          Search
        </button>
      </div>

      {/* Top Rated Button */}
      <button
        className="bg-green-100 hover:bg-green-200 text-green-800 font-medium px-4 py-2 rounded-md w-full sm:w-auto mb-6"
        onClick={() => {
          const topRated = ListOfRestaurants.filter(
            (res) => res.info?.avgRating > 4.2
          );
          setFilteredRestaurant(topRated);
        }}
      >
        Top Rated Restaurants
      </button>

      {/* Horizontal Scroll Row */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Open Restaurants</h2>
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-2">
          {ListOfRestaurants.slice(0, 10).map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={`/restaurants/${restaurant.info.id}`}
              className="flex-shrink-0 w-[250px]"
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>

      {/* Vertical Grid Layout */}
      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">All Restaurants</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={`/restaurants/${restaurant.info.id}`}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
