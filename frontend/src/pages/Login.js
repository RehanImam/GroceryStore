

// function Login() {
//   return (
//     <div>
//         login
//     </div>
//   );
// }

// export default Login;



import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { FaLeaf, FaGoogle, FaArrowRight } from "react-icons/fa";

function Login() {
  return (
    <div className="login-page">
      <div className="login-card">
        
        {/* Left Side: Visual/Branding */}
        <div className="login-visual">
          <div className="visual-overlay">
            <div className="visual-content">
              <FaLeaf className="leaf-icon" />
              <h2>Join the <br/><span>Freshness Revolution</span></h2>
              <p>Sourced from local farms, delivered to your doorstep in 30 minutes.</p>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="login-form-container">
          <div className="form-header">
            <h1>Welcome Back</h1>
            <p>Please enter your details to sign in.</p>
          </div>

          <form className="auth-form">
            <div className="input-group">
              <label>Email Address</label>
              <input type="email" placeholder="name@example.com" required />
            </div>

            <div className="input-group">
              <div className="label-row">
                <label>Password</label>
                <Link to="/forgot" className="forgot-link">Forgot?</Link>
              </div>
              <input type="password" placeholder="••••••••" required />
            </div>

            <button type="submit" className="login-main-btn">
              Sign In <FaArrowRight />
            </button>
          </form>

          <div className="divider">
            <span>or continue with</span>
          </div>

          <button className="google-btn">
            <FaGoogle /> Sign in with Google
          </button>

          <p className="footer-text">
            Don't have an account? <Link to="/signup">Create account</Link>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Login;