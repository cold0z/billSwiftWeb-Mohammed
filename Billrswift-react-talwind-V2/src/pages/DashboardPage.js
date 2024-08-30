import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Firstgrid from '../components/firstgrid/Firstgrid';
import Secondgrid from '../components/secondgrid/Secondgrid';
import ThirdGrid from '../components/thirdgrid/ThirdGrid';
import DashboardNavbar from '../components/navdashboard/DashboardNavbar ';
import LastGrid from '../components/lastgrid/LastGrid';

export default function DashboardPage() {
  return (
    <div>
      <div className="bg-home flex-1  sm:p-6 md:p-8 lg:p-10 xl:p-12">
        
        <Navbar /> 
       
       <DashboardNavbar /> 
        <Firstgrid /> 
        <Secondgrid /> 
        <ThirdGrid /> 
        <LastGrid /> 
       </div>
    </div>
  )
}
