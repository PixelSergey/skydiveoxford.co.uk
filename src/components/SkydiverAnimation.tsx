import airplaneImg from "@/assets/airplane.png";
import parachuteImg from "@/assets/parachute.png";

const SkydiverAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
      {/* Skydiver 1 - Falls to the left */}
      <div className="absolute left-1/4 animate-skydive-left">
        <img src={parachuteImg} alt="Parachute" className="w-8 h-8" />
      </div>
      
      {/* Skydiver 2 - Falls to the right */}
      <div className="absolute left-2/3 animate-skydive-right">
        <img src={parachuteImg} alt="Parachute" className="w-8 h-8" />
      </div>
      
      {/* Skydiver 3 - Falls straight down */}
      <div className="absolute left-1/2 animate-skydive-center">
        <img src={parachuteImg} alt="Parachute" className="w-8 h-8" />
      </div>
      
      {/* Single airplane - Flies across the screen */}
      <div className="absolute top-24 animate-airplane-cross">
        <img src={airplaneImg} alt="Airplane" className="w-12 h-12" />
      </div>
    </div>
  );
};

export default SkydiverAnimation;