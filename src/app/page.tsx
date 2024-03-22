import styles from "./page.module.css";
import { Container, Row, Col } from 'react-bootstrap';
import InstagramIcon from '@mui/icons-material/Instagram';

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
        alt='An overhead image of the 12 Monkeys Tattoos studio'
        className={styles.heroImg}
      />
      <Container>
        <Row>
          <Col>
            <h3 className='header my-4'><a href="https://www.instagram.com/12monkeystattoos/" target='_blank' >FIND US ON INSTAGRAM<InstagramIcon className={styles.icon} /></a></h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
