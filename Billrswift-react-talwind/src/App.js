import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';

import Firstgrid from './components/firstgrid/Firstgrid';
import Secondgrid from './components/secondgrid/Secondgrid';
import ThirdGrid from './components/thirdgrid/ThirdGrid';
import LastGrid from './components/lastgrid/LastGrid';
import DashboardNavbar from './components/navdashboard/DashboardNavbar ';

const App = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 ">
      <Sidebar />
      <div className="bg-home flex-1  sm:p-6 md:p-8 lg:p-10 xl:p-12">
       <Navbar /> 
       
       <DashboardNavbar /> 
       <Firstgrid /> 
       <Secondgrid /> 
       <ThirdGrid /> 
       <LastGrid /> 
      </div>
    </div>
  );
};

export default App;
