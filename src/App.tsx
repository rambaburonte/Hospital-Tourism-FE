import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
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
import DoctorUploadForm from './pages/admin/DoctorUploadForm';
import DoctorsListing from './pages/admin/DoctorsListing';
import SpaUploadForm from './pages/admin/SpaUploadForm';
import TranslatorsUploadForm from './pages/admin/TranslatorsUploadForm';
import PhysiotherapistUploadForm from './pages/admin/PhysiotherapistUploadForm';
import SpaListing from './pages/admin/SpaListing';
import PhysiotherapistListing from './pages/admin/PhysiotherapistListing';
import TranslatorsListing from './pages/admin/TranslatorsListing';
import DoctorDetail from './pages/admin/DoctorDetail';
import SpaDetail from './pages/admin/SpaDetail';
import PhysiotherapistDetail from './pages/admin/PhysiotherapistDetail';
import TranslatorsDetail from './pages/admin/TranslatorsDetail';
import DoctorUpdateForm from './pages/admin/DoctorUpdateForm';
import SpaUpdateForm from './pages/admin/SpaUpdateForm';
import PhysiotherapistUpdateForm from './pages/admin/PhysiotherapistUpdateForm';
import TranslatorsUpdateForm from './pages/admin/TranslatorsUpdateForm';
import EditProfile from './pages/user/EditProfile'; 
import UserCart from './pages/user/UserCart'; 
import { CartProvider } from './context/CartContext';
import UploadPharmacyProductPage from './pages/admin/UploadPharmacyProductPage';
import AdminPharmacyProductsPage from './pages/admin/PharmacyProductsPage';
import { useUserSync } from './hooks/UserContext';
import {
  SignIn,
  SignUp,
} from '@clerk/clerk-react';

import PaymentPage from './pages/PaymentPage';
import Translators from './pages/user/Translators';

const Layout = () => {
  const location = useLocation();
  useUserSync();

  const isAdminRoute = /^\/(admindashboard|users|user\/|admin\/(doctors|spa|physiotherapist|translators|pharamacyProducts|pharamcy)\/(upload|listing|detail\/\d+|update\/\d+))/.test(location.pathname);

  useEffect(() => {
    console.log('Current route:', location.pathname);
    console.log('Rendering Navbar:', isAdminRoute ? 'AdminNavbar' : 'Navbar');
  }, [location.pathname]);
  

  return (
    <div className="flex flex-col min-h-screen">
      {isAdminRoute ? <AdminNavbar /> : <Navbar />}
      <main className="mt-16 flex-grow">
        <CartProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
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
            <Route path="/admin/doctors/upload" element={<DoctorUploadForm />} />
            <Route path="/admin/spa/upload" element={<SpaUploadForm />} />
            <Route path="/admin/translators/upload" element={<TranslatorsUploadForm />} />
            <Route path="/admin/physiotherapist/upload" element={<PhysiotherapistUploadForm />} />
            <Route path="/admin/doctors/listing" element={<DoctorsListing />} />
            <Route path="/admin/spa/listing" element={<SpaListing />} />
            <Route path="/admin/physiotherapist/listing" element={<PhysiotherapistListing />} />
            <Route path="/admin/translators/listing" element={<TranslatorsListing />} />
            <Route path="/admin/doctors/detail/:id" element={<DoctorDetail />} />
            <Route path="/admin/spa/detail/:id" element={<SpaDetail />} />
            <Route path="/admin/physiotherapist/detail/:id" element={<PhysiotherapistDetail />} />
            <Route path="/admin/translators/detail/:id" element={<TranslatorsDetail />} />
            <Route path="/admin/doctors/update/:id" element={<DoctorUpdateForm />} />
            <Route path="/admin/spa/update/:id" element={<SpaUpdateForm />} />
            <Route path="/admin/physiotherapist/update/:id" element={<PhysiotherapistUpdateForm />} />
            <Route path="/admin/translators/update/:id" element={<TranslatorsUpdateForm />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/cart" element={<UserCart />} />
            <Route path="/admin/pharamacyProducts/upload" element={<UploadPharmacyProductPage />} />
            <Route path="/admin/pharamcy/listing" element={<AdminPharmacyProductsPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/translators" element={<Translators />} />
          </Routes>
        </CartProvider>
      </main>
      <Footer />
    </div>
  );
};

const App = () => (
  <Router>
    <Layout />
  </Router>
);

export default App;
