// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'Pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}


function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

// Iteration 1: set the visibility of `<section class=“mushroom”>`
function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

// Iteration 1: set the visibility of `<section class=“green-pepper”>`
function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((oneGreenPepper) => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  });
}

// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
function renderWhiteSauce() {
  document.querySelectorAll('.sauce').forEach((oneWhiteSouce) => {
    if (state.whiteSauce) {
      oneWhiteSouce.classList.add('sauce-white')
    } else {
      oneWhiteSouce.classList.remove('sauce-white')
    }
  });
  
}

// Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
function renderGlutenFreeCrust() {
  document.querySelectorAll('.crust').forEach((oneCrust) => {
    if (state.glutenFreeCrust) {
      oneCrust.classList.add('crust-gluten-free')
    } else {
      oneCrust.classList.remove('crust-gluten-free')
    }
  });
}

 // Iteration 3: add/remove the class "active" of each `<button class="btn">`
function renderButtons() {
  /*
  document.querySelectorAll(".btn").forEach((element) => {
    if (element.classList.contains("active")) {
      element.classList.remove("active");
    } else {
      element.classList.add("active");
    }
  })
  */

  if (state.pepperoni === false) {
    document.querySelector(".btn.btn-pepperoni").classList.remove("active")
  }
  else {
    document.querySelector(".btn.btn-pepperoni").classList.add("active")
  }
/////////
  if (state.mushrooms === false) {
    document.querySelector(".btn.btn-mushrooms").classList.remove("active")
  }
  else {
    document.querySelector(".btn.btn-mushrooms").classList.add("active")
  }
////////
  if (state.greenPeppers === false) {
    document.querySelector(".btn.btn-green-peppers").classList.remove("active")
  }
  else {
    document.querySelector(".btn.btn-green-peppers").classList.add("active")
  }
/////////
  if (state.whiteSauce === false) {
  document.querySelector(".btn.btn-sauce").classList.remove("active")
  }
   else {
  document.querySelector(".btn.btn-sauce").classList.add("active")
  }
  /////////
  if (state.glutenFreeCrust === false) {
    document.querySelector(".btn.btn-crust").classList.remove("active")
    }
     else {
    document.querySelector(".btn.btn-crust").classList.add("active")
    }

};



// Iteration 4: change the HTML of `<aside class="panel price">`  WITH A FOR IN LOOP!!!!!!
function renderPrice() {
  let totalPrice = 10;
  let listItems = document.querySelector(".panel.price ul")

  listItems.innerHTML = "";
  
 for (let food in ingredients) {
   if (state [food]) {
     totalPrice += ingredients[food].price
     listItems.innerHTML += `<li>$${ingredients[food].price}${ingredients[food].name}</li>`
   } 
 }

 document.querySelector(".panel.price strong").innerHTML = `$${totalPrice}`
}

/*
function calcPrice(){
  var totalPrice=10;

  if ($('.btn-pepperonni').hasClass('active')) {
    totalPrice += 1;
  }
  if ($('.btn-mushrooms').hasClass('active')) {
    totalPrice += 1;
  }
  if ($('.btn-green-peppers').hasClass('active')) {
    totalPrice += 1;
  }
  if ($('.btn-sauce').hasClass('active')) {
    totalPrice += 3;
  }
  if ($('.btn-crust').hasClass('active')) {
    totalPrice += 5;
  }

  $('#totalPrice').html(totalPrice);
}
*/


/*
<aside class="panel price">
<h2>Your pizza's price</h2>

<b>$10 cheese pizza</b>
<ul>
  <li>$1 pepperoni</li>
  <li>$1 mushrooms</li>
  <li>$1 green peppers</li>
  <li>$3 white sauce</li>
  <li>$5 gluten-free crust</li>
</ul>
<strong>$21</strong>
</aside>
*/


renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});