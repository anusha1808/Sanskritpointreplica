"use client";

import React, { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi"; // Import the eye icons

export default function AccountPage() {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [registerEmail, setRegisterEmail] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false); // State for toggling password visibility

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-4xl font-serif font-medium mb-12">My account</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-4xl">
        {/* Login Section */}
        <div>
          <h2 className="text-2xl font-serif mb-4">Login</h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded border shadow-sm">
            <label className="block mb-2 font-medium">
              Username or email address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full p-2 mb-4 border rounded dark:bg-gray-700 dark:text-white"
              value={loginData.username}
              onChange={(e) =>
                setLoginData({ ...loginData, username: e.target.value })
              }
            />

            <label className="block mb-2 font-medium">
              Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"} // Toggle between text and password
                className="w-full p-2 mb-4 border rounded dark:bg-gray-700 dark:text-white"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-2 top-2 text-gray-500 dark:text-gray-300"
              >
                {passwordVisible ? (
                  <HiEyeOff className="h-5 w-5" />
                ) : (
                  <HiEye className="h-5 w-5" />
                )}
              </button>
            </div>

            <div className="flex items-center mb-4">
              <button className="bg-black text-white dark:text-white px-4 py-2 rounded mr-4">
                Log in
              </button>
              <label className="flex items-center space-x-2">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
            </div>

            <a href="#" className="text-sm text-blue-600 underline dark:text-blue-400">
              Lost your password?
            </a>
          </div>
        </div>

        {/* Register Section */}
        <div>
          <h2 className="text-2xl font-serif mb-4">Register</h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded border shadow-sm">
            <label className="block mb-2 font-medium">
              Email address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="w-full p-2 mb-4 border rounded dark:bg-gray-700 dark:text-white"
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
            />

            <p className="text-sm mb-4 text-gray-600 dark:text-gray-300">
              A link to set a new password will be sent to your email address.
            </p>
            <p className="text-sm mb-4 text-gray-600 dark:text-gray-300">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
              <a href="#" className="underline text-blue-600 dark:text-blue-400">
                privacy policy
              </a>
              .
            </p>

            <button className="bg-black text-white dark:text-white px-4 py-2 rounded">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
