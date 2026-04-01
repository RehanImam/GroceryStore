

// // function Signup() {
// //   return (
// //     <div>
// //         signup
// //     </div>
// //   );
// // }

// // export default Signup;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Signup.css";
// import { FaShieldAlt, FaPhoneAlt, FaUser, FaArrowRight } from "react-icons/fa";

// function Signup() {
//   const [step, setStep] = useState(1); // 1 for Details, 2 for OTP

//   return (
//     <div className="signup-page">
//       <div className="signup-card">
        
//         {/* Left Side: Modern Visual */}
//         <div className="signup-visual">
//           <div className="visual-blur-box">
//             <h3>Pure. Fresh. Local.</h3>
//             <p>Join 10,000+ families eating healthier every day.</p>
//             <div className="feature-dots">
//               <span className="dot active"></span>
//               <span className="dot"></span>
//               <span className="dot"></span>
//             </div>
//           </div>
//         </div>

//         {/* Right Side: Form */}
//         <div className="signup-form-container">
//           <div className="form-header">
//             <h1>Create Account</h1>
//             <p>{step === 1 ? "Start your healthy journey today." : "Verify your mobile number."}</p>
//           </div>

//           {step === 1 ? (
//             <form className="auth-form" onSubmit={() => setStep(2)}>
//               <div className="input-group">
//   <label><FaUser className="label-icon" /> Full Name</label>
//   {/* Added 'modern-input' class here */}
//   <input type="text" className="modern-input" placeholder="Enter your full name" required />
// </div>

//               <div className="input-group">
//                 <label><FaPhoneAlt className="label-icon" /> Mobile Number</label>
//                 <div className="phone-input">
//                   <span>+91</span>
//                   <input type="tel" placeholder="98765 43210" maxLength="10" required />
//                 </div>
//               </div>

//               <button type="submit" className="signup-main-btn">
//                 Send OTP <FaArrowRight />
//               </button>
//             </form>
//           ) : (
//             <div className="otp-section">
//               <div className="input-group">
//                 <label><FaShieldAlt className="label-icon" /> Enter 4-Digit OTP</label>
//                 <div className="otp-input-wrapper">
//                   <input type="text" maxLength="1" className="otp-digit" />
//                   <input type="text" maxLength="1" className="otp-digit" />
//                   <input type="text" maxLength="1" className="otp-digit" />
//                   <input type="text" maxLength="1" className="otp-digit" />
//                 </div>
//               </div>

//               <button className="signup-main-btn">Verify & Register</button>
//               <button className="resend-link" onClick={() => setStep(1)}>
//                 Change Number?
//               </button>
//             </div>
//           )}

//           <p className="footer-text">
//             Already a member? <Link to="/login">Sign In</Link>
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Signup;





import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import { FaPhoneAlt, FaUser, FaArrowRight, FaCheckCircle } from "react-icons/fa";

function Signup() {
  const [step, setStep] = useState(1); 

  // Function to handle the final verification click
  const handleVerify = () => {
    // Here you would normally call your API
    setStep(3); 
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        
        <div className="signup-visual">
          <div className="visual-blur-box">
            <h3>Pure. Fresh. Local.</h3>
            <p>Join 10,000+ families eating healthier every day.</p>
          </div>
        </div>

        <div className="signup-form-container">
          {step === 1 && (
            <>
              <div className="form-header">
                <h1>Create Account</h1>
                <p>Start your healthy journey today.</p>
              </div>
              <form className="auth-form" onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
                <div className="input-group">
                  <label><FaUser className="label-icon" /> Full Name</label>
                  <input type="text" className="modern-input" placeholder="Enter your full name" required />
                </div>
                <div className="input-group">
                  <label><FaPhoneAlt className="label-icon" /> Mobile Number</label>
                  <div className="phone-input">
                    <span>+91</span>
                    <input type="tel" placeholder="98765 43210" maxLength="10" required />
                  </div>
                </div>
                <button type="submit" className="signup-main-btn">Send OTP <FaArrowRight /></button>
              </form>
            </>
          )}

          {step === 2 && (
            <div className="otp-section fade-in">
              <div className="form-header">
                <h1>Verify OTP</h1>
                <p>Sent to your mobile number.</p>
              </div>
              <div className="otp-input-wrapper">
                <input type="text" maxLength="1" className="otp-digit" />
                <input type="text" maxLength="1" className="otp-digit" />
                <input type="text" maxLength="1" className="otp-digit" />
                <input type="text" maxLength="1" className="otp-digit" />
              </div>
              <button className="signup-main-btn" onClick={handleVerify}>Verify & Register</button>
              <button className="resend-link" onClick={() => setStep(1)}>Change Number?</button>
            </div>
          )}

          {step === 3 && (
            <div className="success-view">
              <div className="success-icon-container">
                <FaCheckCircle className="success-check-icon" />
              </div>
              <h2>Registration Successful!</h2>
              <p>Welcome to the SabjiBaazar family. Your fresh journey starts now.</p>
              <Link to="/" className="signup-main-btn">Go to Home</Link>
            </div>
          )}

          {step !== 3 && (
            <p className="footer-text">
              Already a member? <Link to="/login">Sign In</Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Signup;