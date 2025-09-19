const CloudBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main sky background */}
      <div className="absolute inset-0 bg-horizon-gradient" />
      
      {/* Foreground floating clouds */}
      <div className="absolute top-16 left-8 w-36 h-20 bg-cloud-gradient opacity-70 animate-float cloud-shape-1" />
      <div className="absolute top-36 right-16 w-28 h-16 bg-cloud-gradient opacity-60 animate-float-delayed cloud-shape-2" />
      <div className="absolute top-28 left-1/3 w-32 h-18 bg-cloud-gradient opacity-55 animate-float cloud-shape-3" />
      <div className="absolute top-52 right-1/3 w-24 h-14 bg-cloud-gradient opacity-65 animate-float-delayed cloud-shape-4" />
      <div className="absolute top-44 left-2/3 w-30 h-16 bg-cloud-gradient opacity-50 animate-float cloud-shape-5" />
      
      {/* Mid-layer clouds */}
      <div className="absolute top-20 left-1/4 w-40 h-22 bg-cloud-gradient opacity-45 animate-float-delayed cloud-shape-2" />
      <div className="absolute top-56 right-1/4 w-35 h-18 bg-cloud-gradient opacity-40 animate-float cloud-shape-1" />
      <div className="absolute top-64 left-1/2 w-26 h-15 bg-cloud-gradient opacity-48 animate-float-delayed cloud-shape-4" />
      
      {/* Larger background clouds */}
      <div className="absolute -top-10 -left-20 w-72 h-36 bg-cloud-gradient opacity-35 animate-float cloud-shape-3" />
      <div className="absolute -top-5 -right-24 w-80 h-40 bg-cloud-gradient opacity-30 animate-float-delayed cloud-shape-1" />
      <div className="absolute top-8 left-1/2 w-68 h-34 bg-cloud-gradient opacity-25 animate-float cloud-shape-5" />
      <div className="absolute top-72 -right-16 w-60 h-30 bg-cloud-gradient opacity-28 animate-float-delayed cloud-shape-2" />
      
      {/* Additional scattered clouds */}
      <div className="absolute top-78 left-16 w-22 h-12 bg-cloud-gradient opacity-42 animate-float cloud-shape-4" />
      <div className="absolute top-12 right-2/3 w-25 h-14 bg-cloud-gradient opacity-38 animate-float-delayed cloud-shape-3" />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/15" />
    </div>
  );
};

export default CloudBackground;