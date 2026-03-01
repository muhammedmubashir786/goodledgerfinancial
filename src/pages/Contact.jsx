import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    serviceRequired: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.serviceRequired) newErrors.serviceRequired = 'Service required is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Send data to backend API
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          service: formData.serviceRequired,
          message: formData.message,
        }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          company: '',
          email: '',
          serviceRequired: '',
          message: ''
        });
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        throw new Error(result.message || 'Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setErrors(prev => ({ ...prev, submit: error.message || 'There was an error sending your message. Please try again or contact us directly at goodledgerfinancialpartners@gmail.com' }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    'Full-cycle bookkeeping',
    'Month-end & year-end close',
    'Accounts Payable & Receivable',
    'Financial reporting',
    'Cleanup & catch-up accounting',
    'Budgeting & cash flow forecasting',
    'Other'
  ];

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1>Let's Connect</h1>
          <p>We welcome discussions to explore how Good Ledger Financial Partners can support your accounting operations.</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-team">
                <h3>Offshore Accounting Support Team</h3>
                <p>CMA (US) Qualified Professionals</p>
              </div>
              
              <div className="contact-method">
                <h3>📧 Email</h3>
                <p><a href="mailto:goodledgerfinancialpartners@gmail.com">goodledgerfinancialpartners@gmail.com</a></p>
              </div>
              
              <div className="contact-method">
                <h3>🔗 LinkedIn</h3>
                <p><a href="https://www.linkedin.com/company/good-ledger-financial-partners/" target="_blank" rel="noopener noreferrer">linkedin.com/company/good-ledger-financial-partners/</a></p>
              </div>
            </div>

            <div className="contact-form-container">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  {errors.name && <p className="error-message">{errors.name}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company *</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />
                  {errors.company && <p className="error-message">{errors.company}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && <p className="error-message">{errors.email}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="serviceRequired">Service Required *</label>
                  <select
                    id="serviceRequired"
                    name="serviceRequired"
                    value={formData.serviceRequired}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                  {errors.serviceRequired && <p className="error-message">{errors.serviceRequired}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  {errors.message && <p className="error-message">{errors.message}</p>}
                </div>

                {submitSuccess && (
                  <div className="success-message">
                    Message sent successfully
                  </div>
                )}
                {errors.submit && (
                  <div className="error-message">
                    {errors.submit}
                  </div>
                )}
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;