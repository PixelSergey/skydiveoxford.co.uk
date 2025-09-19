import { useEffect, useState } from "react";
import airplaneImg from "@/assets/airplane.png";
import parachuteImg from "@/assets/parachute.png";

const SkydiverAnimation = () => {
  const [activeAirplane, setActiveAirplane] = useState<'left-to-right' | 'right-to-left' | null>(null);

  useEffect(() => {
    const scheduleNextAirplane = () => {
      // Random delay between 20-60 seconds
      const delay = Math.random() * 40000 + 20000;
      
      setTimeout(() => {
        // Randomly choose direction
        const direction = Math.random() > 0.5 ? 'left-to-right' : 'right-to-left';
        setActiveAirplane(direction);
        
        // Animation duration is 8 seconds, then reset and schedule next
        setTimeout(() => {
          setActiveAirplane(null);
          scheduleNextAirplane();
        }, 8000);
      }, delay);
    };

    // Start the first airplane after initial delay
    const initialDelay = Math.random() * 15000 + 10000; // 10-25 seconds
    setTimeout(() => {
      scheduleNextAirplane();
    }, initialDelay);
  }, []);

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
      
      {/* Dynamic airplane with random delays */}
      {activeAirplane === 'left-to-right' && (
        <div className="absolute top-24 animate-airplane-cross" style={{ left: '-120px' }}>
          <img src={airplaneImg} alt="Airplane" className="w-12 h-12" />
        </div>
      )}
      
      {activeAirplane === 'right-to-left' && (
        <div className="absolute top-32 animate-airplane-cross-reverse" style={{ left: 'calc(100vw + 120px)' }}>
          <img src={airplaneImg} alt="Airplane" className="w-12 h-12" />
        </div>
      )}
    </div>
  );
};

export default SkydiverAnimation;