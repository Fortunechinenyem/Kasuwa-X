import React, { useState } from "react";
import Layout from "@/app/Layouts/DefaultLayout";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("customer"); // Default role is customer

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your registration logic here, using the form values (email, password, confirmPassword, role)
  };

  return (
    <Layout>
      <div className="container mx-auto my-8">
        <h2 className="text-3xl font-semibold mb-4 text-center">Register</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <label className="block mb-2">
            Email:
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
              required
            />
          </label>

          <label className="block mb-2">
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
              required
            />
          </label>

          <label className="block mb-2">
            Confirm Password:
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
              required
            />
          </label>

          <label className="block mb-4">
            Role:
            <select
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            >
              <option value="customer">Customer</option>
              <option value="vendor">Vendor</option>
            </select>
          </label>

          <button type="submit" className="w-full button mt-7 mb-5 ">
            Register
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
