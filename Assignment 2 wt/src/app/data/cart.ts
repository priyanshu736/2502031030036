export interface CartItem {
  productId: string;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
}

// Cart management utilities
export const getCartFromStorage = (): Cart => {
  if (typeof window === 'undefined') return { items: [] };
  const stored = localStorage.getItem('cart');
  return stored ? JSON.parse(stored) : { items: [] };
};

export const saveCartToStorage = (cart: Cart): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('cart', JSON.stringify(cart));
};

export const addToCart = (productId: string, quantity: number = 1): Cart => {
  const cart = getCartFromStorage();
  const existingItem = cart.items.find(item => item.productId === productId);
  
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.items.push({ productId, quantity });
  }
  
  saveCartToStorage(cart);
  return cart;
};

export const removeFromCart = (productId: string): Cart => {
  const cart = getCartFromStorage();
  cart.items = cart.items.filter(item => item.productId !== productId);
  saveCartToStorage(cart);
  return cart;
};

export const updateCartQuantity = (productId: string, quantity: number): Cart => {
  const cart = getCartFromStorage();
  const item = cart.items.find(item => item.productId === productId);
  
  if (item) {
    item.quantity = Math.max(1, quantity);
  }
  
  saveCartToStorage(cart);
  return cart;
};

export const clearCart = (): Cart => {
  const cart: Cart = { items: [] };
  saveCartToStorage(cart);
  return cart;
};

export const getCartItemCount = (): number => {
  const cart = getCartFromStorage();
  return cart.items.reduce((total, item) => total + item.quantity, 0);
};
