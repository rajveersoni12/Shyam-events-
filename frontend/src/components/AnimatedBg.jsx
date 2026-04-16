export default function AnimatedBg({ children, className = '' }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-red-700/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-red-900/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-red-700/8 rounded-full blur-3xl animate-pulse delay-2000" />
        <div className="absolute top-10 right-1/4 w-40 h-40 bg-red-900/8 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-1/4 left-10 w-32 h-32 bg-red-700/10 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '8s', animationDelay: '1s' }} />
      </div>
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(circle, #e31e24 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
