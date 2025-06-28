const Contact = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-10">
      {/* Heading */}
      <h3 className="text-3xl sm:text-4xl font-bold font-serif text-orange-500 text-center mb-8">
        Contact Us Here
      </h3>

      {/* Form */}
      <form className="max-w-lg mx-auto bg-white p-6 rounded-lg space-y-4">
        <input
          type="text"
          className="w-full border border-gray-300 p-3 rounded-xl font-serif focus:outline-none focus:ring-2 focus:ring-orange-400"
          placeholder="Your Name"
        />

        <textarea
          rows="4"
          className="w-full border border-gray-300 p-3 rounded-xl font-serif focus:outline-none focus:ring-2 focus:ring-orange-400"
          placeholder="Your Message"
        />

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-3xl transition"
        >
          Submit
        </button>
      </form>

      {/* Support Info */}
      <div className="mt-12 text-center font-serif">
        <h2 className="text-xl font-bold text-purple-700 mb-2">Customer Support</h2>
        <p className="text-gray-700">📞 9123456789</p>
        <p className="text-gray-700">📧 nomnomnow@gmail.com</p>
      </div>
    </div>
  );
};

export default Contact;
