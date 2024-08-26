import React, { useState } from 'react';
import { FaBookmark, FaCog, FaChevronRight, FaPlusCircle } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import { GiMoneyStack } from 'react-icons/gi';
import { AiFillFileText, AiOutlineMessage } from 'react-icons/ai';
import { IoMdPeople } from 'react-icons/io';
import { SiTaxbuzz } from 'react-icons/si';
import { TiPlus } from 'react-icons/ti';
import { TbGridDots } from 'react-icons/tb';
import logo from '../images/logo.svg';
import '../components.css';


const menuItems = [
  { icon: <MdDashboard />, text: 'Dashboards', link: '#' },
  { icon: <GiMoneyStack />, text: 'Transactions', link: '#' },
  { icon: <AiFillFileText />, text: 'Sales', link: '#' },
  { icon: <AiFillFileText />, text: 'Expenses', link: '#' },
  { icon: <IoMdPeople />, text: 'Customers & Leads', link: '#' },
  { icon: <AiFillFileText />, text: 'Reports', link: '#' },
  { icon: <IoMdPeople />, text: 'Employees', link: '#' },
  { icon: <SiTaxbuzz />, text: 'Taxes', link: '#' },
  { icon: <AiFillFileText />, text: 'My accountant', link: '#' },
  { icon: <AiOutlineMessage />, text: 'Messages', link: '#' },
];



export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <aside className="bg-white shadow-md flex flex-col md:w-72 w-full h-screen md:h-auto">
      {/* mobile button */}
      <div className="md:hidden p-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      {/*  */}

      
      <div className={`md:block ${isOpen ? 'block' : 'hidden'} w-full h-full`}>
        <div className="bg-white p-5 flex flex-col justify-between h-full">
          <div className="flex items-center mb-6">
            <img src={logo} alt="Logo" className="w-24 h-24" />
            <span className="ml-2 text-xl font-bold">Billrswift</span>
          </div>

          
          <div className="relative mb-6">
            <button
              className="bg-danger text-white py-2 px-20 rounded-full flex items-center mx-auto"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <FaPlusCircle className="mr-2" /> New
            </button>

            {isDropdownOpen && (
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 z-10">
                <div className="py-2">
                  <div className="px-4 py-2 font-semibold text-gray-700">Customers</div>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-yellow-200"
                  >
                    Invoice
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                  >
                    Estimate
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                  >
                    Expense
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                  >
                    Cheque
                  </a>
                </div>
                <div className="border-t border-gray-200"></div>
                <div className="py-2">
                  <a
                    href="#"
                    className="block px-4 py-2 text-orange-500 hover:text-orange-600 flex items-center justify-center"
                  >
                    Show more
                  </a>
                </div>
              </div>
            )}
          </div>

          <nav className="flex-1">
            <div className="flex flex-col">
              <a href="#" className="flex items-center py-2 px-4 rounded hover:bg-gray-200 text-black font-bold mb-2">
                <FaBookmark className="mr-2" />
                <span>BOOKMARKS</span>
              </a>
              <a href="#" className="flex items-center py-2 px-4 rounded hover:bg-gray-200 text-gray-700 mb-4 text-sm">
                <TiPlus className="mr-2" /> Add a bookmark
              </a>

              <div className="flex items-center py-2 px-4 mb-2 font-bold text-[#FF6F61]">
                <TbGridDots size={25} />
                <span className="ml-2 text-lg">Menu</span>
              </div>
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="flex items-center py-2 px-4 rounded hover:bg-orange-200 text-gray-600 mb-2"
                >
                  {item.icon}
                  <span className="ml-2">{item.text}</span>
                  <FaChevronRight className="ml-auto text-gray-400" />
                </a>
              ))}
              <a
                href="#"
                className="flex items-center py-2 px-4 rounded hover:bg-gray-200 text-gray-500 mt-4 text-sm"
              >
                <FaCog className="mr-2" /> Menu settings
              </a>
            </div>
          </nav>

          <footer className="text-center mt-4 text-gray-600">
            <p className="text-xs text-gray-400 mb-1">© Billrswift 2024</p>
            <p className="text-xs text-gray-500">
              Service for managing bills, invoices, and receipts quickly.
            </p>
          </footer>
        </div>
      </div>
    </aside>
  );
}


