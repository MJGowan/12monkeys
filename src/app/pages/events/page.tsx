import React from 'react';
import '../../../styles/events.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function Events() {
  return (
    <div id='events'>
      <Container>
        <Row>
          <Col>
            <h1 className='title header'>EVENTS</h1>
            <h3 className='header text-center'>COMING SOON</h3>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
