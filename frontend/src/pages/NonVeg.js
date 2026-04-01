// import "./NonVeg.css";

// const nonVegItems = [
//   { name: "Prime Lamb Chops", hindi: "मेमने की पसलियां", price: 850, weight: "500g", img: "https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&w=500&q=80" },
//   { name: "Atlantic Salmon", hindi: "सामन मछली", price: 1200, weight: "250g", img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=500&q=80" },
//   { name: "Farm Fresh Chicken", hindi: "ताज़ा चिकन", price: 280, weight: "1kg", img: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=500&q=80" },
//   { name: "Tiger Prawns", hindi: "झींगा मछली", price: 950, weight: "500g", img: "https://images.unsplash.com/photo-1559742811-822873691df0?auto=format&fit=crop&w=500&q=80" },
//   { name: "Organic Eggs", hindi: "अंडे (देसी)", price: 120, weight: "6 pcs", img: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=500&q=80" },
//   { name: "Tender Buffalo Steak", hindi: "भैंस का स्टेक", price: 650, weight: "400g", img: "https://images.unsplash.com/photo-1546241072-48010ad28c2c?auto=format&fit=crop&w=500&q=80" }
// ];

// function NonVeg() {
//   return (
//     <div className="nonveg-section">
//       <div className="premium-header">
//         <span className="subtitle">EXQUISITE SELECTION</span>
//         <h1>Premium Meats & Seafood</h1>
//         <div className="divider"></div>
//       </div>

//       <div className="nonveg-grid">
//         {nonVegItems.map((item, index) => (
//           <div className="nv-card" key={index}>
//             <div className="nv-img-container">
//               <img src={item.img} alt={item.name} />
//               <span className="delivery-tag">30 MIN DELIVERY</span>
//             </div>

//             <div className="nv-content">
//               <div className="nv-header">
//                 <h3>{item.name}</h3>
//                 <p className="nv-hindi">{item.hindi}</p>
//               </div>
              
//               <p className="nv-weight">{item.weight}</p>

//               <div className="nv-footer">
//                 <span className="nv-price">₹{item.price}</span>
//                 <button className="nv-add-btn">
//                   <span>Add</span>
//                   <i className="plus-icon">+</i>
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default NonVeg;



import { useState } from "react";
import "./NonVeg.css";

const nonVegItems = [
  { name: "Prime Lamb Chops", hindi: "मेमने की पसलियां", price: 850, unit: "500g", img: "https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&w=500&q=80" },
  { name: "Atlantic Salmon", hindi: "सामन मछली", price: 1200, unit: "250g", img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=500&q=80" },
  { name: "Farm Fresh Chicken", hindi: "ताज़ा चिकन", price: 280, unit: "1kg", img: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=500&q=80" },
  { name: "Tiger Prawns", hindi: "झींगा मछली", price: 950, unit: "500g", img: "https://images.unsplash.com/photo-1559742811-822873691df0?auto=format&fit=crop&w=500&q=80" },
  { name: "Organic Eggs", hindi: "अंडे (देसी)", price: 120, unit: "6 pcs", img: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=500&q=80" },
    { name: "Atlantic Salmon", hindi: "सामन मछली", price: 1200, unit: "250g", img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=500&q=80" },
  { name: "Farm Fresh Chicken", hindi: "ताज़ा चिकन", price: 280, unit: "1kg", img: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=500&q=80" },
  { name: "Tiger Prawns", hindi: "झींगा मछली", price: 950, unit: "500g", img: "https://images.unsplash.com/photo-1559742811-822873691df0?auto=format&fit=crop&w=500&q=80" },
  { name: "Organic Eggs", hindi: "अंडे (देसी)", price: 120, unit: "6 pcs", img: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=500&q=80" },
    { name: "Atlantic Salmon", hindi: "सामन मछली", price: 1200, unit: "250g", img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=500&q=80" },
  { name: "Farm Fresh Chicken", hindi: "ताज़ा चिकन", price: 280, unit: "1kg", img: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=500&q=80" },
  { name: "Tiger Prawns", hindi: "झींगा मछली", price: 950, unit: "500g", img: "https://images.unsplash.com/photo-1559742811-822873691df0?auto=format&fit=crop&w=500&q=80" },
  { name: "Organic Eggs", hindi: "अंडे (देसी)", price: 120, unit: "6 pcs", img: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=500&q=80" },
    { name: "Atlantic Salmon", hindi: "सामन मछली", price: 1200, unit: "250g", img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=500&q=80" },
  { name: "Farm Fresh Chicken", hindi: "ताज़ा चिकन", price: 280, unit: "1kg", img: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=500&q=80" },
  { name: "Tiger Prawns", hindi: "झींगा मछली", price: 950, unit: "500g", img: "https://images.unsplash.com/photo-1559742811-822873691df0?auto=format&fit=crop&w=500&q=80" },
  { name: "Organic Eggs", hindi: "अंडे (देसी)", price: 120, unit: "6 pcs", img: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=500&q=80" },
  { name: "Tender Buffalo Steak", hindi: "भैंस का स्टेक", price: 650, unit: "400g", img: "https://images.unsplash.com/photo-1546241072-48010ad28c2c?auto=format&fit=crop&w=500&q=80" }
];



function NonVeg() {

  const [cart, setCart] = useState([]);

  const addToCart = (nonv) => {
  setCart([...cart, nonv]);
};

const removeFromCart = (nonv) => {
  setCart(cart.filter((item) => item.name !== nonv.name));
};



  return (
    <div className="premium-veg-section">
      <div className="header-container">
        <span className="top-label">EXPRESS GROCERY</span>
        <h1 className="main-title">Fresh Harvest 🥬</h1>
        <p className="delivery-note">Flash Delivery in 30 Mins</p>
      </div>

      <div className="premium-grid">
        {nonVegItems.map((nonv, index) => (
          <div className="p-veg-card" key={index}>
            {/* Image Section */}
            <div className="image-box">
              <img src={nonv.img} alt={nonv.name} />
              <div className="glass-tag">Fresh</div>
            </div>

            {/* Info Section */}
            <div className="content-box">
              <div className="title-row">
                <h3>{nonv.name}</h3>
                <span className="hindi-label">{nonv.hindi}</span>
              </div>
              
              <div className="price-row">
                <div className="price-info">
                   <span className="price-val">₹{nonv.price}</span>
                   <span className="unit-label">/ {nonv.unit}</span>
                </div>
                {/* <button className="add-cart-minimal">ADD TO CART</button> */}

                {cart.some((item) => item.name === nonv.name) ? (
    <button 
      className="remove-btn"
      onClick={() => removeFromCart(nonv)}
    >
      REMOVE
    </button>
  ) : (
    <button 
      className="add-cart-minimal"
      onClick={() => addToCart(nonv)}
    >
      ADD TO CART
    </button>
  )}


              </div>
            </div>
            
            {/* The Buy Now Action Area */}
            <div className="action-area">
               <button className="buy-now-premium">BUY NOW</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NonVeg;
