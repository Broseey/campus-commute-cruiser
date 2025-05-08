
import React from 'react';

const HeroImage: React.FC = () => {
  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden rounded-lg">
      <div className="relative w-full h-full bg-black rounded-lg shadow-lg overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2669&q=80" 
          alt="Students traveling together" 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex flex-col justify-center p-8">
          <h2 className="text-white text-4xl font-bold mb-4">Campus Travel</h2>
          <p className="text-white text-xl">
            Safe and reliable transportation for students
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
