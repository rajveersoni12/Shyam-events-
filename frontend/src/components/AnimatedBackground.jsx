import { motion } from 'framer-motion';

const blobs = [
  { size: 500, left: '-5%',  top: '-10%', color: 'rgba(180,30,80,0.07)',  dur: 12, delay: 0 },
  { size: 350, left: '60%',  top: '-5%',  color: 'rgba(220,80,50,0.06)',  dur: 15, delay: 2 },
  { size: 420, left: '80%',  top: '50%',  color: 'rgba(180,30,80,0.05)',  dur: 10, delay: 4 },
  { size: 300, left: '5%',   top: '60%',  color: 'rgba(255,180,50,0.06)', dur: 13, delay: 1 },
  { size: 250, left: '40%',  top: '70%',  color: 'rgba(200,50,120,0.05)', dur: 18, delay: 3 },
  { size: 180, left: '25%',  top: '20%',  color: 'rgba(255,150,80,0.07)', dur: 9,  delay: 5 },
];

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{ width: b.size, height: b.size, left: b.left, top: b.top, background: b.color }}
          animate={{ x: [0, 40, -25, 15, 0], y: [0, -30, 20, -10, 0], scale: [1, 1.12, 0.93, 1.05, 1] }}
          transition={{ duration: b.dur, delay: b.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
      <motion.div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, rgba(180,30,80,0.03) 0%, transparent 50%, rgba(255,150,50,0.03) 100%)' }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            left: `${10 + i * 8}%`,
            top: `${15 + ((i * 37) % 70)}%`,
            background: i % 2 === 0 ? 'rgba(180,30,80,0.25)' : 'rgba(255,160,50,0.2)',
          }}
          animate={{ y: [0, -18, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 4 + i * 0.5, delay: i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}