var cart = [];

function getCart() {
    return cart;
}

function setCart(c) {
    cart = c;
    return cart;
}

function addToCart(item) {
    var price = Math.floor(Math.random() * (100 - 1) + 1);
    cart.push({[item]: price});
    console.log(`${item} has been added to your cart.`);
    return cart;
}


function viewCart() {
    getCart();
    if (cart.length === 0) {
        console.log("Your shopping cart is empty.");
    }

    var cartItems = [];

    for (var i = 0; i < cart.length; i++) {
        item = cart[i];
        key = Object.keys(item);
        value = item[key];
        cartItems.push(key + " at $" + value);
    } if (cartItems.length === 1) {
        console.log(`In your cart, you have ${cartItems[0]}`)
    }

    console.log("In your cart, you have " + cartItems.join(", ") + ".");
}

function total() {
    // write your code here
}

function removeFromCart(item) {
    // write your code here
}

function placeOrder(cardNumber) {
    // write your code here
}

