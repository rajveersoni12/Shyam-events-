import { useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, CheckCircle } from 'lucide-react';
import AnimatedBg from '../components/AnimatedBg';

const eventTypes = ['Wedding', 'Corporate Event', 'Birthday Party', 'Catering Only', 'Anniversary', 'Other'];
const guestRanges = ['Below 50', '50–100', '100–200', '200–500', '500+'];

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ clientName: '', email: '', phone: '', eventType: '', eventDate: '', guestCount: '', venue: '', budget: '', notes: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('http://localhost:8080/api/bookings', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...form, status: 'pending' }) });
    } catch {}
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <AnimatedBg className="w-full pt-20 min-h-screen flex items-center justify-center bg-[#0f0200]">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'spring', duration: 0.6 }}
          className="text-center p-16 bg-white/5 border border-white/10 max-w-lg mx-6">
          <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: 2, duration: 0.5 }}>
            <CheckCircle className="h-20 w-20 text-[#e31e24] mx-auto mb-6" />
          </motion.div>
          <h2 className="text-3xl font-bold mb-4 text-white uppercase tracking-wide">Booking Request Received!</h2>
          <p className="text-white/60 leading-relaxed mb-8">Thank you for choosing Shyam Events. We'll contact you within 24 hours to confirm your booking.</p>
          <button onClick={() => setSubmitted(false)} className="bg-[#e31e24] text-white px-8 py-3 hover:bg-[#c01a1f] transition-colors font-bold uppercase tracking-wider">
            Submit Another Request
          </button>
        </motion.div>
      </AnimatedBg>
    );
  }

  return (
    <div className="w-full pt-20 bg-[#0f0200] min-h-screen">
      <AnimatedBg className="py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="text-center mb-12">
            <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="inline-block">
              <CalendarDays className="h-14 w-14 text-[#e31e24] mx-auto mb-4" />
            </motion.div>
            <span className="text-[#e31e24] font-medium tracking-[0.2em] uppercase text-sm">Get Started</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-white uppercase tracking-wide">Book a Consultation</h1>
            <p className="text-white/60 text-lg">Fill in your details and we'll get back to you within 24 hours.</p>
          </motion.div>

          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 border border-white/10 p-10 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: 'Full Name *', name: 'clientName', type: 'text', placeholder: 'Your full name' },
                { label: 'Email Address *', name: 'email', type: 'email', placeholder: 'your@email.com' },
                { label: 'Phone Number *', name: 'phone', type: 'tel', placeholder: '+91 XXXXX XXXXX' },
                { label: 'Event Date *', name: 'eventDate', type: 'date' },
                { label: 'Preferred Venue', name: 'venue', type: 'text', placeholder: 'Venue name or TBD' },
                { label: 'Estimated Budget (₹)', name: 'budget', type: 'text', placeholder: 'e.g. ₹1,00,000' },
              ].map(f => (
                <div key={f.name}>
                  <label className="block text-sm font-medium text-white/70 mb-2 uppercase tracking-wider">{f.label}</label>
                  <input type={f.type} name={f.name} value={form[f.name]} onChange={handleChange}
                    placeholder={f.placeholder} required={f.label.includes('*')}
                    className="w-full border border-white/10 bg-white/5 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#e31e24] focus:ring-1 focus:ring-[#e31e24]/30 transition-all placeholder-white/30" />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2 uppercase tracking-wider">Event Type *</label>
                <select name="eventType" value={form.eventType} onChange={handleChange} required
                  className="w-full border border-white/10 bg-[#1a0300] text-white px-4 py-3 text-sm focus:outline-none focus:border-[#e31e24] focus:ring-1 focus:ring-[#e31e24]/30 transition-all">
                  <option value="" className="bg-[#1a0300]">Select event type</option>
                  {eventTypes.map(t => <option key={t} value={t} className="bg-[#1a0300]">{t}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2 uppercase tracking-wider">Expected Guests *</label>
                <select name="guestCount" value={form.guestCount} onChange={handleChange} required
                  className="w-full border border-white/10 bg-[#1a0300] text-white px-4 py-3 text-sm focus:outline-none focus:border-[#e31e24] focus:ring-1 focus:ring-[#e31e24]/30 transition-all">
                  <option value="" className="bg-[#1a0300]">Select guest range</option>
                  {guestRanges.map(g => <option key={g} value={g} className="bg-[#1a0300]">{g}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-white/70 mb-2 uppercase tracking-wider">Additional Notes</label>
              <textarea name="notes" value={form.notes} onChange={handleChange} rows={4}
                placeholder="Tell us more about your event vision..."
                className="w-full border border-white/10 bg-white/5 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#e31e24] focus:ring-1 focus:ring-[#e31e24]/30 transition-all resize-none placeholder-white/30" />
            </div>
            <motion.button type="submit" disabled={loading}
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              className="w-full bg-[#e31e24] text-white py-4 text-lg font-bold uppercase tracking-widest hover:bg-[#c01a1f] transition-colors disabled:opacity-60">
              {loading ? 'Submitting...' : 'Submit Booking Request'}
            </motion.button>
          </motion.form>
        </div>
      </AnimatedBg>
    </div>
  );
}
