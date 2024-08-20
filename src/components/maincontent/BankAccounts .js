import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import { AiFillPlusCircle } from 'react-icons/ai';

const BankAccount = () => {
  return (
    <div className="container mt-4">
 
          <Card className="mb-4" style={styles.card}>
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <Card.Title className="mb-0">BANK ACCOUNTS</Card.Title>
                <a href="#" className="text-primary">Hide</a>
              </div>
              <Card.Text className="mb-2">Link your bank</Card.Text>
              <Card.Text className="text-muted mb-3">
                See where your money is headed so you can take control of your finances.
              </Card.Text>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="">
                  <p className="mb-1">
                    <span className="badge bg-light text-dark">Banque Populaire</span>
                    <AiFillPlusCircle className="text-danger" size={24} />
                  </p>
                  <p className="mb-1">
                    <span className="badge bg-light text-dark">Bank of Africa</span>
                    <AiFillPlusCircle className="text-danger" size={24} />
                  </p>
                </div>
              </div>
              <Button variant="danger" className="w-100">
                Find your bank
              </Button>
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

export default BankAccount;







