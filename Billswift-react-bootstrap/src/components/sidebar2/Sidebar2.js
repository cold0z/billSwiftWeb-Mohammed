import React from 'react';
import { Nav, Button } from 'react-bootstrap';
import { FaBookmark, FaCog, FaChevronRight, FaPlusCircle } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import { GiMoneyStack } from 'react-icons/gi';
import { AiFillFileText, AiOutlineMessage } from 'react-icons/ai';
import { IoMdPeople } from 'react-icons/io';
import { SiTaxbuzz } from 'react-icons/si';
import { TiPlus } from "react-icons/ti";
import { TbGridDots } from "react-icons/tb";
import { hover } from '@testing-library/user-event/dist/hover';
import './Sidebar.css'

const Sidebar2 = () => {
  return (
    <div style={styles.sidebar}>
      
      <Button variant="danger" style={styles.newButton}>
        <FaPlusCircle style={styles.icon} /> New
      </Button>
      <Nav className="flex-column" style={styles.nav}>
        <Nav.Item>
          <Nav.Link href="#" style={styles.bookmark}>
            <FaBookmark /> <span style={styles.navText}>BOOKMARKS</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" style={styles.addBookmark}>
            <TiPlus /> Add a bookmark
          </Nav.Link>
        </Nav.Item>
        <Nav.Item style={styles.menuHeader}><TbGridDots size={25} color='#FF6F61' />
          <span style={styles.menuTitle}>Menu</span>
        </Nav.Item>
        {menuItems.map((item, index) => (
          <Nav.Item  key={index}>
            <Nav.Link className='box' href={item.link} style={styles.menuItem}>
              {item.icon} <span style={styles.navText}>{item.text}</span>
              <FaChevronRight style={styles.chevron} />
            </Nav.Link>
          </Nav.Item>
        ))}
        <Nav.Item>
          <Nav.Link href="#" style={styles.menuSettings}>
            <FaCog /> Menu settings
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <footer style={styles.footer}>
        <p style={styles.footerText}>© Billrswift 2024</p>
        <p style={styles.footerSubText}>Service for managing bills, invoices, and receipts quickly.</p>
      </footer>
    </div>
  );
};

const menuItems = [
  { icon: <MdDashboard />, text: 'Dashboards', link: '#' },
  { icon: <GiMoneyStack />, text: 'Transactions', link: '#' },
  { icon: <AiFillFileText />, text: 'Sales', link: '#' },
  { icon: <AiFillFileText />, text: 'Expenses', link: '#' },
  { icon: <IoMdPeople />, text: 'Customers & Leads', link: '#' },
  { icon: <AiFillFileText />, text: 'Reports', link: '#' },
  { icon: <IoMdPeople />, text: 'Employees', link: '#' },
  { icon: <SiTaxbuzz />, text: 'Taxes', link: '#' },
  { icon: <AiFillFileText />, text: 'My accountant', link: '#' },
  { icon: <AiOutlineMessage />, text: 'Messages', link: '#' },
];

const styles = {
  sidebar: {
    width: '250px',
    height: '100vh',
    backgroundColor: '#fff',
    padding: '20px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  logo: {
    width: '30px',
    height: '30px',
    marginRight: '10px',
  },
  brandName: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  newButton: {
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: '8px',
  },
  nav: {
    flex: 1,
  },
  bookmark: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: '1rem',
    marginBottom: '10px',
  },
  addBookmark: {
    color: '#777',
    marginBottom: '20px',
    fontSize: '0.9rem',
  },
  menuHeader: {
    marginBottom: '10px',
    fontWeight: 'bold',
  },
  menuTitle: {
    color: '#FF6F61',
    fontSize: 20,
    padding:'20px'
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: '#555',
    marginBottom: '10px',
    padding: '10px 15px',
    borderRadius: '100px',
    transition: 'background-color 0.2s',
  },
  menuItemHover: {
    backgroundColor: '#f7f7f7',
  },
  navText: {
    marginLeft: '10px',
    
  },
 
  
  chevron: {
    marginLeft: 'auto',
  },
  menuSettings: {
    color: '#888',
    marginTop: '20px',
    fontSize: '0.9rem',
  },
  footer: {
    marginTop: '20px',
    textAlign: 'center',
  },
  footerText: {
    fontSize: '0.8rem',
    color: '#aaa',
    marginBottom: '5px',
  },
  footerSubText: {
    fontSize: '0.75rem',
    color: '#bbb',
  },
};

export default Sidebar2;
