import React, { useState } from 'react';
import { BookingStatus, BookingFormData } from '../types';
import { Calendar, CheckCircle, AlertCircle } from 'lucide-react';

interface BookingProps {
    preselectedPackage?: string;
}

const Booking: React.FC<BookingProps> = ({ preselectedPackage }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    date: '',
    packageId: preselectedPackage || 'essential',
    notes: ''
  });
  const [status, setStatus] = useState<BookingStatus>(BookingStatus.IDLE);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(BookingStatus.SUBMITTING);
    
    // Simulate API call
    setTimeout(() => {
      setStatus(BookingStatus.SUCCESS);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (status === BookingStatus.SUCCESS) {
    return (
      <div className="max-w-2xl mx-auto py-20 px-4 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-green-600" size={32} />
        </div>
        <h2 className="text-3xl font-bold text-ph-dark mb-4">Request Received!</h2>
        <p className="text-lg text-gray-600 mb-8">
            Thanks {formData.name}, I've received your booking request for {formData.date}. 
            I'll review my calendar and send a confirmation email to {formData.email} within 24 hours.
        </p>
        <button 
            onClick={() => setStatus(BookingStatus.IDLE)}
            className="text-ph-orange font-bold hover:underline"
        >
            Book another session
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-ph-dark p-6 sm:p-10 text-white">
            <h2 className="text-2xl font-bold flex items-center gap-3">
                <Calendar className="text-ph-orange" />
                Book Your Session
            </h2>
            <p className="text-gray-400 mt-2">
                Secure your date. No payment required until confirmation.
            </p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                    <input 
                        type="text" 
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-ph-blue transition-colors"
                        placeholder="Jane Doe"
                    />
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                    <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-ph-blue transition-colors"
                        placeholder="jane@example.com"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Preferred Date</label>
                    <input 
                        type="date" 
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-ph-blue transition-colors"
                    />
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Package</label>
                    <select 
                        name="packageId"
                        value={formData.packageId}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-ph-blue transition-colors bg-white"
                    >
                        <option value="essential">The Essential ($500)</option>
                        <option value="storyteller">The Storyteller ($1200)</option>
                        <option value="legacy">The Legacy ($2500)</option>
                        <option value="custom">Custom Quote</option>
                    </select>
                </div>
            </div>

            <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Project Details & Notes</label>
                <textarea 
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-ph-blue transition-colors"
                    placeholder="Tell me a bit about what you're looking for! Location ideas, vibe, etc."
                ></textarea>
            </div>

            <div className="pt-4">
                <button 
                    type="submit"
                    disabled={status === BookingStatus.SUBMITTING}
                    className="w-full sm:w-auto bg-ph-orange text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {status === BookingStatus.SUBMITTING ? 'Submitting...' : 'Send Booking Request'}
                </button>
            </div>
            
            <div className="bg-blue-50 text-blue-800 text-sm p-4 rounded-lg flex items-start gap-3">
                <AlertCircle size={18} className="mt-0.5 flex-shrink-0" />
                <p>
                    <strong>Cancellation Policy:</strong> Deposits are fully refundable up to 14 days before the shoot. Weather reschedules are free of charge.
                </p>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;
