// Import necessary modules
import React from "react";
import Layout from "@/app/Layouts/DefaultLayout";

const Login: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <Layout>
      <div className="container mx-auto my-8 ">
        <h2 className="text-3xl font-semibold mb-4 text-center mt-14 mb-7">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button type="submit" className="w-full button">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
