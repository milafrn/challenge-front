const $wrapperProducts = document.querySelector('.wrapper-products');
const $totalAmount = document.querySelector('.total-amount');

let xhr = new XMLHttpRequest;
let url = './products.json';
let json;

xhr.open('GET', url, false)
xhr.onload = function(){
  if(xhr.readyState === 4){
    if(xhr.status === 200){
      json = JSON.parse(xhr.response);
    }
  }
}
xhr.send();

const createProduct = (bestPriceFormated, image, name, quantity) => {
  const createProductCart = document.createElement('section');
  createProductCart.classList.add('products-cart');

  const createProductImage = document.createElement('img');
  createProductImage.classList.add('product-image');
  createProductImage.setAttribute('src', image)

  const createTextWrapper = document.createElement('div');
  createTextWrapper.classList.add('text-wrapper');

  const createProductDescription = document.createElement('p')
  createProductDescription.classList.add('product-description')
  createProductDescription.innerHTML = name;

  const createProductAmount = document.createElement('p')
  createProductAmount.classList.add('product-amount');
  createProductAmount.innerHTML = 'Qtd.:';

  const createSpanAmount = document.createElement('span');
  createSpanAmount.classList.add('amount');
  createSpanAmount.innerHTML = quantity

  const createProductPrice = document.createElement('p');
  createProductPrice.classList.add('product-price');
  createProductPrice.innerHTML = bestPriceFormated;

  $wrapperProducts.insertAdjacentElement('beforeend', createProductCart);
  createProductCart.insertAdjacentElement('beforeend', createProductImage);
  createProductCart.insertAdjacentElement('beforeend', createTextWrapper);
  createTextWrapper.insertAdjacentElement('beforeend', createProductDescription);
  createTextWrapper.insertAdjacentElement('beforeend', createProductAmount);
  createProductAmount.insertAdjacentElement('beforeend', createSpanAmount);
  createTextWrapper.insertAdjacentElement('beforeend', createProductPrice);
}



json.cart.item.forEach(product => {
  createProduct(product.bestPriceFormated, product.image, product.name, product.quantity);
});

const calculatePriceTotal = (price) => {
  let priceConvert = price / 100
  $totalAmount.innerHTML = `R$ ${priceConvert.toLocaleString('pt-BR')}`;
}

let count = 0;
for(item of json.cart.item){
  count += item.bestPrice;
} 

calculatePriceTotal(count)
