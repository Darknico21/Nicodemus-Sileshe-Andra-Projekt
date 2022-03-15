cart = JSON.parse(localStorage.getItem("cart")) || [];

function printCart() {
  cart.forEach((product) => {
    let newDiv = document.createElement("div");

    let newHeading = document.createElement("h2");
    newHeading.innerHTML = product.name;
    newDiv.append(newHeading);

    let newAmount = document.createElement("h3");
    newAmount.innerHTML = product.amount;
    newDiv.append(newAmount);

    document.querySelector("body").append(newDiv);
  });
}

let addToCartBtn = document.querySelector(".add-to-cart-btn");
addToCartBtn.addEventListener("click", (e) => {
  let item = e.target.getAttribute("data-item");
  let howMany = parseInt(document.querySelector(".how-many-input").value);
  addToCart(item, howMany);
  printCart();
});

function addToCart(name, amount) {
  let test = cart.find((item) => item.name === name);
  if (test) {
    cart[cart.indexOf(test)].amount = parseInt(test.amount) + amount;
  } else {
    cart.push({
      name: name,
      amount: amount,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}

function removeFromCart(name) {
  let test = cart.find((item) => item.name === name);
  if (test) {
    cart[cart.indexOf(test)].amount -= 1;
    if (cart[cart.indexOf(test)].amount <= 0) {
      cart.splice(cart.indexOf(test), 1);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}
