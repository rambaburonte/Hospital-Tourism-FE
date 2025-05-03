import React from 'react';
import { Link } from 'react-router-dom';
import { Home, RefreshCw } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen pt-24 bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="text-9xl font-bold text-primary">404</div>
          <h1 className="text-2xl font-bold text-gray-800 mt-4">Page Not Found</h1>
          <p className="text-gray-600 mt-2">
            The page you are looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/"
            className="btn-primary flex items-center justify-center"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="btn-outline flex items-center justify-center"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;