'use client'

import React, { useRef } from 'react';
import { Container, Row, Col, FormGroup, FormLabel, FormSelect, FormControl, FormText, FormCheck } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import '@/styles/contact.css';
import { getCldImageUrl, CldUploadButton } from 'next-cloudinary';

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
                    alert("Message Sent");
                },
                // fix type:any later
                (error: any) => {
                    alert(`Message Failed. ${error.text}`)
                }
            )
    }

    return (
        <form id='form' ref={form} onSubmit={sendEmail} className='form px-3 py-3'>
            <Container>
                <Row className='mb-2'>
                    <Col>
                        <label>Artist</label>
                        <FormSelect name='artist_email' required>
                            <option value='12mk@sbcglobal.net'>Jon Highland</option>
                            <option value='kristalelainetattoos@gmail.com'>Kristal Elaine</option>
                            <option value='musicnartsrc@yahoo.com'>Ric Cardenas</option>
                            <option value='mccrackintattoos@gmail.com'>Jessica Orsua</option>
                            <option value='djuge01@gmail.com'>Danny Juge</option>
                            <option value='fawn715@gmail.com'>Ashley Hess</option>
                        </FormSelect>
                    </Col>
                </Row>
                <Row className='mb-2'>
                    <Col>
                        <label>First Name</label>
                        <FormControl required type='text' name='user_fname' />
                    </Col>
                    <Col>
                        <label>Last Name</label>
                        <FormControl required type='text' name='user_lname' />
                    </Col>
                </Row>
                <Row className='mb-2'>
                    <Col>
                        <label>Email</label>
                        <FormControl required type='email' name='user_email' />
                    </Col>
                </Row>
                <Row className='mb-2'>
                    <Col>
                        <label>Phone</label>
                        <FormControl required type='text' name='user_phone' />
                    </Col>
                </Row>
                <Row className='mb-2'>
                    <Col>
                        <label>Reason for Interest</label>
                        <FormSelect name='tattoo_reason' required>
                            <option value='New tattoo'>New tattoo</option>
                            <option value='Complete an existing tattoo'>Complete an existing tattoo</option>
                            <option value='New tattoo'>Cover-up</option>
                        </FormSelect>
                    </Col>
                </Row>
                <Row className='mb-2'>
                    <Col>
                        <label>Location of Tattoo</label>
                        <FormSelect name='tattoo_location' required>
                            <option value='Shoulder'>Shoulder</option>
                            <option value='Sleeve'>Full Sleeve</option>
                            <option value='Bicep'>Bicep</option>
                            <option value='Forearm'>Forearm</option>
                            <option value='Hand'>Hand(s)</option>
                            <option value='Ribcage'>Ribcage</option>
                            <option value='Sternum'>Sternum</option>
                            <option value='Stomach'>Stomach</option>
                            <option value='Back'>Back</option>
                            <option value='Hip'>Hip</option>
                            <option value='Leg'>Full Leg</option>
                            <option value='Thigh'>Thigh</option>
                            <option value='Calf'>Calf</option>
                            <option value='Shin'>Shin</option>
                            <option value='Foot'>Foot/Feet</option>
                            <option value='Other'>Other (explain)</option>
                        </FormSelect>
                    </Col>
                </Row>
                <Row className='mb-2'>
                    <Col>
                        <label>Full Description of Tattoo</label>
                        <FormControl as='textarea' rows={3} name='tattoo_description' required />
                    </Col>
                </Row>
                {/* <Row className='mb-1'>
                    <Col>
                        <FormGroup controlId="formFileMultiple1" className="mb-3">
                            <FormLabel>Reference Photo(s)</FormLabel>
                            <FormControl type="file" multiple name='reference_photos' required />
                            <FormText className='formtxt'>Max 50kb total, please zip files. Include photos of area you want tattooed.</FormText>
                        </FormGroup>
                    </Col>
                </Row> */}
                {/* <Row className='mb-1'>
                    <Col>
                        <CldUploadButton uploadPreset="ml_default" />
                    </Col>
                </Row> */}
                <Row className='mb-2'>
                    <Col>
                        <FormCheck required type="checkbox" label="I verify that I am over the age of 18" />
                    </Col>
                </Row>
                <Row className='my-3'>
                    <Col>
                        <button className='subBtn w-100' type='submit' value='submit'>Submit</button>
                    </Col>
                </Row>
            </Container>
        </form>
    )
}
