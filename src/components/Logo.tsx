const Logo = ({ className = '', textColor = 'text-white' }: { className?: string; textColor?: string }) => {
  return (
    <div className={`flex flex-col items-center gap-1 ${className}`}>
      <img
        src="/logos/logo.webp"
        alt="Media Prestige Logo"
        className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
      />
      <span className={`${textColor} font-orbitron font-bold text-xs sm:text-sm md:text-2xl tracking-wider -mt-1`}>
        MEDIA PRESTIGE
      </span>
    </div>
  );
};

export default Logo;
