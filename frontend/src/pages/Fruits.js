// import "./Fruits.css";

// const fruits = [
// { name:"Apple", hindi:"सेब", price:120, img:"https://images.unsplash.com/photo-1713959925337-3a79df64fccd?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBmcnVpdHxlbnwwfHwwfHx8MA%3D%3D"},
// { name:"Banana", hindi:"केला", price:50, img:"https://t3.ftcdn.net/jpg/00/09/08/54/360_F_9085486_EE5ha1cNDfYgSc23pWXLTwjyX0pP5zV9.jpg"},
// { name:"Mango", hindi:"आम", price:150, img:"https://png.pngtree.com/png-vector/20250608/ourmid/pngtree-realistic-mango-image-with-two-whole-mangos-png-image_16497232.png"},
// { name:"Orange", hindi:"संतरा", price:80, img:"https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg"},
// { name:"Grapes", hindi:"अंगूर", price:90, img:"https://upload.wikimedia.org/wikipedia/commons/b/bb/Table_grapes_on_white.jpg"},
// { name:"Pineapple", hindi:"अनानास", price:70, img:"https://upload.wikimedia.org/wikipedia/commons/c/cb/Pineapple_and_cross_section.jpg"},
// { name:"Papaya", hindi:"पपीता", price:60, img:"https://t3.ftcdn.net/jpg/01/77/22/44/360_F_177224431_6S50Gr64wFWjkDHBGXq7PkaG5kcrgEgd.jpg"},
// { name:"Watermelon", hindi:"तरबूज", price:40, img:"https://media.istockphoto.com/id/1142119394/photo/whole-and-slices-watermelon-fruit-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=A5XnLyeI_3mwkCNadv-QLU4jzgNux8kUPfIlDvwT0jo="},
// { name:"Muskmelon", hindi:"खरबूजा", price:50, img:"https://m.media-amazon.com/images/I/41re9kiMzdL.jpg"},
// { name:"Pomegranate", hindi:"अनार", price:160, img:"https://images.stockcake.com/public/e/0/1/e01ede9f-e42d-4db1-8e6b-9e806b3bf3e6_large/ripe-pomegranate-halves-stockcake.jpg"},
// { name:"Guava", hindi:"अमरूद", price:70, img:"https://upload.wikimedia.org/wikipedia/commons/0/02/Guava_ID.jpg"},
// { name:"Strawberry", hindi:"स्ट्रॉबेरी", price:200, img:"https://upload.wikimedia.org/wikipedia/commons/2/29/PerfectStrawberry.jpg"},
// { name:"Kiwi", hindi:"कीवी", price:300, img:"https://upload.wikimedia.org/wikipedia/commons/d/d3/Kiwi_aka.jpg"},
// { name:"Lychee", hindi:"लीची", price:180, img:"https://images.unsplash.com/photo-1705335834319-92a152363ea1?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bHljaGVlfGVufDB8fDB8fHww"},
// { name:"Coconut", hindi:"नारियल", price:40, img:"https://media.istockphoto.com/id/1475273505/photo/fresh-coconuts-on-sandy-beach-with-palm-leaf-shadow-and-sunlight.jpg?s=612x612&w=0&k=20&c=Reg63LYhnPwFi_h9XawtLsKdaw2QYPao-Qhqj9vkxL8="},
// { name:"Pear", hindi:"नाशपाती", price:120, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE_i197uwJl2xW0MfAp6oWvcefhLKz85H_HA&s"},
// { name:"Plum", hindi:"आलूबुखारा", price:140, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEHkdXs1iOhhqZD2zM9cRXKI_SYm8kDDNE1A&s"},
// { name:"Cherry", hindi:"चेरी", price:250, img:"https://plus.unsplash.com/premium_photo-1688671923138-ff74e0f9a810?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlcnJpZXN8ZW58MHx8MHx8fDA%3D"},
// { name:"Dragon Fruit", hindi:"ड्रैगन फ्रूट", price:220, img:"https://media.istockphoto.com/id/641958158/photo/fresh-gragon-fruit-slice-and-cubic-on-wooden-table.jpg?s=612x612&w=0&k=20&c=oVud3Ifv866TGkyMHG1DX0EzerK3mlkOP9bJoDJAz_g="},
// { name:"Custard Apple", hindi:"सीताफल", price:90, img:"https://t3.ftcdn.net/jpg/02/19/09/32/360_F_219093282_EcmrjmHH104SsHCqR9d45ceqfQjfLIWP.jpg"}
// ];

// function Fruits(){
//   return(
//     <div className="fruit-container">

//       <h1>Fresh Fruits 🍎</h1>

//       <div className="fruit-grid">

//         {fruits.map((fruit,index)=>(
//           <div className="fruit-card" key={index}>

//             <img src={fruit.img} alt={fruit.name}/>

//             <div className="hindii">
//               <h3>{fruit.name}</h3>

//               <p className="price">₹{fruit.price} / kg</p>
//             </div>

//             <div className="pricee">
//              <p className="hindi">{fruit.hindi}</p> 

//             <button className="cart-btn">Add to Cart</button>
//             </div>

//             <div className="buynow">Buy Now </div>

//           </div>
//         ))}

//       </div>

//     </div>
//   )
// }

// export default Fruits;


//change from here

import { useState } from "react";
import "./Fruits.css";

const fruits = [
{ name:"Apple", hindi:"सेब", price:120, unit: "1kg",  img:"https://images.unsplash.com/photo-1713959925337-3a79df64fccd?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBmcnVpdHxlbnwwfHwwfHx8MA%3D%3D"},
{ name:"Banana", hindi:"केला", price:50, unit: "1kg",  img:"https://t3.ftcdn.net/jpg/00/09/08/54/360_F_9085486_EE5ha1cNDfYgSc23pWXLTwjyX0pP5zV9.jpg"},
{ name:"Mango", hindi:"आम", price:150, unit: "1kg",  img:"https://png.pngtree.com/png-vector/20250608/ourmid/pngtree-realistic-mango-image-with-two-whole-mangos-png-image_16497232.png"},
{ name:"Orange", hindi:"संतरा", price:80, unit: "1kg",  img:"https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg"},
{ name:"Grapes", hindi:"अंगूर", price:90, unit: "1kg",  img:"https://upload.wikimedia.org/wikipedia/commons/b/bb/Table_grapes_on_white.jpg"},
{ name:"Pineapple", hindi:"अनानास", price:70, unit: "1kg",  img:"https://upload.wikimedia.org/wikipedia/commons/c/cb/Pineapple_and_cross_section.jpg"},
{ name:"Papaya", hindi:"पपीता", price:60, unit: "1kg",  img:"https://t3.ftcdn.net/jpg/01/77/22/44/360_F_177224431_6S50Gr64wFWjkDHBGXq7PkaG5kcrgEgd.jpg"},
{ name:"Watermelon", hindi:"तरबूज", price:40, unit: "1kg",  img:"https://media.istockphoto.com/id/1142119394/photo/whole-and-slices-watermelon-fruit-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=A5XnLyeI_3mwkCNadv-QLU4jzgNux8kUPfIlDvwT0jo="},
{ name:"Muskmelon", hindi:"खरबूजा", price:50, unit: "1kg",  img:"https://m.media-amazon.com/images/I/41re9kiMzdL.jpg"},
{ name:"Pomegranate", hindi:"अनार", price:160, unit: "1kg",  img:"https://images.stockcake.com/public/e/0/1/e01ede9f-e42d-4db1-8e6b-9e806b3bf3e6_large/ripe-pomegranate-halves-stockcake.jpg"},
{ name:"Guava", hindi:"अमरूद", price:70, unit: "1kg",  img:"https://upload.wikimedia.org/wikipedia/commons/0/02/Guava_ID.jpg"},
{ name:"Strawberry", hindi:"स्ट्रॉबेरी", price:200, unit: "1kg",  img:"https://upload.wikimedia.org/wikipedia/commons/2/29/PerfectStrawberry.jpg"},
{ name:"Kiwi", hindi:"कीवी", price:300, unit: "1kg",  img:"https://upload.wikimedia.org/wikipedia/commons/d/d3/Kiwi_aka.jpg"},
{ name:"Lychee", hindi:"लीची", price:180, unit: "1kg",  img:"https://images.unsplash.com/photo-1705335834319-92a152363ea1?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bHljaGVlfGVufDB8fDB8fHww"},
{ name:"Coconut", hindi:"नारियल", price:40, unit: "1kg",  img:"https://media.istockphoto.com/id/1475273505/photo/fresh-coconuts-on-sandy-beach-with-palm-leaf-shadow-and-sunlight.jpg?s=612x612&w=0&k=20&c=Reg63LYhnPwFi_h9XawtLsKdaw2QYPao-Qhqj9vkxL8="},
{ name:"Pear", hindi:"नाशपाती", price:120, unit: "1kg",  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE_i197uwJl2xW0MfAp6oWvcefhLKz85H_HA&s"},
{ name:"Plum", hindi:"आलूबुखारा", price:140, unit: "1kg",  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEHkdXs1iOhhqZD2zM9cRXKI_SYm8kDDNE1A&s"},
{ name:"Cherry", hindi:"चेरी", price:250, unit: "1kg",  img:"https://plus.unsplash.com/premium_photo-1688671923138-ff74e0f9a810?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlcnJpZXN8ZW58MHx8MHx8fDA%3D"},
{ name:"Dragon Fruit", hindi:"ड्रैगन फ्रूट", unit: "1kg",  price:220, img:"https://media.istockphoto.com/id/641958158/photo/fresh-gragon-fruit-slice-and-cubic-on-wooden-table.jpg?s=612x612&w=0&k=20&c=oVud3Ifv866TGkyMHG1DX0EzerK3mlkOP9bJoDJAz_g="},
{ name:"Custard Apple", hindi:"सीताफल", unit: "1kg",  price:90, img:"https://t3.ftcdn.net/jpg/02/19/09/32/360_F_219093282_EcmrjmHH104SsHCqR9d45ceqfQjfLIWP.jpg"}
];



function Fruit() {

  const [cart, setCart] = useState([]);

  const addToCart = (fru) => {
  setCart([...cart, fru]);
};

const removeFromCart = (fru) => {
  setCart(cart.filter((item) => item.name !== fru.name));
};



  return (
    <div className="premium-veg-section">
      <div className="header-container">
        <span className="top-label">EXPRESS GROCERY</span>
        <h1 className="main-title">Fresh Harvest 🥬</h1>
        <p className="delivery-note">Flash Delivery in 30 Mins</p>
      </div>

      <div className="premium-grid">
        {fruits.map((fru, index) => (
          <div className="p-veg-card" key={index}>
            {/* Image Section */}
            <div className="image-box">
              <img src={fru.img} alt={fru.name} />
              <div className="glass-tag">Fresh</div>
            </div>

            {/* Info Section */}
            <div className="content-box">
              <div className="title-row">
                <h3>{fru.name}</h3>
                <span className="hindi-label">{fru.hindi}</span>
              </div>
              
              <div className="price-row">
                <div className="price-info">
                   <span className="price-val">₹{fru.price}</span>
                   <span className="unit-label">/ {fru.unit}</span>
                </div>
                {/* <button className="add-cart-minimal">ADD TO CART</button> */}

                {cart.some((item) => item.name === fru.name) ? (
    <button 
      className="remove-btn"
      onClick={() => removeFromCart(fru)}
    >
      REMOVE
    </button>
  ) : (
    <button 
      className="add-cart-minimal"
      onClick={() => addToCart(fru)}
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

export default Fruit;
