import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: 'ease-in-out' });
  }, []);

  return (
    <footer className="bg-gray-800 text-white pt-12 pb-8">
      <div className="container mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">

          <div data-aos="fade-up">
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Culture</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Giving</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
              <li><a href="#" className="hover:text-white transition-colors">News</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Plex Gear</a></li>
              <li><a href="#" className="hover:text-white transition-colors">The Plex Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Advertise with Us</a></li>
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="font-bold text-lg mb-4">Go Premium</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Plans</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Plexamp</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Plex Labs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Get Perks.</a></li>
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="font-bold text-lg mb-4">Downloads</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Plex Media Server</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Plex</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Plexamp</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Plex Photos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Plex Dash</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Where to Watch</a></li>
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Finding Help</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support Library</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community Forums</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community Guidelines</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Billing Questions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bug Bounty</a></li>
              <li><a href="#" className="hover:text-white transition-colors">CordCutter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Get in Touch</a></li>
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-delay="400">
            <h3 className="font-bold text-lg mb-4">Watch Free</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Discover on Plex</a></li>
              <li><a href="#" className="hover:text-white transition-colors">TV Channel Finder</a></li>
              <li><a href="#" className="hover:text-white transition-colors">What to Watch</a></li>
              <li><a href="#" className="hover:text-white transition-colors">What To Watch on Netflix</a></li>
              <li><a href="#" className="hover:text-white transition-colors">What To Watch on Hulu</a></li>
              <li><a href="#" className="hover:text-white transition-colors">A24 Movies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Valentine's Day Movies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Christmas Movies</a></li>
            </ul>
          </div>

        </div>

        <div 
          className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            Copyright © 2025 Plex{' '}
            <a href="#" className="hover:text-white ml-2">Privacy & Legal</a>
            <a href="#" className="hover:text-white ml-4">Accessibility</a>
            <a href="#" className="hover:text-white ml-4">Manage Cookies</a>
            <a href="#" className="hover:text-white ml-4">Language: English (US)</a>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram SVG</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">YouTube SVG</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter SVG</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
