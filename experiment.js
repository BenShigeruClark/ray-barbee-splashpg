// const rayPhoto = document.querySelector('.photography-exp');

// window.addEventListener('scroll', scrollReveal);

// function scrollReveal() {
//     const cameraPos = rayPhoto.getBoundingClientRect().top;
//     const windowHeight = window.innerHeight / 1.5;
//     console.log(windowHeight);
//     if(cameraPos < windowHeight) {
//         rayPhoto.style.color = 'red';
//     }
// }

// const slide = document.querySelector('.camera');

// let options = {
//     threshold: 0.5
// }

// let observer = new IntersectionObserver(slideAnime, options)

// function slideAnime(entries) {
//     entries.forEach(entry => {
//         if(entry.isIntersecting) {
//             slide.style.background = 'white';
//         }
//     });
// }

// observer.observe(slide);

const controller = new ScrollMagic.Controller();

const exploreScene = new ScrollMagic.Scene({
    triggerElement: '.photography-exp',
    triggerHook: 0.5
})
    .addIndicators({colorStart: 'white', colorTrigger: 'white'})
    .setClassToggle('.photography-exp', 'active')
    .addTo(controller);

