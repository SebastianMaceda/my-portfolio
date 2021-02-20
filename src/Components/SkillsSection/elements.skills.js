import styled from "styled-components";


export const Container = styled.section`
    min-height: 50vh;
    background-color: #17171E;
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
    /* margin-left: 10px; */
`
export const HeaderSpan = styled.span``

export const SkillsGrid = styled.div`
    width: 70%;
    margin: auto;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 10px;
    padding-top: 50px;
`

export const GridBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-left: 75px;
`

export const SkillImg = styled.img`
    height: 100px;
    width: auto;
    z-index: 100;
    margin: auto;
    text-align: center;
`

export const SkillTitle = styled.h3`
    text-align: center;
    padding: 10px;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 24px;
    color: #fff;
`