cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartContainer = document.querySelector(".shopcart");

function printCart() {
  cartContainer.innerHTML = "";
  cart.forEach((product) => {
    let newDiv = document.createElement("div");
    let newAmount = document.createElement("span");
    newAmount.innerHTML = product.amount;
    newDiv.append(newAmount);
    let newHeading = document.createElement("span");
    newHeading.innerHTML = product.name;
    newDiv.append(newHeading);
    let removeBtn = document.createElement("button");
    removeBtn.addEventListener("click", () => {
      removeFromCart(product.name);
      printCart();
    });
    newDiv.append(removeBtn);
    removeBtn.innerHTML = "Delete";
    cartContainer.append(newDiv);
  });
}

let addToCartBtn = document.querySelector(".add-to-cart-btn");
if (addToCartBtn) {
  addToCartBtn.addEventListener("click", (e) => {
    let item = document.querySelector("#product").value;
    let howMany = parseInt(document.querySelector(".how-many-input").value);
    addToCart(item, howMany);
    printCart();
  });
}

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

printCart();
