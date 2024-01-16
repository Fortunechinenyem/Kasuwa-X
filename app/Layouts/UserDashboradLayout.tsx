import React, { ReactNode } from "react";

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
          <li className="hover:text-gray-300 cursor-pointer">Home</li>
          <li className="hover:text-gray-300 cursor-pointer">Orders</li>
          <li className="hover:text-gray-300 cursor-pointer">Account</li>
        </ul>
        <div>User Profile</div>
      </nav>

      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <header className="bg-gray-500 p-4 text-white">
          <div>User Profile</div>
        </header>

        {/* Main content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default UserDashboardLayout;
