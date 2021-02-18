import styled from "styled-components";

export const Container = styled.section`
    height: 100vh;
    width: 100vw;
    background-color: #191921;
    position: relative;

    & i{
        position: absolute;
        z-index: 100;
        border-radius: 50%;
    }
    & .whiteStar {
        background-color: #fff;
    }
    & .redStar {
        background-color: #FF6584;
    }
    & .purpleStar {
        background-color: #6C63FF;
    }
`