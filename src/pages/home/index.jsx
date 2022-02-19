import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BannerHero from '../../components/BannerHero'
import HeroBanner from '../../assets/banner.png'
import HeroImages from '../../components/Images'

const home = () => {
    return (
        <Container fluid="xl">
            <Row className="align-items-center">
                <Col xs={12} md={6}>
                    <BannerHero/>
                </Col>
                <Col xs={12} md={6}>
                    <div style={{textAlign:'center', padding: '0 110px'}}>
                        <HeroImages URL="/" SRC={HeroBanner} ALT="Banner Image"/>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default home
