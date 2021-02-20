import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.section`
    height: 100vh;
    width: 100%;
    background-color: #191921;
    display: grid;
`


export const HeroContent = styled.div`
    text-align: center;
    margin: auto;
    padding-bottom: 100px;
    font-family: 'Lato', sans-serif;
`

export const Header = styled.h1`
    color: #fff;
    font-size: 72px;
    text-transform: uppercase;
`

export const SubHead = styled.h2`
    color: #ddd;
    font-size: 24px;
    font-weight: 400;
    margin-top: 15px;
    margin-bottom: 50px;
`

export const Cta = styled(Link)`
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    font-size: 18px;
    background-color: #6C63FF;

    &:hover {
        border: 2px solid #6C63FF;
        background-color: transparent;
        color: #6C63FF;
    }
`