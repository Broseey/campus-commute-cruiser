
import React from 'react';

const HeroImage: React.FC = () => {
  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden rounded-lg">
      <div className="relative w-full h-[500px] bg-gradient-to-br from-campusorange-100 to-campusorange-200 rounded-lg shadow-lg overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2669&q=80" 
          alt="Students traveling together" 
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="font-bold text-2xl mb-2">Travel Together</h3>
          <p className="text-white text-opacity-90">
            Safe, affordable campus transportation for students
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
