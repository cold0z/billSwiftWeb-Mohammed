import React from 'react';
import { FaInfoCircle, FaEllipsisV, FaSyncAlt } from 'react-icons/fa';
import { RiDonutChartLine } from 'react-icons/ri';
import { LuRefreshCcw } from 'react-icons/lu';
import logobp from '../images/bp.jpeg';
import logoboaf from '../images/boaf.jpeg';
import marks from '../images/marks.svg';

export default function Firstgrid() {
  return (
    <div className="p-6 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        <div className="col-span-2 bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-bold mb-4">SETUP CHECKLIST</h2>
          <div className="space-y-4">
            
            <div className="flex items-center space-x-3">
              
              <div><img src={marks} className="mx-auto w-5 h-5" alt="<Marks>" /></div>
              <span>Basic business info</span>
              <span className="ml-auto">100%</span>
            </div>


            {/* expenses */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-3">
                    {/* <div className="text-white bg-orange-500 rounded-xl">✔</div> */}
                    <div><img src={marks} className="mx-auto w-5 h-5" alt="Marks" /></div>
                    <h3 className="font-bold">Organize expenses</h3>
                  </div>
                  <p className="mt-2">
                    Start tracking your expenses to stay organized
                  </p>
                </div>
                <img
                  src="https://via.placeholder.com/100"
                  alt="Video"
                  className="rounded-lg w-20"
                />
              </div>
              <div className="mt-3 space-y-2 text-sm text-gray-600">
                <div>1. Link your business accounts</div>
                <div>2. Confirm categories</div>
              </div>
              <button className="mt-3 text-blue-500 hover:underline">Go</button>
            </div>

            
            <div className="flex items-center space-x-3">
              <div className="text-gray-500">○</div>
              <span>Get ready to invoice</span>
            </div>
            <div className="flex items-center space-x-3">
              {/* <div className="text-orange-500">✔</div> */}
              <div><img src={marks} className="mx-auto w-5 h-5" alt="Marks" /></div>
              <span>Get the free mobile app</span>
              <span className="ml-auto">100%</span>
            </div>
          </div>
        </div>

        
        <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <h3 className="text-lg font-bold mb-2">BANK ACCOUNTS</h3>
            <p className="text-sm text-gray-600">
              Link your bank to see where your money is headed.
            </p>
            <div className="mt-4 space-y-4">
              <div className="flex items-center justify-center space-x-3">
                <img
                  src={logobp}
                  alt="Banque Populaire"
                  className="rounded-full w-8"
                />
                <span>Banque Populaire</span>
              </div>
              <div className="flex items-center justify-center space-x-9">
                <img
                  src={logoboaf}
                  alt="Bank of Africa"
                  className="rounded-full w-7"
                />
                <span>Bank of Africa</span>
              </div>
            </div>
            <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600">
              Find your bank
            </button>
          </div>

          
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <h3 className="text-lg font-bold mb-2">Profit & Loss</h3>
            <p className="text-sm text-gray-600">Net profit for May</p>
            <div className="mt-4 text-2xl font-bold">0.00</div>
            <div className="text-sm text-gray-500">--% from prior month</div>
            <div className="mt-4 text-left space-y-2">
              <div className="flex justify-between">
                <span>Income</span>
                <span>0.00</span>
              </div>
              <div className="flex justify-between">
                <span>Expenses</span>
                <span>0.00</span>
              </div>
            </div>
            <button className="mt-4 text-blue-500 hover:underline">
              Bring in transactions automatically
            </button>
          </div>

          
          <div className="bg-white p-6 rounded-lg shadow-sm relative">
            <div className="flex justify-between items-center mb-2">
              <h5 className="font-bold mb-0">Expenses</h5>
              <span className="text-gray-500 text-sm">Last 30 days</span>
            </div>
            <p className="text-gray-800">
              Spending for last 30 days
              <FaInfoCircle className="ml-2 text-orange-500 inline" />
            </p>
            <h3 className="text-3xl font-bold mt-2">0.د.م.</h3>
            <p className="text-gray-500 text-sm">--% from prior 30 days</p>
            <div className="flex items-center mt-4">
              <div className="mr-3 w-24 h-12 bg-gray-200 rounded"></div>
              <RiDonutChartLine className="text-gray-300" size={80} />
            </div>
            <button className="text-blue-600 mt-4 hover:underline">Add an Expense</button>
            <FaEllipsisV className="text-gray-500 absolute top-2 right-2 cursor-pointer" />
          </div>

          
          <div className="bg-white p-6 rounded-lg shadow-sm relative">
            <div className="flex justify-between items-center mb-2">
              <h5 className="font-bold mb-0 flex items-center">Sales <LuRefreshCcw className="ml-2" /></h5>
              <span className="text-gray-500 text-sm">Last 30 days</span>
            </div>
            <p className="text-gray-500 text-sm">Data updated a few seconds ago</p>
            <h3 className="text-3xl font-bold mt-2">0.د.م.00</h3>
            
            <div className="bg-gray-200 mt-6 h-24 rounded"></div>
            <FaSyncAlt className="text-gray-500 absolute top-2 right-2 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
