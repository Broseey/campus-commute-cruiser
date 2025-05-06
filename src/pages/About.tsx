
import React from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Car, Users, Shield, Mail, Phone, MapPin } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About CampusRide</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connecting students with safe, affordable transportation between universities and major cities across Nigeria.
          </p>
        </div>
        
        {/* Our Story Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
          <div className="bg-white rounded-lg shadow-sm p-8">
            <p className="text-lg mb-4">
              CampusRide was founded in 2021 by a group of university graduates who experienced firsthand the challenges of finding reliable and affordable transportation to and from campus.
            </p>
            <p className="text-lg mb-4">
              What started as a small carpool coordination effort among friends has grown into a comprehensive ride-sharing platform serving multiple universities across Nigeria.
            </p>
            <p className="text-lg">
              Today, CampusRide connects thousands of students with drivers offering rides between campuses and major cities, making travel more accessible, affordable, and environmentally friendly.
            </p>
          </div>
        </div>
        
        {/* Our Mission Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
              <p className="text-gray-600">
                Make transportation accessible to all students regardless of their budget or location.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">
                Build a trusted community of students and drivers to make travel safer and more social.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Safety</h3>
              <p className="text-gray-600">
                Prioritize safety through driver verification, ratings, and community feedback.
              </p>
            </div>
          </div>
        </div>
        
        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Emmanuel Oladele", "Sarah Musa", "David Kalu"].map((name, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="text-gray-600 mb-2">Co-Founder</p>
                <p className="text-sm text-gray-500">
                  Graduate of University of {index === 0 ? "Lagos" : index === 1 ? "Abuja" : "Port Harcourt"}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Contact Section */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-gray-500" />
                    <p>hello@campusride.com</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3 text-gray-500" />
                    <p>+234 800 123 4567</p>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-3 text-gray-500" />
                    <p>123 Innovation Hub, Yaba, Lagos</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Partner With Us</h3>
                <p className="text-gray-600 mb-4">
                  Are you a university administrator or a transportation company? 
                  Partner with CampusRide to provide better transportation options for students.
                </p>
                <Button className="bg-black text-white hover:bg-neutral-800">
                  Become a Partner
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
