import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-4">
            Welcome to our platform where we combine healthcare and travel services
            to provide you with the best experience possible.
          </p>
          <p className="text-gray-600 mb-4">
            Our mission is to make healthcare and travel services accessible,
            convenient, and seamless for everyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;