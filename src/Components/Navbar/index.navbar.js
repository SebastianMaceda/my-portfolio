import React, { Component } from 'react'
import { NavbarData } from './data.navbar'
import { Container, NavbarContainer, Logo, NavbarUl, NavList, NavLink } from './elements.navbar'

export class Navbar extends Component {
    render() {
        return (
            <Container>
                <NavbarContainer>
                    <Logo>SM.</Logo>
                    <NavbarUl>
                        {NavbarData.map(index => {
                            return (
                                <NavList>
                                    <NavLink className={index.cName}>{index.title}</NavLink>
                                </NavList>
                            )
                        })}
                    </NavbarUl>
                </NavbarContainer>
            </Container>
        )
    }
}

export default Navbar
