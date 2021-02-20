import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.nav`
    width: 100%;
    background-color: #1A1A24;
    height: 80px;
    z-index: 999;
    position: fixed;
`

export const NavbarContainer = styled.div`
    max-width: 1350px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    border-bottom: 1px solid #000;
`

export const Logo = styled.h1`
    flex: 1;
    font-family: 'Oswald', sans-serif;
    font-size: 48px;
    color: #fff;
`

export const NavbarUl = styled.ul`
    flex: 1;
    display: flex;
`
export const NavList = styled.li`
    flex: 1;
    list-style: none;
    & .cta {
        border: 2px solid #6C63FF;
        border-radius: 5px;
    }
`

export const NavLink = styled(Link)`
    font-size: 24px;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    text-decoration: none;
    color: #fff;
    padding: 5px 10px;
`