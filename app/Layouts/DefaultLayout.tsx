import React, { ReactNode } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
