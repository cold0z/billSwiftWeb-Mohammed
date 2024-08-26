import React from 'react';
import { AiOutlineClose } from "react-icons/ai";
import assist from '../images/assistant.svg';
import pc from '../images/computer.svg';
import pic from '../images/pic5.png';

const LastGrid = () => {
  return (
    <div className="bg-gray-100 p-4">
      <div className="flex flex-wrap -mx-2">
        <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
          <div className="bg-white rounded-lg shadow-md h-full p-6">
            <h6 className="text-lg uppercase text-gray-600 mb-12">TIP</h6>
            <div className="text-center my-3">
              <img src={pc} className="mx-auto w-16 h-16" alt="Computer" />
              <h4 className="mt-4 text-lg font-semibold">Send invoices via WhatsApp</h4>
              <p className="text-gray-600 mt-2">
                Get paid even faster. Share invoices instantly via WhatsApp.
              </p>
            </div>
            <a href="#" className="text-blue-600 hover:underline">
              Find out more
            </a>
          </div>
        </div>

        
        <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
          <div className="bg-white shadow-md rounded-lg  h-full p-6">
            <h6 className="text-lg uppercase text-gray-600 mb-12">ASSISTANCE</h6>
            <div className="text-center my-3">
              <img src={assist} className="mx-auto w-16 h-16" alt="Assistant" />
              <h4 className="mt-4 text-lg font-semibold">Your trial is about to expire</h4>
              <p className="text-gray-600 mt-2 mb-10">We’re here to help you subscribe.</p>
            </div>
            <a href="#" className="text-blue-600 ">
              Chat with sales
            </a>
          </div>
        </div>

        <div className="w-full lg:w-2/4 px-2 mb-4">
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between relative">
            <button className="absolute top-2 right-2 text-white bg-orange-500 rounded-xl p-1 hover:bg-orange-600 ">
              <AiOutlineClose size={20} />
            </button>
            <div>
              <h6 className="text-lg uppercase text-gray-700 font-semibold mb-14">INVOICES</h6>
              <div className="flex flex-col lg:flex-row mt-4 justify-between items-center">
                <div className="lg:w-1/2">
                  <h4 className="text-lg font-semibold">Send personalized invoices</h4>
                  <p className="text-gray-600 mt-2 mb-6">
                    Create, send, receive your payment, start again. Create an invoice to get started.
                  </p>
                  <button className="bg-orange-500 text-white font-semibold py-2 px-4 rounded mt-4 hover:bg-red-600">
                    Create an invoice
                  </button>
                </div>
                <img
                  src={pic}
                  alt="Invoices"
                  className="lg:w-1/2 h-auto mt-4 lg:mt-0 mb-8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastGrid;
