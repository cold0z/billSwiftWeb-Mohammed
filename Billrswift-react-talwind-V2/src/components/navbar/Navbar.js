import React, { useState } from 'react';
import { SlLogout } from "react-icons/sl";
// import { CiSearch } from "react-icons/ci";
// import { IoMdNotificationsOutline } from "react-icons/io";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { IoCloseCircleOutline, IoClose } from "react-icons/io5";
import iw from '../images/Warning.svg';
import iconnotification from '../images/notification.svg'
import iconsearch from '../images/search.svg'
import iconlogout from '../images/Log_Out.svg'
import logon from '../images/nexulargrp.svg'; 
import imageflow from '../images/flowera.svg'
import iconbulb from '../images/Bulb.svg'
import dots from '../images/dots3.svg'
import avat from '../images/Mask Group 1.svg'

import icpeople from '../images/people.svg' 
import icpaid from '../images/paid.svg' 
import icpantool from '../images/pan-tool.svg' 
import icsmart from '../images/smart.svg' 
import icstories from '../images/stories.svg' 
import icsmlg from '../images/smlg.svg' 
import icdata from '../images/dataset.svg' 
import icpeoplewhite from '../images/peoplewhite.svg' 
import icsend from '../images/Send.svg'






export default function Navbar() {
  const [wisOpen, setwIsOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false); 
  const [activeTab, setActiveTab] = useState('search');

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleNotification = () => {
    setNotificationOpen(!notificationOpen);
  };

   const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const toggleWarning = () => {
    setwIsOpen(!wisOpen);
  };

  return (
    <div className=''>
      <header className="flex flex-col sm:flex-row items-center justify-between mb-6 p-4 rounded-lg shadow-sm bg-home">
        
        <div className="flex items-center space-x-3">
        <img src={logon} alt="Logo" className="h-[75px] w-[75px]" />
        <span className="font-bold text-lg">Welcome Back! <span className="text-[#666666]">Nexular Corp</span></span>
        </div>
        
        <div className="flex items-center space-x-4 ">
          {/* <span className="text-sm sm:text-base">
            Welcome Back! <strong>Fadi Anarchi</strong>
          </span> */}
          <div className="flex items-center border rounded-lg p-2 bg-white space-x-5 relative h-[72px] ">
            
            
            
            
            <div className="flex items-center border rounded-lg p-2 bg-white space-x-5 relative h-[72px]">
            
            <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center space-x-3 focus:outline-none"
                >
                  <img
                    src={avat}
                    alt="avatar"
                    className="rounded h-[59px] w-[59px] object-cover"
                  />
                </button>
                {dropdownOpen && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
                    <div className="p-4 text-center">
                      <div className="relative w-16 h-16 mx-auto mb-4">
                        <img
                          src={avat}
                          alt="avatar"
                          className="rounded-full w-full h-full object-cover border-2 border-orange-500"
                        />
                      </div>
                      <div className="font-semibold text-gray-800">Fadi Jawad</div>
                      <div className="text-gray-600 text-sm">jawad00anarchy@gmail.com</div>
                      <a
                        href="#"
                        className="mt-4 block text-orange-500 font-medium hover:text-orange-600"
                      >
                        Manage your Billswift Account
                      </a>
                    </div>
                  </div>
                )}
              </div>

            </div>
            
            
            
            
            
            
            
            
            <button className="text-gray-600">
              {/* <SlLogout /> */}
              <img
              src={iconlogout}
              alt="logout"
              className="rounded w-5 h-5"
              
            />
            
            </button><span>Logout</span>
            



            <div className="relative">
              <button onClick={toggleSearch} className="text-gray-600">
                <img src={iconsearch} alt="search" className="rounded w-5 h-5" />
              </button>
              {searchOpen && (
                <div className="absolute right-0 mt-2 w-full sm:w-[40rem] bg-white border border-gray-200 rounded-lg shadow-lg z-20 p-4">
                  <div className="flex justify-between items-center mb-4 space-x-2">
                    <img src={iconsearch} alt='search' className='w-5 h-5 '/>
                    <input
                      type="text" 
                      placeholder="Search" 
                      className="w-full bg-gray-100 rounded-full p-2 text-sm outline-none" 
                    />
                    <button onClick={toggleSearch} className="text-red-500 hover:text-red-600 ml-2">
                      <IoClose className='h-5 w-5 bg-orange-500 rounded-xl text-white'/>
                    </button>
                  </div>
                  <div className="text-gray-600">
                    <p className="font-semibold mb-2">SEARCH TIPS</p>
                    <ul className="space-y-2 text-sm">

                      <li className="flex items-start">
                        <img 
                          src={iconbulb} 
                          alt="search" 
                          className="rounded w-3 h-3 mr-2 mt-1" />
                          <span><span className="font-medium">Search for </span>customers, suppliers, transactions, reports, or accounts.</span>
                        </li>

                      
                      <li className="flex items-start">
                        <img 
                          src={iconbulb} 
                          alt="search" 
                          className="rounded w-3 h-3 mr-2 mt-1" />
                          <span><span className="font-medium">Search by </span>name, address, amount (e.g., 340.00), date (MM/DD/YYYY), and more.</span>
                        </li>

                        <li className="flex items-start">
                          <img 
                          src={iconbulb} 
                          alt="search" 
                          className="rounded w-3 h-3 mr-2 mt-1" />
                          <span><span className="font-medium">Type </span>create to add a new invoice, expense, or any other kind of transaction.</span>
                        </li>
                      </ul>

                      
                    <a href="#" className="block mt-4 text-orange-500 font-medium hover:text-orange-600">
                      Go to transactions search
                    </a>
                  </div>
                </div>
              )}
            </div>



              {/* notification btn */}
            <div className="relative">
              <button onClick={toggleNotification} className="text-gray-600">
                <img
                  src={iconnotification}
                  alt="notification"
                  className="rounded w-5 h-5 "
                />
              </button>
              {notificationOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-20 p-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-semibold text-gray-800">Notifications</span>
                    <button onClick={toggleNotification} className="text-red-500 hover:text-red-600">
                      <IoClose className='h-5 w-5 bg-orange-500 rounded-xl text-white'/>
                    </button>
                  </div>
                  <div className="flex flex-col items-center text-gray-600">
                    <img src={imageflow} alt="No notifications" className="w-30 h-30 mb-4" />
                    <p>Nothing to see here!</p>
                  </div>
                </div>
              )}
            </div>

            
           {/* warning btn */}

          <div className="relative ">
              <button onClick={toggleWarning}>
                <img src={iw} alt="warning" className="rounded w-5 h-5" />
              </button>

              {wisOpen && (
                <div className="absolute right-0 mt-2 w-full h-screen sm:w-[40rem] bg-white border border-gray-200 rounded-lg shadow-lg z-20 p-4 overflow-y-scroll">
                  
                  <div className='text-end'>
                    <button onClick={toggleWarning} className="text-red-500 hover:text-red-600 ml-2">
                      <IoClose className="h-5 w-5 bg-orange-500 rounded-full text-white" />
                    </button>
                  </div>
                  

                    
                  <div className="flex justify-between items-center mb-4 ">
                    
                    <div className="flex space-x-10 ">
                      <button
                        className={`px-28 text-lg font-semibold pb-2 ${activeTab === 'search' ? 'border-b-2 border-orange-500 text-orange-500' : 'text-gray-600 '}`}
                        onClick={() => setActiveTab('search')}
                      >
                        Search
                      </button>
                      <button
                        className={`px-28 text-lg font-semibold pb-2 ${activeTab === 'assistant' ? 'border-b-2 border-orange-500 text-orange-500' : 'text-gray-600'}`}
                        onClick={() => setActiveTab('assistant')}
                      >
                        Assistant
                      </button>
                    </div>
                    
                  </div>

                  {activeTab === 'search' && (
                    <div>
                      <div className="flex items-center mb-10">
                        <img src={iconsearch} alt="search" className="w-5 h-5 mr-2" />
                        <input
                          type="text"
                          placeholder="Search questions, keywords, or topics"
                          className="w-full bg-gray-100 rounded-full p-2 text-sm outline-none "
                        />
                      </div>
                      <p className="text-gray-600 mb-10">
                        
                        People like you viewed these answers:
                      </p>

                      <p className='mb-5 text-xs mb-2'>
                        <h3 className='text-orange-500 text-sm '>Find missing payments you want to deposit in the Bannk Deposit window in Billrswift online </h3>
                        <p className='mb-3'>Billswift</p>
                      Learn how to find payments you expect to see in the Bank Deposit window in Billswift online. Before you make a bank deposit, make sure you put customer ... 
                      </p>

                      <p className='mb-5 text-xs mb-2'>
                        <h3 className='text-orange-500 text-sm '>Find missing payments you want to deposit in the Bannk Deposit window in Billrswift online </h3>
                        <p className='mb-3'>Billswift</p>
                      Learn how to find payments you expect to see in the Bank Deposit window in Billswift online. Before you make a bank deposit, make sure you put customer ... 
                      </p>

                      <p className='mb-5 text-xs mb-2'>
                        <h3 className='text-orange-500 text-sm '>Find missing payments you want to deposit in the Bannk Deposit window in Billrswift online </h3>
                        <p className='mb-3'>Billswift</p>
                      Learn how to find payments you expect to see in the Bank Deposit window in Billswift online. Before you make a bank deposit, make sure you put customer ... 
                      </p>

                      <p className='mb-5 text-xs mb-2'>
                        <h3 className='text-orange-500 text-sm '>Find missing payments you want to deposit in the Bannk Deposit window in Billrswift online </h3>
                        <p className='mb-3'>Billswift</p>
                      Learn how to find payments you expect to see in the Bank Deposit window in Billswift online. Before you make a bank deposit, make sure you put customer ... 
                      </p>

                      <p className='mb-5 text-xs '>
                        <h3 className='text-orange-500 text-sm '>Find missing payments you want to deposit in the Bannk Deposit window in Billrswift online </h3>
                        <p className='mb-3'>Billswift</p>
                      Learn how to find payments you expect to see in the Bank Deposit window in Billswift online. Before you make a bank deposit, make sure you put customer ... 
                          <p className='text-center'><button type="button" class=" mt-2 py-1 px-8 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-orange-500 text-white hover:bg-orange-700 focus:outline-none  disabled:opacity-50 disabled:pointer-events-none  " >
                              Contact-us
                          </button></p>
                      </p>

                      <p className='mb-5 text-xs mb-2'>
                        <h3 className='text-orange-500 text-sm '>Find missing payments you want to deposit in the Bannk Deposit window in Billrswift online </h3>
                        <p className='mb-3'>Billswift</p>
                      Learn how to find payments you expect to see in the Bank Deposit window in Billswift online. Before you make a bank deposit, make sure you put customer ... 
                      </p>

                      <p className='mb-5 text-xs mb-2'>
                        <h3 className='text-orange-500 text-sm '>Find missing payments you want to deposit in the Bannk Deposit window in Billrswift online </h3>
                        <p className='mb-3'>Billswift</p>
                      Learn how to find payments you expect to see in the Bank Deposit window in Billswift online. Before you make a bank deposit, make sure you put customer ... 
                      </p>
                      
                      
                    </div>
                  )}

                  {activeTab === 'assistant' && (
                    <div>
                      <p className="text-gray-600 mb-4 text-sm text-center">
                        Vendredi 16 aout 2024
                      </p>
                      <p className='mb-6'>BS Assistant</p>


                      <div className='ml-9'>

                      <div className='bg-gray-100 rounded shadow-sm items-end p-3 mb-4'>
                        <p className='text-sm mb-9'>Hi Fady👋. I'm your Bs Assistant, here to help you find answers 24/7. </p>
                        
                        <p className='text-sm mb-9'>You can ask me a question, browse help articles under the “Search” tab above, or type “Chat to a human” to get through to our team.</p> 
                        <p className='text-sm mb-4'> I can see you're new here 👀 For new customers, we are offering <span className='font-bold'> a free 45 minute 1-to-1 session </span>with a member of our onboarding team. During the screen sharing session, we’ll provide an overview of the key features and help you get them set up for your business.</p>                       
                      </div>

                      <div className='bg-gray-100  shadow-sm items-end p-3 mb-3'>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start text-md">
                            <img 
                              src={icpeople} 
                              alt="search" 
                              className="rounded w-4 h-4 mr-2 mt-1 ml-5" />
                              <span className='text-orange-500 font-normal'>Book a free 1-to-1 session with our onboarding team</span>
                          </li>
                        </ul>
                      </div>

                      <div className='bg-gray-100 shadow-sm items-end p-3 mb-3'>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start text-md">
                            <img 
                              src={icsmart} 
                              alt="search" 
                              className="rounded w-4 h-4 mr-2 mt-1 ml-5" />
                              <span className='text-orange-500 font-normal'>8 step guide to help you set up Billswift Online</span>
                          </li>
                        </ul>
                      </div>

                      <div className='bg-gray-100  shadow-sm items-end p-3 mb-3'>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start text-md">
                            <img 
                              src={icdata} 
                              alt="search" 
                              className="rounded w-4 h-4 mr-2 mt-1 ml-5" />
                              <span className='text-orange-500 font-normal'>Free Webinar On-Demand to learn the basics of Billswift Online</span>
                          </li>
                        </ul>
                      </div>

                      <div className='bg-gray-100  shadow-sm items-end p-3 mb-3'>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start text-md">
                            <img 
                              src={icstories} 
                              alt="search" 
                              className="rounded w-4 h-4 mr-2 mt-1 ml-5" />
                              <span className='text-orange-500 font-normal'>Learn Billswift Accounting Basics</span>
                          </li>
                        </ul>
                      </div>

                      <div className='bg-gray-100  shadow-sm items-end p-3 mb-3'>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start text-md">
                            <img 
                              src={icpantool} 
                              alt="search" 
                              className="rounded w-4 h-4 mr-2 mt-1 ml-5" />
                              <span className='text-orange-500 font-normal'>Connect Apps to Billswift</span>
                          </li>
                        </ul>
                      </div>

                      <div className='bg-gray-100  shadow-sm items-end p-3 mb-2'>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start text-md">
                            <img 
                              src={icpaid} 
                              alt="search" 
                              className="rounded w-4 h-4 mr-2 mt-1 ml-5" />
                              <span className='text-orange-500 font-normal'>Everything you need to know about connecting your bank to Billswift</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div>

                      <img 
                              src={icsmlg} 
                              alt="search" 
                              className="rounded w-6 h-6 mr-2 mt-1 ml-2 mb-7" />

                    </div>

                      <p className="text-gray-600 mb-6 text-sm text-center">
                        Today, 1:40 PM
                      </p>

                      <div className="relative w-full mb-4 m-2">

                        <div className="absolute inset-y-0 right-1 flex items-center pl-3 pointer-events-none">
                          <img src={icsend}
                              alt='send'
                              className='w-5 h-5'/>
                        </div>
                        <input
                          type="text"
                          placeholder="Type or ask something"
                          className="w-full pl-10 pr-4 py-2 shadow-md border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
                        />
                        
                      </div>


                      <p className='text-end mb-2'>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-5 rounded inline-flex items-center">
                          
                          <img src={icpeoplewhite} alt="icon" className="w-5 h-5 mr-2" />
                          Book a free 1-to-1 session with our onboarding team
                        </button>
                      </p>
                    </div>
              )}
            </div>
      )}
          </div>


            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600"
            >
              {/* <BiDotsHorizontalRounded /> */}
              <img src={dots} alt='' className='w-5 h-5'/>
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
