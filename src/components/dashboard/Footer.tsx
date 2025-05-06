
import React from "react";

interface FooterProps {
  isMobile: boolean;
}

const Footer = ({ isMobile }: FooterProps) => {
  return (
    <footer className={`bg-white py-6 mt-8 ${isMobile ? 'pb-24' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 text-center text-gray-500">
        <p>© 2023 CampusRide. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
