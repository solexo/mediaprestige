const Logo = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src="/logos/logo.webp"
        alt="Media Prestige Logo"
        className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
      />

      <div className="flex flex-col">
        <div className="text-2xl font-bold tracking-wider text-white" style={{ fontFamily: 'Arial, sans-serif', letterSpacing: '0.15em' }}>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">MP</span>
        </div>
        <div className="text-[10px] tracking-widest text-gray-400 uppercase">Media Prestige</div>
      </div>
    </div>
  );
};

export default Logo;
