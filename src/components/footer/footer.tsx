import React from 'react';
import styles from './footer.module.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Container>
        <Row>
          <Col>
            <p>911 N. CENTRAL AVE, TRACY, CA </p>
            <p> (209) 839 - 1265</p>
          </Col>
          <Col className={styles.end}>
            <p><a>ADMIN LOGIN</a></p>
            <p><a href='https://www.mjgowan.dev/'>BY MJGOWAN.DEV</a></p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
