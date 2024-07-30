const menuToggle = document.querySelector(".navLinks");
const menuIcon = document.querySelector("#open");
const closeIcon = document.querySelector("#close");

const checkScreenWidth = function() {
    if (window.innerWidth <= 768) {
        menuToggle.style.display = "none";
        menuIcon.style.display = "inline-block";
    } else {
        menuToggle.style.display = "flex";
        menuIcon.style.display = "none";
        closeIcon.style.display = "none";
    }
};


const unLoad = function() {
    checkScreenWidth();
}

menuIcon.addEventListener('click', function() {
    menuToggle.style.display = "flex";
    closeIcon.style.display = "inline-block";
    menuIcon.style.display = "none";
})

const closeNav = function() {
    menuToggle.style.display = "none";
    closeIcon.style.display = "none";
    menuIcon.style.display = "inline-block";
}
closeIcon.addEventListener('click', closeNav);

window.addEventListener('load', unLoad);

window.addEventListener('resize', checkScreenWidth);