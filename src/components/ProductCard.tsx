import type { Product } from '../types';
import './ProductCard.scss';

type Props = {
  product: Product;
  onClick: (product: Product) => void;
  onBuyClick: (product: Product) => void;
};

export default function ProductCard({ product, onClick, onBuyClick }: Props) {
  return (
    <article className="product-card">
      <img src={product.image} alt={product.title} onClick={() => onClick(product)} />
      <h3 onClick={() => onClick(product)}>{product.title}</h3>
      <p>R$ {product.price.toFixed(2)}</p>
      <button className="buy-button" onClick={() => onBuyClick(product)}>Comprar</button>
    </article>
  );
}
