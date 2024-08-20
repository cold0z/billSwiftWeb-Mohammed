import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaEllipsisV, FaInfoCircle } from 'react-icons/fa';
import { RiDonutChartLine } from "react-icons/ri";

const Expenses = () => {
  return (
    <div className="container mt-4">
  


        
          <Card className="mb-4" style={styles.card}>
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <Card.Title className="mb-0">Expenses</Card.Title>
                <span className="text-muted">Last 30 days</span>
              </div>
              <Card.Text>
                Spending for last 30 days
                <FaInfoCircle className="ms-2 text-muted" />
              </Card.Text>
              <h3>0.د.م.</h3>
              <Card.Text className="text-muted">--% from prior 30 days</Card.Text>
              <div className="d-flex align-items-center">
                <div className="me-3">                 
                  <div className="bg-light" style={styles.chartPlaceholder}></div>
                </div>
                <div>
                  <RiDonutChartLine color='#E5E5E5' size={80} />
                </div>
              </div>
              
              <Button variant="link" className="text-start link-offset-2 link-underline link-underline-opacity-0">Add an Expense </Button>
              <FaEllipsisV className="text-muted position-absolute top-0 end-0 p-2" />
            </Card.Body>
          </Card>
        

 
    </div>
  );
};

const styles = {
  card: {
    borderRadius: '12px',
    border: 'none',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    position: 'relative',
  },
  chartPlaceholder: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
  },
  salesPlaceholder: {
    width: '100%',
    height: '50px',
  },
};

export default Expenses;
