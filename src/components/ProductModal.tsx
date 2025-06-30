import type { Product } from '../types';
import './ProductModal.scss';

type Props = {
  product: Product | null;
  onClose: () => void;
  onBuyClick: (product: Product) => void;
};

export default function ProductModal({ product, onClose, onBuyClick }: Props) {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p><strong>Preço:</strong> R$ {product.price.toFixed(2)}</p>
        <p><strong>Descrição:</strong> {product.description}</p>
        <p><strong>Categoria:</strong> {product.category}</p>

        <button className="buy-button" onClick={() => onBuyClick(product)}>
          Comprar
        </button>
      </div>
    </div>
  );
}
