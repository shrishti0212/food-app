import { useNavigate } from "react-router-dom";
import logo from "../images/Logo.png"; 

const SplashScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white font-nunito px-6">
      
      <img src={logo} alt="App Logo" className="size-80 animate-slide-down" />

      
      <h1 className="text-4xl font-bold mb-2 text-center font-nunito">Welcome to FoodieHub</h1>
      <p className="text-center text-gray-400 mb-10">Your cravings, delivered fast</p>

      
      <div className="w-full max-w-xs space-y-4">
        <button
          onClick={() => navigate("/login")}
          className="w-full bg-orange-500 py-3 rounded-xl font-bold"
        >
          SIGN IN
        </button>
        <button
          onClick={() => navigate("/register")}
          className="w-full border border-orange-500 text-orange-500 py-3 rounded-xl font-bold"
        >
          SIGN UP
        </button>
      </div>
    </div>
  );
};

export default SplashScreen;
