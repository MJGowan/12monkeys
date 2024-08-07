import React from 'react';
import styles from './social.module.css';
import {Container, Row, Col} from 'react-bootstrap';

interface ISource {
    source: IItem[]
}

interface IItem {
    id: number,
    media_url: string,
    username: string
}

const InstaItem: React.FC<IItem> = ({id, media_url, username}) => {
    return(
        <a className={styles.instaImgCont} href={`https://www.instagram.com/${username}/`} target='_blank'>
            <img className={styles.instaImg} alt={`@${username} post on Instagram. Post ID number ${id}.`} src={media_url}/>
        </a>
    )
}

const InstaDisplay: React.FC<ISource> = ({source}) => {
    return(
        <div>
            <Container className='mb-5'>
                <Row>
                    {
                        source.map((item: IItem) => (
                            <Col className='col-6 col-sm-4 col-lg-2' key={item.id}>
                                <InstaItem
                                id={item.id}
                                media_url={item.media_url}
                                username={item.username}
                                />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}

export default InstaDisplay;