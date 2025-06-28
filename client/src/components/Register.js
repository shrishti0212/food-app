import { useNavigate } from "react-router-dom";
import { useState } from "react";
import eye from "../images/eye.png"

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-nunito">
      {/* Top dark section */}
      <div className="h-[180px] flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold mb-1 font-nunito mt-10">Sign Up</h2>
        <p className="text-lg text-center font-nunito text-gray-400 mt-1">Create your new account</p>
      </div>

      {/* Spacer to push form to bottom */}
      <div className="flex-grow" />

      {/* White card at bottom */}
      <div className="w-full bg-white text-black rounded-t-3xl p-6 py-20">
        <label className="block text-xs font-semibold mb-1">NAME</label>
        <input
          type="text"
          placeholder="Your name"
          className="w-full p-3 mb-4 rounded-xl bg-gray-100 outline-none"
        />

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
            className="w-full p-3 mb-4 rounded-xl bg-gray-100 outline-none"
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

        <button className="w-full bg-orange-500 text-white py-3 rounded-xl font-bold"
        onClick={() => navigate("/home")}
        >
          SIGN UP
        </button>

        <p className="text-center text-sm mt-6">
          Already have an account?{" "}
          <span
            className="text-orange-500 font-bold cursor-pointer"
            onClick={() => navigate("/login")}
          >
            SIGN IN
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
