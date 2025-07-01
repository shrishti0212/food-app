const Shimmer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
      {Array(8)
        .fill("")
        .map((_, i) => (
          <div
            key={i}
            className="h-40 bg-gray-200 rounded-lg animate-pulse"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
