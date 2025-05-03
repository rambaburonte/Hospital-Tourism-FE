import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import AdminNavbar from './components/layout/AdminNavbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DoctorListingPage from './pages/healthcare/DoctorListingPage';
import SpaServicesPage from './pages/healthcare/SpaServicesPage';
import LabTestsPage from './pages/healthcare/LabTestsPage';
import FlightSearchPage from './pages/travel/FlightSearchPage';
import HotelSearchPage from './pages/travel/HotelSearchPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import BookingPage from './pages/BookingPage';
import UserDashboard from './pages/user/UserDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import PharmacyPage from './pages/Pharmacy';
import Users from './pages/admin/Users';
import UserBookings from './pages/admin/UserBookings';

const App = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admindashboard');

  // Debug routing
  useEffect(() => {
    console.log('Current route:', location.pathname);
    console.log('Rendering Navbar:', isAdminRoute ? 'AdminNavbar' : 'Navbar');
  }, [location, isAdminRoute]);

  return (
    <div className="flex flex-col min-h-screen">
      {isAdminRoute ? <AdminNavbar /> : <Navbar />}
      <main className="mt-16 flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/doctors" element={<DoctorListingPage />} />
          <Route path="/spa-services" element={<SpaServicesPage />} />
          <Route path="/lab-tests" element={<LabTestsPage />} />
          <Route path="/pharmacy" element={<PharmacyPage />} />
          <Route path="/flights" element={<FlightSearchPage />} />
          <Route path="/hotels" element={<HotelSearchPage />} />
          <Route path="/service/:id" element={<ServiceDetailPage />} />
          <Route path="/booking/:serviceType/:id" element={<BookingPage />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/user/:userId" element={<UserBookings />} />
          <Route path="/users" element={<Users />} />

        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;