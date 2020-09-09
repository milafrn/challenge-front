let $menuHamburguer = document.querySelector(".menu-hamburguer");
let $menuDrawer = document.querySelector(".menu-drawer");

let checkMenuActive = () => {
  if ($menuHamburguer.classList.contains("-active")) {
    $menuDrawer.classList.add("-active");
  } else {
    $menuDrawer.classList.remove("-active");
  }
};

$menuHamburguer.onclick = function () {
  $menuHamburguer.classList.toggle("-active");
  checkMenuActive();
};
