import ItemList from "./ItemList";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-0">
      <div className="max-w-3xl mx-auto my-4 bg-gray-50 shadow-md rounded-lg overflow-hidden">
        <div
          className={`flex justify-between items-center p-4 cursor-pointer transition 
          ${showItems ? "bg-orange-100" : "hover:bg-gray-100"}`}
          onClick={setShowIndex}
        >
          <span className="font-semibold text-base sm:text-lg text-gray-800">
            {data?.title} ({data?.itemCards?.length || 0})
          </span>
          <span className="text-xl text-orange-500">
            {showItems ? <FiChevronUp /> : <FiChevronDown />}
          </span>
        </div>

        {showItems && (
          <div className="border-t border-gray-200">
            <ItemList items={data.itemCards} />
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;
