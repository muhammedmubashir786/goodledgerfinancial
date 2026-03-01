import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero-image.png";

const Home = () => {
  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-flex">

          {/* Left Side Text */}
          <div className="hero-content">
            <h1>Good Ledger Financial Partners</h1>
            <h2>
              Structured Offshore Accounting Support for Growth-Focused Firms
            </h2>
            <p>
              Seamless backend accounting support delivered by CMA (US) qualified professionals.
            </p>

            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary">
                Schedule a Consultation
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="hero-image">
            <img src={heroImage} alt="Good Ledger Financial Partners" />
          </div>

        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <h2>About Good Ledger Financial Partners</h2>
          <p>
            Good Ledger Financial Partners is a team of CMA (US) qualified finance professionals providing structured offshore accounting support to U.S.-based firms.
          </p>
          <p>
            We operate as a seamless extension of your team — delivering accurate bookkeeping, reconciliations, financial reporting, and review-ready documentation aligned with U.S. GAAP standards.
          </p>
          <div className="goal-section">
            <p>Our goal is simple:</p>
            <p className="goal-text">
              Increase operational capacity without increasing fixed payroll costs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="services-overview-section">
        <div className="container">
          <h2>What We Handle</h2>
          <div className="services-grid">
            <div className="service-item">
              <div className="service-icon">📊</div>
              <h3>Full-cycle bookkeeping</h3>
            </div>
            <div className="service-item">
              <div className="service-icon">📅</div>
              <h3>Month-end & year-end close</h3>
            </div>
            <div className="service-item">
              <div className="service-icon">💳</div>
              <h3>Accounts Payable & Receivable</h3>
            </div>
            <div className="service-item">
              <div className="service-icon">📈</div>
              <h3>Financial reporting</h3>
            </div>
            <div className="service-item">
              <div className="service-icon">🧹</div>
              <h3>Cleanup & catch-up accounting</h3>
            </div>
            <div className="service-item">
              <div className="service-icon">💰</div>
              <h3>Budgeting & cash flow forecasting</h3>
            </div>
          </div>

          <div className="center-button">
            <Link to="/services" className="btn btn-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose-section">
        <div className="container">
          <h2>Why Choose Good Ledger</h2>
          <ul className="why-choose-list">
            <li>CMA (US) qualified professionals</li>
            <li>Structured review processes</li>
            <li>U.S. GAAP aligned reporting</li>
            <li>Secure & confidential workflows</li>
            <li>Scalable support model</li>
          </ul>

          <div className="closing-statement">
            <p>
              Reliable support. Clear communication. Long-term partnership.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>
            Looking to expand backend capacity without expanding payroll?
          </h2>
          <p>Let's start a conversation.</p>
          <Link to="/contact" className="btn btn-primary">
            Contact Us
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;