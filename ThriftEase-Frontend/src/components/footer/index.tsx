import React from "react";

import { Mail } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaFacebookF } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary text-black rounded-md hover:bg-primary/90 font-heading font-bold text-lg px-3 py-1">
                ThriftEase.
              </div>
            </div>
            <p className="font-secondary text-gray-400 leading-relaxed mb-6">
              Making sustainable shopping accessible to everyone. Join our
              community of conscious shoppers and discover unique thrifted
              treasures.
            </p>

            {/* Newsletter Signup */}
            <div className="space-y-4">
              <h4 className="font-body font-semibold text-white">
                Stay Updated
              </h4>
              <div className="flex gap-2">
                <input
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 w-[80%] p-2 rounded-lg"
                />
                <button className="bg-primary hover:bg-primary/90 text-white p-2 rounded-lg">
                  <Mail className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="font-secondary text-gray-400 hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-secondary text-gray-400 hover:text-primary transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-secondary text-gray-400 hover:text-primary transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-secondary text-gray-400 hover:text-primary transition-colors"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-body font-semibold text-white mb-4">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <FaXTwitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="font-body text-gray-400">
            © 2025 ThriftEase. All rights reserved. Made with ♻️ for a
            sustainable future.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
