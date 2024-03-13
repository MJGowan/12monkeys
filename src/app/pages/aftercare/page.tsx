import React from 'react';
import '../../../styles/aftercare.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function Aftercare() {
    return (
        <div id='aftercare'>
            <Container>
                <Row>
                    <Col className='text-center'>
                        <h1 className='title header'>AFTERCARE</h1>
                        <h5 className='mainTxt'>Call the studio if you have any questions </h5>
                    </Col>
                </Row>
                <br/>
                <Row className='spaceRow'>
                    <Col className='col-12 col-lg-6 careCol'>
                        <Container className='careInfo px-4'>
                            <h3 className='header'>DO</h3>
                            <p>Wash your healing tattoo as often as you can with warm water and soap. Dry your tattoo with a paper towel or air dry. Apply a thin layer ointment or mild moisturizer if your healing tattoo feels itchy, dry or is peeling. See your doctor or urgent care if your tattoo shows any signs of infection (redness, pain, inflammation, unusual discharge, bumps or rash).</p>
                        </Container>
                    </Col>
                    <Col className='col-12 col-lg-6 careCol'>
                        <Container className='careInfo px-4'>
                            <h3 className='header'>DO NOT</h3>
                            <p>Do not scratch, pick or rub off any part of your healing tattoo. Do not rub off the top layer of your healing tattoo in the shower. Let the dead skin slough off naturally. Do not allow your healing tattoo to be exposed to direct sunlight. Do not go swimming, surfing, or soaking in any body of water other than a shower with soap. Do not smother your healing tattoo with ointment or salve.</p>    
                        </Container>
                    </Col>
                </Row>
                <Row className='spaceRow'>
                    <Col className='col-12 col-lg-6 careCol'>
                        <Container className='careInfo px-4'>
                            <h3 className='header'>GUIDELINES</h3>
                            <ul>
                                <li>Remove bandage anytime after 2 hours.</li>
                                <li>Upon removal of bandage, wash with warm water and an antibacterial soap.</li>
                                <li>You may reapply your own sterile bandage at your own discretion.</li>
                                <li>Wash tattoo and surrounding area with warm water and antibacterial soap in between bandaging or every 2-4 hours.</li>
                                <li>You may apply a healing ointment or mild moisturizer sparingly after thoroughly washing and at your own discretion.</li>
                                <li>Keep your healing tattoo out of direct sunlight, standing water, hot tubs, rivers, and the ocean.</li>
                                <li>The healing process can take 2-6 weeks on average.</li>
                            </ul>    
                        </Container>
                    </Col>
                    <Col className='col-12 col-lg-6 careCol'>
                        <Container className='careInfo px-4'>
                            <ul>
                                <li><strong>Day 1:</strong> May notice fluid oozing from the tattoo. This is blood, plasma, and some extra ink. Your skin will be red and sore. It might feel slightly warm to the touch.</li>
                                <li><strong>Days 2-3:</strong> Your tattoo will have a duller, cloudier appearance. This happens as your skin heals. Scabs may start to form.</li>
                                <li><strong>Days 4-6:</strong> Any redness should start to fade. You may notice some light scabbing over the tattoo. Do not pick at the scabs as this can cause scarring.</li>
                                <li><strong>Days 7-14:</strong> Any scabs have hardened and will begin to flake off. Do not pick at the scabs as this can cause scarring.</li>
                                <li><strong>Days 15-30:</strong> Most of the big flakes and scabs will be gone or near going away. Area may still look dry and dull. Keep moisturized.</li>
                                <li><strong><i>By 2nd or 3rd week the outer layers of skin should have healed. It may take 3-4 months for the lower layers to heal completely.</i></strong></li>
                            </ul>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
