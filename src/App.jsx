import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DarkMode from './Components/DarkMode/DarkMode'
import Cart from './Components/Cart/Cart'
import ProductsList from './Components/ProductList/ProductsList'

function App() {
  const [cart, setCart] = useState([]);
  const[category, setCategory]= useState("all");
  const [dark, setDark] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);


  const [count, setCount] = useState(0)


  function addToCart(product) {
  //takes old cart adds one item and saves 
  setCart(prev => [...prev, product]);
}

  const products= [
    {
      Item:"Oranges",
      Image:"https://images.pexels.com/photos/2247142/pexels-photo-2247142.jpeg",
      price: 20,
      desc:"Each at 20 shilling fresh from the farm",
      category:"food"
    },
    {
      Item:"Milk",
      Image:"https://images.pexels.com/photos/30731009/pexels-photo-30731009.jpeg",
      price: 50,
      desc:"50 shillings per pack",
      category:"food"
    },
    {
      Item:"Bread",
      Image:"https://images.pexels.com/photos/30626950/pexels-photo-30626950.jpeg",
      price:75,
      desc:"75 Shillings fr 500g of bread",
      category:"food"
    },
    {
      Item:"Soda",
      Image:"https://images.pexels.com/photos/4389667/pexels-photo-4389667.jpeg",
      price:150,
      desc:"2 liters of soda @150 shillings",
      category:"food"
    },
    {
      Item:'Fast charger',
      Image:"https://images.pexels.com/photos/28190457/pexels-photo-28190457.jpeg",
      price:1200,
      desc:"Fast Type c charger for @1200 ",
      category:"electronics"
    },
    {
      Item:"Hair Spray",
      Image:"https://images.pexels.com/photos/18235053/pexels-photo-18235053.jpeg",
      price:200,
      desc:"Get your silk and curly with new and improved hair spray",
      category:"Beauty Product"
    },
    {
      Item:'Sugar',
      Image:"https://images.pexels.com/photos/19123122/pexels-photo-19123122.jpeg",
      price:120,
      desc:"Hiral Sugar going for 120 shilling affordable pricing",
      category:"food"
    },
    {
      Item:'Bed',
      Image:"https://images.pexels.com/photos/3753435/pexels-photo-3753435.jpeg",
      price:120000,
      desc:"Get massive comfort and sleep after a long day from new brandy Beds @120000",
      category:"Accessories"
    },
    {
      Item:"Sofas",
      Image:"https://images.pexels.com/photos/6758245/pexels-photo-6758245.jpeg",
      price:40000,
      desc:"Comfy and comfy with brandy sofas @ 40000 shilling per set",
      category:"Accessories"
    },
    { 
      Item: "Fast charger", 
      Image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&q=80", 
      price: 1200, 
      desc: "Type-C Fast charging", 
      category: "electronics" 
    },
    { 
      Item: "Headphones", 
      Image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80", 
      price: 3500, 
      desc: "Noise cancelling wireless", 
      category: "electronics" 
    },

    { 
      Item: "Hair Spray", 
      Image: "https://images.unsplash.com/photo-1527799822367-474ff5da3944?w=500&q=80", 
      price: 200, 
      desc: "Silk and curly finish", 
      category: "beauty" 
    },
    { 
      Item: "Face Serum", 
      Image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&q=80", 
      price: 1500, 
      desc: "Glow boost serum", 
      category: "beauty" 
    },

    { 
      Item: "Wrist Watch", 
      Image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&q=80", 
      price: 5000, 
      desc: "Elegant leather strap", 
      category: "accessories" 
    },
    { 
      Item: "Sunglasses", 
      Image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80", 
      price: 1800, 
      desc: "UV Protected lenses", 
      category: "accessories" 
    },
    { 
      Item: "Bed", 
      Image: "https://images.unsplash.com/photo-1505693419148-17bc93098592?w=500&q=80", 
      price: 120000, 
      desc: "Massive comfort", 
      category: "accessories" 
    }

  ]

     ///this filter product by category
  const filteredProducts =
    category === "all"
      ? products
      : products.filter(p => p.category === category);

  // Toggle cart panel
  function toggleCart() {
    setCartVisible(prev => !prev);
  }

console.log(products)
console.log(filteredProducts)
  return (
    <>
    <div>
   <div className={dark ? "app dark" : "app light"}>
      {/* TOP BAR */}
      <div id="top-bar" className={dark ? "dark" : "light"}>
        <DarkMode dark={dark} setDark={setDark} />
        <select
          className="category-select"
          value={category}
          onChange={e => setCategory(e.target.value)}
          
        >
         <option value="all">All Items</option>
        <option value="food">Food & Groceries</option>
        <option value="electronics">Electronics</option>
        <option value="beauty">Beauty Products</option>
        <option value="accessories">Home & Accessories</option>
        </select>

        {/* Cart summary */}
        <button className="cart-btn" onClick={toggleCart}>
          Cart: {cart.length} item{cart.length !== 1 ? "s" : ""}
        </button>
      </div>

      {/* PRODUCTS GRID */}
      <ProductsList products={filteredProducts} addToCart={addToCart} dark={dark} />

      {/* CART PANEL */}
      {cartVisible && <Cart cart={cart} dark={dark}/>}
    </div>
    </div>
    </>
  )
}


export default App
