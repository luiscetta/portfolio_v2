import React from 'react';
import { Navbar, Offcanvas, Nav, Container } from 'react-bootstrap';

export default function Header() {
    return (
        <Navbar expand="lg" className="w-full bg-black">
            <Container fluid className='w-8'>
                <Navbar.Brand className="text-white" href="#">LUISCETTA</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" className="bg-white text-white"/>
                <Navbar.Offcanvas
                    id="offcanvasNavbar-expand-lg"
                    aria-labelledby="offcanvasNavbarLabel-expand-lg"
                    placement="end"
                    className="bg-black"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg" className="text-white">
                            LUISCETTA
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link className="text-white" href="#action1">Home</Nav.Link>
                            <Nav.Link className="text-white" href="#action2">Link</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}