import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Camera } from 'lucide-react';
import wedding1 from '../assets/gallery/wedding1.jpg';

const categories = ['All', 'Wedding', 'Corporate', 'Birthday', 'Catering', 'Decoration'];

const photos = [
  { id: 1,  category: 'Wedding',    title: 'Royal Wedding Ceremony',     subtitle: 'Indore, 2024',   image: wedding1},
  { id: 2,  category: 'Corporate',  title: 'Annual Conference 2024',      subtitle: 'Hotel Sayaji',  color: 'from-slate-900 via-slate-800 to-slate-700' },
  { id: 3,  category: 'Birthday',   title: 'Grand Birthday Celebration',  subtitle: '200 Guests',    color: 'from-red-800 via-orange-900 to-red-900' },
  { id: 4,  category: 'Catering',   title: 'Royal Feast Setup',           subtitle: 'Live Counters', color: 'from-stone-900 via-stone-800 to-zinc-800' },
  { id: 5,  category: 'Wedding',    title: 'Mandap Decoration',           subtitle: 'Floral Theme',  color: 'from-red-900 via-red-700 to-rose-900' },
  { id: 6,  category: 'Decoration', title: 'Floral Stage Design',         subtitle: 'Premium Decor', color: 'from-zinc-900 via-zinc-800 to-slate-900' },
  { id: 7,  category: 'Corporate',  title: 'Product Launch Event',        subtitle: '500 Attendees', color: 'from-neutral-900 via-neutral-800 to-stone-900' },
  { id: 8,  category: 'Birthday',   title: 'Kids Theme Party',            subtitle: 'Cartoon Theme', color: 'from-red-800 via-red-900 to-stone-900' },
  { id: 9,  category: 'Catering',   title: 'Live Food Counters',          subtitle: 'Multi-cuisine', color: 'from-amber-900 via-stone-900 to-red-900' },
  { id: 10, category: 'Wedding',    title: 'Reception Banquet Hall',      subtitle: '1000 Guests',   color: 'from-red-900 via-red-800 to-zinc-900' },
  { id: 11, category: 'Decoration', title: 'Entrance Arch Decor',         subtitle: 'Balloon Theme', color: 'from-slate-900 via-zinc-900 to-neutral-900' },
  { id: 12, category: 'Birthday',   title: 'Surprise Party Setup',        subtitle: 'Rooftop Venue', color: 'from-red-900 via-stone-900 to-red-800' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = activeCategory === 'All'
    ? photos
    : photos.filter(p => p.category === activeCategory);

  return (
    <div className="w-full pt-20 min-h-screen bg-[#0f0200] relative overflow-hidden">

      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-red-700/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -right-24 w-96 h-96 bg-red-900/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-red-700/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: 'radial-gradient(circle, #e31e24 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      </div>

      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6">

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="text-center mb-12">
            <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 5 }}
              className="inline-block mb-4">
              <Camera className="h-12 w-12 text-[#e31e24] mx-auto" />
            </motion.div>
            <span className="text-[#e31e24] font-medium tracking-[0.2em] uppercase text-sm block mb-3">Our Portfolio</span>
            <h1 className="text-5xl font-bold mb-5 text-white uppercase tracking-wide">Event Gallery</h1>
            <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
              A glimpse into the magical moments we've crafted across Indore and Madhya Pradesh.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-4">
            {categories.map(cat => (
              <motion.button key={cat} onClick={() => setActiveCategory(cat)}
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className={`px-6 py-2.5 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#e31e24] text-white scale-105'
                    : 'bg-white/5 border border-white/10 text-white/70 hover:border-[#e31e24]/50 hover:text-[#e31e24]'
                }`}>
                {cat}
              </motion.button>
            ))}
          </motion.div>

          <motion.p key={activeCategory} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-center text-sm text-white/40 mb-10">
            Showing <strong className="text-white/70">{filtered.length}</strong> {filtered.length === 1 ? 'photo' : 'photos'}
            {activeCategory !== 'All' ? ` · ${activeCategory}` : ''}
          </motion.p>

          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((photo, i) => (
                <motion.div key={photo.id} layout
                  initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }} transition={{ duration: 0.35, delay: i * 0.04 }}
                  onClick={() => setSelected(photo)}
                  className="relative aspect-square cursor-pointer group overflow-hidden border border-white/10 hover:border-[#e31e24]/50 hover:shadow-xl hover:shadow-[#e31e24]/10 transition-all duration-300">
                 <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                 />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                    <ZoomIn className="h-9 w-9 text-white opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-xs font-bold leading-tight uppercase tracking-wide">{photo.title}</p>
                    <p className="text-white/60 text-xs mt-0.5">{photo.subtitle}</p>
                  </div>
                  <div className="absolute top-2 left-2 bg-[#e31e24]/80 text-white text-[10px] px-2 py-0.5 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {photo.category}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

         {/* <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 p-8 bg-white/5 border border-white/10 text-center">
            <Camera className="h-8 w-8 text-[#e31e24] mx-auto mb-3" />
            <h3 className="text-xl font-bold mb-2 text-white uppercase tracking-wide">Add Your Real Event Photos</h3>
            <p className="text-white/50 text-sm max-w-xl mx-auto">
              Put your photos in{' '}
              <code className="bg-[#e31e24]/10 text-[#e31e24] px-2 py-0.5 text-xs">
                frontend/src/assets/gallery/
              </code>{' '}
              and import them in this file.
            </p>
          </motion.div>
          */}
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6"
            onClick={() => setSelected(null)}>
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }} transition={{ type: 'spring', stiffness: 300, damping: 26 }}
              className="relative max-w-2xl w-full" onClick={e => e.stopPropagation()}>
              <button onClick={() => setSelected(null)}
                className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors">
                <X className="h-9 w-9" />
              </button>
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full aspect-video object-cover"
               />
              <div className="bg-[#1a0300] border border-white/10 p-5 mt-1 flex items-start justify-between">
                <div>
                  <p className="text-white text-xl font-bold uppercase tracking-wide">{selected.title}</p>
                  <p className="text-white/60 text-sm mt-1">{selected.subtitle}</p>
                </div>
                <span className="bg-[#e31e24] text-white text-xs px-3 py-1 mt-1 shrink-0 uppercase tracking-wider">
                  {selected.category}
                </span>
              </div>
              <p className="text-white/30 text-xs text-center mt-3">Click outside to close</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
