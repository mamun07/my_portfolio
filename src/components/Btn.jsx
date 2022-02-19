import React from 'react'
import { Link } from 'react-router-dom'
import {CusTOmbtn} from './component.style'

function Btn(props) {
    
    return (
        <CusTOmbtn>
            <Link to={props.link}>{props.text}</Link>
        </CusTOmbtn>
    )
}

export default Btn
