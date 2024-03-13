'use client'

import React from 'react';
import styles from "./navbar.module.css";
import Image from 'next/image';
import { Container, Row, Col, Navbar, Nav, NavbarToggle, NavbarOffcanvas, OffcanvasHeader, OffcanvasBody } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Navibar() {
    const router = useRouter();

    const handleClick = (e: any) => {
        e.preventDefault();
        console.log(e.target.href);
        router.push(e.target.href);
    }

    return (
        <Navbar expand={'lg'} className={styles.nav} >
            <Container fluid>
                <Link href="/pages/home" as='/'>
                    <Image
                        src='/navLogo.png'
                        width={250}
                        height={95}
                        alt='12 Monkeys Tattoos Logo'
                    />
                </Link>
                <NavbarToggle aria-controls='offcanvasNavbar-expand-lg' className={styles.navbarToggler} data-bs-theme="dark" />
                <NavbarOffcanvas
                    id='offcanvasNavbar-expand-lg'
                    aria-labelledby='offcanvasNavbarLabel-expand-lg'
                    placement="end"
                    className={styles.myOffcanvas}
                >
                    <OffcanvasHeader closeButton data-bs-theme="dark" className='p-4'></OffcanvasHeader>
                    <OffcanvasBody>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Link href='/pages/artists' onClick={handleClick} className={styles.navLink}>Artists</Link>
                            <Link href='/pages/appointments' onClick={handleClick} className={styles.navLink}>Appointments</Link>
                            <Link href='/pages/studio' onClick={handleClick} className={styles.navLink}>The Studio</Link>
                            <Link href='/pages/aftercare' onClick={handleClick} className={styles.navLink}>Aftercare</Link>
                            <Link href='/pages/events' onClick={handleClick} className={styles.navLink}>Events</Link>
                        </Nav>
                    </OffcanvasBody>
                </NavbarOffcanvas>
            </Container>
        </Navbar>
    )
}
