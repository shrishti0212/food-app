import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../utils/userSlice";
import axios from "../api/axios";
import eye from "../images/eye.png";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    if (!name || !email || !password) {
      setError("All fields are required.");
      return;
    }

    try {
      const res = await axios.post("/auth/register", { name, email, password });
      const { user, token } = res.data;

      
      localStorage.setItem("token", token);

     
      dispatch(loginUser(user));

      navigate("/home");
    } catch (err) {
      console.error(err);
      setError(err?.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-nunito">
   
      <div className="h-[180px] flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold mb-1 font-nunito mt-10">Sign Up</h2>
        <p className="text-lg text-center text-gray-400 mt-1">Create your new account</p>
      </div>

      <div className="flex-grow" />

  
      <div className="w-full bg-white text-black rounded-t-3xl p-6 py-20">
        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        <label className="block text-xs font-semibold mb-1">NAME</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="w-full p-3 mb-4 rounded-xl bg-gray-100 outline-none"
        />

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
            className="w-full p-3 mb-4 rounded-xl bg-gray-100 outline-none"
          />
          <span
            className="absolute right-3 top-3 cursor-pointer text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            <img src={eye} alt="Toggle" />
          </span>
        </div>

        <button
          onClick={handleRegister}
          className="w-full bg-orange-500 text-white py-3 rounded-xl font-bold"
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
