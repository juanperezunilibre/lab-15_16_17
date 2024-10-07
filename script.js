const menuToggleButton = document.getElementById("menu-toggle-button")

const navMenu = document.getElementById("nav-menu")


menuToggleButton.addEventListener("click", function() {
    navMenu.classList.toggle("visible")
})