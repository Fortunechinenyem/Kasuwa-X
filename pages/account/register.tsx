import React from "react";
import Layout from "@/app/Layouts/DefaultLayout";

const Register: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <div className="container mx-auto my-8">
        <h2 className="text-3xl font-semibold mb-4">Register</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <label className="block mb-2">
            Email:
            <input
              type="email"
              name="email"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
              required
            />
          </label>
          <label className="block mb-2">
            Password:
            <input
              type="password"
              name="password"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
              required
            />
          </label>
          <label className="block mb-4">
            Confirm Password:
            <input
              type="password"
              name="confirmPassword"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
              required
            />
          </label>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Register
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
