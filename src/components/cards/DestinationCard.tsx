import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Clock, MapPin } from 'lucide-react';

interface DestinationCardProps {
  destination: {
    id: number;
    name: string;
    image: string;
    rating: number;
    reviews: number;
    price: string;
    duration: string;
  };
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.4,
        delay: destination.id * 0.1 % 0.4 // stagger effect
      }
    },
    hover: { 
      y: -8,
      transition: { 
        duration: 0.3
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
    >
      <Link to={`/destinations/${destination.id}`} className="block h-full">
        <div className="card h-full flex flex-col overflow-hidden">
          <div className="relative aspect-[3/2] overflow-hidden">
            <img 
              src={destination.image} 
              alt={destination.name}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent h-1/3"></div>
            <div className="absolute bottom-3 left-3 flex items-center text-white">
              <span className="flex items-center bg-primary/80 px-2 py-1 rounded-lg text-sm">
                <Star className="w-4 h-4 mr-1 fill-current text-yellow-400 stroke-yellow-400" />
                {destination.rating}
              </span>
              <span className="ml-2 text-sm">({destination.reviews} reviews)</span>
            </div>
          </div>
          
          <div className="p-4 flex-grow flex flex-col">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">{destination.name}</h3>
            
            <div className="flex items-center text-gray-600 mb-2 mt-auto">
              <Clock className="w-4 h-4 mr-2" />
              <span className="text-sm">{destination.duration}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-primary">
                {destination.price}
                <span className="text-sm font-normal text-gray-600">/person</span>
              </span>
              <span className="text-sm py-1 px-3 bg-green-100 text-green-800 rounded-full">
                Available
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default DestinationCard;