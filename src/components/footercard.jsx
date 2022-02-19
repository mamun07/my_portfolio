import React from 'react'
import {FInfo} from './component.style'
import Data from '../data'

function footercard() {
    const FooterInfo = Data.Footers.map((info, i) => {
        return <li key={info.id}>
            <h6>{info.title}</h6>
            <p>{info.info}</p>
        </li>
    })
    return (
        <FInfo>
            {FooterInfo}
        </FInfo>
    )
}

export default footercard
