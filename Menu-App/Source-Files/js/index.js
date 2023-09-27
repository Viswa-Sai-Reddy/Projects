// API connections
if(import.meta.env.DEV){
  import("../api/browser").then(({worker})=> worker
  .start()
  .then(()=>fetch("/dishes"))
  .then((res) => res.json())
  .then((res)=> (menu=res))
  );
}

//Variable Declarations
let menu = [];
let allAddToCartButtons = [];
let cart = [];
let allCartDeleteButtons = [];
let allDishes = document.getElementById('allDishes')
let content = "";
let cartContent = "";
let allButtons = document.querySelectorAll('button')

// Funtion Calls
updateCartCounter();
displayAll(menu)
displayCartDishes()


// Menu Functions
function displayAll(dishes) {
  content = "";
  dishes.forEach((dish)=>{
    let individualDish =  `<div class="dish">
    <img src="${dish.img}" alt="">
    <div class="dishOutter">
      <div class="dishInner">
        <h3 class="dishName">${dish.title}</h3> 
        <h3 class="dishPrice">$${dish.price}</h3>
      </div>
    <p class="dishContent">${dish.desc}</p>
    <button id=${dish.id} class="dishCartButton">Add to Cart</button>
    </div>
    </div>`
    content += individualDish;
    })
    
    allDishes.innerHTML = content;
    getcartbuttons();
}


// filter logic here
allButtons.forEach((button)=> 
button.addEventListener('click',(e)=>
{filterItem(e.target.innerText)
})
)

function filterItem(value){
  allDishes.innerHTML += "";
  if(value == "All"){
    displayAll(menu);
  } else{
    let filteredItems = menu.filter((dish) => 
        dish.category.toLocaleLowerCase() == value.toLocaleLowerCase())
  displayAll(filteredItems)
  }
}

// Cart Functions
function updateCartCounter() {
  document.getElementById('cartButton').innerHTML = "&#x1F6D2;" + cart.length;
}

function getcartbuttons(){
  allAddToCartButtons = document.querySelectorAll(".dishCartButton")
  allAddToCartButtons.forEach((button) => 
  button.addEventListener("click",(e)=> {
    addDishToCart(e.target.id)
  }))
}

function addDishToCart(dishId){
  let flag=-1;
  menu.forEach((dish)=>{
    if(dish.id == dishId)
    {
      cart.forEach((cartDish)=>{
        if(cartDish.id == dishId)
        {
          cartDish.quantity += 1;
          flag = 1;
        }
      })
      if( flag != 1)
      {
        let tempDish = {...dish,quantity : 1}
        cart.push(tempDish)
      }
    }
  })
  updateCartCounter();
  displayCartDishes()
}

function displayCartDishes(){
  cartContent="";
  cart.forEach((dish) => {
   let individualDish = 
  `<table class="cartDish">
   <tr>
     <td><img src="${dish.img}" class="cartImage"></td>
     <td><h3 class="dishName">${dish.title}</h3></td>
     <td><h3 class="dishPrice">$${dish.price}</h3></td>
     <td> <h3>${dish.quantity}</h3></td>
     <td><p class="cartDelete" id=${dish.id}>&#x2421;</p> </td>
   </tr>
  </table> 
  `;

  cartContent += individualDish;

  })
  document.getElementById("cart").innerHTML = cartContent;
  getdeletebuttons();
}

// select all Delete Buttons

function getdeletebuttons(){
  allCartDeleteButtons = document.querySelectorAll(".cartDelete")
  allCartDeleteButtons.forEach((button) => 
  button.addEventListener("click",(e)=> {
    removeDishFromCart(e.target.id)
  }))
}

function removeDishFromCart(removeId){
  let flag = -1;
  let tempId = -1;
  for(let i = 0; i< cart.length; i++)
  {
    if(cart[i].id == removeId)
    {
      flag = 1
      tempId = i
    }
  }
  if(flag)
  {
    cart.splice(tempId,1)
  }
  updateCartCounter();
  displayCartDishes();
}