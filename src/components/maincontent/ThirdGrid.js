import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaClipboardCheck } from "react-icons/fa";
import 'chart.js/auto';
import { RiDonutChartLine } from "react-icons/ri";

const ThirdGrid = () => {
  const chartData = {
    datasets: [
      {
        data: [1, 1, 1],
        backgroundColor: ["#e74c3c", "#f39c12", "#e67e22"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col md={6} >
          <Card className="h-100">
            <Card.Body className="text-center">
              <Card.Title>TASKS</Card.Title>
              <FaClipboardCheck size={80} color="#e67e22" />
              <Card.Text className="mt-3">
                <strong>No tasks yet!</strong>
              </Card.Text>
              <Card.Text className="text-muted">
                Check back soon to stay on top of your to-dos.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card style={{ height: '100%' }} className=" d-inline-block">
            <Card.Body>
              <Card.Title className="d-flex justify-content-between fs-6">
                <span>ACCOUNTS RECEIVABLE</span>
                <span>As of today</span>
              </Card.Title>
              <Card.Text className="text-muted fs-6">Data updated a few seconds ago</Card.Text>
              <Card.Text className="display-6 fs-4">0.00</Card.Text>
              <RiDonutChartLine color='#E67E22' size={100} />
              
              
            </Card.Body>
            <Card.Footer>
              <Button variant="link">Go to report</Button>
            </Card.Footer>
          </Card>
        </Col>

        <Col md={3}>
          <Card style={{ height: '100%' }}>
            <Card.Body>
              <Card.Title className="d-flex justify-content-between fs-6">
                <span>ACCOUNTS PAYABLE</span>
                  <span className="fs-6">As of today</span>
              </Card.Title>
              <Card.Text className="text-muted fs-6">Data updated a few seconds ago</Card.Text>
              <Card.Text className="display-6 fs-4">0.00</Card.Text>


              {/* <div className="text-muted">
                <p><span style={{ color: "#e74c3c" }}>●</span> 0.00 Current</p>
                <p><span style={{ color: "#f39c12" }}>●</span> 0.00 1-7 days</p>
                <p><span style={{ color: "#e67e22" }}>●</span> 0.00 8-14 days</p>
              </div>
              <Doughnut data={chartData} options={{ cutout: '80%' }} /> */}
                  <RiDonutChartLine color='#E5E5E5' size={100} />
            </Card.Body>
            <Card.Footer>
                <Button variant="link">Go to report</Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ThirdGrid;
