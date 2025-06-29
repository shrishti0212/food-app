import { useNavigate } from "react-router-dom";
import deliveryLogo from "../images/Delivery.png"

const PaymentSuccessful = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-6">
     
      <img
        src={deliveryLogo}
        alt="Payment Success"
        className=" mb-6"
      />

     
      <h2 className="text-xl font-bold text-gray-900 mb-2 font-serif">Congratulations!</h2>
      <p className="text-sm text-gray-600 mb-8 font-nunito">
        You successfully made a payment, enjoy our service!
      </p>

     
      <button
        onClick={() => navigate("/home")}
        className="w-full max-w-xs bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold shadow"
      >
        TRACK ORDER
      </button>
    </div>
  );
};

export default PaymentSuccessful;
