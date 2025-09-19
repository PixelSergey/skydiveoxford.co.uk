const CloudBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main sky background */}
      <div className="absolute inset-0 bg-horizon-gradient" />
      
      {/* Floating cloud elements */}
      <div className="absolute top-20 left-10 w-32 h-16 bg-cloud-gradient rounded-full opacity-60 animate-float" />
      <div className="absolute top-40 right-20 w-24 h-12 bg-cloud-gradient rounded-full opacity-50 animate-float-delayed" />
      <div className="absolute top-32 left-1/3 w-28 h-14 bg-cloud-gradient rounded-full opacity-40 animate-float" />
      <div className="absolute top-60 right-1/3 w-20 h-10 bg-cloud-gradient rounded-full opacity-45 animate-float-delayed" />
      
      {/* Larger background clouds */}
      <div className="absolute -top-10 -left-20 w-64 h-32 bg-cloud-gradient rounded-full opacity-30 animate-float" />
      <div className="absolute -top-5 -right-24 w-72 h-36 bg-cloud-gradient rounded-full opacity-25 animate-float-delayed" />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />
    </div>
  );
};

export default CloudBackground;