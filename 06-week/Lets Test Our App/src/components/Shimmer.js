const Shimmer = () => {
  return (
    <div className="restaurant-list container flex gap-4 flex-wrap mt-6 justify-center mx-auto border-2">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div
            key={index}
            className="shimmer-card w-[350] hover:border-2 p-4  bg-gray-200 h-[300] "
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
