const menu = document.querySelector("#menu-icon");
const menuLinks = document.querySelector(".navlist");

menu.addEventListener("click", () => {
  menu.classList.toggle("close");
  menuLinks.classList.toggle("open");
});

// const bgImg = document.querySelector(".bg-img");
// window.addEventListener("scroll", (e) => {
//   let sizeScroll = window.scrollY;

//   if (sizeScroll >= 1150) {
//     bgImg.classList.add("bghidden");
//   } else {
//     bgImg.classList.remove("bghidden");
//   }
// });
