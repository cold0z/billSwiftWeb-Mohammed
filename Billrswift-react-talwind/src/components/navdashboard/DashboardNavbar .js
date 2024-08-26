import React, { useState } from 'react';
import { FaSlidersH } from 'react-icons/fa';

const DashboardNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex justify-between items-center p-4 bg-[#f5f5e1] border-b border-gray-300">
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px">
          <li className="me-2">
            <a
              href="#"
              className="inline-block p-4 text-gray-600 border-b-2 border-orange-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
              aria-current="page"
            >
              Dashboard
            </a>
          </li>
          <li className="me-2">
            <a
              href="#"
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            >
              Profile
            </a>
          </li>
        </ul>
      </div>

      
      <div className="flex items-center space-x-4 relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center bg-orange-500 text-white px-3 py-2 rounded focus:outline-none"
        >
          <FaSlidersH className="mr-2" />
          Customise layout
        </button>

        
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg">
            <a href="#/action-1" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Option 1
            </a>
            <a href="#/action-2" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Option 2
            </a>
            <a href="#/action-3" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Option 3
            </a>
          </div>
        )}

        <div className="flex items-center space-x-2">
          <span className="text-sm">Privacy</span>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-red-600 peer-focus:outline-none transition-all"></div>
            <div className="w-5 h-5 bg-white rounded-full absolute transition-all peer-checked:translate-x-5"></div>
          </label>
          <hr/>
        </div>
      </div>
      
    </div>
  );
};

export default DashboardNavbar;
