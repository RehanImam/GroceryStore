// import { Link } from "react-router-dom";
// import "./Header.css";
// import { FaShoppingCart } from "react-icons/fa";

// function Header() {
//   return (
//     <nav className="navbar">

//       {/* LEFT → Logo */}
//       <Link to="/" className="logo-link">
//         <h2 className="logo">
//           <span className="sabji">Sabji</span>Store 🥬
//         </h2>
//       </Link>

//       {/* CENTER → Links */}
//       <ul className="nav-links">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/Offers">Offers</Link></li>
//         <li><Link to="/Contact">Contact</Link></li>
//       </ul>

//       {/* RIGHT → Search + Cart + Auth */}
//       <div className="nav-right">

//         {/* Search */}
//         <input 
//           type="text" 
//           placeholder="Search vegetables, fruits..." 
//           className="search-box" 
//         />

//         {/* Cart */}
//         <Link to="/cart" className="cart-link">
//           <FaShoppingCart className="cart-icon" />
//         </Link>

//         {/* Buttons */}
//         <Link to="/Login" className="login-btn">Login</Link>
//         <Link to="/Signup" className="signup-btn">Signup</Link>

//       </div>

//     </nav>
//   );
// }

// export default Header;


import { Link } from "react-router-dom";
import "./Header.css";
import { FaShoppingCart, FaSearch, FaUserCircle } from "react-icons/fa";

function Header() {

  return (
    <header className="header-wrapper">
      <nav className="navbar">
        {/* LEFT: Logo with a modern touch */}
        <Link to="/" className="logo-link">
          <div className="logo-container">
            <span className="logo-icon">🥬</span>
            <h2 className="logo-text">
              <span className="brand-highlight">Sabji</span>Store
            </h2>
          </div>
        </Link>

        {/* CENTER: Clean Nav Links */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Offers">Offers</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>

        {/* RIGHT: Search, Cart, and Auth */}
        <div className="nav-right">
          <div className="search-wrapper">
            <FaSearch className="search-icon-inner" />
            <input 
              type="text" 
              placeholder="Search freshness..." 
              className="search-box" 
            />
          </div>

          <div className="action-icons">
            <Link to="/cart" className="icon-link">
              <div className="cart-wrapper">
                <FaShoppingCart className="nav-icon" />
                <span className="cart-count">0</span>
              </div>
            </Link>
            
            <Link to="/profile" className="icon-link">
              <FaUserCircle className="nav-icon user-icon" />
            </Link>
          </div>

          <div className="auth-buttons">
            <Link to="/Login" className="signup-premium-btn">Login</Link>
            <Link to="/Signup" className="signup-premium-btn">Sign Up</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;