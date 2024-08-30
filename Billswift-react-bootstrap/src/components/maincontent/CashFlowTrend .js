import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaFileInvoice, FaWallet, FaUniversity, FaCheckSquare } from "react-icons/fa";
import { AiOutlineEdit } from "react-icons/ai";

const CashFlow = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>CASH FLOW TREND
              <div className="text-end fs-6">
                <span className="align-top">Money in <span className="align-top" style={{ color: '#000' }}>●</span></span>
                <span>Money out <span style={{ color: '#555' }}>●</span></span>
              </div>
              </Card.Title>
              <Card.Text>
                <strong>Track how your money is doing</strong>
              </Card.Text>
              <Card.Text className="text-muted">
                Seeing how money flows over time can help you plan for the future. Link your bank account to get started.
              </Card.Text>
              <div className="chart">
                <div style={{ height: '100px', backgroundColor: '#f8f9fa', margin: '20px 0' }}>
                  
                  <Row>
                    <Col>MAR</Col>
                    <Col>APR</Col>
                    <Col>MAY</Col>
                    <Col>JUN</Col>
                  </Row>
                </div>
              </div>
              
            </Card.Body>
            <Button variant="link" className="text-end link-offset-2 link-underline link-underline-opacity-0">Learn More ➡️</Button>

          </Card>
        </Col>

        
        <Col md={6}>
          <Card className="h-100 d-flex justify-content-between align-items-right">
            <Card.Body>
              <Card.Title className="d-flex justify-content-between align-items-center"><span>SHORTCUTS</span> <AiOutlineEdit /></Card.Title>
              
              <br/>
              <br/>
              <br/>
              <br/>
              <Row>
                <Col className="text-center border rounded-circle">
                  <FaFileInvoice size={40} color="#E76936" />
                  <Card.Text>Create invoice</Card.Text>
                </Col>
                <Col className="text-center">
                  <FaWallet size={40} color="#E76936" />
                  <Card.Text>Record expense</Card.Text>
                </Col>
                <Col className="text-center">
                  <FaUniversity size={40} color="#E76936" />
                  <Card.Text>Add bank deposit</Card.Text>
                </Col>
                <Col className="text-center">
                  <FaCheckSquare size={40} color="#E76936" backgroundColor="#EA844E" />
                  <Card.Text>Create cheque</Card.Text>
                </Col>
              </Row>
            </Card.Body>
              <Button variant="link" className="text-start link-offset-2 link-underline link-underline-opacity-0">Show all</Button>
            
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CashFlow;
