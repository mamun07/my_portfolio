import React from 'react'
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NaveLogo from '../Images';
import {MobileLogo, CallBtn, CallBtnNav, NavbarMain} from '../component.style'
import NavLogo from '../../assets/logo2.svg'
import { IoIosCall } from "react-icons/io";
import Data from '../../data'

const Header = () => {
    const NavMenu = Data.NavList.map((navitem, index)=>{
        return <Link key={index} className="nav-link" to={navitem.link}>{navitem.label}</Link>
    })
    
    return (
        <NavbarMain collapseOnSelect expand="lg">
            <Container fluid="xl">
                <MobileLogo className='d-lg-none'>
                    <NaveLogo SRC={NavLogo} URL="/" ALT="Header Logo"/>
                </MobileLogo>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {NavMenu}
                    </Nav>
                    <CallBtnNav>
                        <CallBtn> <IoIosCall/> </CallBtn>
                        <a className="nav-link" href='tel:+08801917632421'> Schedule a Call </a>
                    </CallBtnNav>
                </Navbar.Collapse>
            </Container>
        </NavbarMain>
    )
}

export default Header
