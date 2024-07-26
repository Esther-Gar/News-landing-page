const menuToggle = document.querySelector(".navLinks");
const menuIcon = document.querySelector("#open");
const closeIcon = document.querySelector("#close");

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