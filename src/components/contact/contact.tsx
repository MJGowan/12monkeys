'use client'

import React, {useRef, useEffect} from 'react';
import { Container, Row, Col, FormSelect, FormControl } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

export default function Contact() {

// fix type:any later
const form: any = useRef();

// fix type:any later
const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm('contact_service', 'contact_form', form.current, {
        publicKey: '-rNcrdxFzlRuTpZ5O'
    })
    .then(
        () => {
            console.log('SUCCESS!');
        },
        // fix type:any later
        (error: any) => {
            console.log('FAILED...', error.text);
        }
    )
}

    return (
        <form ref={form} onSubmit={sendEmail} className='form px-3 py-3'>
            <Container>
                <Row className='mb-2'>
                    <Col>
                        <label>Email</label>
                        <FormControl type='email' name='user_email' />
                    </Col>
                </Row>
                <Row className='mb-2'>
                    <Col>
                        <label>Artist</label>
                        <FormSelect name='artist_email'>
                            <option value=''>Jon Highland</option>
                            <option value='kristalelainetattoos@gmail.com'>Kristal Elaine</option>
                            <option value=''>Ric Cardenas</option>
                            <option value=''>Jessica Orsua</option>
                            <option value=''>Danny Juge</option>
                            <option value='fawn715@gmail.com'>Ashley Hess</option>
                        </FormSelect>
                    </Col>
                </Row>
                <Row className='mb-2'>
                    <Col>
                        <label>Name</label>
                        <FormControl type='text' name='user_name' />
                    </Col>
                </Row>
                <Row className='mb-2'>
                    <Col>
                        <label>Message</label>
                        <FormControl as='textarea' rows={3} name='message' />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <button className='subBtn w-100' type='submit' value='Send'>Submit</button>
                    </Col>
                </Row>
            </Container>
        </form>
    )
}
