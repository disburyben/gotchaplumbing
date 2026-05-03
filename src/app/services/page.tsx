import { Droplets, Flame, Wrench, ArrowRight, CheckCircle2, Clock } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Our Services | Gotcha Plumbing & Gas",
  description: "Comprehensive plumbing and gas fitting services across Adelaide. 24/7 emergency response available.",
};

export default function Services() {
  const services = [
    {
      id: "emergency",
      title: "24/7 Emergency Plumbing",
      icon: Clock, // We'll use a placeholder or import
      desc: "Plumbing emergencies don't wait for business hours. Burst pipes, overflowing toilets, and severe leaks need immediate attention to prevent property damage.",
      features: ["Rapid 1-hour response", "Available 24/7/365", "No hidden after-hours fees", "Temporary and permanent fixes"],
      color: "from-red-500/20 to-orange-500/20",
      iconColor: "text-red-500"
    },
    {
      id: "general",
      title: "General Plumbing Maintenance",
      icon: Droplets,
      desc: "From a dripping tap to a running toilet, minor plumbing issues can waste water and increase bills. We handle all routine plumbing repairs efficiently.",
      features: ["Tap repairs and replacement", "Toilet repairs", "Water pressure issues", "Pipe repairs"],
      color: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-500"
    },
    {
      id: "gas",
      title: "Gas Fitting & Repairs",
      icon: Flame,
      desc: "Safety is paramount when it comes to gas. Our fully licensed gas fitters handle installations, leak detection, and appliance servicing.",
      features: ["Gas leak detection", "Appliance installation", "Gas hot water systems", "Compliance certificates"],
      color: "from-orange-500/20 to-amber-500/20",
      iconColor: "text-orange-500"
    },
    {
      id: "drains",
      title: "Blocked Drains",
      icon: Wrench,
      desc: "Using advanced diagnostic equipment, we clear stubborn blockages in sinks, toilets, and main sewer lines without unnecessary digging.",
      features: ["CCTV drain inspections", "High-pressure water jetting", "Tree root removal", "Pipe relining options"],
      color: "from-emerald-500/20 to-teal-500/20",
      iconColor: "text-emerald-500"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-brand-blue pt-20 pb-24 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Our Services</h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
          Professional, reliable, and guaranteed plumbing and gas services for residential and commercial properties.
        </p>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="grid md:grid-cols-2 gap-8 relative z-10">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 hover:shadow-xl transition-all">
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                <service.icon className={`w-8 h-8 ${service.iconColor}`} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.desc}
              </p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href="/contact" 
                className="inline-flex items-center text-brand-blue font-bold hover:text-brand-orange transition-colors group"
              >
                Request this service
                <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Need something else?</h2>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
            If you have a unique plumbing issue not listed above, give us a call. Chances are our experienced team can handle it.
          </p>
          <a 
            href="tel:0428592610" 
            className="inline-block bg-brand-orange hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg hover:-translate-y-1"
          >
            Call Us Today
          </a>
        </div>
      </div>
    </div>
  );
}
