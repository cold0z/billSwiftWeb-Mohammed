import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Col } from 'react-bootstrap';
import SetupChecklist2 from './SetupChecklist2';
import BankAccounts from './BankAccounts '
import DashboardNavbar from './Dashboardnavbar'
import CashFlow from './CashFlowTrend ';
import ThirdGrid from './ThirdGrid';
import LastGrid from './LastGrid';
import Profit from './Profit';
import Expenses from './Expenses';
import Sales from './Sales'


export default function Page() {
  return (
    <div>
        <Row>
            <Col><DashboardNavbar/></Col>
            
        </Row>
        <br/>
        <Row>
            <Col className=''><SetupChecklist2 /></Col>
            <Col>
                <Row>
                    <Col><BankAccounts /></Col>
                    <Col><Profit /></Col>
                </Row>
                <br/>
                <Row>
                    <Col><Expenses /></Col>
                    <Col><Sales /></Col>
                </Row>
            </Col>

        </Row>
        <Row>
            <Col><CashFlow /></Col>
        </Row>
        <Row>
            <Col><ThirdGrid /></Col>
        </Row>
        <Row>
            <Col><LastGrid /></Col>
        </Row>

      
    </div>
  )
}
