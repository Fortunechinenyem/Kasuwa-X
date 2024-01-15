import { useState } from "react";
import { useRouter } from "next/router";

import Layout from "@/app/Layouts/DefaultLayout";

const Register: React.FC = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("customer");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Call NextAuth.js API for registration
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        confirmPassword,
        role,
      }),
    });

    if (response.ok) {
      // Registration successful, redirect to login or dashboard
      router.push("/login");
    } else {
      // Handle registration error
      console.error("Registration failed");
    }
  };

  return (
    <Layout>
      <div className="container mx-auto my-8">
        <h2 className="text-3xl font-semibold mb-4 text-center mt-14 mb-7">
          Register
        </h2>
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
