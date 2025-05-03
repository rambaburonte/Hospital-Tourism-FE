import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Star, Calendar, Clock, MapPin, Users, Stethoscope, Space as Spa, FlaskRound as Flask, Pill, Plane, Building } from 'lucide-react';
import ServiceCard from '../components/cards/ServiceCard';
import DestinationCard from '../components/cards/DestinationCard';
import TestimonialCard from '../components/cards/TestimonialCard';
import SearchForm from '../components/forms/SearchForm';

const HomePage = () => {
  // Sample data for featured services
  const featuredServices = [
    {
      id: 1,
      title: 'Doctor Consultation',
      description: 'Connect with top specialists for online or in-person consultations',
      icon: <Stethoscope className="w-10 h-10 text-healthcare" />,
      link: '/doctors',
      category: 'healthcare'
    },
    {
      id: 2,
      title: 'Spa & Physiotherapy',
      description: 'Rejuvenate with therapeutic massages and wellness treatments',
      icon: <Spa className="w-10 h-10 text-spa" />,
      link: '/spa-services',
      category: 'healthcare'
    },
    {
      id: 3,
      title: 'Lab Tests',
      description: 'Book diagnostic tests with home sample collection',
      icon: <Flask className="w-10 h-10 text-healthcare" />,
      link: '/lab-tests',
      category: 'healthcare'
    },
    {
      id: 4,
      title: 'Pharmacy',
      description: 'Order medicines with quick delivery to your doorstep',
      icon: <Pill className="w-10 h-10 text-healthcare" />,
      link: '/pharmacy',
      category: 'healthcare'
    },
    {
      id: 5,
      title: 'Flight Booking',
      description: 'Find the best deals on flights worldwide',
      icon: <Plane className="w-10 h-10 text-primary" />,
      link: '/flights',
      category: 'travel'
    },
    {
      id: 6,
      title: 'Hotel Booking',
      description: 'Discover and book accommodations for your perfect stay',
      icon: <Building className="w-10 h-10 text-primary" />,
      link: '/hotels',
      category: 'travel'
    }
  ];

  // Sample data for top destinations
  const topDestinations = [
    {
      id: 1,
      name: 'Bali, Indonesia',
      image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg',
      rating: 4.8,
      reviews: 254,
      price: '$899',
      duration: '7 days',
    },
    {
      id: 2,
      name: 'Santorini, Greece',
      image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg',
      rating: 4.9,
      reviews: 312,
      price: '$1,199',
      duration: '8 days',
    },
    {
      id: 3,
      name: 'Maldives',
      image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg',
      rating: 4.9,
      reviews: 196,
      price: '$1,499',
      duration: '6 days',
    },
    {
      id: 4,
      name: 'Swiss Alps',
      image: 'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg',
      rating: 4.7,
      reviews: 178,
      price: '$1,299',
      duration: '9 days',
    }
  ];

  // Sample data for testimonials
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
      testimonial: 'Zynlogic made booking my wellness retreat incredibly easy. The spa services were excellent and my flight arrangements were perfect!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      testimonial: 'I used their platform to schedule a specialist consultation while traveling abroad. The doctor was excellent and the process was seamless.',
      rating: 4,
    },
    {
      id: 3,
      name: 'Priya Sharma',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      testimonial: 'From booking flights to scheduling lab tests before my trip, Zynlogic offered a complete travel and healthcare solution. Highly recommend!',
      rating: 5,
    }
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.pexels.com/photos/1482193/pexels-photo-1482193.jpeg')` }}>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40" />
        </div>
        
        <div className="relative container-custom h-full flex flex-col justify-center">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Travel for Wellness, <br />
              <span className="text-secondary">Wellness in Travel</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Experience seamless integration of healthcare services and travel bookings on one platform. Your journey to wellbeing starts here.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/doctors" className="btn-primary">
                Find a Doctor
              </Link>
              <Link to="/flights" className="btn-secondary">
                Book a Trip
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom mx-auto">
          <SearchForm />
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-white">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <motion.h2 
              className="section-title"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Our Services
            </motion.h2>
            <motion.p 
              className="section-subtitle mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              From healthcare consultations to travel bookings, we provide comprehensive services to meet all your needs.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Top Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <motion.h2 
                className="section-title mb-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                Top Destinations
              </motion.h2>
              <motion.p 
                className="text-gray-600 max-w-2xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                Explore our curated selection of wellness retreats and travel destinations.
              </motion.p>
            </div>
            <Link to="/destinations" className="flex items-center text-primary font-medium hover:underline mt-4 md:mt-0">
              View all destinations <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                Why Choose Zynlogic?
              </motion.h2>
              <motion.p 
                className="text-gray-100 mb-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                We integrate healthcare services with travel bookings to provide a holistic approach to wellness tourism. Experience the convenience of managing all your needs on a single platform.
              </motion.p>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <div className="mr-4 bg-white/20 p-3 rounded-full">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Streamlined Booking</h3>
                    <p className="text-gray-200">Book healthcare services and travel arrangements in one place, saving time and reducing hassle.</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <div className="mr-4 bg-white/20 p-3 rounded-full">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Vetted Professionals</h3>
                    <p className="text-gray-200">Access a network of verified healthcare providers and premium travel services.</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <div className="mr-4 bg-white/20 p-3 rounded-full">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                    <p className="text-gray-200">Our customer service team is available around the clock to assist with any inquiries or issues.</p>
                  </div>
                </motion.div>
              </div>
            </div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3764014/pexels-photo-3764014.jpeg" 
                  alt="Wellness retreat" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl hidden md:block">
                <div className="flex items-center space-x-2 mb-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                </div>
                <p className="text-gray-800 font-medium">4,000+ happy customers</p>
                <p className="text-gray-600 text-sm">Over 95% satisfaction rate</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <motion.h2 
              className="section-title"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              What Our Customers Say
            </motion.h2>
            <motion.p 
              className="section-subtitle mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Read testimonials from customers who have experienced our services.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container-custom mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Begin Your Journey?</h2>
              <p className="text-gray-300 text-lg">
                Start exploring our comprehensive health and travel services today.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register" className="btn-secondary">
                Create an Account
              </Link>
              <Link to="/contact" className="bg-white text-gray-900 hover:bg-gray-100 transition-colors duration-300 font-medium py-2 px-6 rounded-lg">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;