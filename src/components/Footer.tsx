
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useIsMobile } from "@/hooks/use-mobile";

const Footer = () => {
  const isMobile = useIsMobile();
  
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">CampusRide</h3>
            <p className="mb-6">
              We connect students with reliable transportation options for campus travel needs.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" className="hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" className="hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link>
              </li>
              <li>
                <Link to="/schedule" className="hover:text-white transition-colors">Schedule a Ride</Link>
              </li>
              <li>
                <Link to="/my-rides" className="hover:text-white transition-colors">My Rides</Link>
              </li>
              <li>
                <Link to="/signin" className="hover:text-white transition-colors">Sign In</Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-campusorange-500" />
                <span>+234 800 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-campusorange-500" />
                <span>info@campusride.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-campusorange-500" />
                <span>123 University Drive, Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Newsletter</h3>
            <p className="mb-4">Subscribe for updates and special offers.</p>
            <div className="flex flex-col space-y-3">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-800 border-gray-700 text-white"
              />
              <Button className="bg-campusorange-700 hover:bg-campusorange-800 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">© 2023 CampusRide. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
      
      {/* Add padding at the bottom for mobile navigation if needed */}
      {isMobile && <div className="h-16"></div>}
    </footer>
  );
};

export default Footer;
