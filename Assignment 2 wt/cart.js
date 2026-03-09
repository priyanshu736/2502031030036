/* Cart Management Functions */

function getCart() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : { items: [] };
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function addToCart(productId, quantity = 1) {
    const cart = getCart();
    const existingItem = cart.items.find(item => item.productId === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.items.push({ productId, quantity });
    }
    
    saveCart(cart);
    showNotification('Product added to cart!');
}

function removeFromCart(productId) {
    const cart = getCart();
    cart.items = cart.items.filter(item => item.productId !== productId);
    saveCart(cart);
}

function updateCartQuantity(productId, quantity) {
    const cart = getCart();
    const item = cart.items.find(item => item.productId === productId);
    
    if (item) {
        item.quantity = Math.max(1, quantity);
    }
    
    saveCart(cart);
}

function clearCart() {
    saveCart({ items: [] });
}

function getCartItemCount() {
    const cart = getCart();
    return cart.items.reduce((total, item) => total + item.quantity, 0);
}

function updateCartCount() {
    const countElement = document.getElementById('cartCount');
    if (countElement) {
        const count = getCartItemCount();
        countElement.textContent = count;
        countElement.style.display = count > 0 ? 'flex' : 'none';
    }
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => notification.classList.add('show'), 10);
    
    // Hide and remove notification
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}
