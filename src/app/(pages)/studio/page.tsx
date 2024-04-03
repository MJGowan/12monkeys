import React from 'react';
import '@/styles/studio.css';
import { Container, Row, Col, Carousel, CarouselItem } from 'react-bootstrap';

export default function Studio() {
    return (
        <div id='studio'>
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
                        <Carousel className='studioCarousel d-flex justify-content-center'>
                            <CarouselItem>
                                <img className='carouselItem' src='/studioOne.png' alt='An image of the left side of the front of the studio, showing some merch for sale and some of the bar countertop.' />
                            </CarouselItem>
                            <CarouselItem>
                                <img className='carouselItem' src='/studioTwo.png' alt='An image taken from inside the studio, showing the door and the left side of the front of the shop, displaying some merch for sale.' />
                            </CarouselItem>
                            <CarouselItem>
                                <img className='carouselItem' src='/studioThree.png' alt='An image taken from inside the studio, showing the door and the front of the studio.' />
                            </CarouselItem>
                            <CarouselItem>
                                <img className='carouselItem' src='/heroImg.png' alt='Overhead view of the studios former appearance. It has since been redecorated.' />
                            </CarouselItem>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
