


import { useState } from "react";
 import "./Rice.css";


 
const vegetables = [
  { name: "Potato", hindi: "आलू", price: 30, unit: "1kg", img: "https://t4.ftcdn.net/jpg/02/75/77/89/360_F_275778955_xxJe5fQvDy5oXbjupdJ162zLwU4sf3kT.jpg" },
  { name: "Onion", hindi: "प्याज", price: 40, unit: "1kg", img: "https://www.bbassets.com/media/uploads/p/l/40023472_7-fresho-onion-organically-grown.jpg" },
  { name: "Tomato", hindi: "टमाटर", price: 35, unit: "1kg", img: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea" },
  { name: "Carrot", hindi: "गाजर", price: 50, unit: "1kg", img: "https://images.pexels.com/photos/1306559/pexels-photo-1306559.jpeg" },
  { name: "Cabbage", hindi: "पत्ता गोभी", price: 30, unit: "1kg", img: "https://www.lovefoodhatewaste.com/sites/default/files/styles/16_9_two_column/public/2022-07/Cabbage.jpg.webp" },
  { name: "Cauliflower", hindi: "फूल गोभी", price: 40, unit: "1kg", img: "https://www.shutterstock.com/image-photo/cauliflower-harvesting-urban-vegetable-garden-600nw-2383730533.jpg" },
  { name: "Spinach", hindi: "पालक", price: 20, unit: "1kg", img: "https://images.unsplash.com/photo-1576045057995-568f588f82fb" },
  { name: "Brinjal", hindi: "बैंगन", price: 45, unit: "1kg", img: "https://www.shutterstock.com/image-photo/brinjals-tree-field-natural-sunny-600nw-2621798045.jpg" },
  { name: "Lady Finger", hindi: "भिंडी", price: 60, unit: "1kg", img: "https://www.fitterfly.com/blog/wp-content/uploads/2023/06/Is-Ladyfinger-a-Good-Food-Choice-for-People-with-Diabetes-scaled.jpg" },
  { name: "Bottle Gourd", hindi: "लौकी", price: 25,  unit: "1kg",img: "https://www.bbassets.com/media/uploads/p/l/50000468_8-fresho-bottle-gourd-organically-grown.jpg" },
  { name: "Bitter Gourd", hindi: "करेला", price: 55, unit: "1kg", img: "https://img.freepik.com/free-photo/glass-bitter-gourd-smoothie-with-shopped-bitter-gourd_1150-35377.jpg" },
  { name: "Pumpkin", hindi: "कद्दू", price: 30, unit: "1kg", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL3GidUVX2dg12mH-QSStcOXzSIZZTb3dMgg&s" },
  { name: "Radish", hindi: "मूली", price: 20, unit: "1kg", img: "https://www.bbassets.com/media/uploads/p/l/10000166_19-fresho-radish-white.jpg" },
  { name: "Peas", hindi: "मटर", price: 80, unit: "1kg", img: "https://www.bbassets.com/media/uploads/p/l/10000284_16-fresho-green-peas.jpg" },
  { name: "Capsicum", hindi: "शिमला मिर्च", price: 70, unit: "1kg", img: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83" },
  { name: "Broccoli", hindi: "ब्रोकोली", price: 90, unit: "1kg", img: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc" },
  { name: "Corn", hindi: "मकई", price: 40, unit: "1kg", img: "https://cdn.britannica.com/36/167236-050-BF90337E/Ears-corn.jpg" },
  { name: "Beetroot", hindi: "चुकंदर", price: 45, unit: "1kg", img: "https://media.istockphoto.com/id/493446908/photo/fresh-sliced-beetroot-on-wooden-surface.jpg" },
  { name: "Sweet Potato", hindi: "शकरकंद", price: 35, unit: "1kg", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFWcU6TrfEngiXJrXqJwnuQvAVLXbOQMKFhg&s" },
  { name: "Green Beans", hindi: "सेम", price: 60, unit: "1kg", img: "https://img.freepik.com/free-photo/fresh-raw-green-beans_181624-6071.jpg" }
];



function Rice() {

  const [cart, setCart] = useState([]);

  const addToCart = (veg) => {
  setCart([...cart, veg]);
};

const removeFromCart = (veg) => {
  setCart(cart.filter((item) => item.name !== veg.name));
};



  return (
    <div className="premium-veg-section">
      <div className="header-container">
        <span className="top-label">EXPRESS GROCERY</span>
        <h1 className="main-title">Fresh Harvest 🥬</h1>
        <p className="delivery-note">Flash Delivery in 30 Mins</p>
      </div>

      <div className="premium-grid">
        {vegetables.map((veg, index) => (
          <div className="p-veg-card" key={index}>
            {/* Image Section */}
            <div className="image-box">
              <img src={veg.img} alt={veg.name} />
              <div className="glass-tag">Fresh</div>
            </div>

            {/* Info Section */}
            <div className="content-box">
              <div className="title-row">
                <h3>{veg.name}</h3>
                <span className="hindi-label">{veg.hindi}</span>
              </div>
              
              <div className="price-row">
                <div className="price-info">
                   <span className="price-val">₹{veg.price}</span>
                   <span className="unit-label">/ {veg.unit}</span>
                </div>
                {/* <button className="add-cart-minimal">ADD TO CART</button> */}

                {cart.some((item) => item.name === veg.name) ? (
    <button 
      className="remove-btn"
      onClick={() => removeFromCart(veg)}
    >
      REMOVE
    </button>
  ) : (
    <button 
      className="add-cart-minimal"
      onClick={() => addToCart(veg)}
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

export default Rice;