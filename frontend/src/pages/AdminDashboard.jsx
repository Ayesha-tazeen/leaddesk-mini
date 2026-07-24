import { useState, useEffect, useCallback } from 'react';
import api from '../api/axios';
import LeadTable from '../components/LeadTable';

const AdminDashboard = () => {
  const [leads, setLeads] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [status, setStatus] = useState({ loading: true, error: null });

  const fetchLeads = useCallback(async (search = '') => {
    try {
      setStatus({ loading: true, error: null });
      const response = await api.get(`/leads${search ? `?search=${search}` : ''}`);
      setLeads(response.data.data);
      setStatus({ loading: false, error: null });
    } catch (err) {
      setStatus({
        loading: false,
        error: err.response?.data?.message || 'Failed to load leads',
      });
    }
  }, []);

  // Initial load
  useEffect(() => {
    fetchLeads();
  }, [fetchLeads]);

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchLeads(searchTerm);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm, fetchLeads]);

  const handleStatusChange = async (id, newStatus) => {
    try {
      // Optimistic UI update
      setLeads(leads.map(lead => 
        lead._id === id ? { ...lead, status: newStatus } : lead
      ));
      
      await api.patch(`/leads/${id}`, { status: newStatus });
    } catch (err) {
      // Revert on error and show message
      fetchLeads(searchTerm);
      alert(err.response?.data?.message || 'Failed to update status');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Leads Dashboard</h1>
              <p className="mt-1 text-sm text-gray-500">
                Manage your incoming inquiries and track their status.
              </p>
            </div>
            
            <div className="w-full sm:w-96 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                className="input-field pl-10"
                placeholder="Search by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">Total Leads</dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">{leads.length}</dd>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">New Inquiries</dt>
            <dd className="mt-1 text-3xl font-semibold text-blue-600">
              {leads.filter(l => l.status === 'New').length}
            </dd>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">Closed Deals</dt>
            <dd className="mt-1 text-3xl font-semibold text-green-600">
              {leads.filter(l => l.status === 'Closed').length}
            </dd>
          </div>
        </div>

        {/* Table */}
        <LeadTable 
          leads={leads} 
          loading={status.loading && leads.length === 0} 
          error={status.error} 
          onStatusChange={handleStatusChange} 
        />
      </main>
    </div>
  );
};

export default AdminDashboard;
