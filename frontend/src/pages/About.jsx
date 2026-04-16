import { motion } from 'framer-motion';
import { Heart, Award, Users, Star } from 'lucide-react';
import AnimatedBg from '../components/AnimatedBg';

const values = [
  { icon: Heart, title: 'Passion', desc: 'Every event is crafted with genuine love and dedication.' },
  { icon: Award, title: 'Excellence', desc: 'We maintain the highest standards in everything we do.' },
  { icon: Users, title: 'Teamwork', desc: 'Our experienced team works in perfect harmony.' },
  { icon: Star, title: 'Innovation', desc: 'Creative solutions that make your event truly unique.' },
];

export default function About() {
  return (
    <div className="w-full pt-20 bg-[#0f0200] min-h-screen">
      <AnimatedBg className="py-24">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="text-center mb-16">
            <span className="text-[#e31e24] font-medium tracking-[0.2em] uppercase text-sm">Our Story</span>
            <h1 className="text-5xl font-bold mt-3 mb-6 text-white uppercase tracking-wide">About Shyam Event & Catering Services</h1>
            <p className="text-white/60 max-w-3xl mx-auto text-lg leading-relaxed">
              Founded on the belief that every celebration should be as unique as the people hosting it,
              Shyam Event & Catering Services was born out of a passion for immaculate design and flawless execution.
              Based in Indore, Madhya Pradesh, we have been crafting extraordinary moments for over 15 years.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold mb-6 text-white uppercase tracking-wide">Our Mission</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                We believe that every event is a canvas waiting to be transformed into a masterpiece.
                Our mission is to bring your vision to life with creativity, precision, and an unwavering
                commitment to excellence.
              </p>
              <p className="text-white/60 leading-relaxed">
                From intimate gatherings to grand celebrations, we pour our heart into every detail —
                from the first consultation to the final farewell — ensuring your event exceeds every expectation.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}
              className="relative">
              <div className="absolute inset-0 bg-[#e31e24]/5 blur-2xl" />
              <div className="relative bg-white/5 backdrop-blur-sm p-12 border-l-4 border-[#e31e24]">
                <div className="absolute top-4 right-4 text-6xl text-[#e31e24]/20 font-bold">"</div>
                <blockquote className="text-2xl italic text-white/90 leading-relaxed">
                  "We don't just plan events. We create memories that last a lifetime."
                </blockquote>
                <div className="mt-6 text-[#e31e24] font-medium">— Shyam Veersoni, Founder</div>
              </div>
            </motion.div>
          </div>

          <div className="mb-24">
            <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12 text-white uppercase tracking-wide">Our Core Values</motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((v, i) => (
                <motion.div key={v.title}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(227,30,36,0.15)' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}
                  className="text-center p-8 bg-white/5 border border-white/10 hover:border-[#e31e24]/50 transition-all cursor-pointer group">
                  <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-[#e31e24]/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-[#e31e24] transition-colors">
                    <v.icon className="h-8 w-8 text-[#e31e24] group-hover:text-white transition-colors" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-white uppercase tracking-wide">{v.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}
            className="bg-[#e31e24] text-white p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-10 left-1/4 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-10 right-1/4 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>
            <h2 className="text-3xl font-bold mb-8 relative z-10 uppercase tracking-wide">Our Journey in Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
              {[['500+', 'Events Planned'], ['1000+', 'Happy Clients'], ['15+', 'Years Experience'], ['50+', 'Expert Team']].map(([n, l], i) => (
                <motion.div key={l} initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}>
                  <div className="text-4xl font-bold text-white mb-2">{n}</div>
                  <div className="text-white/70 text-sm uppercase tracking-wider">{l}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </AnimatedBg>
    </div>
  );
}
