import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'; // import ScrollLink for smooth scroll
import facebook from "../../../../src/Gallery/facebook.png";
import whatsapp from "../../../../src/Gallery/whatsapp.png";
import instagram from "../../../../src/Gallery/instagram.png";
import mobile from "../../../../src/Gallery/mobile.png";

export default function Footer() {
  return (
    <footer className="bg-teal-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-playfair mb-4 text-white">Relaxo Chair</h2>
          <p className="text-sm text-teal-100">
            Discover true relaxation with advanced massage chair technology.
          </p>
        </div>

        {/* Navigation */}
       

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Connect With Us</h3>
          <div className="flex items-center gap-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook" className="w-6 h-6 hover:opacity-80" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" className="w-6 h-6 hover:opacity-80" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={whatsapp} alt="WhatsApp" className="w-6 h-6 hover:opacity-80" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={mobile} alt="Phone" className="w-6 h-6 hover:opacity-80" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-teal-500 text-center py-4 text-sm text-teal-100">
        &copy; {new Date().getFullYear()} Relaxo Chair. All rights reserved.
      </div>
    </footer>
  );
}
