import React from 'react';
import { Microscope } from 'lucide-react';

const LabTestsPage = () => {
  const labTests = [
    {
      id: 1,
      name: 'Complete Blood Count (CBC)',
      description: 'Measures different components of your blood including red cells, white cells, and platelets',
      price: 45.99,
      turnaroundTime: '24 hours',
    },
    {
      id: 2,
      name: 'Comprehensive Metabolic Panel',
      description: 'Measures blood sugar, electrolyte levels, kidney and liver function',
      price: 79.99,
      turnaroundTime: '24-48 hours',
    },
    {
      id: 3,
      name: 'Lipid Panel',
      description: 'Measures cholesterol levels and other blood fats',
      price: 59.99,
      turnaroundTime: '24 hours',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <Microscope className="h-12 w-12 text-blue-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Laboratory Tests</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Get accurate and reliable lab test results from our certified laboratories.
          Fast turnaround times and competitive pricing.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {labTests.map((test) => (
          <div
            key={test.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{test.name}</h3>
              <p className="text-gray-600 mb-4">{test.description}</p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-2xl font-bold text-blue-600">${test.price}</p>
                  <p className="text-sm text-gray-500">Results in {test.turnaroundTime}</p>
                </div>
                <button
                  className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
                  onClick={() => window.location.href = `/booking/lab-test/${test.id}`}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Our Lab Services?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-2">Certified Labs</h3>
            <p className="text-gray-600">All our laboratories are certified and follow strict quality control measures</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-2">Quick Results</h3>
            <p className="text-gray-600">Get your test results within 24-48 hours</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-2">Affordable Pricing</h3>
            <p className="text-gray-600">Competitive prices with no hidden charges</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabTestsPage;