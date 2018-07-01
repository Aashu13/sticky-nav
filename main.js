var navBar = document.querySelector('.navBar');
var navOfTop = navBar.offsetTop;
console.log(navOfTop);

function fixedNav() {

    if (window.scrollY >= navOfTop) {
        navBar.classList.add('fixed-nav');
    } else {
        navBar.classList.remove('fixed-nav');
    }

}

window.addEventListener('scroll', fixedNav)