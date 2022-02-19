import React from 'react'
import { IoLogoFacebook,IoLogoLinkedin,IoLogoSkype,IoLogoGithub,IoLogoTwitter } from "react-icons/io";

import {SideSocial} from './component.style'


function social() {

    const data=[
        {
            id: '01', 
            url: 'https://www.facebook.com/mamunben7',
            icon: <IoLogoFacebook/>
        },
        {
            id: '02', 
            url: 'https://www.facebook.com/mamunben7',
            icon: <IoLogoLinkedin/>
        },
        {
            id: '03', 
            url: 'https://www.facebook.com/mamunben7',
            icon: <IoLogoSkype/>
        },
        {
            id: '04', 
            url: 'https://www.facebook.com/mamunben7',
            icon: <IoLogoGithub/>
        },
        {
            id: '05', 
            url: 'https://www.facebook.com/mamunben7',
            icon: <IoLogoTwitter/>
        },
    ]

    const SocialList = data.map((social, i) => {
        return <li key={social.id}>
            <a href={social.url}>{social.icon}</a>
        </li>
    })

    return (
        <SideSocial>
            <ul>
                {SocialList}
            </ul>
        </SideSocial>
    )
}

export default social
