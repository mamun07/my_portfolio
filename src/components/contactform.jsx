import React from 'react';
import {Row, Col, Form,Button} from 'react-bootstrap'
import {IoIosPaperPlane } from "react-icons/io";
import styled from 'styled-components/macro';

const ContactArea = styled.div`
    button:focus,
    textarea:focus,
    select:focus,
    input:focus{
        border-color: var(--orange);
        box-shadow: none;
    }
    input[type="checkbox"]:checked{
        background-color: var(--orange);
        border-color: var(--orange);
    }
`
const ContactBtn = styled(Button)`
    border:1px solid var(--orange);
    width: 150px;
    line-height: 40px;
    text-align: center;
    color: var(--white);
    transition: 0.3s;
    border-radius: 3px;
    font-size: 16px;
    position: relative;
    padding-right: 35px;
    background:${({primary}) => (primary ? "var(--orange)" : "var(--dark)")};
    margin-top: 25px;
    svg{
        font-size: 16px;
        transition: .3s;
        position: absolute;
        right: 25px;
        top: 50%;
        margin-top: -9px;
    }
    &:hover{
        background:${({primary}) => (primary ? "var(--orange2)" : "var(--orange)")};
        color: var(--white);
        border-color: var(--orange2);
        box-shadow: none;
        svg{
            right: 15px;
            top: 40%;
        }
    }
`


export default function Contactform() {
  return (
    <ContactArea className='bg-light p-md-5 p-3'>
        <h3 className='mb-4'>Help me serve you better</h3>
        <Form>
            <Row>
                <Col xs={6}>
                    <Form.Group className="mb-3" controlId="yournames">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                </Col>
                <Col xs={6}>
                    <Form.Group className="mb-3" controlId="yournumbers">
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                </Col>
                <Col xs={6}>
                    <Form.Group className="mb-3" controlId="youremails">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="mail"/>
                    </Form.Group>
                </Col>
                <Col xs={6}>
                    <Form.Group className="mb-3" controlId="youretypes">
                        <Form.Label>I'm looking for</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option value="1">Website Development</option>
                            <option value="2">Web Applications</option>
                            <option value="3">Full Time Job</option>
                            <option value="4">Part Time Job</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col xs={12}>
                    <Form.Group className="mb-3" controlId="yourmessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Choose a file</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="yourfiles">
                        <Form.Check type="checkbox" label="I agree to the terms and conditions." />
                    </Form.Group>
                </Col>
            </Row>
            <ContactBtn primary='true' type="submit"> Send Now <IoIosPaperPlane/> </ContactBtn>
        </Form>
    </ContactArea>
  );
}
