import React, { useState } from 'react';
import { SlLogout } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiDotsHorizontalRounded } from "react-icons/bi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=''>
      <header className="flex flex-col sm:flex-row items-center justify-between mb-6 p-4 rounded-lg shadow-sm bg-home">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 sm:mb-0">Dashboard</h2>
        
        
        <div className="flex items-center space-x-4">
          <span className="text-sm sm:text-base">
            Welcome Back! <strong>Fadi Anarchi</strong>
          </span>
          <div className="flex items-center border rounded-full p-2 bg-white space-x-3 relative">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
              alt="avatar"
              className="rounded-full w-10 h-10 object-cover"
            />
            <button className="text-gray-600">
              <SlLogout />
            </button>
            <button className="text-gray-600">Logout</button>
            <button className="text-gray-600">
              <CiSearch />
            </button>
            <button className="text-gray-600">
              <IoMdNotificationsOutline />
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600"
            >
              <BiDotsHorizontalRounded />
            </button>

           
            {isOpen && (
              <div className="origin-bottom-right absolute right-0 top-full mt-2 w-full sm:w-[35rem] rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                <div className="py-4 px-4 sm:px-6 grid grid-cols-2 sm:grid-cols-4 gap-y-4 text-sm text-gray-600">
                  <div>
                    <div className="font-semibold text-gray-700">Your company</div>
                    <a href="#" className="block mt-2 hover:text-gray-800">Account and settings</a>
                    <a href="#" className="block mt-2 hover:text-gray-800">Manage users</a>
                    <a href="#" className="block mt-2 hover:text-gray-800">Custom form styles</a>
                    <a href="#" className="block mt-2 hover:text-gray-800">Chart of accounts</a>
                    <a href="#" className="block mt-2 hover:text-gray-800">Additional info</a>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-700">Lists</div>
                    <a href="#" className="block mt-2 hover:text-gray-800">All lists</a>
                    <a href="#" className="block mt-2 hover:text-gray-800">Products and services</a>
                    <a href="#" className="block mt-2 hover:text-gray-800">Recurring transactions</a>
                    <a href="#" className="block mt-2 hover:text-gray-800">Attachments</a>
                    <a href="#" className="block mt-2 hover:text-gray-800">Custom fields</a>
                    <a href="#" className="block mt-2 hover:text-gray-800">Rules</a>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-700">Tools</div>
                    <a href="#" className="block mt-2 hover:text-gray-800">Import data</a>
                    <a href="#" className="block mt-2 hover:text-gray-800">Export data</a>
                    <a href="#" className="block mt-2 hover:text-gray-800">Reconcile</a>
                    <a href="#" className="block mt-2 hover:text-gray-800">Budgeting</a>
                    <a href="#" className="block mt-2 hover:text-gray-800">Audit log</a>
                    <a href="#" className="block mt-2 hover:text-gray-800">Smart look</a>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-700">Profile</div>
                    <a href="#" className="block mt-2 hover:text-gray-800">Subscriptions and billing</a>
                    <a href="#" className="block mt-2 hover:text-gray-800">Feedback</a>
                    <a href="#" className="block mt-2 hover:text-gray-800">Privacy</a>
                    <a href="#" className="block mt-2 hover:text-gray-800">Switch company</a>
                  </div>
                </div>
                <div className="border-t border-gray-200 mt-2"></div>
                <div className="px-4 sm:px-6 py-4 text-orange-500 text-sm">
                  <a href="#" className="flex items-center hover:text-orange-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3" />
                    </svg>
                    Video tutorials
                  </a>
                  <a href="#" className="block mt-2 hover:text-orange-600">
                    Switch from Business view to Accountant view
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}
