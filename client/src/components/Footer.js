
import logo from "../images/Logo.png"

const Footer = () => {
  return (
    <footer id="footer"  className="bg-black text-white px-6 py-12 mt-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto space-y-10 text-center sm:text-left">

       
        <div>
         
          <img  
          src={logo}
          className="size-28  mx-6"
          />

          <h2 className="text-4xl font-bold mb-2">
            Welcome to <span className="text-white">NomNomNow!</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto sm:mx-0">
            Designed to serve you your favourite food from your favourite restaurants — all at the lowest prices and fastest delivery. Just sit back and enjoy the taste!
          </p>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-2 text-white">Contact Us</h3>
          <p className="text-sm text-gray-400">Email: support@nomnomnow.com</p>
          <p className="text-sm text-gray-400">Phone: +91-9876543210</p>
          <p className="text-sm text-gray-400">Address: Liluah, Howrah, West Bengal</p>
        </div>

        
        <div className="text-xs text-gray-500 pt-4 border-t border-gray-700 mt-6">
          © {new Date().getFullYear()} NomNomNow. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
