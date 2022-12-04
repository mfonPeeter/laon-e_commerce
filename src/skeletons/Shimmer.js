const Shimmer = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full animate-[loading_2.5s_infinite]">
      <div className="w-1/2 h-full bg-[rgba(255,255,255,0.2)] -skew-x-[20deg] shadow-[0_0_30px_30px_rgba(255,255,255,0.05)]"></div>
    </div>
  );
};

export default Shimmer;
