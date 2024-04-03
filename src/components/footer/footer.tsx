import React from 'react';
import styles from './footer.module.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {

  return (
    <div className={styles.footer}>
      <Container>
        <Row>
          <Col className={`col-12 col-md-6 ${styles.center}`}>
            <p>911 N. CENTRAL AVE, TRACY, CA </p>
            <p>(209) 839 - 1265</p>
          </Col>
          <Col className={`col-12 col-md-6 ${styles.end} ${styles.center}`}>
            <p className='d-none d-md-block'><a href='https://www.mjgowan.dev/'>DESIGNED AND DEVELOPED</a></p>
            <p><a href='https://www.mjgowan.dev/'>BY MJGOWAN.DEV</a></p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
