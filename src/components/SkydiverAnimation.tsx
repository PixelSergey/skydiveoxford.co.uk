const SkydiverAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
      {/* Skydiver 1 - Falls to the left */}
      <div className="absolute left-1/4 animate-skydive-left">
        <div className="text-2xl">🪂</div>
      </div>
      
      {/* Skydiver 2 - Falls to the right */}
      <div className="absolute left-2/3 animate-skydive-right">
        <div className="text-2xl">🪂</div>
      </div>
      
      {/* Skydiver 3 - Falls straight down */}
      <div className="absolute left-1/2 animate-skydive-center">
        <div className="text-2xl">🪂</div>
      </div>
    </div>
  );
};

export default SkydiverAnimation;