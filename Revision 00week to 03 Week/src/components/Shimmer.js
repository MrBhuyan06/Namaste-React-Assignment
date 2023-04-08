const Shimmer = () => {
  return (
    <div className=" p-4 w-full gap-5 justify-center border-0 flex flex-wrap ">
      {Array(10)
        .fill("")
        .map((item, index) => {
          return (
            <div className="" key={index}>
              <a class="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/420x260"
                />
              </a>
              <div class="mt-4">
                <h3 class=" bg-gray-500 text-gray-500 text-xs tracking-widest title-font mb-1">
                  Loading..
                </h3>
                <h2 class="bg-gray-500 text-gray-900 title-font text-lg font-medium">
                  Loading..
                </h2>
                <p class="bg-gray-500 mt-1">Loading..</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default Shimmer;
