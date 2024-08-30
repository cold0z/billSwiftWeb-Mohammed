import React from 'react'
import { AiOutlineEdit } from 'react-icons/ai';
import { FaFileInvoice, FaWallet, FaUniversity, FaCheckSquare } from 'react-icons/fa';
import icon1 from '../images/icon1.svg'
import icon2 from '../images/icon2.svg'
import icon3 from '../images/icon3.png'
import icon4 from '../images/icon4.svg'


export default function Secondgrid() {
  return (
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-covercolor">
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-lg">CASH FLOW TREND</h2>
          <div className="text-sm text-gray-600">
            <span className="mr-4">Money in <span className="text-black">●</span></span>
            <span>Money out <span className="text-gray-500">●</span></span>
          </div>
        </div>
        <p className="mt-4 font-semibold">Track how your money is doing</p>
        <p className="text-gray-500 mt-2">
          Seeing how money flows over time can help you plan for the future. Link your bank account to get started.
        </p>
        <div className="mt-6">
          
          <div className="bg-gray-100 h-24">
            <div className="grid grid-cols-4 text-center mt-4">
              <div>MAR</div>
              <div>APR</div>
              <div>MAY</div>
              <div>JUN</div>
            </div>
          </div>
        </div>
        <a href="#" className="text-blue-500 mt-4 block text-sm text-end">Learn more ➡️</a>
      </div>

      
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-lg">SHORTCUTS</h2>
            <AiOutlineEdit className="text-gray-500 " />
          </div>
          <div className="grid grid-cols-4 gap-4 mt-6">
            <div className="text-center">
                <div className="bg-gray-100 p-4">
                    <img src={icon1} className="mx-auto" style={{  size: '25px' }} />
                </div>
                <p className="mt-2">Create invoice</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 p-4 ">
                <img src={icon3} className="mx-auto" style={{  size: '25px' }} />
              </div>
              <p className="mt-2">Record expense</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 p-4 ">
                <img src={icon4} className="mx-auto" style={{  size: '25px' }} />
              </div>
              <p className="mt-2">Add bank deposit</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 p-4 ">
                <img src={icon2} className="mx-auto" style={{  size: '25px' }} />
              </div>
              <p className="mt-2">Create cheque</p>
            </div>
          </div>
        </div>
        <a href="#" className="text-blue-500 mt-4 block text-sm">Show all</a>
      </div>
    </div>
  )
}
