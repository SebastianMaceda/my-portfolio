import React, { Component } from 'react'
import { Container, Header, HeaderSpan, ProjectsContainer, Column, Row1, RowImg, Row2, RowContainer, RowHeader, RowText, Links, LinkTo, LinkIcon, LinkText } from "./elements.projects";
import { ProjectsData } from './data.projects'
import { FaGithubSquare, FaLink } from 'react-icons/fa';

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
                                        <RowContainer >
                                            <RowHeader>{index.title}</RowHeader>
                                            <RowText>{index.text}</RowText>
                                            <Links>
                                                <LinkTo>
                                                    <FaLink className="faIcon" />
                                                    <LinkText>{index.extLink}</LinkText>
                                                </LinkTo>
                                                <LinkTo>
                                                    <FaGithubSquare className="faIcon" />
                                                    <LinkText>{index.gitLink}</LinkText>
                                                </LinkTo>
                                            </Links>
                                        </RowContainer>
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
