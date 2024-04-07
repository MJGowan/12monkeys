import React from 'react';
import '@/styles/artists.css';
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
          <Col className='col-12 col-lg-6 firstImg'>
            <Image
              src='/jonHighland.png'
              height={425}
              width={475}
              className='artistImg'
              alt='An image of artist and shop owner Jon Highland'
            />
          </Col>
          <Col className='col-12 col-lg-6'>
            <Col className='col-12'>
              <h3 className='header'>JON HIGHLAND</h3>
              <h5 className='blurb'>Raised in a circus family, once a part of the High-Flying Trapeze Troupe. Went on to signing karaoke professionally before discovering his true passion of tattooing. Started working out of his one bedroom apartment and in 1999 he established 12 Monkeys Tattoos. And the rest is history... To be continued...</h5>
            </Col>
            <Col className='col-12 my-5 contactCol'>
              <p>Contact: Instagram / Text</p>
              <div className='alignIcons'>
                <a href='https://www.instagram.com/jonhighland/'>
                  <InstagramIcon className='icon' />
                </a>
                <a href='sms:+12098778390'>
                  <PhoneIcon className='icon' />
                </a>
              </div>
            </Col>
          </Col>
        </Row>

        <Row className='anArtist'>
          <Col className='d-flex d-lg-none col-12 col-lg-6 secondImg'>
            <Image
              src='/kristalElaine.png'
              height={425}
              width={475}
              className='artistImg'
              alt='An image of artist Kristal Elaine'
            />
          </Col>
          <Col className='col-12 col-lg-6'>
            <Col className='col-12'>
              <h3 className='header'>KRISTAL ELAINE</h3>
              <h5 className='blurb'>I started tattooing in 2006. Before that, from early childhood, I spent years with a heavy emphasis in oil painting. I enjoy merging various styles and techniques to create a unique work of art for my clients. The flow, composition, and intricate details speak to me when designing pieces.</h5>
            </Col>
            <Col className='col-12 my-5 contactCol'>
              <p>Contact: Text</p>
              <div className='alignIcons'>
                <a href='https://www.instagram.com/kristalbet/' target='_blank'>
                  <InstagramIcon className='icon' />
                </a>
                <a href='sms:+15103033648'>
                  <PhoneIcon className='icon' />
                </a>
              </div>
            </Col>
          </Col>
          <Col className='d-none d-lg-flex col-12 col-lg-6 secondImg'>
            <Image
              src='/kristalElaine.png'
              height={425}
              width={475}
              className='artistImg'
              alt='An image of artist Kristal Elaine'
            />
          </Col>
        </Row>

        <Row className='anArtist'>
          <Col className='col-12 col-lg-6 firstImg'>
            <Image
              src='/ricCardenas.png'
              height={425}
              width={475}
              className='artistImg'
              alt='An image of artist Ric Cardenas'
            />
          </Col>
          <Col className='col-12 col-lg-6'>
            <Col className='col-12'>
              <h3 className='header'>RIC CARDENAS</h3>
              <h5 className='blurb'>Raised on the outdoors, skateboarding, music and art. Now a family man who keeps things simple while having a good time doing honest tattoos.</h5>
            </Col>
            <Col className='col-12 my-5 contactCol'>
              <p>Contact: Instagram</p>
              <div className='alignIcons'>
                <a href='https://www.instagram.com/rufus209/' target='_blank'>
                  <InstagramIcon className='icon' />
                </a>
              </div>
            </Col>
          </Col>
        </Row>

        <Row className='anArtist'>
          <Col className='d-flex d-lg-none col-12 col-lg-6 secondImg'>
            <Image
              src='/jessicaOrsua.png'
              height={425}
              width={475}
              className='artistImg'
              alt='An image of artist Jessica Orsua'
            />
          </Col>
          <Col className='col-12 col-lg-6'>
            <Col className='col-12'>
              <h3 className='header'>JESSICA ORSUA</h3>
              <h5 className='blurb'>Not a fan of being boxed in, all styles are welcome. Loves variety, including Disney, floral, horror characters, and black and grey realism. But a favorite is trash polka or black trash realism.</h5>
            </Col>
            <Col className='col-12 my-5 contactCol'>
              <p>Contact: Instagram</p>
              <div className='alignIcons'>
                <a href='https://www.instagram.com/jessimccrackin/' target='_blank'>
                  <InstagramIcon className='icon' />
                </a>
              </div>
            </Col>
          </Col>
          <Col className='d-none d-lg-flex col-12 col-lg-6 secondImg'>
            <Image
              src='/jessicaOrsua.png'
              height={425}
              width={475}
              className='artistImg'
              alt='An image of artist Jessica Orsua'
            />
          </Col>
        </Row>

        <Row className='anArtist'>
          <Col className='col-12 col-lg-6 firstImg'>
            <Image
              src='/dannyJuge.png'
              height={425}
              width={475}
              className='artistImg'
              alt='An image of artist Danny Juge'
            />
          </Col>
          <Col className='col-12 col-lg-6'>
            <Col className='col-12'>
              <h3 className='header'>DANNY JUGE</h3>
              <h5 className='blurb'>Got into tattooing with help from friends in the punk rock scene. Continue to study art and I'm into detailed tattoo, mixing styles with a realism base. When not tattooing you can catch me being a cat dad, hiking, biking, painting, and still going to shows, but not the pit anymore, lol.</h5>
            </Col>
            <Col className='col-12 my-5 contactCol'>
              <p>Contact: Text</p>
              <div className='alignIcons'>
                <a href='https://www.instagram.com/sir_instadan/' target='_blank'>
                  <InstagramIcon className='icon' />
                </a>
                <a href='sms:+12098968580'>
                  <PhoneIcon className='icon' />
                </a>
              </div>
            </Col>
          </Col>
        </Row>

        <Row className='anArtist'>
          <Col className='d-flex d-lg-none col-12 col-lg-6 secondImg'>
            <Image
              src='/ashleyHess.png'
              height={425}
              width={475}
              className='artistImg'
              alt='An image of artist Ashley Hess'
            />
          </Col>
          <Col className='col-12 col-lg-6'>
            <Col className='col-12'>
              <h3 className='header'>ASHLEY HESS</h3>
              <h5 className='blurb'>I love to experiment with multiple mediums, including digital, watercolor, acrylic, and ink of course. Love to do florals, with some snakes here and there.</h5>
            </Col>
            <Col className='col-12 my-5 contactCol'>
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
          <Col className='d-none d-lg-flex col-12 col-lg-6 secondImg'>
            <Image
              src='/ashleyHess.png'
              height={425}
              width={475}
              className='artistImg'
              alt='An image of artist Ashley Hess'
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
