import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: {
    id: number;
    name: string;
    avatar: string;
    testimonial: string;
    rating: number;
  };
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        delay: testimonial.id * 0.15 % 0.45 // stagger effect
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
      className="card p-6 h-full flex flex-col"
    >
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img 
            src={testimonial.avatar} 
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
          <div className="flex mt-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i}
                className={`w-4 h-4 ${
                  i < testimonial.rating 
                    ? 'text-yellow-400 fill-current' 
                    : 'text-gray-300'
                }`} 
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mb-4 flex-grow">
        <div className="relative">
          <div className="text-6xl font-serif text-primary/20 absolute -top-6 -left-2">"</div>
          <p className="text-gray-600 relative z-10">
            {testimonial.testimonial}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;