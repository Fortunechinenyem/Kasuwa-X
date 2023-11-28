import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h2 className="text-lg font-semibold mb-4">Categories</h2>
          <ul>
            <li>
              <Link href="/category/electronics">Electronics</Link>
            </li>
            <li>
              <Link href="/category/clothing">Clothing</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Customer Service</h2>
          <ul>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Account</h2>
          <ul>
            <li>
              <Link href="/account/login">Login</Link>
            </li>
            <li>
              <Link href="/account/register">Register</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Connect With Us</h2>
          <ul>
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-600 pt-4 text-center">
        <p>&copy; 2023 Kasuwa-X powered by Fortune.dev</p>
      </div>
    </footer>
  );
};

export default Footer;
