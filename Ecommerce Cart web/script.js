let btns = document.querySelector('.time-btn')
let buttin =document.getElementById('buttin')
let cont =document.querySelector('.cart-container')
let item_item =document.querySelector('.row')
let items =document.querySelector('.cart-list')
let cartCountInfo = document.querySelector('.cart-info')
let totalVal = document.querySelector('#cart-total-value')

let cartitemID =1;
eventListners()

function eventListners(){
  window.addEventListener('DOMContentLoaded',() => {
    
    loadCart();
    
    
  })
}
buttin.addEventListener('click',function(){
  cont.classList.toggle('show-cart-container')
})

// removing from list
items.addEventListener('click',function(e){
  let cartItem;
  if(e.target.tagName === 'BUTTON'){
    cartItem = e.target.parentElement;
    cartItem.remove()

    }
    else if (e.target.tagName ==='I'){
      cartItem = e.target.parentElement.parentElement;
      cartItem.remove()
    }
    let products = getProductFromStorage();
    let updatedProducts = products.filter(product =>{
      return product.id === parseInt(cartItem.dataset.id);
    });
    localStorage.setItem('products',JSON.stringify
    (updatedProducts))
    updatCartInfo()
})
function updatCartInfo(){
  let cartInfo = findCartInfo();
  cartCountInfo.textContent = cartInfo.productCount;
  totalVal.textContent = cartInfo.total;
  
  
}
updatCartInfo()




item_item.addEventListener('click',function(e){
  if(e.target.classList.contains('btn')){
  let product = e.target.parentElement.parentElement;
  getProductInfo(product)
}
})
function getProductInfo(product){
  let productInfo ={
    id: cartitemID,
    imgSrc: product.querySelector('.img-box img').src,
    name:product.querySelector('.item-name').textContent,
    star:product.querySelector('.off').textContent,
    price:product.querySelector('.item-prices').textContent
  }
  cartitemID++;
  // console.log(productInfo)
  addToCart(productInfo)
  saveProductInStorage(productInfo)
}
function addToCart(product){
  const cartItem =document.createElement('div');
  cartItem.classList.add('cart-item')
  cartItem.setAttribute('data-id',`${product.id}`)
  cartItem.innerHTML =`
  
  <img src = "${product.imgSrc}" alt = "product image">
  <div class = "cart-item-info">
    <h3 class = "cart-item-name">${product.name}</h3>
    <span class = "cart-item-category">${product.star}</span>
    <span class = "cart-item-price">${product.price}</span>
  </div>
  <button type = "button" class = "cart-item-del-btn">
    <i class = "fas fa-times"></i>
  </button>


  
  
  `;
  items.appendChild(cartItem);
}


function saveProductInStorage(item){
  let products = getProductFromStorage();
  products.push(item);
  localStorage.setItem('products',JSON.stringify(products)
  );
  updatCartInfo();
}

function getProductFromStorage(){
  return localStorage.getItem('products') ? JSON.parse
  (localStorage.getItem('products')) : [];
}


// loadcarts
function loadCart(){
  let products = getProductFromStorage();
  if(products.length < 1){
    cartitemID = 1;

  }
  else{
    cartitemID = products[products.length - 1].id;
    cartitemID++;
  }
  products.forEach(product => addToCart(product));

  updatCartInfo();
}
 
function findCartInfo(){
  let products = getProductFromStorage();
  let total = products.reduce((acc, product) => {
    let price =parseFloat(product.price.substr(1));
    return acc += price;
  },0);
  return {
    total: total.toFixed(2),
    productCount: products.length
  }
}



// buttin.addEventListener('click',function(){
  
//   cont.classList.add('show')
  
// })
// btns.addEventListener('click',function(){
//   cont.classList.remove('show')
// })




var prevBtn = document.querySelector(".prev");
var nextBtn = document.querySelector(".next");
var slides = document.querySelector(".slides");
var slideIndex = 0;

function showSlides() {
  if (slideIndex >= 3) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = 2;
  }

  slides.style.transform = "translateX(-" + slideIndex * 33.333 + "%)";
}

function slideNext() {
  slideIndex++;
  showSlides();
}

function slidePrev() {
  slideIndex--;
  showSlides();
}

prevBtn.addEventListener("click", slidePrev);
nextBtn.addEventListener("click", slideNext);













