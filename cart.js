cart = localStorage.getItem("cart") || [];

let addToCartBtn = document.querySelector(".add-to-cart-btn");
addToCartBtn.addEventListener("click", () => {
    addToCart("Chips", 10);
});

function addToCart(name, amount) {
    let test = cart.find(item => item.name === name);
    if (test) {
        cart[cart.indexOf(test)].amount += amount;
    } else {
        cart.push( {
            name: name,
            amount: amount
        });
    }
} 
