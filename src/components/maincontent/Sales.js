import React from 'react';
import { Card } from 'react-bootstrap';
import { FaSyncAlt } from 'react-icons/fa';

import { LuRefreshCcw } from "react-icons/lu";

const Sales = () => {
  return (
    <div className="container mt-4">
        
          <Card className="mb-4" style={styles.card}>
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <Card.Title className="mb-0">Sales <LuRefreshCcw /></Card.Title>
                <span className="text-muted">Last 30 days</span>
              </div>
              <Card.Text className="text-muted">Data update a few seconds ago</Card.Text>
              <h3>0.د.م.00</h3>
              <br/>
              <br/>
              <br/>
              <br/>
              <div className="bg-light " style={styles.salesPlaceholder}></div>
              <FaSyncAlt className="text-muted position-absolute top-0 end-0 p-2" />
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

export default Sales;
