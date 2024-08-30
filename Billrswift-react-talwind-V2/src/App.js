import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import DashboardPage from './pages/DashboardPage';
import Sidebar2 from './components/side2/side';

const App = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 ">
        <Sidebar2/>
      <div className="bg-home flex-1  sm:p-6 md:p-8 lg:p-10 xl:p-12">
        
       <DashboardPage />  
      </div>
    </div>
    
    

  );
};

export default App;
