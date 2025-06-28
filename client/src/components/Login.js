import { useNavigate } from "react-router-dom";
import { useState } from "react";
import eye from "../images/eye.png"

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-nunito">
      {/* Top dark section */}
      <div className="h-[180px] flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold mb-1 mt-10 font-nunito">Sign In</h2>
        <p className="text-lg text-center text-gray-400 mt-1">
          Please sign in to your existing account
        </p>
      </div>

      <div className="flex-grow" />

      {/* White card at bottom */}
      <div className="w-full bg-white text-black rounded-t-3xl p-6 py-20">
        <label className="block text-xs font-semibold mb-1">EMAIL</label>
        <input
          type="email"
          placeholder="example@gmail.com"
          className="w-full p-3 mb-4 rounded-xl bg-gray-100 outline-none"
        />

        <label className="block text-xs font-semibold mb-1">PASSWORD</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            className="w-full p-3 mb-2 rounded-xl bg-gray-100 outline-none"
          />
          <span
            className="absolute right-3 top-3 cursor-pointer text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            <img
            src={eye}
            />
          </span>
        </div>

        {/* Remember Me & Forgot Password Row */}
        <div className="flex justify-between items-center mb-4 text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-orange-500" />
            Remember me
          </label>
        </div>

        <button className="w-full bg-orange-500 text-white py-3 rounded-xl font-bold"
        onClick={() => navigate("/home")}
        >
          SIGN IN
        </button>

        <p className="text-center text-sm mt-6">
          Don’t have an account?{" "}
          <span
            className="text-orange-500 font-bold cursor-pointer"
            onClick={() => navigate("/register")}
          >
            SIGN UP
          </span>
        </p>

        {/* Social login row (optional) */}
        <div className="flex items-center justify-center gap-6 mt-6">
          <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white text-xl font-bold">f</div>
          <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-white text-xl font-bold">t</div>
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white text-xl font-bold"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
