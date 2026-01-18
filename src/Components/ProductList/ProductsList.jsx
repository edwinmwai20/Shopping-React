import ProductCard from "../ProductCard/ProductCard";
import './ProductList.css';

function ProductsList({ products, addToCart, dark }) {
  return (
    <div className="products-list-container">
      <h2>Products</h2>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.Item} product={product} addToCart={addToCart} 
          dark={dark}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
