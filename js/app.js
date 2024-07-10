const menu = document.querySelector("#menu-icon");
const menuLinks = document.querySelector(".navlist");

menu.addEventListener("click", () => {
    menu.classList.toggle("close");
    menuLinks.classList.toggle("open");
});

// ______ fake
// menu.onclick = () => {
//     menu.classList.toggle("close");
//     menuLinks.classList.toggle("open");
// };
