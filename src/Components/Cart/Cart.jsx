import './Cart.css';
import DarkMode from '../DarkMode/DarkMode';

function Cart({ cart, dark }) {
  return (
   <>
   
    <div id="cart-panel" >
      <h2>Your Cart</h2>

      {/*Hapa if the cart is empty it shows Cart Empty */}
      {cart.length === 0 && <p>Cart is empty</p>}


      {/**This code loops through the cart length and displayes Images price and item */}
      {cart.map((item, index) => (
        <div key={index} className="cart-item">


          <img src={item.Image} alt={item.Item} className="cart-image" />
          <div>
            <p>{item.Item}</p>
            <p>Price: {item.price}</p>


          </div>
        </div>
      ))}
    </div> 
  
      </>
  );
}

export default Cart;
