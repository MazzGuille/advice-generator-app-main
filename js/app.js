const API_link = 'https://api.adviceslip.com/advice'
const adviceNumber = document.querySelector('.number')
const adviceText = document.querySelector('.quote')
const adviceButton = document.querySelector('.btn')


const fetchNewAdvice = async () => {
    const response = await fetch(API_link);
    const advice = await response.json();
    return advice
};

const renderAdvice = (adviceObj) => {
    const { id, advice } = adviceObj;
    adviceNumber.textContent = `ADVICE #${id}`;
    gsap.from('.number', { duration: 1.5, y: '-100%', ease: 'bounce'});
    adviceText.textContent = advice;
    gsap.from('.quote', { duration: .5, y: '-100%', ease: 'bounce'});
};

const generateNewAdvice = async () => {
    const data = await fetchNewAdvice()
    const advice = data.slip;
    renderAdvice(advice);
};

window.addEventListener('DOMContentLoaded', () => {
    adviceButton.addEventListener('click', generateNewAdvice)
    gsap.from('.main', { duration: .5, x: '-100%', ease: 'power1'});
})


