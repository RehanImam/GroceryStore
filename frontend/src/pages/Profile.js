

// function Profile() {
//   return (
//     <div>
//         Profile
//     </div>
//   );
// }

// export default Profile;

import React from "react";
import "./Profile.css";
import { FaBox, FaUserCircle, FaMapMarkerAlt, FaSignOutAlt, FaChevronRight } from "react-icons/fa";

const orders = [
  { id: "#SB-9921", date: "March 20, 2026", total: 450, status: "Delivered", items: "Organic Potato, Red Onion, Vine Tomato" },
  { id: "#SB-9845", date: "March 15, 2026", total: 1200, status: "Cancelled", items: "Premium Chicken, Basmati Rice" },
  { id: "#SB-9712", date: "March 10, 2026", total: 320, status: "Delivered", items: "Green Capsicum, Baby Spinach" },
];

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-layout">
        
        {/* Sidebar Navigation */}
        <aside className="profile-sidebar">
          <div className="user-info-card">
            <FaUserCircle className="user-avatar" />
            <div className="user-details">
              <h3>Rehan Imam</h3>
              <p>+91 98765 43210</p>
            </div>
          </div>
          
          <nav className="side-nav">
            <button className="nav-item active"><FaBox /> My Orders</button>
            <button className="nav-item"><FaMapMarkerAlt /> Saved Addresses</button>
            <button className="nav-item logout"><FaSignOutAlt /> Sign Out</button>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="profile-content">
          <div className="content-header">
            <h2>Order History</h2>
            <p>View and track your recent fresh deliveries.</p>
          </div>

          <div className="orders-list">
            {orders.map((order, index) => (
              <div className="order-card" key={index}>
                <div className="order-info">
                  <div className="order-header">
                    <span className="order-id">{order.id}</span>
                    <span className={`status-badge ${order.status.toLowerCase()}`}>
                      {order.status}
                    </span>
                  </div>
                  <p className="order-items">{order.items}</p>
                  <div className="order-meta">
                    <span className="order-date">{order.date}</span>
                    <span className="order-total">₹{order.total}</span>
                  </div>
                </div>
                <button className="view-details-btn">
                  Details <FaChevronRight />
                </button>
              </div>
            ))}
          </div>
        </main>

      </div>
    </div>
  );
}

export default Profile;