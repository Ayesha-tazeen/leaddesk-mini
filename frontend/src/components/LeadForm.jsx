import { useState } from 'react';
import api from '../api/axios';

const BUDGET_OPTIONS = [
  'Under $1,000',
  '$1,000 - $5,000',
  '$5,000 - $10,000',
  '$10,000 - $50,000',
  '$50,000+',
];

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    message: '',
  });

  const [status, setStatus] = useState({
    loading: false,
    error: null,
    success: false,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear errors when typing
    if (status.error) setStatus({ ...status, error: null });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: false });

    // Client-side validation
    if (!formData.name || !formData.email || !formData.budget || !formData.message) {
      setStatus({
        loading: false,
        error: 'Please fill in all fields',
        success: false,
      });
      return;
    }

    try {
      await api.post('/leads', formData);
      setStatus({
        loading: false,
        error: null,
        success: true,
      });
      setFormData({ name: '', email: '', budget: '', message: '' });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setStatus((prev) => ({ ...prev, success: false }));
      }, 5000);
    } catch (err) {
      setStatus({
        loading: false,
        error: err.response?.data?.message || 'Something went wrong. Please try again.',
        success: false,
      });
    }
  };

  return (
    <div className="glass-card p-8 animate-fade-in w-full max-w-lg mx-auto">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Ready to scale your business?
      </h3>

      {status.success && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm animate-fade-in">
          ✅ Thank you! Your message has been received. We'll be in touch soon.
        </div>
      )}

      {status.error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm animate-fade-in">
          ❌ {status.error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input-field"
            placeholder="John Doe"
            disabled={status.loading}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
            placeholder="john@example.com"
            disabled={status.loading}
          />
        </div>

        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
            Estimated Budget
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="input-field"
            disabled={status.loading}
          >
            <option value="" disabled>
              Select a budget range
            </option>
            {BUDGET_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Project Details
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="input-field resize-none"
            placeholder="Tell us about your project goals..."
            disabled={status.loading}
          />
        </div>

        <button
          type="submit"
          disabled={status.loading}
          className="btn-primary w-full"
        >
          {status.loading ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            'Get Started'
          )}
        </button>
      </form>
    </div>
  );
};

export default LeadForm;
