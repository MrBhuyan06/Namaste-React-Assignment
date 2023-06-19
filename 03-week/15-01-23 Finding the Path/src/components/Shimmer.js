const Shimmer = () => {
  return (
    <div className="shimmer-list">
      {Array(5)
        .fill("")
        .map((e, index) => {
          return <div key={index} className="shimmer-card"></div>;
        })}
    </div>
  );
};

export default Shimmer;
