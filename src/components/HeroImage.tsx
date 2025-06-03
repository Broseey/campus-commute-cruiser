
import React from 'react';

const HeroImage: React.FC = () => {
  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden rounded-[3.5rem] md:rounded-[5.5rem]">
      <div className="relative w-full h-[500px] rounded-[3.5rem] md:rounded-[5.5rem] shadow-lg overflow-hidden">
        <img 
          src="https://img.freepik.com/free-vector/car-sharing-concept-illustration_114360-16901.jpg?t=st=1746741441~exp=1746745041~hmac=b36861ca391beedfa1b8d51fe8ee265439b5f1f84bac686d27345fb498996a3f&w=996" 
          alt="Car sharing concept illustration" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default HeroImage;
