import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.section`
    min-height: 50vh;
    background-color: #191921;
    padding: 100px 0;
`

export const Header = styled.h2`
    color: #fff;
    text-align: center;
    font-size: 48px;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    & :nth-child(1), & :nth-child(3)  {
        color: #6C63FF;
    }
`

export const HeaderSpan = styled.span`
`

export const ProjectsContainer = styled.div`
`

export const Column = styled.div`
    max-width: 1350px;
    display: flex;
    flex-direction: row;
    margin: auto;
`

export const Row1 = styled.div`
`

export const RowImg = styled.img`
`

export const Row2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgba(0, 0, 0, .05);
`

export const RowContainer = styled.div`
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const RowHeader = styled.h3`
    text-align: left;
    width: 100%;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 32px;
    color: #fff;
    height: 20%;
`

export const RowText = styled.p`
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    width: 100%;
    height: 50%;
    vertical-align: middle;
    margin-top: 20px;
    color: #ddd;
`

export const Links = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    margin-left: 0;
`

export const LinkTo = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    font-size: 18px;
    font-family: 'Lato', sans-serif;
    text-decoration: none;
    background-color: rgba(0, 0, 0, .2);

    & .faIcon{
        color: #6C63FF;
        font-size: 24px;
    }
    &:hover{
        text-decoration: underline;
        text-decoration-color: #fff;
        transform: scale(1.1)
    }
`

export const LinkText = styled.p`
    color: #fff;
    padding-left: 10px;
`