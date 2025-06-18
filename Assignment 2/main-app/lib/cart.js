// lib/cart.js
export const getCart = () => {
  if (typeof window === "undefined") return [];
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

export const addToCart = (product) => {
  const cart = getCart();
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const removeFromCart = (id) => {
  const cart = getCart().filter((item) => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const clearCart = () => {
  localStorage.removeItem("cart");
  
};
