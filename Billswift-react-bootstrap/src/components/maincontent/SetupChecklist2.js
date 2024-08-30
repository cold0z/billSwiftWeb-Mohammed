import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import { FaCheckCircle, FaPlayCircle } from 'react-icons/fa';
import { MdRadioButtonUnchecked } from 'react-icons/md';
import { PiNumberCircleOneLight , PiNumberCircleTwoLight  } from "react-icons/pi";

const SetupChecklist2 = () => {
  return (
    <div className="container mt-4">
      <Card className="mb-4" style={styles.card}>
        <Card.Body>
          <Card.Title className="mb-3">SETUP CHECKLIST</Card.Title>

          <Accordion>
            <Card className="border-0 mb-3" style={styles.cardItem}>
              <Card.Header className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <FaCheckCircle className="text-danger me-2" size={24} />
                  <span>Basic business info</span>
                </div>
                <span>100%</span>
              </Card.Header>
            </Card>

            <Accordion.Item eventKey="0" className="mb-3" style={styles.cardItem}>
              <Accordion.Header>
                <FaCheckCircle className="text-danger me-2" size={24} />
                <span>Organise expenses</span>
              </Accordion.Header>
              <Accordion.Body>
                <Card className="border-0">
                  <Card.Body className="d-flex justify-content-between">
                    <div>
                      <Card.Title style={styles.subTitle}>
                        Start tracking your expenses to stay organised
                      </Card.Title>
                      <ul className="list-unstyled">
                        <li className="d-flex align-items-start mb-2">
                          <PiNumberCircleOneLight className=" me-2" size={20} />
                          <div>
                            <span>Link your business accounts</span>
                            <br />
                            <small className="text-muted">Import your transactions without data entry.</small>
                          </div>
                        </li>
                        <li className="d-flex align-items-start mb-2">
                          <PiNumberCircleTwoLight className=" me-2" size={20} />
                          <div>
                            <span>Confirm categorised</span>
                            <br />
                            <small className="text-muted">
                              Show us how to automate more work for you.
                            </small>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="text-end">
                      <FaPlayCircle className="text-danger mb-2" size={48} />
                      <br />
                      <a href="#" className="text-primary d-block">See how it works 2:30</a>
                      <Button variant="danger" className="mt-2">Go</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Accordion.Body>
            </Accordion.Item>

            <Card className="border-0 mb-3" style={styles.cardItem}>
              <Card.Header className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <MdRadioButtonUnchecked className="text-muted me-2" size={24} />
                  <span>Get ready to invoice</span>
                </div>
              </Card.Header>
            </Card>

            <Card className="border-0" style={styles.cardItem}>
              <Card.Header className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <FaCheckCircle className="text-danger me-2" size={24} />
                  <span>Get the free mobile app</span>
                </div>
                <span>100%</span>
              </Card.Header>
            </Card>
          </Accordion>
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
  },
  cardItem: {
    borderRadius: '12px',
    backgroundColor: '#fafafa',
  },
  subTitle: {
    fontWeight: 'bold',
    fontSize: '16px',
  },
};

export default SetupChecklist2;
