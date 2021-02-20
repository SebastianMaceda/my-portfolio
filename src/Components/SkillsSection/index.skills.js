import React, { Component } from 'react'
import { Container, Header, HeaderSpan, SkillsGrid, GridBox, SkillImg, SkillTitle } from './elements.skills'
import {SkillsData} from './data.skills'

export class Skills extends Component {
    
    render() {
        

        const openTag = '<';
        const closeTag = '/>';


        return (
            <Container>
                <Header>
                    <HeaderSpan>{openTag}</HeaderSpan>
                    <HeaderSpan>Skills</HeaderSpan>
                    <HeaderSpan>{closeTag}</HeaderSpan>
                </Header>
                <SkillsGrid>
                    {SkillsData.map(index => {
                        return (
                            <GridBox>
                                <SkillImg src={index.imgSrc}/>
                                <SkillTitle>{index.alt}</SkillTitle>
                            </GridBox>
                        )
                    })}
                </SkillsGrid>
            </Container>
        )
    }
}

export default Skills
