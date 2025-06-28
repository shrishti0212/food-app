import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, clearCart } from "../utils/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => {
    const price = (item?.card?.info?.price || item?.card?.info?.defaultPrice || 0) / 100;
    return sum + price * item.quantity;
  }, 0);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white relative">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-4 pt-4">
        
        <button className="text-white text-lg" 
        onClick={() => navigate(-1)}
        >
          ←
        </button>

        <h1 className="text-2xl font-semibold">Cart</h1>
        
        <button className="text-orange-500 text-sm font-semibold"
        onClick={ () => navigate("/home")}
        >
          EDIT ITEMS
        </button>

      </div>

      {/* Cart Items */}
      <div className="flex-1 px-4 pt-10 space-y-6">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-400 mt-12">Your cart is empty.</p>
        ) : (
          cartItems.map((item, index) => {
            const info = item.card.info;
            const price = (info.price || info.defaultPrice || 0) / 100;
            return (

              <div key={index} className="flex items-center bg-[#1C1934] rounded-xl p-3 gap-4">
                {info.imageId && (
                  <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/${info.imageId}`}
                    alt={info.name}
                    className="size-24 object-cover rounded-lg"
                  />
                )}

                <div className="flex-1">
                  <h2 className="text-sm font-semibold">{info.name}</h2>
                  <p className="text-sm text-white/70">₹ {price}</p> 
                </div>

                <div className="flex items-center gap-2">
                  <button
                    className="w-6 h-6 bg-gray-700 text-white rounded-full text-sm"
                    onClick={() => dispatch(removeItem(info.id))}
                  >
                    −
                  </button>
                  <span className="text-sm font-medium">{item.quantity}</span>
                  <button
                    className="w-6 h-6 bg-gray-700 text-white rounded-full text-sm"
                    onClick={() => dispatch(addItem(item))}
                  >
                    +
                  </button>
                </div>

              </div>
            );
          })
        )}
      </div>

      {/* Bottom Panel */}
      {cartItems.length > 0 && (
        <div className="bg-white text-gray-800 rounded-t-2xl py-10 px-5 shadow-lg mt-8">
          
          <div className="flex justify-between items-center text-xs text-gray-400 mb-2">
            <span>DELIVERY ADDRESS</span>
            <span className="text-orange-500 font-semibold cursor-pointer">EDIT</span>
          </div>

          <div className="text-sm font-medium text-gray-700 mb-4">
            XYZ Apartment
          </div>

          <div className="flex justify-between text-base font-bold mb-1">
            <span>TOTAL:</span>
            <span>₹{total.toFixed(2)}</span>
          </div>
          
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold"
          onClick={ () => navigate("/payment-success")}
          >
            PLACE ORDER
          </button>

        </div>
      )}
    </div>
  );
};

export default Cart;
