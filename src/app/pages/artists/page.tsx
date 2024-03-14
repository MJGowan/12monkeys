import React from 'react';
import '../../../styles/artists.css';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/EmailOutlined';

export default function Artists() {
  return (
    <div id='artists'>
      <Container>
        <Row>
          <Col className='col-12'>
            <h1 className='title header'>MEET THE ARTISTS</h1>
          </Col>
        </Row>
        <Row className='anArtist'>
          <Col className='col-12 col-lg-6'>
            <Image
              src='/jonHighland.png'
              height={425}
              width={475}
              alt='An image of Jon Highland, a tattoo artist'
            />
          </Col>
          <Col className='col-12 col-lg-6'>
            <Col className='col-12'>
              <h3 className='header'>JON HIGHLAND</h3>
              <h5 className='blurb'>Shop owner since 1999.</h5>
            </Col>
            <Col className='col-12 my-5'>
              <p>Contact: Instagram / Text</p>
              <div className='alignIcons'>
                <a href='https://www.instagram.com/jonhighland/'>
                  <InstagramIcon className='icon' />
                </a>
                <a href='tel:2098778390'>
                  <PhoneIcon className='icon' />
                </a>
              </div>
            </Col>
          </Col>
          <Col className='col-12 instaCol'>

          </Col>
        </Row>
        <br />
        <Row className='anArtist'>
          <Col className='col-12 col-lg-6'>
            <Col className='col-12'>
              <h3 className='header'>KRISTAL ELAINE</h3>
              <h5 className='blurb'>Award winning artist</h5>
            </Col>
            <Col className='col-12 my-5'>
              <p>Contact: Text</p>
              <div className='alignIcons'>
                <a href='https://www.instagram.com/kristalbet/' target='_blank'>
                  <InstagramIcon className='icon' />
                </a>
                <a href='tel:5103033648'>
                  <PhoneIcon className='icon' />
                </a>
              </div>
            </Col>
          </Col>
          <Col className='col-12 col-lg-6 d-flex justify-content-center'>
            <Image
              src='/kristalElaine.png'
              height={425}
              width={475}
              alt='An image of Kristal Elaine, a tattoo artist'
            />
          </Col>
          <Col className='col-12 instaCol'>

          </Col>
        </Row>
        <br />
        <Row className='anArtist'>
          <Col className='col-12 col-lg-6'>
            <Image
              src='/ricCardenas.png'
              height={425}
              width={475}
              alt='An image of Ric Cardenas, a tattoo artist'
            />
          </Col>
          <Col className='col-12 col-lg-6'>
            <Col className='col-12'>
              <h3 className='header'>RIC CARDENAS</h3>
              <h5 className='blurb'>Tattoos for saints, sinners, and the brave.</h5>
            </Col>
            <Col className='col-12 my-5'>
              <p>Contact: Instagram</p>
              <div className='alignIcons'>
                <a href='https://www.instagram.com/rufus209/' target='_blank'>
                  <InstagramIcon className='icon' />
                </a>
              </div>
            </Col>
          </Col>
          <Col className='col-12 instaCol'>

          </Col>
        </Row>
        <br />
        <Row className='anArtist'>
          <Col className='col-12 col-lg-6'>
            <Col className='col-12'>
              <h3 className='header'>JESSICA ORSUA</h3>
              <h5 className='blurb'>Lorem ipsum</h5>
            </Col>
            <Col className='col-12 my-5'>
              <p>Contact: Instagram</p>
              <div className='alignIcons'>
                <a href='https://www.instagram.com/jessimccrackin/' target='_blank'>
                  <InstagramIcon className='icon' />
                </a>
              </div>
            </Col>
          </Col>
          <Col className='col-12 col-lg-6 d-flex justify-content-center'>
            <Image
              src='/jessicaOrsua.png'
              height={425}
              width={475}
              alt='An image of Jessica Orsua, a tattoo artist'
            />
          </Col>
          <Col className='col-12 instaCol'>

          </Col>
        </Row>
        <br />
        <Row className='anArtist'>
          <Col className='col-12 col-lg-6'>
            <Image
              src='/dannyJuge.png'
              height={425}
              width={475}
              alt='An image of Danny Juge, a tattoo artist'
            />
          </Col>
          <Col className='col-12 col-lg-6'>
            <Col className='col-12'>
              <h3 className='header'>DANNY JUGE</h3>
              <h5 className='blurb'>Tattoos, paintings, and cats.</h5>
            </Col>
            <Col className='col-12 my-5'>
              <p>Contact: Text</p>
              <div className='alignIcons'>
                <a href='https://www.instagram.com/sir_instadan/' target='_blank'>
                  <InstagramIcon className='icon' />
                </a>
                <a href='tel:2098968580'>
                  <PhoneIcon className='icon' />
                </a>
              </div>
            </Col>
          </Col>
          <Col className='col-12 instaCol'>

          </Col>
        </Row>
        <br />
        <Row className='anArtist'>
          <Col className='col-12 col-lg-6'>
            <Col className='col-12'>
              <h3 className='header'>ASHLEY HESS</h3>
              <h5 className='blurb'>Lorem ipsum</h5>
            </Col>
            <Col className='col-12 my-5'>
              <p>Contact: Email</p>
              <div className='alignIcons'>
                <a href='https://www.instagram.com/ashley.fawn/' target='_blank'>
                  <InstagramIcon className='icon' />
                </a>
                <a href='mailto:Fawn715@gmail.com' target='_blank'>
                  <EmailIcon className='icon' />
                </a>


              </div>
            </Col>
          </Col>
          <Col className='col-12 col-lg-6 d-flex justify-content-center'>
            <Image
              src='/ashleyHess.png'
              height={425}
              width={475}
              alt='An image of Ashley Hess, a tattoo artist'
            />
          </Col>
          <Col className='col-12 instaCol'>

          </Col>
        </Row>
      </Container>
    </div>
  )
}
