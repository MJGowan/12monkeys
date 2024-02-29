import React from 'react';
import styles from './footer.module.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Container>
        <Row>
          <Col>
            <p>911 N. CENTRAL AVE, TRACY, CA <br /> (209) 839 - 1265</p>
          </Col>
          <Col className={styles.end}>
            <p>DESIGNED AND DEVELOPED <br /> BY MADELINE GOWAN</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
