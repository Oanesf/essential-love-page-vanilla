const menu = document.querySelector("#menu-icon");
const menuLinks = document.querySelector(".navlist");
menu.onclick = () => {
    menu.classList.toggle("close");
    menuLinks.classList.toggle("open");
};
