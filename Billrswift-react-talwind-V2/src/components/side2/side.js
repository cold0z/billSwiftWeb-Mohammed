import React, { useState } from "react";
import { FaBookmark, FaCog, FaChevronLeft, FaChevronRight, FaPlusCircle } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import { AiFillFileText, AiOutlineMessage } from "react-icons/ai";
import { RiMenuFold4Fill , RiMenuFoldFill  } from "react-icons/ri";
import { IoMdPeople } from "react-icons/io";
import { SiTaxbuzz } from "react-icons/si";
import { TiPlus } from "react-icons/ti";
import { TbGridDots } from "react-icons/tb";
import logo from '../images/websitelogo.svg';


const menuItems = [
  { icon: <MdDashboard />, text: "Dashboards", link: "/" },
  { icon: <GiMoneyStack />, text: "Transactions", link: "#" },
  { icon: <AiFillFileText />, text: "Sales", link: "#" },
  { icon: <AiFillFileText />, text: "Expenses", link: "#" },
  { icon: <IoMdPeople />, text: "Customers & Leads", link: "#" },
  { icon: <AiFillFileText />, text: "Reports", link: "#" },
  { icon: <IoMdPeople />, text: "Employees", link: "#" },
  { icon: <SiTaxbuzz />, text: "Taxes", link: "#" },
  { icon: <AiFillFileText />, text: "My accountant", link: "#" },
  { icon: <AiOutlineMessage />, text: "Messages", link: "#" },
];

export default function Sidebar2() {
  const [isOpen, setIsOpen] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex h-full ">
      
      <div
        className={`${
          isOpen ? 'w-64' : 'w-1'
        } bg-[#F7F7F7] text-gray-900 h-full transition-all duration-300 shadow-md`}
      >
        
        {isOpen && (
          <div className="p-4">
            <div className="flex items-center justify-between p-10">
              <img
                src={logo}
                alt="Logo"
                className="h-10"
              />
            </div>
            
            <div className="relative mb-6">
              <button
                className="bg-danger text-white py-2 px-20 rounded-full flex items-center mx-auto"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <FaPlusCircle className="mr-2" /> New
              </button>
              {isDropdownOpen && (
                <div className="absolute mt-2 w-48 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 z-10">
                  <div className="py-2">
                    <div className="px-4 py-2 font-semibold text-gray-700">Customers</div>
                    <a
                      href="/invoices"
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
                    className="flex items-center py-2 px-4 rounded-full hover:bg-[#EDEEC1] hover:text-orange-500 text-gray-600 mb-2"
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
        )}
      </div>

      
      <div className="flex-1 pt-4 ">
        <button
          onClick={toggleSidebar}
          className="bg-gray-100 text-gray-600 p-2 rounded-full"
        >
          {isOpen ? <RiMenuFoldFill className="size-8" /> : <RiMenuFold4Fill className="size-8" />}
        </button>
        
      </div>
    </div>
  );
}
