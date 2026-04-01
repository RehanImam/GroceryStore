

// function Offer() {
//   return (
//     <div>
//         offer
//     </div>
//   );
// }

// export default Offer;

import React, { useState, useEffect } from "react";
import "./Offers.css";
import { FaTag, FaFire, FaChevronRight } from "react-icons/fa";

function Offers() {
  const [timeLeft, setTimeLeft] = useState({ hours: 12, minutes: 45, seconds: 0 });

  // Simple Countdown Timer Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const coupons = [
    { code: "FRESH50", desc: "50% OFF on first order", color: "#1b3008" },
    { code: "VEGIE20", desc: "Flat 20% on Organic Veggies", color: "#5d8233" },
    { code: "SUNDAY100", desc: "₹100 Cashback on Min ₹500", color: "#d4af37" }
  ];

  return (
    <div className="offers-container">
      {/* 1. FLASH SALE BANNER */}
      <div className="flash-sale-banner">
        <div className="flash-content">
          <div className="flash-badge"><FaFire /> FLASH SALE</div>
          <h1>Mid-Week Freshness Blast</h1>
          <p>Get up to 60% off on all seasonal fruits and exotic vegetables.</p>
          
          <div className="timer-wrapper">
            <div className="timer-box"><span>{timeLeft.hours}</span><label>Hrs</label></div>
            <div className="timer-sep">:</div>
            <div className="timer-box"><span>{timeLeft.minutes}</span><label>Min</label></div>
            <div className="timer-sep">:</div>
            <div className="timer-box"><span>{timeLeft.seconds}</span><label>Sec</label></div>
          </div>
          
          <button className="flash-btn">Claim Offers Now</button>
        </div>
      </div>

      {/* 2. COUPON GRID */}
      <section className="coupons-section">
        <div className="section-title">
          <h2>Exclusive Coupons</h2>
          <p>Tap to copy and apply at checkout</p>
        </div>
        
        <div className="coupons-grid">
          {coupons.map((c, i) => (
            <div className="coupon-card" key={i} style={{ borderLeft: `6px solid ${c.color}` }}>
              <div className="coupon-info">
                <FaTag className="tag-icon" style={{ color: c.color }} />
                <div>
                  <h4>{c.code}</h4>
                  <p>{c.desc}</p>
                </div>
              </div>
              <button className="copy-btn">COPY</button>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CATEGORY DEALS */}
      <section className="deals-section">
        <div className="deal-card veg-deal">
          <div className="deal-text">
            <span>UP TO 30% OFF</span>
            <h3>Green Leafy Combo</h3>
            <button>Shop Bundle <FaChevronRight /></button>
          </div>
        </div>
        <div className="deal-card fruit-deal">
          <div className="deal-text">
            <span>BUY 1 GET 1</span>
            <h3>Tropical Fruit Box</h3>
            <button>Grab Deal <FaChevronRight /></button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Offers;