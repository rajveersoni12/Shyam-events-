import { motion }  from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedBg from "../components/AnimatedBg";
import { ArrowRight, Star, Heart, Utensils, Building2 } from 'lucide-react';
import eventHero from '../assets/homeimage.jpg';

const services = [
   { icon: Heart, title: 'Wedding Planning', desc: 'Crafting dream weddings with impeccable attention to every detail.' },
  { icon: Building2, title: 'Corporate Events', desc: 'Professional corporate gatherings that impress and inspire.' },
   { icon: Star, title: 'Birthday Parties', desc: 'Memorable celebrations tailored to your unique style.' },
  { icon: Utensils, title: 'Catering Services', desc: 'Exquisite cuisine crafted by our expert culinary team.' },
];

const testimonials = [
  { name: 'Priya & Rahul Sharma', text: 'Shyam Events made our wedding absolutely magical. Every detail was perfect!', rating: 5 },
  { name: 'Anita Patel', text: 'Our corporate event was flawlessly executed. Highly professional team!', rating: 5 },
  { name: 'Vikram Mehta', text: 'The catering was outstanding. Our guests loved every dish!', rating: 5 },
];

export default function Home() {
  return (
    <div className="w-full bg-[#0f0200]">
      {/* Hero */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-start overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={eventHero} alt="Outdoor Event" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0f0200]" />
        </div>
        <div className="absolute inset-0 z-1 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="absolute w-2 h-2 bg-[#e31e24]/40 rounded-full animate-ping"
              style={{ left: `${10 + i * 12}%`, top: `${20 + (i % 3) * 25}%`, animationDelay: `${i * 0.4}s`, animationDuration: '3s' }} />
          ))}
        </div>
         <div className="container mx-auto px-6 relative z-10 text-left max-w-4xl pt-20">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-[#e31e24] font-medium tracking-[0.2em] uppercase text-sm mb-6 block">
            Welcome to Shyam Event & Catering Services
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight uppercase tracking-wide drop-shadow-lg">
            Unforgettable Moments,<br /><span className="text-[#e31e24]">Flawlessly Crafted.</span>
          </motion.h1>
           <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/75 mb-10 max-w-2xl leading-relaxed drop-shadow">
            From intimate gatherings to grand celebrations, we transform your vision into an extraordinary reality.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start gap-4">
            <Link to="/booking" className="bg-[#e31e24] text-white px-8 py-4 font-bold text-lg uppercase tracking-wider hover:bg-[#c01a1f] transition-colors w-full sm:w-auto text-center">
              Plan Your Event
                </Link>
            <Link to="/services" className="border border-white/40 text-white px-8 py-4 font-bold text-lg uppercase tracking-wider hover:bg-white/10 transition-colors w-full sm:w-auto text-center backdrop-blur-sm">
              Explore Services
            </Link>
          </motion.div>
        </div>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-3 bg-white/60 rounded-full animate-bounce" />
          </div>
           </motion.div>
      </section>


       <AnimatedBg className="py-24 bg-[#0f0200]">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
            className="text-center mb-16">
            <span className="text-[#e31e24] font-medium tracking-[0.2em] uppercase text-sm">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-white uppercase tracking-wide">Our Services</h2>
            <p className="text-white/60 max-w-2xl mx-auto">Comprehensive event management solutions crafted with luxury and precision.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(227,30,36,0.15)' }}
                transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}
                className="bg-white/5 p-8 border border-white/10 hover:border-[#e31e24]/50 transition-all group cursor-pointer">
                <div className="w-14 h-14 bg-[#e31e24]/10 flex items-center justify-center mb-6 group-hover:bg-[#e31e24] group-hover:scale-110 transition-all duration-300">
                  <s.icon className="h-7 w-7 text-[#e31e24] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white uppercase tracking-wide">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{s.desc}</p>
                <Link to="/services" className="text-[#e31e24] text-sm font-bold uppercase tracking-wider flex items-center gap-1 hover:gap-3 transition-all">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
                </div>
        </div>
      </AnimatedBg>


  <section className="py-20 bg-[#e31e24] text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-10 left-1/4 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 right-1/4 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[['500+', 'Events Planned'], ['1000+', 'Happy Clients'], ['15+', 'Years Experience'], ['50+', 'Expert Team']].map(([num, label], i) => (
              <motion.div key={label} initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{num}</div>
                <div className="text-white/80 text-sm uppercase tracking-wider">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

        
        <AnimatedBg className="py-24 bg-[#0f0200]">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
            className="text-center mb-16">
            <span className="text-[#e31e24] font-medium tracking-[0.2em] uppercase text-sm">Client Stories</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 text-white uppercase tracking-wide">What Our Clients Say</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}
                className="bg-white/5 p-8 border border-white/10 hover:border-[#e31e24]/40 hover:shadow-xl hover:shadow-[#e31e24]/5 transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} className="h-4 w-4 fill-[#e31e24] text-[#e31e24]" />)}
                </div>
                <p className="text-white/70 italic mb-6 leading-relaxed">"{t.text}"</p>
                <div className="font-bold text-white uppercase tracking-wider text-sm">{t.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedBg>


  <section className="py-24 bg-[#0f0200] border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#e31e24]/5 rounded-full blur-3xl animate-pulse" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white uppercase tracking-wide">Ready to Create Something Extraordinary?</h2>
            <p className="text-white/60 mb-10 max-w-2xl mx-auto text-lg">Let us turn your vision into an unforgettable experience.</p>
            <Link to="/booking" className="bg-[#e31e24] text-white px-10 py-4 font-bold text-lg uppercase tracking-widest hover:bg-[#c01a1f] transition-all inline-block hover:-translate-y-1">
              Start Planning Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
