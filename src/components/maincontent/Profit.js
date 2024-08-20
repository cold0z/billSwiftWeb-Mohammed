import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import { FaEllipsisV, FaInfoCircle } from 'react-icons/fa';


const Profit = () => {
  return (
    <div className="container mt-4">
      


        
          <Card className="mb-4" style={styles.card}>
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <Card.Title className="mb-0">profit & loss</Card.Title>
                <span className="text-muted">Last month</span>
              </div>
              <Card.Text>
                Net profit for May
                <FaInfoCircle className="ms-2 text-muted" />
              </Card.Text>
              <h3>0.د.م.</h3>
              <Card.Text className="text-muted">--% from prior month</Card.Text>
              <div className="d-flex justify-content-between">
                <div>
                  <p className="mb-1">Income</p>
                  <p className="mb-1 text-danger">0.د.م.</p>
                </div>
                <div>
                  <p className="mb-1">Expenses</p>
                  <p className="mb-1 text-primary">0.د.م.</p>
                </div>
              </div>
              <br/>
              <Button variant="link" className="text-start link-offset-2 link-underline link-underline-opacity-0">Bring in transactions </Button>
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

export default Profit;
