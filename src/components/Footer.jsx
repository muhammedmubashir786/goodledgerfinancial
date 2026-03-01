import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Good Ledger Financial Partners</h3>
            <p>Structured Offshore Accounting Support</p>
            <p>Offshore Accounting Support Team</p>
            <p>CMA (US) Qualified Professionals</p>
          </div>
          
          <div className="footer-links">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><a href="https://www.linkedin.com/company/good-ledger-financial-partners/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <p>Offshore Accounting Support Team</p>
            <p>CMA (US) Qualified Professionals</p>
            <p>Email: <a href="mailto:goodledgerfinancialpartners@gmail.com">goodledgerfinancialpartners@gmail.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/company/good-ledger-financial-partners/" target="_blank" rel="noopener noreferrer">linkedin.com/company/goodledgerfinancialpartners</a></p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Good Ledger Financial Partners. Reliable. Scalable. Professional.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;