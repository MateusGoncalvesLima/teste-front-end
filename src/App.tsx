import { useEffect, useState } from 'react';
import { fetchProducts, fetchCategories } from './api';
import type { Product } from './types';

import CategoryFilter from './components/CategoryFilter';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';

import './App.scss';

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [modalProduct, setModalProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetchProducts().then(setProducts);
    fetchCategories().then(setCategories);
  }, []);

  const filteredProducts =
    selectedCategory === ''
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const handleProductClick = (product: Product) => {
    setModalProduct(product);
  };

  const handleCloseModal = () => {
    setModalProduct(null);
  };

  
  const handleBuyClick = (_product: Product) => {
    
  };

  return (
    <div className="app-container">
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />

      <main className="products-main">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={handleProductClick}
            onBuyClick={handleBuyClick}
          />
        ))}
      </main>

      <ProductModal
        product={modalProduct}
        onClose={handleCloseModal}
        onBuyClick={handleBuyClick} 
      />
    </div>
  );
}
