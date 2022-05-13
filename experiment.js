const noComply = document.querySelector('.no-comply-exp');

window.addEventListener('scroll', scrollReveal);

function scrollReveal() {
    const nocomplyPos = noComply.getBoundingClientRect().top;
    console.log(nocomplyPos);
    if(nocomplyPos < 0) {
        noComply.style.color = 'red';
    }
}