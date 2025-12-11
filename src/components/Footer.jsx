import React from 'react';

export default function App() {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">

          <div>
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

          <div>
            <h3 className="font-bold text-lg mb-4">Go Premium</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Plans</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Plexamp</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Plex Labs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Get Perks.</a></li>
            </ul>
          </div>

          <div>
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

          <div>
            <h3 className="font-bold text-lg mb-4">Suport</h3>
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

          <div>
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

        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            Copyright © 2025 Plex{' '}
            <a href="#" className="hover:text-white ml-2">Privacy & Legal</a>
            <a href="#" className="hover:text-white ml-4">Accessibility</a>
            <a href="#" className="hover:text-white ml-4">Manage Cookies</a>
            <a href="#" className="hover:text-white ml-4">Language: English (US)</a>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.847.07 3.252.148 4.771 1.691 4.919 4.919.058 1.263.069 1.643.069 4.847v.004c0 3.204-.012 3.584-.069 4.847-.149 3.228-1.668 4.771-4.919 4.919-1.263.058-1.643.07-4.847.07h-.004c-3.204 0-3.584-.012-4.847-.07-3.252-.148-4.771-1.691-4.919-4.919-.057-1.263-.069-1.643-.069-4.847v-.004c0-3.204.012-3.584.069-4.847.149-3.228 1.668-4.771 4.919-4.919.124-.058 1.643-.069 4.847-.069h.004zm0-2.163h-.004a50.05 50.05 0 00-4.847.07c-3.252.148-4.771 1.691-4.919 4.919a50.05 50.05 0 00-.07 4.847v.004c0 3.204.012 3.584.07 4.847.148 3.228 1.667 4.771 4.919 4.919.124.058 1.643.069 4.847.069h.004c3.204 0 3.584-.012 4.847-.069 3.252-.148 4.771-1.691 4.919-4.919.058-1.263.069-1.643.069-4.847v-.004c0-3.204-.012-3.584-.069-4.847-.148-3.228-1.667-4.771-4.919-4.919a50.05 50.05 0 00-4.847-.07zm0 10.5a4.5 4.5 0 110-9 4.5 4.5 0 010 9z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.186-.484-8.55-4.385-8.816zm-10.615 12.816v-8l8 3.993z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}