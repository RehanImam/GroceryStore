

// function Contact() {
//   return (
//     <div>
//         Contact
//     </div>
//   );
// }

// export default Contact;


import React, { useState } from "react";
import "./Contact.css";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaHeadset } from "react-icons/fa";

function Contact() {
  const [userNumber, setUserNumber] = useState("");

  // This is your business number
  const myBusinessNumber = "9905763301";

  return (
    <div className="contact-page">
      <div className="contact-container">
        
        <div className="contact-header">
          <FaHeadset className="headset-icon" />
          <h1>Help is a Call Away</h1>
          <p>Don't waste time typing. Just enter your number and tap to connect with us.</p>
        </div>

        <div className="contact-grid">
          
          {/* LEFT: The Direct Call Section */}
          <div className="contact-card instant-call">
            <div className="card-badge">LIVE SUPPORT</div>
            <h3>Quick Call Support</h3>
            <p>Enter your mobile number below, then tap the button to call our support line at <b>+91 {myBusinessNumber}</b></p>
            
            <div className="phone-input-group">
              <div className="country-code">+91</div>
              <input 
                type="tel" 
                placeholder="Your Mobile Number" 
                value={userNumber}
                onChange={(e) => setUserNumber(e.target.value)}
                maxLength="10"
              />
            </div>

            {/* This link triggers the call to YOUR number */}
            <a 
              href={`tel:${myBusinessNumber}`} 
              className={`call-trigger-btn ${userNumber.length === 10 ? "active" : "disabled"}`}
            >
              <FaPhoneAlt /> {userNumber.length === 10 ? "Call SabjiBaazar Now" : "Enter Your Number First"}
            </a>
            
            <p className="helper-text">Clicking the button will open your phone's dialer.</p>
          </div>

          {/* RIGHT: Other Support Channels */}
          <div className="support-options">
            <div className="mini-card">
              <FaWhatsapp className="wa-icon" />
              <div>
                <h4>WhatsApp Us</h4>
                <p>Chat with Rehan directly.</p>
                <a href={`https://wa.me/91${myBusinessNumber}`} target="_blank" rel="noreferrer">Open WhatsApp</a>
              </div>
            </div>

            <div className="mini-card">
              <FaEnvelope className="en-icon" />
              <div>
                <h4>Email Support</h4>
                <p>support@sabjibaazar.com</p>
                <a href="mailto:support@sabjibaazar.com">Send Email</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;