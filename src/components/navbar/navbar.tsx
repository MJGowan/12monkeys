'use client'

import React, { useState } from 'react';
import styles from "./navbar.module.css";
import Image from 'next/image';
import { Container, Row, Col, Navbar, Nav, NavbarOffcanvas, OffcanvasHeader, OffcanvasBody } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu } from '@mui/icons-material';

export default function Navibar() {
    const router = useRouter();

    const handleClick = (e: any) => {
        e.preventDefault();
        router.push(e.target.href);
        handleClose();
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Navbar expand={'lg'} className={styles.nav}>
            <Container>
                <Link href='/'>
                    <Image
                        src='/navLogo.png'
                        width={265}
                        height={95}
                        alt='12 Monkeys Tattoos Logo'
                        className={styles.logo}
                    />
                </Link>

                <Menu aria-controls='offcanvasNavbar-expand-lg' className='d-lg-none' onClick={handleShow} />
                <NavbarOffcanvas
                    show={show}
                    onHide={handleClose}
                    id='offcanvasNavbar-expand-lg'
                    aria-labelledby='offcanvasNavbarLabel-expand-lg'
                    placement="end"
                    className={styles.myOffcanvas}>
                    <OffcanvasHeader closeButton data-bs-theme="dark" className='p-4'></OffcanvasHeader>
                    <OffcanvasBody>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Link href='/artists' onClick={handleClick} className={styles.navLink}>Artists</Link>
                            <Link href='/appointments' onClick={handleClick} className={styles.navLink}>Appointments</Link>
                            <Link href='/studio' onClick={handleClick} className={styles.navLink}>The Studio</Link>
                            <Link href='/aftercare' onClick={handleClick} className={styles.navLink}>Aftercare</Link>
                            {/* <Link href='/pages/events' onClick={handleClick} className={styles.navLink}>Events</Link> */}
                        </Nav>
                    </OffcanvasBody>
                </NavbarOffcanvas>

            </Container>
        </Navbar>
    )
}
