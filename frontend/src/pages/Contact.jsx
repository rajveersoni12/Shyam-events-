import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import AnimatedBg from '../components/AnimatedBg';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('http://localhost:8080/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
    } catch {}
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="w-full pt-20 bg-[#0f0200] min-h-screen">
      <AnimatedBg className="py-24">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="text-center mb-16">
            <span className="text-[#e31e24] font-medium tracking-[0.2em] uppercase text-sm">Get In Touch</span>
            <h1 className="text-5xl font-bold mt-3 mb-6 text-white uppercase tracking-wide">Contact Us</h1>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">Ready to start planning your dream event? We'd love to hear from you.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <h2 className="text-3xl font-bold mb-8 text-white uppercase tracking-wide">Get in Touch</h2>
              <ul className="space-y-6 mb-10">
                {[
                  { icon: MapPin, title: 'Our Office', info: '187, Vyanktesh Nagar Ext.\nIndore, Madhya Pradesh' },
                  { icon: Phone, title: 'Phone', info: '+91 9200002023' },
                  { icon: Mail, title: 'Email', info: 'Raj.veersoni037@gmail.com' },
                  { icon: Clock, title: 'Working Hours', info: 'Mon–Sat: 9:00 AM – 7:00 PM' },
                ].map(({ icon: Icon, title, info }, i) => (
                  <motion.li key={title}
                    initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-start gap-4 group">
                    <motion.div whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 bg-[#e31e24]/10 flex items-center justify-center shrink-0 group-hover:bg-[#e31e24] transition-colors">
                      <Icon className="h-5 w-5 text-[#e31e24] group-hover:text-white transition-colors" />
                    </motion.div>
                    <div>
                      <h3 className="font-bold mb-1 text-white uppercase tracking-wider text-sm">{title}</h3>
                      <p className="text-white/60 text-sm whitespace-pre-line">{info}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
              <div className="h-64 border border-white/10 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117563.50!2d75.7849!3d22.7196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd0f9e8f94e7%3A0xc3ce9e6e6fa4a5a7!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1709669460596!5m2!1sen!2sin"
                  width="100%" height="100%" style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(0.8)' }} allowFullScreen loading="lazy" />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'spring' }}
                  className="flex flex-col items-center justify-center h-full text-center p-12 bg-white/5 border border-white/10">
                  <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: 2, duration: 0.5 }}>
                    <CheckCircle className="h-20 w-20 text-[#e31e24] mb-6" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 text-white uppercase tracking-wide">Message Sent!</h3>
                  <p className="text-white/60 mb-8">We'll get back to you within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="bg-[#e31e24] text-white px-8 py-3 hover:bg-[#c01a1f] transition-colors font-bold uppercase tracking-wider">
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 p-10 space-y-6">
                  <h2 className="text-2xl font-bold mb-2 text-white uppercase tracking-wide">Send a Message</h2>
                  {[
                    { label: 'Full Name *', name: 'name', type: 'text', placeholder: 'Your name' },
                    { label: 'Email Address *', name: 'email', type: 'email', placeholder: 'your@email.com' },
                    { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: '+91 XXXXX XXXXX' },
                    { label: 'Subject *', name: 'subject', type: 'text', placeholder: 'How can we help?' },
                  ].map(f => (
                    <div key={f.name}>
                      <label className="block text-sm font-medium text-white/70 mb-2 uppercase tracking-wider">{f.label}</label>
                      <input type={f.type} name={f.name} value={form[f.name]} onChange={handleChange}
                        placeholder={f.placeholder} required={f.label.includes('*')}
                        className="w-full border border-white/10 bg-white/5 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#e31e24] focus:ring-1 focus:ring-[#e31e24]/30 transition-all placeholder-white/30" />
                    </div>
                  ))}
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2 uppercase tracking-wider">Message *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={5}
                      placeholder="Tell us about your event..." required
                      className="w-full border border-white/10 bg-white/5 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#e31e24] focus:ring-1 focus:ring-[#e31e24]/30 transition-all resize-none placeholder-white/30" />
                  </div>
                  <motion.button type="submit" disabled={loading}
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#e31e24] text-white py-4 text-lg font-bold uppercase tracking-widest hover:bg-[#c01a1f] transition-colors disabled:opacity-60">
                    {loading ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </AnimatedBg>
    </div>
  );
}
