let cart = {
    total: 0,
    items: {}
};

// Recuperar datos del carrito desde el Local Storage
const cartData = localStorage.getItem('cart');
if (cartData) {
    cart = JSON.parse(cartData);
}

function addToCart(name, price) {
    if (cart.items[name]) {
        cart.items[name].quantity++;
    } else {
        cart.items[name] = {
            quantity: 1,
            price: price
        };
    }
    cart.total += price;

    // Actualizar la información del carrito en la página
    let cartTotalEl = document.getElementById('cart-total');
    let cartItemsEl = document.getElementById('cart-items');

    cartTotalEl.innerText = cart.total.toFixed(2);
    cartItemsEl.innerHTML = '';
    for (let itemName in cart.items) {
        let item = cart.items[itemName];
        let itemEl = document.createElement('li');
        itemEl.innerText = itemName + ' x ' + item.quantity + ' = $' + (item.price * item.quantity).toFixed(2);
        cartItemsEl.appendChild(itemEl);
    }

    // Guardar datos del carrito en el Local Storage
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCart() {
    let cartData = JSON.parse(localStorage.getItem('cart'));
    if (cartData) {
        cart.total = cartData.total;
        cart.items = cartData.items;

        // Actualizar la información del carrito en la página
        let cartTotalEl = document.getElementById('cart-total');
        let cartItemsEl = document.getElementById('cart-items');

        cartTotalEl.innerText = cart.total;

        cartItemsEl.innerHTML = '';
        for (let itemName in cart.items) {
            let item = cart.items[itemName];
            let itemEl = document.createElement('li');
            itemEl.innerText = itemName + ' x ' + item.quantity + ' = $' + (item.price * item.quantity).toFixed(2);
            cartItemsEl.appendChild(itemEl);
        }
    }
}

function emptyCart() {
    var listaCarrito = document.getElementById("cart-items");
    var totalCarrito = document.getElementById("cart-total");

    while (listaCarrito.firstChild) {
        listaCarrito.removeChild(listaCarrito.firstChild);
    }

    // Reinicia el total del carrito a 0
    totalCarrito.textContent = "0.00";

    // Resetea lo guardado en cart
    cart.total = 0;
    cart.items = {};

    // Elimina el carrito del Local Storage
    localStorage.removeItem("cart");
}

