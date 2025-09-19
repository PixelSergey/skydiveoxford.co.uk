import { useEffect, useState } from "react";
import airplaneImg from "@/assets/airplane.png";
import parachuteImg from "@/assets/parachute.png";

interface SkydiverPositions {
  startY: number;
  startX: number;
}

const SkydiverAnimation = () => {
  const [activeAirplane, setActiveAirplane] = useState<'left-to-right' | 'right-to-left' | null>(null);
  const [skydiverPositions, setSkydiverPositions] = useState<{
    left: SkydiverPositions;
    right: SkydiverPositions;
    center: SkydiverPositions;
  }>({
    left: { startY: -80, startX: 0 },
    right: { startY: -30, startX: 0 },
    center: { startY: -120, startX: 0 }
  });

  const generateRandomPositions = () => {
    return {
      left: {
        startY: Math.random() * -100 - 50, // Between -50px and -150px
        startX: Math.random() * 100 - 50   // Between -50px and +50px
      },
      right: {
        startY: Math.random() * -100 - 50,
        startX: Math.random() * 100 - 50
      },
      center: {
        startY: Math.random() * -100 - 50,
        startX: Math.random() * 100 - 50
      }
    };
  };

  useEffect(() => {
    // Set initial random positions
    setSkydiverPositions(generateRandomPositions());

    // Update positions every 8 seconds (animation duration)
    const positionInterval = setInterval(() => {
      setSkydiverPositions(generateRandomPositions());
    }, 8000);

    const scheduleNextAirplane = () => {
      // Random delay between 10-15 seconds before showing airplane
      const delay = Math.random() * 5000 + 10000;
      
      setTimeout(() => {
        // Randomly choose direction
        const direction = Math.random() > 0.5 ? 'left-to-right' : 'right-to-left';
        console.log('Airplane direction:', direction); // Debug log
        setActiveAirplane(direction);
        
        // Animation duration is 8 seconds, then reset and schedule next
        setTimeout(() => {
          setActiveAirplane(null);
          scheduleNextAirplane();
        }, 8000);
      }, delay);
    };

    // Start the first airplane immediately with its own delay
    scheduleNextAirplane();

    return () => {
      clearInterval(positionInterval);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
      {/* Skydiver 1 - Falls to the left */}
      <div 
        className="absolute left-1/4 animate-skydive-left"
        style={{
          transform: `translateY(${skydiverPositions.left.startY}px) translateX(${skydiverPositions.left.startX}px)`
        }}
      >
        <img src={parachuteImg} alt="Parachute" className="w-8 h-8" />
      </div>
      
      {/* Skydiver 2 - Falls to the right */}
      <div 
        className="absolute left-2/3 animate-skydive-right"
        style={{
          transform: `translateY(${skydiverPositions.right.startY}px) translateX(${skydiverPositions.right.startX}px)`
        }}
      >
        <img src={parachuteImg} alt="Parachute" className="w-8 h-8" />
      </div>
      
      {/* Skydiver 3 - Falls straight down */}
      <div 
        className="absolute left-1/2 animate-skydive-center"
        style={{
          transform: `translateY(${skydiverPositions.center.startY}px) translateX(${skydiverPositions.center.startX}px)`
        }}
      >
        <img src={parachuteImg} alt="Parachute" className="w-8 h-8" />
      </div>
      
      {/* Dynamic airplane with random delays */}
      {activeAirplane === 'left-to-right' && (
        <div className="absolute top-24 left-0 animate-airplane-cross">
          <img src={airplaneImg} alt="Airplane" className="w-12 h-12" />
        </div>
      )}
      
      {activeAirplane === 'right-to-left' && (
        <div className="absolute top-32 left-0 animate-airplane-cross-reverse">
          <img src={airplaneImg} alt="Airplane" className="w-12 h-12" />
        </div>
      )}
    </div>
  );
};

export default SkydiverAnimation;