import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">
            Full stack developer | 3D Designer | RMK
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, creative ideas, or potential partnerships.
          </p>

          {/* Centered Bottom Content */}
          <div className="border-t border-gray-800 pt-8 mt-8">
            <div className="flex flex-col justify-center items-center text-center gap-2">
              <p className="text-gray-400 text-sm">
                Full stack developer | 3D Designer | RMK
              </p>
              <p className="text-gray-400 text-sm">
                © 2025 Bharath Ponnaganti. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
