import React from 'react';
import styles from "./navbar.module.css";
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';

export default function Navbar() {
    return (
        <div className={styles.nav}>
            <Container>
                <Row>
                    <Col className='col-5'>
                        <Image
                            src='/navLogo.png'
                            width={250}
                            height={95}
                            alt='12 Monkeys Tattoos Logo'
                        />
                    </Col>
                    <Col className={styles.navLink}>
                        <a>Artists</a>
                    </Col>
                    <Col className={styles.navLink}>
                        <a>Appointments</a>
                    </Col>
                    <Col className={styles.navLink}>
                        <a>The Studio</a>
                    </Col>
                    <Col className={styles.navLink}>
                        <a>Events</a>
                    </Col>
                    <Col className={styles.navLink}>
                        <a>Aftercare</a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
