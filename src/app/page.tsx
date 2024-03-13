import styles from "./page.module.css";

import { Container, Row, Col } from 'react-bootstrap';
import InstagramIcon from '@mui/icons-material/Instagram';
import ShoppingCart from '@mui/icons-material/ShoppingCartOutlined';

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
        className={styles.heroImg}
      />
      <Container>
        <Row>
          <Col>
            <h3 className='header'><a>FIND US ON INSTAGRAM<InstagramIcon className={styles.icon} /></a></h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 className='header'><a>SHOP ON ETSY<ShoppingCart className={styles.icon} /></a></h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
