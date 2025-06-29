import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="divide-y divide-gray-200">
      {items.map((item) => {
        const info = item?.card?.info;
        if (!info) return null;

        const { id, name, price, defaultPrice, description, imageId } = info;

        return (
          <div
            key={id}
            className="flex justify-between items-start gap-4 py-6 px-4"
          >
            
            <div className="w-8/12">
              <h3 className="font-semibold text-lg text-gray-800">{name}</h3>
              <p className="text-sm text-gray-600 mt-1">
                ₹{(price || defaultPrice) / 100}
              </p>
              <p className="text-xs text-gray-500 mt-2">{description}</p>
            </div>

           
            <div className="w-4/12 flex flex-col items-center">
              {imageId && (
                <img
                  src={CDN_URL + imageId}
                  alt={name}
                  className="w-32 h-24 object-cover rounded-md shadow-sm mb-2"
                />
              )}
              <button
                className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-1 rounded-md shadow-md"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
