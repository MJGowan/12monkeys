'use client'

import React from 'react';
import styles from './footer.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Footer() {
  const router = useRouter();

  const handleClick = (e: any) => {
      e.preventDefault();
      router.push(e.target.href);
  }

  return (
    <div className={styles.footer}>
      <Container>
        <Row>
          <Col>
            <p>911 N. CENTRAL AVE, TRACY, CA </p>
            <p> (209) 839 - 1265</p>
          </Col>
          <Col className={styles.end}>
            {/* <p><Link href='/admin' onClick={handleClick}>ADMIN LOGIN</Link></p> */}
            <p><a href='https://www.mjgowan.dev/'>DESIGNED AND DEVELOPED</a></p>
            <p><a href='https://www.mjgowan.dev/'>BY MJGOWAN.DEV</a></p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
