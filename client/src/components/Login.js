import { useNavigate } from "react-router-dom";
import { useState } from "react";
import eye from "../images/eye.png"
import { useDispatch } from "react-redux";
import { loginUser } from "../utils/userSlice";
import axios from "../api/axios";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail ] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () =>{
    try{

      const res= await axios.post("/auth/login", {email, password});
      const {user, token} = res.data;

      localStorage.setItem("token", token);

      dispatch(loginUser(user));

      navigate("/home");

    }catch(error){
      console.error(error);
      setError(error?.response?.data?.message || "Login Failed");
    }
  }


   return (
    <div className="min-h-screen flex flex-col bg-black text-white font-nunito">
      <div className="h-[180px] flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold mb-1 mt-10 font-nunito">Sign In</h2>
        <p className="text-lg text-center text-gray-400 mt-1">
          Please sign in to your existing account
        </p>
      </div>

      <div className="flex-grow" />

      <div className="w-full bg-white text-black rounded-t-3xl p-6 py-20">
        {error && (
          <p className="text-center text-red-500 mb-4 text-sm">{error}</p>
        )}

        <label className="block text-xs font-semibold mb-1">EMAIL</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@gmail.com"
          className="w-full p-3 mb-4 rounded-xl bg-gray-100 outline-none"
        />

        <label className="block text-xs font-semibold mb-1">PASSWORD</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full p-3 mb-2 rounded-xl bg-gray-100 outline-none"
          />
          <span
            className="absolute right-3 top-3 cursor-pointer text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            <img src={eye} alt="toggle" />
          </span>
        </div>

        <div className="flex justify-between items-center mb-4 text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-orange-500" />
            Remember me
          </label>
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-orange-500 text-white py-3 rounded-xl font-bold"
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
      </div>
    </div>
  );
};

export default Login;