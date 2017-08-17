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
    if (cart.length === 0) {
        console.log('Your shopping cart is empty.');
    } else {

        var cartList = [];

        for (let i = 0; i < cart.length; i++) {
            key = Object.keys(cart)[i];
            value = cart[key];
            cartList.push(`${key} at $${value}`)
        }
        if (cartList.length === 1 ) {
            return `In your cart, you have ${cartList[0]}.`
        }
    }
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

