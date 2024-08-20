import React from 'react';
import {  Dropdown, Form , Nav} from 'react-bootstrap';
import { FaSlidersH } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const DashboardNavbar = () => {
  return (
    <div className="d-flex justify-content-between align-items-center p-3" style={styles.headerContainer}>
      
      <Nav variant="underline" defaultActiveKey="/home">
        <Nav.Item>
         <Nav.Link className='text-dark' href="/home">Home</Nav.Link>
       </Nav.Item>
        <Nav.Item>
         <Nav.Link className='text-muted' href="/home">Cash flow</Nav.Link>
       </Nav.Item>

      </Nav>
      
      <div className="d-flex align-items-center">
        <Dropdown>
          <Dropdown.Toggle variant="danger" id="dropdown-basic" className="d-flex align-items-center">
            <FaSlidersH className="me-2" />
            Customise layout
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <div className="d-flex align-items-center ms-3">
          <span className="me-2">Privacy</span>
          <Form.Check 
            type="switch"
            id="privacy-switch"
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  headerContainer: {
    backgroundColor: '#f5f5e1',
    borderBottom: '1px solid #ddd',
  },
};

export default DashboardNavbar;
