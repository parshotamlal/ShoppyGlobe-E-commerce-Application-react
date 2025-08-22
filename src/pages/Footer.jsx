import React from "react";
import { Github, Twitter, Instagram, Linkedin, ShoppingBag } from "lucide-react";
import { CiShop } from "react-icons/ci"; // E-commerce store icon


function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand Section */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            < CiShop className="w-7 h-7 text-blue-500" />
            <h2 className="text-2xl font-bold text-white">ShoppyGlobe</h2>
          </div>
          <p className="text-sm">
            Your one-stop destination for fashion, electronics, and lifestyle products.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-blue-400">Home</a></li>
            <li><a href="/shop" className="hover:text-blue-400">Shop</a></li>
            <li><a href="/about" className="hover:text-blue-400">About Us</a></li>
            <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/faq" className="hover:text-blue-400">FAQ</a></li>
            <li><a href="/returns" className="hover:text-blue-400">Returns</a></li>
            <li><a href="/shipping" className="hover:text-blue-400">Shipping Info</a></li>
            <li><a href="/support" className="hover:text-blue-400">Support</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://github.com/parshotamlal" className="hover:text-blue-500"><Github /></a>
            <a href="#" className="hover:text-blue-400"><Twitter /></a>
            <a href="#" className="hover:text-pink-500"><Instagram /></a>
            <a href="#" className="hover:text-blue-700"><Linkedin /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} ShoppyGlobe. All Rights Reserved.
      </div>
    </footer>
  );
};

export {Footer};
