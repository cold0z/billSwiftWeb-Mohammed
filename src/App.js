import './App.css';
import Header from './components/header/Header';
import Page from './components/maincontent/Page';
import Sidebar2 from './components/sidebar2/Sidebar2';


import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';



function App() {
  return (
    <div className="container-fluid">
      <div>       
          <Row >
            <Col className='' ><Header /></Col> 
          </Row>
        
          <Row>
            <Col className=' col-lg-2'><Sidebar2 /></Col>
            <Col className=' w-75 p-3'>


              <Row className=''>
                <Col><Page/></Col>
              </Row>
            
            </Col>

          </Row>
          
          
      </div>      
    </div>
  );
}

export default App;

