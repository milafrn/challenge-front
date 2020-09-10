const $cart = document.querySelector('.item.-cart');
const $modalCart = document.querySelector('.modal-cart');

$cart.addEventListener('click', () => {
  $modalCart.classList.toggle('-active');
})