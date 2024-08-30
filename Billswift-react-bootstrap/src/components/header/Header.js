import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SlLogout } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import logo from '../images/logo2.png'; 
import userlg from '../images/user.png'

const Header = () => {
  return (
    <div className="d-flex justify-content-between align-items-center p-3 bg-light" style={{ backgroundColor: '#fafae5' }}>
      
      <div className="d-flex align-items-center mb-4">
        <img src={logo} alt="Logo" className="me-2" style={{ width: '60px', height: '60px', marginLeft:'20px' }} />
        <h5 className="fw-bold mb-0">Billrswift</h5>
      </div>

      <div className="d-flex align-items-center">
        <span className="me-3">Welcome Back! <strong>Fadi Anarchi</strong></span>
        <div className="d-flex align-items-center border rounded-pill p-2 bg-white">
          <img src={userlg} alt="Profile" className="rounded-circle me-2" style={{ width: '70px', height: '35px' }} />
          <button className="btn  text-muted p-0 me-3"><SlLogout /></button>
          <button className="btn btn-link text-muted p-0 me-3">Logout</button>
          <button className="btn btn-link text-muted p-0 me-3">
            <CiSearch />
          </button>
          <button className="btn btn-link text-muted p-0 me-3">
            <IoMdNotificationsOutline />
          </button>
          <button className="btn btn-link text-muted p-0">
            <BiDotsHorizontalRounded />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;


