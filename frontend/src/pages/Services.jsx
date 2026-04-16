import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Building2, Star, Utensils, Music, Camera, ArrowRight } from 'lucide-react';
import AnimatedBg from '../components/AnimatedBg';

const services = [
  { icon: Heart, title: 'Wedding Planning', price: 'Starting ₹50,000', desc: 'Your dream wedding deserves nothing but perfection.', features: ['Venue Selection & Decor', 'Catering Coordination', 'Guest Management', 'Photography & Videography', 'Entertainment Booking', 'Day-of Coordination'] },
  { icon: Building2, title: 'Corporate Events', price: 'Starting ₹30,000', desc: 'Professional corporate events that leave lasting impressions.', features: ['Conference Planning', 'Team Building Activities', 'Product Launch Events', 'Award Ceremonies', 'Corporate Dinners', 'AV & Tech Setup'] },
  { icon: Star, title: 'Birthday Parties', price: 'Starting ₹15,000', desc: 'Make every birthday unforgettable with creative themes.', features: ['Theme Decoration', 'Custom Cake Arrangement', 'Entertainment & Games', 'Catering Services', 'Photography', 'Return Gifts'] },
  { icon: Utensils, title: 'Catering Services', price: 'Starting ₹500/plate', desc: 'Exquisite cuisine crafted by our expert chefs.', features: ['Traditional Indian Cuisine', 'Continental Dishes', 'Live Counters', 'Dessert Stations', 'Beverage Service', 'Professional Staff'] },
  { icon: Music, title: 'Entertainment', price: 'Starting ₹20,000', desc: 'From DJs to live bands, world-class entertainment.', features: ['Live Bands & DJs', 'Cultural Performances', 'Dance Troupes', 'Photo Booths', 'Lighting & Sound', 'Anchoring Services'] },
  { icon: Camera, title: 'Photography & Video', price: 'Starting ₹25,000', desc: 'Capture every precious moment professionally.', features: ['Professional Photography', 'Cinematic Videography', 'Drone Coverage', 'Same-Day Edits', 'Photo Albums', 'Digital Gallery'] },
];

export default function Services() {
  return (
    <div className="w-full pt-20 bg-[#0f0200] min-h-screen">
      <AnimatedBg className="py-24">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="text-center mb-16">
            <span className="text-[#e31e24] font-medium tracking-[0.2em] uppercase text-sm">What We Offer</span>
            <h1 className="text-5xl font-bold mt-3 mb-6 text-white uppercase tracking-wide">Our Services</h1>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">Comprehensive event management solutions designed to create extraordinary experiences.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div key={s.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, boxShadow: '0 25px 50px rgba(227,30,36,0.15)' }}
                transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}
                className="bg-white/5 border border-white/10 hover:border-[#e31e24]/50 transition-all group p-8 cursor-pointer">
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}
                  className="w-14 h-14 bg-[#e31e24]/10 flex items-center justify-center mb-6 group-hover:bg-[#e31e24] transition-colors">
                  <s.icon className="h-7 w-7 text-[#e31e24] group-hover:text-white transition-colors" />
                </motion.div>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide">{s.title}</h3>
                  <span className="text-[#e31e24] text-sm font-bold ml-2 shrink-0 bg-[#e31e24]/10 px-2 py-1 uppercase tracking-wider">{s.price}</span>
                </div>
                <p className="text-white/50 text-sm leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-2 mb-6">
                  {s.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/60">
                      <motion.div whileInView={{ scale: [0, 1.2, 1] }} transition={{ duration: 0.4 }}
                        className="w-1.5 h-1.5 bg-[#e31e24] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/booking" className="flex items-center gap-1 text-[#e31e24] font-bold text-sm uppercase tracking-wider hover:gap-3 transition-all">
                  Book This Service <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}
            className="mt-20 bg-[#e31e24] text-white p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-10 left-1/3 w-60 h-60 bg-white/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-10 right-1/3 w-60 h-60 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>
            <h2 className="text-3xl font-bold mb-4 relative z-10 uppercase tracking-wide">Ready to Plan Your Event?</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto relative z-10">Contact us today for a free consultation and let's bring your vision to life.</p>
            <Link to="/booking" className="relative z-10 bg-white text-[#e31e24] px-10 py-4 font-bold text-lg uppercase tracking-widest hover:bg-white/90 transition-all inline-block hover:-translate-y-1">
              Get a Free Quote
            </Link>
          </motion.div>
        </div>
      </AnimatedBg>
    </div>
  );
}
