import { Link } from 'react-router-dom';

const CustomerSegments = () => {
  const segments = [
    {
      title: 'Pour votre maison',
      text: 'Home cinéma, multiroom, son d\'ambiance — transformez votre salon en expérience.',
      cta: 'Découvrir les solutions résidentielles',
      image: '/products/home.webp',
      link: '/products#residential'
    },
    {
      title: 'Pour votre établissement',
      text: 'Restaurant, café, hôtel, boutique — le bon son crée la bonne ambiance pour vos clients.',
      cta: 'Découvrir les solutions professionnelles',
      image: '/products/hotel.webp',
      link: '/products#professional'
    },
    {
      title: 'Pour vos événements',
      text: 'DJ, musiciens, événementiel — matériel portable puissant et fiable.',
      cta: 'Découvrir le matériel portable',
      image: '/products/conference.webp',
      link: '/products#portable'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {segments.map((segment, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 will-change-transform border border-gray-700/50 overflow-hidden"
            >
              {/* Image section */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={segment.image}
                  alt={segment.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              {/* Content section */}
              <div className="p-6 relative z-10">
                <h3 className="text-2xl font-bold text-white mb-3 font-orbitron">
                  {segment.title}
                </h3>
                <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                  {segment.text}
                </p>
                <Link
                  to={segment.link}
                  className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-semibold transition-colors duration-300 group-hover:gap-3"
                >
                  {segment.cta}
                  <svg
                    className="w-5 h-5 transform transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerSegments;
