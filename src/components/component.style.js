import styled from "styled-components";
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export const SideSocial = styled.div`
    padding-bottom: 10px;
    ul li a{
        margin: 5px;
        display: block;
        border-radius: 100%;
        text-align: center;
        width: 40px;
        height: 40px;
        line-height: 36px;
        color: var(--darklight);
        border: 1px solid #fff;
        transition: 0.3s;
        svg{
            font-size: 25px;
        }
        :hover{
            color: var(--orange);
            border: 1px solid var(--orange)
        }
    }
`
export const FInfo = styled.ul`
    li{
        float: left;
        width: 200px;
        border-right: 1px solid var(--darklight);
        margin-right: 30px;
        :last-child{
            border: none;
        }
    }
`
export const InfoSingle = styled.div`
    h6{
        font-weight: 600;
    }
`
export const HeroBanner = styled.div`
    h6{
        font-size: 25px;
    }
    span,
    h2{
        font-size: 80px;
        font-weight: 900;
        line-height: 70px;
    }
    p{
        font-size: 18px;
        font-weight: 600;
        color: var(--gray);
        margin: 20px 0 40px 0;
    }
    span{
        color: var(--orange);
    }
`
export const HeaderNav = styled(Navbar)`
    padding: 20px 0;
`
export const NavbarMain = styled(Navbar)`
    border-bottom: 1px solid #ddd;
    margin-bottom: 15px;
`
export const BrandLink = styled(Link)`
    font-size: 40px;
    line-height: 32px;
    color: var(--orange);
    font-weight: bolder;
    visibility: hidden;
    @media(max-width:500px){
        visibility: visible;
    }
`
export const HeaderToggle = styled(Navbar.Toggle)`
    :focus{
        outline: none !important;
        color: #ddd0;
    }
    :focus-active{
        outline: none !important;
        color: #ddd0;
    }
    span{
        width:30px;
        height:30px;
        @media(min-width:1200px){
            width:40px;
            height:40px;
        }
    }

`
export const MobileLogo = styled.div`
    img{
        width: 110px;
    }
`
export const CallBtnNav = styled(Nav)`
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: row;
    padding: 15px 0;
`
export const CallBtn = styled.span`
    border: 1px solid var(--orange);
    border-radius: 100%;
    height: 40px;
    width: 40px;
    line-height: 36px;
    text-align: center;
    background: var(--orange);
    margin-right: 15px;
    svg{
        font-size: 25px;
        color: var(--white);
    }
`
export const CusTOmbtn = styled.div`
    margin-bottom: 30px;
    a{
        border: 1px solid var(--orange);
        padding: 15px 30px;
        border-radius: 3px;
        text-transform: uppercase;
        font-size: 14px;
        letter-spacing: 1px;
        display: inline-block;
    }
`
export const Title = styled.div`
    margin-bottom: 30px;
    h2{
        position: relative;
        padding-bottom: 30px;
        &:before{
            position: absolute;
            content: "";
            width: 100px;
            height: 2px;
            background: var(--orange);
            bottom: 0;
        }
    }
`
export const CartMain = styled.div`
    position: relative;
    a{
        position: absolute;
        left: 50%;
        width: 80px;
        margin-left: -40px;
        bottom: 30%;
        height: 30px;
        margin-bottom: -20px;
        color: #fff;
        background: transparent;
        line-height: 25px;
        font-size: 14px;
        border: 2px solid #fff;
        border-radius: 50px;
        display: inline-block;
        text-align: center;
        opacity: 0;
        transition: 0.8s;
        svg{
            font-size: 14px;
        }
    }
    &:before{
        position: absolute;
        content: "";
        width: 100%;
        height: 0;
        background: #f48e0600;
        transition: 0.5s;
        bottom: 0
    }
    &:hover:before{
        width: 100%;
        height: 100%;
        background: #8f5100b8;
    }
    &:hover a{
        bottom: 50%;
        opacity: 1;
    }
`