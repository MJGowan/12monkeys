import React from 'react';
import '../../../styles/appoint.css';
import {Container, Row, Col} from 'react-bootstrap';

export default function Appointments() {
  return (
    <div id='appointments'>
      <Container>
        <Row>
          <Col>
            <h1 className='title header'>APPOINTMENTS</h1>
          </Col>
        </Row>
        <Row>
          <Col className='txtCol'>
            <p>Thank you for choosing 12 Monkeys Tattoo for your next tattoo experience. We are thrilled to embark on this creative journey with you! To schedule an appointment, email your artist of choice using the form provided. Be sure to check your Spam folder for our email, and if you haven't received a response, feel free to call us at (209) 839-1265 to check the status of your submission. We look forward to bringing your vision to life at 12 Monkeys Tattoo!</p>
          </Col>
        </Row>
        <Row>
          <Col className='col-12 guidelinesCol'>
          <h3 className='header text-center'>GUIDELINES</h3>
          <ul className='ul'>
            <li>Must be 18 years or older to schedule an appointment. Government identification is required.</li>
            <li>Please contact your artists directly.</li>
            <li>No food or drinks allowed.</li>
            <li>Friends and family are not allowed during appointments (will be asked to wait in the lobby).</li>
            <li>Please be respectful of other clients and artists and silence your cellular devices.</li>
          </ul>
          </Col>
          {/* <Col className='col-12 col-md-6'>
          
          </Col> */}
        </Row>
        
      </Container>
    </div>
  )
}
