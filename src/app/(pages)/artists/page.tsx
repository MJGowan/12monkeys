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
              <h5 className='blurb'>My life is a circus! I love all things exciting, from nature to swallowing fire. I started 12 Monkeys Tattoos in 1999 and have been enjoying every moment of it. I don't confine myself to any one style, but I do a lot of realism with a flash.</h5>
            </Col>
            <Col className='col-12 contactCol'>
              <p>Contact: Instagram / Text</p>
              <div className='alignIcons'>
                <a href='https://www.instagram.com/jonhighland/' target='_blank'>
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
              <h5 className='blurb'>I have always surrounded myself with art, starting with oil painting and then pursuing tattooing as a career. The flow, composition, and intricate details speak to me when designing pieces. I enjoy merging a variety of styles and techniques to create an intricate piece for my clients.</h5>
            </Col>
            <Col className='col-12 contactCol'>
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
              <h5 className='blurb'>Spent much of my time taking in the scenery, skateboarding, listening to music, and enjoying art. Now I make it! I am a family man who likes to keep it simple and have a good time creating great tattoos.</h5>
            </Col>
            <Col className='col-12 contactCol'>
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
              <h5 className='blurb'>Huge fan of variety and all things different. I love Disney, floral, horror, and black and grey realism works. However, I'm a huge sucker for trash polka and black trash realism.</h5>
            </Col>
            <Col className='col-12 contactCol'>
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
              <h5 className='blurb'>Got into tattooing with help from friends in the punk rock scene. I continue to study art and I'm into detailed tattoos, mixing styles with a realism base. When I'm not tattooing you can catch me being a cat dad, hiking, biking, painting, and still going to shows, but not the pit anymore, lol.</h5>
            </Col>
            <Col className='col-12 contactCol'>
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
              <h5 className='blurb'>You want it, I got it. I love to experiment with different mediums, including digital, watercolor, acrylic, and ink of course. I love florals and color.</h5>
            </Col>
            <Col className='col-12 contactCol'>
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
