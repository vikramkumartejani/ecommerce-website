// api/products.js
const API_BASE_URL = 'https://fakestoreapi.com';

export const fetchProducts = async () => {
  const response = await fetch(`${API_BASE_URL}/products`);
  const data = await response.json();
  return data;
};
