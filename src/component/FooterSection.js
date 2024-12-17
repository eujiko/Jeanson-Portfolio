import React from 'react';
import '../Assets/FooterSection.css'; // Ensure you have matching styles

const FooterSection = () => {
  return (
    <footer className="footer-section bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="footer-column">
            <h3 className="text-lg font-semibold mb-4">About Me</h3>
            <p className="text-sm text-gray-400">
              I'm a passionate developer and designer, dedicated to creating beautiful and functional digital experiences.
            </p>
          </div>
          <div className="footer-column">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm text-gray-400">
              Email: <a href="mailto:acaljeanson@gmail.com" className="text-gray-300 hover:text-gray-100 transition duration-300">acaljeanson@gmail.com</a>
            </p>
          </div>
          <div className="footer-column">
            <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-gray-100 transition duration-300">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.734 0-1.325.591-1.325 1.325v21.351c0 .734.591 1.324 1.325 1.324h11.495v-9.296h-3.123v-3.622h3.123v-2.671c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.713-1.795 1.761v2.314h3.587l-.467 3.622h-3.12v9.296h6.116c.734 0 1.324-.59 1.324-1.324v-21.35c0-.734-.59-1.325-1.324-1.325z"/>
                </svg>
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-gray-100 transition duration-300">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.723-.951.566-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.917 2.201-4.917 4.917 0 .386.044.762.127 1.124-4.083-.205-7.702-2.161-10.126-5.132-.423.724-.665 1.562-.665 2.458 0 1.697.863 3.194 2.176 4.074-.801-.026-1.554-.246-2.212-.615-.001.02-.001.04-.001.062 0 2.367 1.684 4.342 3.918 4.787-.41.111-.843.171-1.289.171-.316 0-.623-.031-.923-.088.625 1.951 2.438 3.374 4.584 3.412-1.68 1.318-3.8 2.105-6.102 2.105-.397 0-.788-.023-1.175-.068 2.18 1.397 4.768 2.213 7.548 2.213 9.054 0 14.004-7.496 14.004-13.986 0-.213-.005-.426-.015-.637.964-.695 1.8-1.562 2.462-2.549z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-gray-100 transition duration-300">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M22.23 0h-20.46c-.974 0-1.77.798-1.77 1.78v20.451c0 .983.796 1.77 1.77 1.77h20.451c.983 0 1.779-.797 1.779-1.77v-20.451c0-.982-.797-1.78-1.77-1.78zm-14.054 20.451h-3.608v-11.963h3.609v11.963zm-1.808-13.648c-1.157 0-2.093-.938-2.093-2.094 0-1.156.938-2.093 2.093-2.093 1.157 0 2.094.938 2.094 2.093 0 1.157-.938 2.093-2.094 2.093zm13.902 13.648h-3.606v-5.803c0-1.383-.026-3.164-1.931-3.164-1.931 0-2.229 1.509-2.229 3.07v5.897h-3.606v-11.963h3.458v1.636h.049c.482-.914 1.664-1.878 3.425-1.878 3.661 0 4.335 2.409 4.335 5.537v6.668z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          &copy; 2024 YourName. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
