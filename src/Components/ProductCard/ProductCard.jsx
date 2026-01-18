import './ProductCard.css';

function ProductCard({ product, addToCart, dark }) {
  return (
    <div className={dark ? "product-card dark-card" : "product-card light-card"}>
      <img src={product.Image} alt={product.Item} className="product-image" />
      <h3 className="product-name">{product.Item}</h3>
      <p className="product-price">Price: {product.price}</p>
      <button className="add-btn" onClick={() => addToCart(product)}>Add to Cart</button>
    
    </div>
  );
}

export default ProductCard;
