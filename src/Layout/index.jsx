import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {BrowserRouter as Router} from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import NavRouters from '../Routers'
import Social from '../components/social'
import SideBarLogo from '../components/Images';
import SideLogoImg from '../assets/logo.svg'
import {SideCol, SideLogo, SideBar} from './layout.style'

const Layout = ({children}) => {
    return (
        <Router>
            <Container fluid="xxl">
                <Row>
                    <SideCol className='d-lg-block d-none' xs={12} md={1}>
                        <SideBar>
                            <SideLogo>
                                <SideBarLogo  SRC={SideLogoImg} ALT="Sidebar Logo" URL="/"/>
                            </SideLogo>
                            <Social />
                        </SideBar>
                    </SideCol>
                    <Col xs={12} lg={11} className='p-0'>
                        <Header/>
                            {children}
                            <NavRouters/>
                        <Footer/>
                    </Col>
                </Row>
            </Container>
        </Router>
    )
}

export default Layout
