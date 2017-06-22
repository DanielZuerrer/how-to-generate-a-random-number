var navigation = document.querySelector('nav');

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 150) {
        navigation.classList.add('scrolling');
    } else if (window.pageYOffset < 150) {
        navigation.classList.remove('scrolling');
    }
})

var menu = [...document.querySelectorAll('a[data-scroll]')];
var langs = menu.map(menuItem => menuItem.innerHTML);
var langIndex = 0;

var setLanguageInTitle = function () {
    titleLang.innerHTML = langs[langIndex];
    langIndex = (langIndex + 1) % langs.length;
}

window.setInterval(setLanguageInTitle, 50);