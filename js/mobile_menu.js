const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');
const navLogo = document.querySelector('#navbar_logo');

//Display Mobile Menu when clicks hamburger button
menu.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});


//show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('hightlight');
    const homeMenu = document.querySelector('#home-page');
    const productMenu = document.querySelector('#product-page');
    const servicesMenu = document.querySelector('#services-page');
    const aboutMenu = document.querySelector('#about-page');

    let scrollPos = window.scrollY;


    //adds 'hightlight' class to my menu items
    //if screen is lower
    if (window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
        productMenu.classList.add('highlight');
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        servicesMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 2345) {
        servicesMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    }

    if (elem && window.innerWidth < 960 && scrollPos < 600 || elem) {
        elem.classList.remove('highlight');
    }

};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);


//close mobile menu when clicking on a menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('.is-active');
        menuLinks.classList.remove('active');
    }
}
menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);


//to active the dark or light mode
const theme = document.getElementById("theme");

let localData = localStorage.getItem("theme");

if (localData === "light") {
    theme.src = "../assets/moon.png";
    document.body.classList.add("light-theme");

} else if (localData === "dark") {
    theme.src = "../assets/sun.png";
    document.body.classList.remove("light-theme");
}


theme.onclick = function() {
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
        theme.src = "../assets/moon.png";
        localStorage.setItem("theme", "light");
    } else {
        theme.src = "../assets/sun.png";
        localStorage.setItem("theme", "dark");
    }
}