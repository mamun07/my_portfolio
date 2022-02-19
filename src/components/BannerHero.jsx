import React from 'react'
import Btn from './Btn'
import {HeroBanner} from './component.style'

const BannerHero = () => {
    return (
        <HeroBanner>
            <h6>Hi There,</h6>
            <h2>I am here to make a <span>world</span></h2>
            <p>Expart developer in React. I have expricence & work with batman during nights. you can check my live project</p>
            <Btn link='contact-me' text="Contact Now"/>
        </HeroBanner>
    )
}
export default BannerHero
