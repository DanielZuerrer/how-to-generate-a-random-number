var navigation = document.querySelector('nav');

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 150) {
        navigation.classList.add('scrolling');
    } else if (window.pageYOffset < 150) {
        navigation.classList.remove('scrolling');
    }
})