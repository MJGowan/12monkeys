import React from 'react';
import '../app/globals.css';
import '../styles/studio.css';
import { Container, Row, Col, Carousel, CarouselItem } from 'react-bootstrap';

import Navbar from '@/components/navbar/navbar';

export default function Studio() {
    return (
        <div id='studio'>
            <img src="/bgMonkey.png" className='bgMonkey' />
            <img src="/bgWaves.png" className='bgWaves' />
            <Container>
                <Row>
                    <Col className='col-12'>
                        <h1 className='title header'>THE STUDIO</h1>
                    </Col>
                    <Col className='col-12'>
                        <h5 className='mainTxt'>911 N. CENTRAL AVE, TRACY, CA 95376</h5>
                        <h5 className='mainTxt'>(209) 839 - 1265</h5>
                    </Col>
                </Row>
                <Row>
                    <Col className='col-12'>
                        <h3 className='header'>OPERATING HOURS</h3>
                    </Col>
                    <Col className='col-12'>
                        <Row>
                            <Col className='col-6 rightAlign'>
                                <p>MONDAY</p>
                                <p>TUESDAY</p>
                                <p>WEDNESDAY</p>
                                <p>THURSDAY</p>
                                <p>FRIDAY</p>
                                <p>SATURDAY</p>
                                <p>SUNDAY</p>
                            </Col>
                            <Col className='col-6 leftAlign'>
                                <p>CLOSED</p>
                                <p>10AM - 6PM</p>
                                <p>10AM - 6PM</p>
                                <p>10AM - 6PM</p>
                                <p>10AM - 6PM</p>
                                <p>10AM - 6PM</p>
                                <p>CLOSED</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col className='d-flex justify-content-center my-4'>
                        <Carousel className='studioCarousel'>
                            <CarouselItem>
                                <img src='/heroImg.png' />
                            </CarouselItem>
                            <CarouselItem>
                                <img src='/heroImg.png' />
                            </CarouselItem>
                            <CarouselItem>
                                <img src='/heroImg.png' />
                            </CarouselItem>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
