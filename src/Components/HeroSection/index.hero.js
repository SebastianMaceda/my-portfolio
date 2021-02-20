import React, { Component } from 'react'
import { Container, HeroContent, Header, SubHead, Cta } from './elements.hero'
import stars from './data.hero'

export class HeroSection extends Component {
    render() {
        return (
            <Container>
                <HeroContent>
                    <Header>Sebastian <br/> Maceda</Header>
                    <SubHead>I am a software Engineer</SubHead>
                    <Cta>View My Work!</Cta>
                </HeroContent>
            </Container>
        )

    }
}

export default HeroSection