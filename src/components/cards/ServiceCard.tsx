import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface ServiceCardProps {
  service: {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
    link: string;
    category: string;
  };
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        delay: service.id * 0.1 % 0.5 // stagger effect
      }
    }
  };

  const getBorderColor = () => {
    switch (service.category) {
      case 'healthcare':
        return 'border-healthcare hover:border-healthcare-dark';
      case 'spa':
        return 'border-spa hover:border-spa-dark';
      default:
        return 'border-primary hover:border-primary-dark';
    }
  };

  const getHoverBg = () => {
    switch (service.category) {
      case 'healthcare':
        return 'group-hover:bg-healthcare/5';
      case 'spa':
        return 'group-hover:bg-spa/5';
      default:
        return 'group-hover:bg-primary/5';
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
    >
      <Link 
        to={service.link} 
        className={`group card border-2 border-transparent ${getBorderColor()} transition-all duration-300 h-full flex flex-col`}
      >
        <div className={`p-6 flex-grow ${getHoverBg()} transition-colors duration-300`}>
          <div className="mb-5">
            {service.icon}
          </div>
          <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
          <p className="text-gray-600 mb-4">{service.description}</p>
        </div>
        <div className="border-t border-gray-100 p-4 flex justify-between items-center">
          <span className="text-sm font-medium">Learn More</span>
          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
        </div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;