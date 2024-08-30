import React from 'react';
import { Card, Button, Container, Row, Col, CloseButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FcAssistant } from "react-icons/fc";
import { MdOutlineComputer } from "react-icons/md";



const LastGrid = () => {
  return (
    <Container fluid className="bg-light p-4">
      <Row>
      

        <Col md={3} className="mb-3">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <h6 className="text-uppercase">TIP</h6><br/><br/>
              <div className="text-center my-3">
                <MdOutlineComputer size={70} color='#E76936'/>
                <Card.Title>Send invoices via WhatsApp</Card.Title>
                <Card.Text>
                  Get paid even faster. Share invoices instantly via WhatsApp.
                </Card.Text>
              </div>
              <Card.Link href="#" className="text-primary">
                Find out more
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>




        <Col md={3} className="mb-3">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <h6 className="text-uppercase">ASSISTANCE</h6><br/><br/>
              <div className="text-center my-3">
                  <FcAssistant size={70} />
                <Card.Title>Your trial is about to expire</Card.Title>
                <Card.Text>We’re here to help you subscribe.</Card.Text>
              </div><br/>
              <Card.Link href="#" className="text-primary">
                Chat with sales
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>



        <Col md={6} className="mb-3">
          <Card className="h-100 shadow-sm position-relative">
            <CloseButton className="position-absolute top-0 end-0 m-2 bg-danger " />
            <Card.Body>
              <h6 className="text-uppercase">INVOICES</h6>
              <div className="text-center my-3">
                <img
                  src="https://img.freepik.com/vecteurs-libre/nouveau-concept-message-pour-page-destination_23-2148321610.jpg?t=st=1724071093~exp=1724074693~hmac=1ccf336fecf843a224d828d91c01cf0e27ca9ada89a6599aa87660e1c1c95cf4&w=740" // Replace with the correct image URL
                  alt="Invoices"
                  className="mb-2 w-25 h-25"
                />
                <Card.Title>Send personalized invoices</Card.Title>
                <Card.Text>
                  Create, send, receive your payment, start again. Create an invoice to get started.
                </Card.Text>
              </div>
              <Button variant="danger" className="text-white ">
                Create an invoice
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LastGrid;
