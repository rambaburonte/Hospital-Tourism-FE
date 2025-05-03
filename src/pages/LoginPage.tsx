// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
// import { Facebook, Twitter, Mail } from 'lucide-react';

// interface LoginFormData {
//   email: string;
//   password: string;
//   rememberMe: boolean;
// }

// const LoginPage = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();

//   const onSubmit = (data: LoginFormData) => {
//     console.log(data);
//     // Handle login logic here
//   };

//   return (
//     <div className="min-h-screen py-24 bg-gray-50 flex items-center">
//       <div className="container-custom mx-auto">
//         <div className="max-w-md mx-auto">
//           <div className="text-center mb-8">
//             <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
//             <p className="text-gray-600">Sign in to your account to continue</p>
//           </div>

//           <div className="bg-white shadow-md rounded-xl p-8">
//             <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//               <div>
//                 <label htmlFor="email" className="form-label">Email Address</label>
//                 <input
//                   type="email"
//                   id="email"
//                   className={`form-input ${errors.email ? 'border-error' : ''}`}
//                   placeholder="your.email@example.com"
//                   {...register('email', { 
//                     required: 'Email is required',
//                     pattern: {
//                       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                       message: 'Invalid email address'
//                     }
//                   })}
//                 />
//                 {errors.email && (
//                   <p className="mt-1 text-sm text-error">{errors.email.message}</p>
//                 )}
//               </div>

//               <div>
//                 <div className="flex justify-between mb-1">
//                   <label htmlFor="password" className="form-label">Password</label>
//                   <Link to="/forgot-password" className="text-sm text-primary hover:underline">
//                     Forgot Password?
//                   </Link>
//                 </div>
//                 <input
//                   type="password"
//                   id="password"
//                   className={`form-input ${errors.password ? 'border-error' : ''}`}
//                   placeholder="••••••••"
//                   {...register('password', { 
//                     required: 'Password is required',
//                     minLength: {
//                       value: 8,
//                       message: 'Password must be at least 8 characters long'
//                     }
//                   })}
//                 />
//                 {errors.password && (
//                   <p className="mt-1 text-sm text-error">{errors.password.message}</p>
//                 )}
//               </div>

//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="rememberMe"
//                   className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
//                   {...register('rememberMe')}
//                 />
//                 <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-700">
//                   Remember me for 30 days
//                 </label>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-2.5 px-4 rounded-lg transition-colors"
//               >
//                 Sign In
//               </button>
//             </form>

//             <div className="mt-6 pt-6 border-t border-gray-200">
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-2 bg-white text-gray-500">Or continue with</span>
//               </div>

//               <div className="mt-6 grid grid-cols-3 gap-3">
//                 <button type="button" className="py-2.5 px-4 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 flex justify-center items-center">
//                   <Facebook className="w-5 h-5 text-blue-600" />
//                 </button>
//                 <button type="button" className="py-2.5 px-4 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 flex justify-center items-center">
//                   <Twitter className="w-5 h-5 text-blue-400" />
//                 </button>
//                 <button type="button" className="py-2.5 px-4 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 flex justify-center items-center">
//                   <Mail className="w-5 h-5 text-red-500" />
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div className="text-center mt-6">
//             <p className="text-gray-600">
//               Don't have an account?{' '}
//               <Link to="/register" className="text-primary font-medium hover:underline">
//                 Sign up
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Facebook, Twitter, Mail } from 'lucide-react';

interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
  role: 'admin' | 'user';
}

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    defaultValues: {
      role: 'user', // Default to User
    },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (data: LoginFormData) => {
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // Mock API call (replace with actual login API)
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
          role: data.role,
        }),
      });

      // Simulate API response (remove in production)
      const mockSuccess = true; // Change to false to test error case
      if (mockSuccess) {
        // Successful login
        if (data.rememberMe) {
          // Store token in localStorage if rememberMe is checked
          localStorage.setItem('authToken', 'mock-token');
        }
        // Redirect based on role
        navigate(data.role === 'admin' ? '/admindashboard' : '/dashboard');
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      setErrorMessage('Invalid email, password, or role. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-24 bg-gray-50 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
            <p className="text-gray-600">Sign in to your account to continue</p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {errorMessage && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                  {errorMessage}
                </div>
              )}

              {/* Role Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Login As
                </label>
                <div className="flex space-x-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="user"
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      {...register('role', { required: 'Please select a role' })}
                    />
                    <span className="ml-2 text-sm text-gray-700">User</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="admin"
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      {...register('role', { required: 'Please select a role' })}
                    />
                    <span className="ml-2 text-sm text-gray-700">Admin</span>
                  </label>
                </div>
                {errors.role && (
                  <p className="mt-2 text-sm text-red-600">{errors.role.message}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className={`mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="your.email@example.com"
                  {...register('email', { required: 'Email is required' })}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <div className="flex justify-between mb-1">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
                    Forgot Password?
                  </Link>
                </div>
                <input
                  type="password"
                  id="password"
                  className={`mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.password ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="••••••••"
                  {...register('password', { required: 'Password is required' })}
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
                )}
              </div>

              {/* Remember Me */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  {...register('rememberMe')}
                />
                <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-700">
                  Remember me for 30 days
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Signing In...' : 'Sign In'}
              </button>
            </form>

            {/* Social Login */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <button
                  type="button"
                  className="py-2.5 px-4 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 flex justify-center items-center"
                >
                  <Facebook className="w-5 h-5 text-blue-600" />
                </button>
                <button
                  type="button"
                  className="py-2.5 px-4 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 flex justify-center items-center"
                >
                  <Twitter className="w-5 h-5 text-blue-400" />
                </button>
                <button
                  type="button"
                  className="py-2.5 px-4 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 flex justify-center items-center"
                >
                  <Mail className="w-5 h-5 text-red-500" />
                </button>
              </div>
            </div>
          </div>

          {/* Sign Up Link */}
          <div className="text-center mt-6">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link to="/register" className="text-blue-600 font-medium hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;