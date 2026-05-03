import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center mb-2">
              <Image 
                src="/images/primary-logo.png" 
                alt="Gotcha Plumbing & Gas" 
                width={200} 
                height={200} 
                className="w-40 h-auto object-contain drop-shadow-2xl" 
              />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Your trusted 24/7 emergency plumbing and gas services across the Greater Adelaide region. Professional, prompt, and reliable.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-brand-orange transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-brand-orange transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg tracking-tight">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Services', 'About Us', 'Contact', 'Get a Quote'].map((link) => (
                <li key={link}>
                  <Link
                    href={link === 'Home' ? '/' : `/${link.toLowerCase().replace(/ /g, '-')}`}
                    className="text-sm hover:text-brand-orange transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange/50 group-hover:bg-brand-orange transition-colors" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg tracking-tight">Our Services</h3>
            <ul className="space-y-3">
              {[
                'Emergency Plumbing',
                'Gas Fitting & Repairs',
                'Blocked Drains',
                'Hot Water Systems',
                'General Maintenance'
              ].map((service) => (
                <li key={service} className="text-sm text-slate-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue transition-colors" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg tracking-tight">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:0428592610" className="flex items-start gap-3 hover:text-brand-orange transition-colors group">
                  <div className="mt-1 bg-slate-800 p-2 rounded-lg group-hover:bg-brand-orange/20 transition-colors">
                    <Phone className="w-4 h-4 text-brand-orange" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium mb-0.5">24/7 Emergency Line</p>
                    <p className="text-white font-bold">0428 592 610</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:gotchaplumbingandgas@gmail.com" className="flex items-start gap-3 hover:text-brand-orange transition-colors group">
                  <div className="mt-1 bg-slate-800 p-2 rounded-lg group-hover:bg-brand-orange/20 transition-colors">
                    <Mail className="w-4 h-4 text-brand-orange" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium mb-0.5">Email Us</p>
                    <p className="text-sm text-slate-300">gotchaplumbingandgas@gmail.com</p>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-slate-800 p-2 rounded-lg">
                    <MapPin className="w-4 h-4 text-brand-orange" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium mb-0.5">Service Area</p>
                    <p className="text-sm text-slate-300">Greater Adelaide Region<br />South Australia</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Gotcha Plumbing & Gas. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
