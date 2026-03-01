import React from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Full-Cycle Bookkeeping",
      icon: "📊",
      features: [
        "General ledger maintenance",
        "Journal entries & adjustments",
        "Bank & credit card reconciliations",
        "Intercompany accounting"
      ]
    },
    {
      id: 2,
      title: "Month-End & Year-End Close",
      icon: "📅",
      features: [
        "Financial statement preparation",
        "Balance sheet reconciliations",
        "Reporting accuracy review",
        "Documentation support"
      ]
    },
    {
      id: 3,
      title: "Accounts Payable & Receivable",
      icon: "💳",
      features: [
        "Vendor bill processing",
        "Invoice preparation & tracking",
        "Aging analysis",
        "Collections support"
      ]
    },
    {
      id: 4,
      title: "Financial Reporting",
      icon: "📈",
      features: [
        "Profit & Loss Statement",
        "Balance Sheet",
        "Cash Flow Statement",
        "Custom management reports"
      ]
    },
    {
      id: 5,
      title: "Cleanup & Catch-Up Accounting",
      icon: "🧹",
      features: [
        "Historical reconciliation corrections",
        "Prior period adjustments",
        "Audit-ready books",
        "Structured documentation"
      ]
    },
    {
      id: 6,
      title: "Budgeting & Forecasting",
      icon: "💰",
      features: [
        "Cash flow projections",
        "Financial modeling",
        "KPI dashboards",
        "Scenario planning"
      ]
    }
  ];

  const softwareExpertise = [
    "QuickBooks Online",
    "Zoho Books",
    "Yardi",
    "Bill.com",
    "Gusto",
    "Stripe",
    "PayPal",
    "Advanced Excel"
  ];

  const engagementModels = [
    "Hourly Support",
    "Monthly Retainer",
    "Project-Based Engagement",
    "Dedicated Offshore Team Support"
  ];

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Structured, scalable accounting support tailored to growing firms and organizations.</p>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="services-grid">
            {services.map(service => (
              <div key={service.id} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="software-expertise">
        <div className="container">
          <h2>Software Expertise</h2>
          <div className="software-grid">
            {softwareExpertise.map((software, index) => (
              <div key={index} className="software-item">
                {software}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="engagement-models">
        <div className="container">
          <h2>Engagement Models</h2>
          <div className="models-grid">
            {engagementModels.map((model, index) => (
              <div key={index} className="model-item">
                <span className="checkmark">✔</span>
                {model}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;