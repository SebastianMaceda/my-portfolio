import React, { Component } from 'react'
import { Container, Header, HeaderSpan, ProjectsContainer, Column, Row1, RowImg, Row2, RowHeader, RowText, Links, LinkTo, LinkIcon, LinkText } from "./elements.projects";
import { ProjectsData } from './data.projects'

export class ProjectsSection extends Component {
    render() {
        
        const openTag = '<';
        const closeTag = '/>';

        return (
            <Container>
                <Header>
                    <HeaderSpan>{openTag}</HeaderSpan>
                    <HeaderSpan>Projects</HeaderSpan>
                    <HeaderSpan>{closeTag}</HeaderSpan>
                </Header>
                <ProjectsContainer>
                        {ProjectsData.map(index => {
                            return (
                                <Column>
                                    <Row1>
                                        <RowImg src={index.imgSrc} />
                                    </Row1>
                                    <Row2>
                                        <RowHeader></RowHeader>
                                        <RowText></RowText>
                                        <Links>
                                            <LinkTo>
                                                <LinkIcon></LinkIcon>
                                                <LinkText></LinkText>
                                            </LinkTo>
                                        </Links>
                                    </Row2>
                                </Column>

                            )
                        })}
                </ProjectsContainer>
            </Container>
        )
    }
}

export default ProjectsSection
