const hamMenu = document.querySelector('.hamburger-menu');
const navUL = document.querySelector('.nav-container');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    navUL.classList.toggle('show');


});
// GITHUB
const githubIcon = document.getElementById('githubIcon');

githubIcon.addEventListener('mouseover', () => {
    githubIcon.src = "./images/icons/github-hover.svg"

})

githubIcon.addEventListener('mouseout', () => {
    githubIcon.src = "./images/icons/github.svg"

})

//TWITTER
const twitterIcon = document.getElementById('twitterIcon');

twitterIcon.addEventListener('mouseover', () => {
    twitterIcon.src = "./images/icons/twitter-hover.svg"

})

twitterIcon.addEventListener('mouseout', () => {
    twitterIcon.src = "./images/icons/twitter.svg"

})

//LINKEDIN

const linkedinIcon = document.getElementById('linkedinIcon');

linkedinIcon.addEventListener('mouseover', () => {
    linkedinIcon.src = "./images/icons/linkedin-hover.svg"

})

linkedinIcon.addEventListener('mouseout', () => {
    linkedinIcon.src = "./images/icons/linkedin.svg"

})