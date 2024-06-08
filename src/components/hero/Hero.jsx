import React, { useState } from 'react';
//import PropTypes from 'prop-types'
import background from '../../images/background.jpg';
import styled, {
    keyframes
} from 'styled-components';
import { devices } from '../../utils/constantes';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Show = keyframes`
    0%{
        opacity:0;
    }
    50%{
        opacity:0.5;
    }

    100%{
        opacity:1;
    }
`;
const ContainerHero = styled.div`
    /*TODO: Trick to put image background */
    max-width: 100%;
    height: 99vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${background}) !important;
    object-fit: cover !important;
    background-repeat: no-repeat !important;
    background-position: center !important;
    background-size: cover !important;
    width: 105%;
`;
const HeroBanner = styled('div')`
    text-align: center;
    padding: 0 3rem;
`;
const HeroTitleStyled = styled.h1`
    text-transform: uppercase;
    text-shadow: 0 0 0.4rem black;
    font-weight: 600;
    animation: ${Show} 3s linear;
    font-size: 3rem;
    color: #fff;

    @media only screen and (${devices.iphone14}) {
        font-size: 1.5rem;
    }
    @media only screen and (${devices.mobileG}) {
        font-size: 1.5rem;
    }
    @media only screen and (${devices.mobileM}) {
        font-size: 1.5rem;
        letter-spacing: 0.2rem;
    }
    @media only screen and (${devices.mobileP}) {
        font-size: 1.5rem;
        letter-spacing: 0.1rem;
    }
`;
const HeroTextStyled = styled.p`
    max-width: 35rem;
    margin: 3rem auto 3rem auto;
    font-size: 1.3rem;
    text-shadow: 0 0 0.4rem black;
    font-weight: 600;
    animation: ${Show} 2s linear;
    letter-spacing: 0.2rem;
    color: #fff;
    @media only screen and (${devices.iphone14}) {
        font-size: 1.1rem;
        letter-spacing: 0.2rem;
    }
    @media only screen and (${devices.mobileG}) {
        font-size: 1.1rem;
        letter-spacing: 0.2rem;
    }
    @media only screen and (${devices.mobileM}) {
        font-size: 1.1rem;
        letter-spacing: 0.2rem;
    }
    @media only screen and (${devices.mobileP}) {
        font-size: 1.1rem;
        letter-spacing: 0.2rem;
    }
`;

const Hero = ({ setSearch }) => {
    const [name, setName] = useState('');

    const searchnews = () => {
        setSearch(name);
    };
    return (
        <>
            <header className="header-hero">
                <ContainerHero className="hero">
                    <HeroBanner className="hero-banner">
                        <HeroTitleStyled className="title">
                            My News App
                        </HeroTitleStyled>
                        <HeroTextStyled>
                            "Todas as novas
                            notícias são notícias
                            antigas que acontecem
                            com novas pessoas.."
                        </HeroTextStyled>

                        <Form
                            style={{
                                display: 'flex',
                                flexDirection:
                                    'column',
                                justifyContent:
                                    'center',
                                alignItems:
                                    'center',
                                gap: '2rem'
                            }}
                        >
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="text-center me-2 rounded-pill"
                                aria-label="Search"
                                onChange={e => {
                                    setName(
                                        e.target
                                            .value
                                    );
                                }}
                            />
                            <Button
                                variant="outline-light"
                                className=" px-5 rounded-pill shadow"
                                onClick={
                                    searchnews
                                }
                            >
                                Search
                            </Button>
                        </Form>
                    </HeroBanner>
                </ContainerHero>
            </header>
        </>
    );
};

Hero.propTypes = {};

export default Hero;
