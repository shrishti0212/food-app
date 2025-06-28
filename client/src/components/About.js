const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-10">
      {/* Welcome Heading */}
      <h3 className="font-bold text-2xl sm:text-3xl font-serif text-center text-orange-500 mb-6">
        WELCOME TO NOMNOMNOW!!
      </h3>

      {/* About Message */}
      <p className="font-serif text-base sm:text-lg leading-relaxed text-center mb-6">
        We crafted this app to serve you delicious food with a side of love and happiness! 🍔❤️ <br />
        Each bite is made to bring a smile to your face and warmth to your heart. 😊🍕 <br />
        Let us be your go-to place for food that feels like a hug! 🥗💖🍔❤️
      </p>

      {/* Contact Note */}
      <p className="font-serif text-center text-gray-600 mb-6">
        In case of trouble, feel free to contact us!
      </p>

      {/* Support Card */}
      <div className="max-w-sm mx-auto bg-gray-50 border border-gray-200 shadow-md rounded-lg p-4">
        <h3 className="font-bold text-lg text-purple-700 mb-2 text-center">Customer Support</h3>
        <p className="font-serif text-center text-gray-800 mb-1">📞 1234567890</p>
        <p className="font-serif text-center text-gray-800">📧 nomnomnow@gmail.com</p>
      </div>
    </div>
  );
};

export default About;
