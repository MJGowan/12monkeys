import React from 'react';
import './home.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function Home() {
    return (
        <div id='home'>
            <Container>
                <Row>
                    <Col>
                        <h1 className='title header'>12 MONKEYS TATTOOS</h1>
                    </Col>
                </Row>
            </Container>
            <img
                src='/heroImg.png'
                alt=''
                className='heroImg'
            />
            <Container>
                <Row>
                    <Col>
                        <h3 className='header'>FIND US ON INSTAGRAM</h3>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
