


import { Link } from "react-router-dom";
import ImagesSlider from "../ui/ImagesSlider";
import "./Home.css";

const CATEGORIES = [
  { id: "veg", title: "Vegetables", path: "/Vegetables", img: "https://images.unsplash.com/photo-1540420773420-3366772f4999", tag: "Farm Fresh" },
  { id: "fruit", title: "Fruits", path: "/Fruits", img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf", tag: "Sweet & Juicy" },
  { id: "nonveg", title: "Non-Veg", path: "/NonVeg", img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092", tag: "Antibiotic Free" },
  { id: "rice", title: "Rice & Grains", path: "/Rice", img: "https://images.unsplash.com/photo-1586201375761-83865001e31c", tag: "Purest Quality" },
  { id: "oil", title: "Oil & Masala", path: "/Oil", img: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5", tag: "Artisanal" },
  { id: "clean", title: "Detergents & Cleaners", path: "/Detergent", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a", tag: "Eco-Friendly" },
  { id: "bakery", title: "Biscuits & Cookiess", path: "/Biscuit", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35", tag: "Freshly Baked" },
  { id: "snacks", title: "Chips & Namkeen", path: "/Chip", img: "https://images.unsplash.com/photo-1566478989037-eec170784d0b", tag: "Crispy Bites" }
];

function Home() {
  const images = [
    "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974",
    "https://images.unsplash.com/photo-1543353071-873f17a7a088?q=80&w=2070",
    "https://images.unsplash.com/photo-1506484334402-40ff22e05a6d?q=80&w=2070"
  ];

  return (
    <div className="home-wrapper">
      <div className="hero-slider-section">
        <ImagesSlider images={images}>
          <div className="hero-overlay-content">
            <span className="hero-badge">30 MINUTE EXPRESS DELIVERY</span>
            <h1 className="hero-main-text">The Freshest Ingredients <br/> <span>Delivered To Your Door</span></h1>
            <p className="hero-sub-text">Sourced directly from local farms for your family's health.</p>
            <button className="hero-cta-btn">Start Shopping ➜</button>
          </div>
        </ImagesSlider>
      </div>

      <section className="categories-section">
        <div className="section-header">
          <h2>Shop by Category</h2>
          <div className="accent-line"></div>
        </div>

        <div className="categories-grid">
          {CATEGORIES.map((cat) => (
            <Link to={cat.path} key={cat.id} className="premium-card-link">
              <div className="premium-card">
                <div className="card-img-container">
                  <img src={cat.img} alt={cat.title} />
                  <div className="card-tag">{cat.tag}</div>
                </div>
                <div className="card-info">
                  <h3>{cat.title}</h3>
                  <span className="shop-link">Explore Collection</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <section className="promo-banner-premium">
        <div className="promo-inner">
           <h2>Organic Honey & Spices</h2>
           <p>Flat 20% OFF this weekend only!</p>
           <button className="promo-btn-white">Apply Code: FRESH20</button>
        </div>
      </section>
      </section>
    </div>
  );
}

export default Home;

