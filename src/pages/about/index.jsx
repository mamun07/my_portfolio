import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import aboutIm from '../../assets/aboutme.jpg'
import AboutRight from '../../components/Images';
import AboutMe from '../../components/title'

const About = () => {
    return (
        <Container className='py-4'>
            <Row>
                <Col lg={6} xs={12}>
                    <AboutRight  SRC={aboutIm} ALT="Sidebar Logo" URL="/"/>
                </Col>
                <Col lg={6} xs={12}>
                    <AboutMe title="About Me"/>
                    <p>
                        Meticulous webdeveloper with over 2 yearsof front end experience and passion for responsive website design and a firm believer in the mobile-first approach.W3C certified.Implemented new responsive website approach whichincreased mobi e traffic by 20%.
                    </p>
                    <p>
                        I've always been a story-teller first, long before I stumbled upon photography. It all started with writing silly imaginary pieces when I was younger, until the day I picked up a camera and discovered another medium to express myself.
                    </p>
                    <p>
                        Capturing emotions is one of the most important parts of my work. I feel strongly about making the photographs that I can connect with. Even though it is the emotions of my subjects that I'm documenting, I find a reflection of myself in them.
                    </p>
                    <p>
                        There's no surprise that photography is the love of my life, but traveling is also the blood in my veins. I'm endlessly inspired by nature and adventures. I love waking up to new horizons, making friends with people, and exploring the world.
                    </p>
                    <p>
                        Think we could create something together? Feel free to <a href='mailto:mamunben7@gmail.com'>drop me an email</a>.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default About
