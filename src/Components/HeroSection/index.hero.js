import React, { Component, createElement } from 'react'
import { Container } from './elements.hero'

export class HeroSection extends Component {
    render() {
        function stars() {

            const count = 90;
            let i = 0;

            while (i < count) {

                console.log('this is ready');
                let star = document.createElement('i');
                if (i < 50) {
                    star.className = 'whiteStar';
                } else if (i >= 50 && i <= 70) {
                    star.className = 'redStar';
                } else{
                    star.className = 'purpleStar';
                }
                
                let x = Math.floor(Math.random() * window.innerWidth);
                let y = Math.floor(Math.random() * window.innerHeight);
                // let duration = Math.random() * 10;
                let size = Math.random() * 2;

                star.style.left = x + 'px';
                star.style.top = y + 'px';
                star.style.width = 1 + size + 'px';
                star.style.height = 1 + size + 'px';

                
                
                document.querySelector('.hello').appendChild(star)
                console.log(document.querySelector('.hello'));
                i ++
            }
        }
        return (
            <Container className="hello">
                {window.onload = stars}
            </Container>
        )

    }
}

export default HeroSection
