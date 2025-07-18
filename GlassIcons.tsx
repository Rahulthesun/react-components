import React from "react";

export interface GlassServiceItem {
  icon: React.ReactElement;
  color: string;
  title: string;
  description: string;
  link?: string;
  customClass?: string;
  image?: string;
}

export interface GlassServiceCarouselProps {
  items: GlassServiceItem[];
  className?: string;
  title?: string;
  subtitle?: string;
}

const gradientMapping: Record<string, string> = {
  blue: "linear-gradient(135deg, hsl(223, 90%, 50%), hsl(208, 90%, 50%))",
  purple: "linear-gradient(135deg, hsl(283, 90%, 50%), hsl(268, 90%, 50%))",
  red: "linear-gradient(135deg, hsl(3, 90%, 50%), hsl(348, 90%, 50%))",
  indigo: "linear-gradient(135deg, hsl(253, 90%, 50%), hsl(238, 90%, 50%))",
  orange: "linear-gradient(135deg, hsl(43, 90%, 50%), hsl(28, 90%, 50%))",
  green: "linear-gradient(135deg, hsl(142, 85%, 45%), hsl(158, 80%, 40%))",
  teal: "linear-gradient(135deg, hsl(178, 90%, 50%), hsl(190, 90%, 50%))",
  pink: "linear-gradient(135deg, hsl(323, 90%, 50%), hsl(338, 90%, 50%))",
};

const GlassServiceCarousel: React.FC<GlassServiceCarouselProps> = ({ 
  items, 
  className, 
  title = "Our Services",
  subtitle = "Discover what we can do for you"
}) => {
  const getBackgroundStyle = (color: string): React.CSSProperties => {
    if (gradientMapping[color]) {
      return { background: gradientMapping[color] };
    }
    return { background: color };
  };

  return (
    <div className={`w-full max-w-5xl mx-auto px-4 py-12 ${className || ""}`}>
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:grid-rows-2 gap-10 max-w-4xl mx-auto">
        {items.map((item, index) => {
          const ServiceCard = ({ children }: { children: React.ReactNode }) => (
            <div className={`service-card group ${item.customClass || ""}`}>
              {children}
            </div>
          );

          const cardContent = (
            <ServiceCard>
              {/* Dark glass background */}
              <div className="absolute inset-0 bg-black/20 backdrop-blur-xl rounded-2xl border border-white/10" />
              
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />
              
              {/* Colored accent - very subtle */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-5 group-hover:opacity-10 transition-opacity duration-300"
                style={getBackgroundStyle(item.color)}
              />

              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col">
                {/* Image if provided */}
                {item.image && (
                  <div className="mb-6 flex justify-center">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-20 h-20 object-cover rounded-xl shadow-lg" 
                    />
                  </div>
                )}

                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300"
                    style={getBackgroundStyle(item.color)}
                  >
                    <span className="text-white text-2xl">
                      {item.icon}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-4 text-center">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-center leading-relaxed flex-grow">
                  {item.description}
                </p>

                {/* Hover effect indicator */}
                <div className="mt-6 flex justify-center">
                  <div 
                    className="w-12 h-1 rounded-full opacity-30 group-hover:opacity-70 transition-opacity duration-300"
                    style={getBackgroundStyle(item.color)}
                  />
                </div>
              </div>

              {/* Subtle border glow effect on hover */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(45deg, transparent, ${gradientMapping[item.color] || item.color}, transparent)`,
                  padding: '1px'
                }}
              />

              {/* Colored border on hover */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-60 transition-all duration-300 border-2"
                style={{
                  borderColor: gradientMapping[item.color] ? item.color : item.color,
                  boxShadow: `0 0 20px ${gradientMapping[item.color] ? item.color : item.color}30`
                }}
              />
            </ServiceCard>
          );

          return item.link ? (
            <a 
              href={item.link} 
              key={index} 
              className="block transform hover:scale-[1.02] transition-transform duration-300"
              style={{ textDecoration: 'none' }}
            >
              {cardContent}
            </a>
          ) : (
            <button
              key={index}
              type="button"
              className="block w-full transform hover:scale-[1.02] transition-transform duration-300 text-left"
              aria-label={item.title}
            >
              {cardContent}
            </button>
          );
        })}
      </div>

      <style jsx>{`
        .service-card {
          position: relative;
          min-height: 320px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .service-card:hover {
          transform: translateY(-4px);
        }
      `}</style>
    </div>
  );
};

export default GlassServiceCarousel;