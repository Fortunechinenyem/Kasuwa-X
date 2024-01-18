import Link from "next/link";
import React, { ReactNode } from "react";
import { FaBook, FaCartPlus, FaHome } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

interface UserDashboardLayoutProps {
  children: ReactNode;
}

const UserDashboardLayout: React.FC<UserDashboardLayoutProps> = ({
  children,
}) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <nav className="w-56 bg-gray-500 p-4 text-white">
        <ul className="space-y-4">
          <NavItem href="/" icon={<FaHome />} text="Home" />
          <NavItem href="/" icon={<FaCartPlus />} text="Orders" />
          <NavItem href="/" icon={<FaBook />} text="Account" />
        </ul>
      </nav>

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <header className="bg-gray-500 p-4 text-white">
          <div className="flex items-center">
            <IoPerson className="mr-2" />
            Profile
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  text: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon, text }) => (
  <li className="hover:text-gray-300 cursor-pointer">
    <Link href={href} className="flex items-center">
      {icon}
      {text}
    </Link>
  </li>
);

export default UserDashboardLayout;
