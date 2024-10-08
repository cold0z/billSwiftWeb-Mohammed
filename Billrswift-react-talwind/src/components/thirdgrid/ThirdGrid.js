import React from "react";
import { FaClipboardCheck } from "react-icons/fa";
import icon5 from '../images/icon5.svg'

const CircleChart = ({ data, colors }) => {
  const total = data.reduce((acc, value) => acc + value, 0);
  let cumulativePercent = 0;

  return (
    <div className="relative w-24 h-24">
      {data.map((value, index) => {
        const percentage = (value / total) * 100;
        const startValue = cumulativePercent;
        cumulativePercent += percentage;
        const rotate = startValue * 3.6; 

        return (
          <div
            key={index}
            className="absolute top-0 left-0 w-full h-full rounded-full"
            style={{
              clipPath: `polygon(50% 50%, 100% 50%, 100% 0, 0 0, 0 100%, 100% 100%, 100% 50%)`,
              backgroundColor: colors[index],
              transform: `rotate(${rotate}deg)`,
            }}
          />
        );
      })}
      <div className="absolute top-0 left-0 w-full h-full rounded-full bg-white" style={{ clipPath: "circle(45% at 50% 50%)" }}></div>
    </div>
  );
};

const ThirdGrid = () => {
  const chartData = [1, 1, 1];
  const chartColors = ["#e74c3c", "#f39c12", "#e67e22"];

  return (
    <div className="container mx-auto mt-4">
      <div className="flex flex-wrap -mx-2">
        <div className="w-full md:w-1/2 px-2 mb-4">
          <div className="bg-white shadow-md rounded-lg h-full flex flex-col items-center justify-center p-6">
            <div className="flex justify-between  font-medium ">
              <span className="text-xl font-semibold mb-8 ">TASKS</span>
            </div>
            <img src={icon5} className="mx-auto" style={{  size: '40px' }} />
            <p className="mt-3 text-lg font-bold">No tasks yet!</p>
            <p className="text-gray-500">Check back soon to stay on top of your to-dos.</p>
          </div>
        </div>

        <div className="w-full md:w-1/4 px-2 mb-4">
          <div className="bg-white shadow-md rounded-lg h-full flex flex-col justify-between p-6">
            <div>
              <div className="flex justify-between text-sm font-medium mb-2">
                <span>ACCOUNTS RECEIVABLE</span>
                <span>As of today</span>
              </div>
              <p className="text-gray-500 text-sm">Data updated a few seconds ago</p>
              <p className="text-2xl font-semibold mt-2">0.00</p>
              <p className="text-sm text-gray-600 text-end">0.00 Current</p>
                
              <CircleChart data={chartData} colors={chartColors} />

              
            </div>
            <br/>
            <div>
              <button className="text-indigo-600 hover:underline">Go to report</button>
            </div>
          </div>
        </div>



        <div className="w-full md:w-1/4 px-2 mb-4">
          <div className="bg-white shadow-md rounded-lg h-full flex flex-col justify-between p-6">
            <div>
              <div className="flex justify-between text-sm font-medium mb-2">
                <span>ACCOUNTS PAYABLE</span>
                <span>As of today</span>
              </div>
              <p className="text-gray-500 text-sm">Data updated a few seconds ago</p>
              <p className="text-2xl font-semibold mt-2">0.00</p>
              <CircleChart data={chartData} colors={["#E5E5E5"]} />
            </div>
            <div>
              <button className="text-indigo-600 hover:underline">Go to report</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdGrid;
