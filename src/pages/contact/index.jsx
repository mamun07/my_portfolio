import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import { IoLogoWhatsapp, IoLogoSkype, IoMdMail, IoMdPin, IoLogoLinkedin } from "react-icons/io";
import {ContactHedding,ContactLeftBottom,ContactLeft} from './style'
import ContactForm from '../../components/contactform'
import GoogleMamp from '../../components/googlemamp';
import Data from '../../data'

export default function index() {
    const ContactText = Data.ContactMe.map((info, i) => {
        return <ContactLeft>
            <h2 className='mb-4'>
                {info.name}
            </h2>
            <p>{info.description}</p>
            <ContactLeftBottom>
                <h5>{info.address}</h5>
                <ul>
                    <li><span><IoLogoWhatsapp/></span> <a rel="noreferrer" target='_blank' href='https://api.whatsapp.com/send?phone=8801917632421'>+8801917-632421 </a></li>
                    <li><span><IoLogoSkype/></span> al.mamun680 </li>
                    <li><span><IoLogoLinkedin/></span> <a rel="noreferrer" target='_blank' href='https://www.linkedin.com/in/mamunben7'>mamunben7 </a></li>
                    <li><span><IoMdMail/></span><a rel="noreferrer" target='_blank' href='mailto:mamunben7@gmail.com'> mamunben7@gmail.com</a></li>
                    <li><span><IoMdPin/></span> Suite #1402 (Lift #14), Navana D.H. Tower, 6 Panthapath, Karwan Bazar, Dhaka-1215</li>
                </ul>
            </ContactLeftBottom>
        </ContactLeft>
    })
    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs={12}>
                    <ContactHedding>
                        <GoogleMamp/>
                    </ContactHedding>
                </Col>
            </Row> 
            <Row className='mb-5'>
                <Col lg={5} xs={12} className='p-md-5 p-3'>
                    {ContactText}
                </Col>
                <Col lg={7} xs={12}>
                    <ContactForm/>
                </Col>
            </Row>
        </Container>
    );
}