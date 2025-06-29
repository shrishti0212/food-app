import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../utils/userSlice"; 


const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);
  const currentUser = useSelector((store) => store.user.currentUser);
  const dispatch = useDispatch();



  return (
    <header className="bg-white sticky top-0 z-50 shadow-md">
      <div className="flex justify-between items-center px-4 py-7 md:px-8">
        
        <div className="flex items-center gap-3">
       
          <button
            className="text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          
          <div className="flex flex-col text-left">
            <span className="text-[10px] uppercase tracking-wide font-bold text-orange-500 font-montserrat">
              Deliver To
            </span>
            <span className="text-sm font-semibold text-gray-800 font-nunito">
              XYZ Apartment
            </span>
          </div>
        </div>

        
        <div className="flex items-center gap-4">
          <Link to="/cart" className="relative" title="View Cart">
            <ShoppingCart className="w-6 h-6 text-gray-700" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </div>


{menuOpen && (
  <div className="absolute top-full left-0 w-full bg-white shadow-md border-t border-gray-200 z-50">
    <ul className="flex flex-col space-y-3 font-medium text-gray-700 px-4 py-4">
      <Link to="/home" onClick={() => setMenuOpen(false)}>Home</Link>
      <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
      <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
      <Link to="/grocery" onClick={() => setMenuOpen(false)}>Grocery</Link>
      <Link to="/cart" onClick={() => setMenuOpen(false)}>
        Cart ({cartItems.length})
      </Link>
  {currentUser ? (
  <button
    onClick={() => {
      dispatch(logoutUser());
      setMenuOpen(false);
      }}
      className="bg-orange-500 hover:bg-orange-600 text-white w-full py-2 rounded"
      >
    Logout
  </button>
    ) : (
  <Link
    to="/login"
    onClick={() => setMenuOpen(false)}
    className="bg-orange-500 hover:bg-orange-600 text-white text-center py-2 rounded"
  >
   Login
  </Link>
  )}

  </ul>
  </div>
    )}
    </header>
  );
};

export default Header;
