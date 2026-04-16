import { Link } from 'react-router-dom';
import { CalendarHeart, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <CalendarHeart className="h-6 w-6 text-primary" />
              <span className="font-serif text-2xl font-bold">Shyam Events<span className="text-primary">.</span></span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Curating unforgettable moments through meticulous planning, visionary design, and flawless execution.
            </p>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {['/', '/about', '/services', '/booking', '/contact'].map((href, i) => (
                <li key={href}><Link to={href} className="hover:text-primary transition-colors">
                  {['Home', 'About', 'Services', 'Book Now', 'Contact'][i]}
                </Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {['Wedding Planning', 'Corporate Events', 'Birthday Parties', 'Catering Services', 'Decoration'].map(s => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-gray-400">187, Vyanktesh Nagar Ext.<br />Indore, Madhya Pradesh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-gray-400">+91 9200002023</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-gray-400">Raj.veersoni037@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Shyam Event & Catering Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
}