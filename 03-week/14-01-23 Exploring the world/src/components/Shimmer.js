const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(10)
        .fill("")
        .map((e, index) => {
          return (
            <div className="shimmer-body">
              <div className="shimmer-head"></div>
              <div className="shimmer-name"></div>
              <div className="shimmer-info"></div>
              <div className="shimmer-fotter"></div>
            </div>
          );
        })}
    </div>
  );
};
export default Shimmer;
