const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const scoreElement = document.querySelector('.score');

let score = 0;
let counted = false; 

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 0 && !counted) {
        score++;
        scoreElement.textContent = "Score: " + score;
        counted = true;
    }

    if (pipePosition > 100) {
        counted = false;
    }

    score++;
    scoreElement.textContent = 'Score: ' + score;

    if (pipePosition <= 120 && pipePosition >0 && marioPosition <80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`

        mario.src ='game-over.png'
        mario.style.width ='75px'
        mario.style.marginLeft ='50px'
        
        clearInterval(loop)

        scoreElement.textContent = 'Game Over - Score: ' + score;
    }

}, 10)

document.addEventListener('keydown', jump); 
