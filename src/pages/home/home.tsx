import React from 'react';
import styles from './home.module.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function Home() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h1 className={styles.header}>12 MONKEYS TATTOOS</h1>
                    </Col>
                </Row>
            </Container>
            <img
                src='/heroImg.png'
                alt=''
                className={styles.heroImg}
            />
        </div>
    )
}
