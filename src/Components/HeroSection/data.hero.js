export default function stars() {

    const count = 120;
    let i = 0;

    while (i < count) {

        console.log('this is ready');
        let star = document.createElement('i');
        if (i < 50) {
            star.className = 'whiteStar';
        } else if (i >= 50 && i <= 85) {
            star.className = 'redStar';
        } else{
            star.className = 'purpleStar';
        }
        
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight);
        let duration = Math.random() * 10;
        let size = Math.random() * 2;

        star.style.left = x + 'px';
        star.style.top = y + 'px';
        star.style.width = 1 + size + 'px';
        star.style.height = 1 + size + 'px';

        star.style.animationDuration = 5 + duration + 's';
        star.style.animationDelay = duration + 's';

        
        
        document.querySelector('.sky').appendChild(star)
        console.log(document.querySelector('.hello'));
        i ++
    }
}