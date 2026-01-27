const Logo = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src="/logos/logo.webp"
        alt="Media Prestige Logo"
        className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
      />
    </div>
  );
};

export default Logo;
