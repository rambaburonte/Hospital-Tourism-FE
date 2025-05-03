import React from 'react';

const SpaServicesPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Spa & Wellness Services</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Massage Services */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Therapeutic Massage</h3>
            <p className="text-gray-600 mb-4">Experience deep relaxation with our professional massage therapy services.</p>
            <div className="text-lg font-semibold text-indigo-600">From $80/hour</div>
          </div>
        </div>

        {/* Facial Treatments */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Luxury Facial</h3>
            <p className="text-gray-600 mb-4">Rejuvenate your skin with our premium facial treatments.</p>
            <div className="text-lg font-semibold text-indigo-600">From $95/session</div>
          </div>
        </div>

        {/* Body Treatments */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Body Wraps</h3>
            <p className="text-gray-600 mb-4">Detoxify and nourish your body with our signature body treatments.</p>
            <div className="text-lg font-semibold text-indigo-600">From $120/session</div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Book Your Wellness Experience</h2>
        <p className="text-gray-600 mb-8">
          Our experienced therapists are here to help you achieve ultimate relaxation and wellness. 
          Contact us to schedule your appointment or learn more about our services.
        </p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default SpaServicesPage;