
import React from "react";
import { Button } from "@/components/ui/button";
import { Car, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import IllustrationPlaceholder from "./IllustrationPlaceholder";

const HeroSection = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Go anywhere with Uniride
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Request a ride, hop in, and go. Choose from multiple ride options 
              designed to fit your needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup">
                <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg font-semibold w-full sm:w-auto">
                  Get started
                </Button>
              </Link>
              <Link to="/drive">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg font-semibold w-full sm:w-auto">
                  Drive & earn
                </Button>
              </Link>
            </div>
          </div>
          <div>
            <IllustrationPlaceholder 
              icon={<Car className="h-24 w-24 text-gray-400" />}
              title="Hero Ride Illustration"
              height="h-96"
              className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
