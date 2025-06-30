import type { Product } from './types';

const API_URL = 'https://fakestoreapi.com/products';

export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
}

export async function fetchCategories(): Promise<string[]> {
  const response = await fetch(`${API_URL}/categories`);
  const data = await response.json();
  return data;
}
