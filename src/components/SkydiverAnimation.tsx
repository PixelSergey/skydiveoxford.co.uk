import { useEffect, useState } from "react";
import airplaneImg from "@/assets/airplane.png";
import parachuteImg from "@/assets/parachute.png";

interface SkydiverPositions {
  startY: number;
  startX: number;
  duration: number;
}

const SkydiverAnimation = () => {
  const [activeAirplane, setActiveAirplane] = useState<'left-to-right' | 'right-to-left' | null>(null);
  const [skydiverPositions, setSkydiverPositions] = useState<{
    left: SkydiverPositions;
    right: SkydiverPositions;
    center: SkydiverPositions;
  }>({
    left: { startY: -80, startX: 0, duration: 8 },
    right: { startY: -30, startX: 0, duration: 8 },
    center: { startY: -120, startX: 0, duration: 8 }
  });

  const generateRandomPositions = () => {
    return {
      left: {
        startY: Math.random() * -100 - 50, // Between -50px and -150px
        startX: Math.random() * 100 - 50,   // Between -50px and +50px
        duration: Math.random() * 4 + 6     // Between 6s and 10s
      },
      right: {
        startY: Math.random() * -100 - 50,
        startX: Math.random() * 100 - 50,
        duration: Math.random() * 4 + 6
      },
      center: {
        startY: Math.random() * -100 - 50,
        startX: Math.random() * 100 - 50,
        duration: Math.random() * 4 + 6
      }
    };
  };

  useEffect(() => {
    // Set initial random positions
    const initialPositions = generateRandomPositions();
    setSkydiverPositions(initialPositions);

    const scheduleNextCycle = (positions: typeof initialPositions) => {
      // Find the maximum duration among all skydivers
      const maxDuration = Math.max(
        positions.left.duration,
        positions.right.duration,
        positions.center.duration
      );

      // Wait for all animations to complete, then start next cycle
      setTimeout(() => {
        const newPositions = generateRandomPositions();
        setSkydiverPositions(newPositions);
        scheduleNextCycle(newPositions);
      }, maxDuration * 1000); // Convert to milliseconds
    };

    // Start the cycle with initial positions
    scheduleNextCycle(initialPositions);

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
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
      {/* Skydiver 1 - Falls to the left */}
      <div 
        className="absolute left-1/4 animate-skydive-left"
        style={{
          '--start-y': `${skydiverPositions.left.startY}px`,
          '--start-x': `${skydiverPositions.left.startX}px`,
          '--duration': `${skydiverPositions.left.duration}s`
        } as React.CSSProperties}
      >
        <img src={parachuteImg} alt="Parachute" className="w-8 h-8" />
      </div>
      
      {/* Skydiver 2 - Falls to the right */}
      <div 
        className="absolute left-2/3 animate-skydive-right"
        style={{
          '--start-y': `${skydiverPositions.right.startY}px`,
          '--start-x': `${skydiverPositions.right.startX}px`,
          '--duration': `${skydiverPositions.right.duration}s`
        } as React.CSSProperties}
      >
        <img src={parachuteImg} alt="Parachute" className="w-8 h-8" />
      </div>
      
      {/* Skydiver 3 - Falls straight down */}
      <div 
        className="absolute left-1/2 animate-skydive-center"
        style={{
          '--start-y': `${skydiverPositions.center.startY}px`,
          '--start-x': `${skydiverPositions.center.startX}px`,
          '--duration': `${skydiverPositions.center.duration}s`
        } as React.CSSProperties}
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