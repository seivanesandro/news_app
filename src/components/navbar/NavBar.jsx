import React from 'react';
//import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container';
import NavLink from 'react-bootstrap/esm/NavLink';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { SiGeneralmotors } from 'react-icons/si';
import { IoBusinessOutline } from 'react-icons/io5';
import { SiRemedyentertainment } from 'react-icons/si';
import { GiHealthPotion } from 'react-icons/gi';
import { MdOutlineScience } from 'react-icons/md';
import { MdOutlineSportsVolleyball } from 'react-icons/md';
import { GrTechnology } from 'react-icons/gr';
import { FaUniversity } from 'react-icons/fa';


const NavBar = ({ setSearch }) => {
    const isActive = true;
    return (
        <>
            {[false].map(expand => (
                <Navbar
                    key={expand}
                    expand={expand}
                    sticky="top"
                    className="bg-dark mb-auto color-light shadow py-4"
                    data-bs-theme="dark"
                >
                    <Container fluid>
                        <Navbar.Brand>
                            <NavLink to="/">
                                {' '}
                                My News App
                            </NavLink>
                        </Navbar.Brand>
                        <Navbar.Toggle
                            aria-controls={`offcanvasNavbar-expand-${expand}`}
                            style={{
                                outline: 'none',
                                border: 'none',
                                boxShadow: 'none'
                            }}
                        />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                            data-bs-theme="dark"
                        >
                            <Offcanvas.Header
                                closeButton
                            >
                                <Offcanvas.Title
                                    id={`offcanvasNavbarLabel-expand-${expand}`}
                                    title="just a title"
                                >
                                    My News App
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link
                                        to="/#"
                                        className="d-flex flex-row align-items-sm-start justify-content-start px-3"
                                        title="General"
                                        active={
                                            isActive
                                                ? isActive
                                                : ''
                                        }
                                        onClick={() =>
                                            setSearch(
                                                'general'
                                            )
                                        }
                                    >
                                        <SiGeneralmotors
                                            size="20"
                                            style={{
                                                marginRight:
                                                    '0.5rem'
                                            }}
                                        />
                                        General
                                    </Nav.Link>
                                    <Nav.Link
                                        to="/#"
                                        className="d-flex flex-row align-items-sm-start justify-content-start px-3 "
                                        title="Business"
                                        active={
                                            isActive
                                                ? isActive
                                                : ''
                                        }
                                        onClick={() =>
                                            setSearch(
                                                'business'
                                            )
                                        }
                                    >
                                        <IoBusinessOutline
                                            size="20"
                                            style={{
                                                marginRight:
                                                    '0.5rem'
                                            }}
                                        />
                                        Business
                                    </Nav.Link>
                                    <Nav.Link
                                        to="/#"
                                        className="d-flex flex-row align-items-sm-start justify-content-start px-3 "
                                        title="Entertainment"
                                        active={
                                            isActive
                                                ? isActive
                                                : ''
                                        }
                                        onClick={() =>
                                            setSearch(
                                                'entertainment'
                                            )
                                        }
                                    >
                                        <SiRemedyentertainment
                                            size="19"
                                            style={{
                                                marginRight:
                                                    '0.5rem'
                                            }}
                                        />
                                        Entertainment
                                    </Nav.Link>
                                    <Nav.Link
                                        to="/#"
                                        className="d-flex flex-row align-items-sm-start justify-content-start px-3 "
                                        title="Health"
                                        active={
                                            isActive
                                                ? isActive
                                                : ''
                                        }
                                        onClick={() =>
                                            setSearch(
                                                'health'
                                            )
                                        }
                                    >
                                        <GiHealthPotion
                                            size="20"
                                            style={{
                                                marginRight:
                                                    '0.5rem'
                                            }}
                                        />
                                        Health
                                    </Nav.Link>
                                    <Nav.Link
                                        to="/#"
                                        className="d-flex flex-row align-items-sm-start justify-content-start px-3 "
                                        title="Science"
                                        active={
                                            isActive
                                                ? isActive
                                                : ''
                                        }
                                        onClick={() =>
                                            setSearch(
                                                'science'
                                            )
                                        }
                                    >
                                        <MdOutlineScience
                                            size="20"
                                            style={{
                                                marginRight:
                                                    '0.5rem'
                                            }}
                                        />
                                        Science
                                    </Nav.Link>
                                    <Nav.Link
                                        to="/#"
                                        className="d-flex flex-row align-items-sm-start justify-content-start px-3 "
                                        title="Sports"
                                        active={
                                            isActive
                                                ? isActive
                                                : ''
                                        }
                                        onClick={() =>
                                            setSearch(
                                                'sports'
                                            )
                                        }
                                    >
                                        <MdOutlineSportsVolleyball
                                            size="20"
                                            style={{
                                                marginRight:
                                                    '0.5rem'
                                            }}
                                        />
                                        Sports
                                    </Nav.Link>
                                    <Nav.Link
                                        to="/#"
                                        className="d-flex flex-row align-items-sm-start justify-content-start px-3 "
                                        title="Technology"
                                        active={
                                            isActive
                                                ? isActive
                                                : ''
                                        }
                                        onClick={() =>
                                            setSearch(
                                                'tech'
                                            )
                                        }
                                    >
                                        <GrTechnology
                                            size="20"
                                            style={{
                                                marginRight:
                                                    '0.5rem'
                                            }}
                                        />
                                        Technology
                                    </Nav.Link>
                                    <Nav.Link
                                        to="/#"
                                        className="d-flex flex-row align-items-sm-start justify-content-start px-3 "
                                        title="Politics"
                                        active={
                                            isActive
                                                ? isActive
                                                : ''
                                        }
                                        onClick={() =>
                                            setSearch(
                                                'Politics'
                                            )
                                        }
                                    >
                                        <FaUniversity
                                            size="20"
                                            style={{
                                                marginRight:
                                                    '0.5rem'
                                            }}
                                        />
                                        Politics
                                    </Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
};

NavBar.propTypes = {};

export default NavBar;
