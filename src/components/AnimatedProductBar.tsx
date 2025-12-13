import { useEffect, useLayoutEffect, useRef } from 'react';
import { products } from '../data/products';

const AnimatedProductBar = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const scrollElement = scrollRef.current;
      if (!scrollElement) return;

      const scrollWidth = scrollElement.scrollWidth;
      const clientWidth = scrollElement.clientWidth;

      // Start from the right
      scrollElement.scrollLeft = scrollWidth - clientWidth;

      const productItems = scrollElement.querySelectorAll('.product-item');

      const updateItems = () => {
        const center = scrollElement.scrollLeft + scrollElement.clientWidth / 2;
        productItems.forEach((item) => {
          const rect = item.getBoundingClientRect();
          const containerRect = scrollElement.getBoundingClientRect();
          const itemCenter = rect.left + rect.width / 2 - containerRect.left + scrollElement.scrollLeft;
          const distance = Math.abs(itemCenter - center);
          const maxDistance = scrollElement.clientWidth / 2;
          const factor = Math.max(0, 1 - distance / maxDistance);
          const scale = 1 + factor * 0.5;
          const opacity = 0.6 + factor * 0.4;
          (item as HTMLElement).style.transform = `scale(${scale})`;
          (item as HTMLElement).style.opacity = `${opacity}`;
        });
      };

      updateItems(); // Initial update

      const animate = () => {
        if (scrollElement.scrollLeft <= 0) {
          scrollElement.scrollLeft = scrollWidth - clientWidth;
        } else {
          scrollElement.scrollLeft -= 1;
        }
        updateItems();
      };

      const interval = setInterval(animate, 100);
      return () => clearInterval(interval);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="py-8 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="relative overflow-hidden">
        <div ref={scrollRef} className="flex gap-8 py-4 px-4 overflow-x-auto scrollbar-hide">
            {/* Duplicate products for seamless loop */}
            {[...products, ...products].map((product, index) => (
              <div
                key={`${product.id}-${index}`}
                className="product-item flex-shrink-0 group cursor-pointer transform transition-all duration-300 hover:scale-110"
              >
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-3 rounded-lg shadow-2xl border border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300 hover:shadow-yellow-400/20">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-16 h-16 object-contain mb-2 filter brightness-110 drop-shadow-lg"
                  />
                  <div className="text-white text-xs font-bold text-center truncate max-w-20 font-orbitron">
                    {product.name}
                  </div>
                </div>
              </div>
            ))}
          </div>

        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black/90 to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black/90 to-transparent pointer-events-none z-10" />

        {/* Glowing line effect */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-pulse" />
      </div>
    </div>
  );
};

export default AnimatedProductBar;