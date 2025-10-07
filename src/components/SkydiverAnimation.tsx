import { useEffect, useState } from "react";
import airplaneImg from "@/assets/airplane.png";
import parachuteImg from "@/assets/parachute.png";

interface SkydiverConfig {
  startY: number;
  startX: number;
  duration: number;
}

const SkydiverAnimation = () => {
  const [activeAirplane, setActiveAirplane] = useState<'left-to-right' | 'right-to-left' | null>(null);
  const [activeSkydivers, setActiveSkydivers] = useState<{
    left: SkydiverConfig | null;
    right: SkydiverConfig | null;
    center: SkydiverConfig | null;
  }>({
    left: null,
    right: null,
    center: null
  });

  const generateRandomSkydiver = (): SkydiverConfig => ({
    startY: Math.random() * -100 - 50, // Between -50px and -150px
    startX: Math.random() * 100 - 50,   // Between -50px and +50px
    duration: Math.random() * 4 + 6     // Between 6s and 10s
  });

  useEffect(() => {
    const scheduleNextSkydivers = () => {
      // Deploy skydivers every 10 seconds
      setTimeout(() => {
        // Generate random configurations for all three skydivers
        const newSkydivers = {
          left: generateRandomSkydiver(),
          right: generateRandomSkydiver(),
          center: generateRandomSkydiver()
        };
        
        console.log('Deploying skydivers with configs:', newSkydivers); // Debug log
        setActiveSkydivers(newSkydivers);
        
        // Find the longest animation duration to know when to clear and schedule next
        const maxDuration = Math.max(
          newSkydivers.left.duration,
          newSkydivers.right.duration,
          newSkydivers.center.duration
        );
        
        // Clear skydivers after animations complete, then schedule next deployment
        setTimeout(() => {
          setActiveSkydivers({ left: null, right: null, center: null });
          scheduleNextSkydivers();
        }, maxDuration * 1000);
      }, 2000);
    };

    // Start first deployment immediately
    const initialSkydivers = {
      left: generateRandomSkydiver(),
      right: generateRandomSkydiver(),
      center: generateRandomSkydiver()
    };
    setActiveSkydivers(initialSkydivers);
    
    // Schedule the clearing and next deployment
    const maxDuration = Math.max(
      initialSkydivers.left.duration,
      initialSkydivers.right.duration,
      initialSkydivers.center.duration
    );
    
    setTimeout(() => {
      setActiveSkydivers({ left: null, right: null, center: null });
      scheduleNextSkydivers();
    }, maxDuration * 1000);

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

    // Start the first airplane immediately
    const firstDirection = Math.random() > 0.5 ? 'left-to-right' : 'right-to-left';
    setActiveAirplane(firstDirection);
    
    // After first animation completes, schedule the next one
    setTimeout(() => {
      setActiveAirplane(null);
      scheduleNextAirplane();
    }, 8000);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
      {/* Skydiver 1 - Falls to the left */}
      {activeSkydivers.left && (
        <div 
          className="absolute left-1/4 animate-skydive-left"
          style={{
            '--start-y': `${activeSkydivers.left.startY}px`,
            '--start-x': `${activeSkydivers.left.startX}px`,
            '--duration': `${activeSkydivers.left.duration}s`
          } as React.CSSProperties}
        >
          <img src={parachuteImg} alt="Parachute" className="w-8 h-8" />
        </div>
      )}
      
      {/* Skydiver 2 - Falls to the right */}
      {activeSkydivers.right && (
        <div 
          className="absolute left-2/3 animate-skydive-right"
          style={{
            '--start-y': `${activeSkydivers.right.startY}px`,
            '--start-x': `${activeSkydivers.right.startX}px`,
            '--duration': `${activeSkydivers.right.duration}s`
          } as React.CSSProperties}
        >
          <img src={parachuteImg} alt="Parachute" className="w-8 h-8" />
        </div>
      )}
      
      {/* Skydiver 3 - Falls straight down */}
      {activeSkydivers.center && (
        <div 
          className="absolute left-1/2 animate-skydive-center"
          style={{
            '--start-y': `${activeSkydivers.center.startY}px`,
            '--start-x': `${activeSkydivers.center.startX}px`,
            '--duration': `${activeSkydivers.center.duration}s`
          } as React.CSSProperties}
        >
          <img src={parachuteImg} alt="Parachute" className="w-8 h-8" />
        </div>
      )}
      
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