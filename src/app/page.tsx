import Link from "next/link";
import { ArrowRight, Wrench, Droplets, Flame, Clock, ShieldCheck, ThumbsUp, Phone } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 pt-16 pb-24 lg:pt-24 lg:pb-32 min-h-[90vh] flex items-center">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Text & CTA */}
            <div className="flex flex-col items-start text-left bg-white/40 backdrop-blur-sm p-6 lg:p-10 rounded-3xl border border-white/60 shadow-xl relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-bold mb-8 border border-brand-orange/20 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
                </span>
                24/7 Emergency Service Available
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight mb-6 leading-[1.1]">
                Adelaide&apos;s Most Trusted <br />
                <span className="text-brand-blue">Plumbing & Gas</span> Experts.
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-sans max-w-xl">
                From emergency repairs to regular maintenance, Gotcha Plumbing provides fast, reliable, and professional service across the Greater Adelaide region.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a 
                  href="tel:0428592610" 
                  className="inline-flex justify-center items-center gap-2 bg-brand-orange hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-[0_8px_30px_rgba(234,88,12,0.25)] hover:shadow-[0_8px_30px_rgba(234,88,12,0.4)] hover:-translate-y-1"
                >
                  <Clock className="w-5 h-5" />
                  Emergency Call: 0428 592 610
                </a>
                <Link 
                  href="/services" 
                  className="inline-flex justify-center items-center gap-2 bg-white text-brand-blue border-2 border-slate-200 hover:border-brand-blue px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-sm hover:bg-slate-50 hover:-translate-y-1"
                >
                  View Our Services
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="relative w-full h-[500px] lg:h-[650px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white group">
              <div className="absolute inset-0 bg-brand-blue/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
              {/* Fallback to img tag if Image component from next/image isn't imported, but assuming standard img is safe */}
              <img 
                src="/images/hero-bathroom.png" 
                alt="Modern pristine bathroom plumbing" 
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-3">What We Do</h2>
            <h3 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Comprehensive Plumbing Solutions</h3>
            <p className="text-slate-600 text-lg">We handle everything from minor leaks to major installations with the highest level of professionalism.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Droplets,
                title: "General Plumbing",
                desc: "Leaking taps, burst pipes, blocked drains, and complete bathroom renovations.",
                color: "bg-blue-50 text-blue-600 border-blue-100"
              },
              {
                icon: Flame,
                title: "Gas Fitting",
                desc: "Safe and compliant gas appliance installations, leak detection, and repairs.",
                color: "bg-orange-50 text-orange-600 border-orange-100"
              },
              {
                icon: Wrench,
                title: "Maintenance",
                desc: "Preventative maintenance for residential and commercial properties.",
                color: "bg-emerald-50 text-emerald-600 border-emerald-100"
              }
            ].map((service, i) => (
              <div key={i} className="group p-8 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 border ${service.color}`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.desc}
                </p>
                <Link href="/services" className="inline-flex items-center text-brand-blue font-semibold group-hover:text-brand-orange transition-colors">
                  Learn more <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-brand-orange font-bold tracking-wider uppercase text-sm mb-3">Why Choose Gotcha</h2>
              <h3 className="text-4xl font-black mb-6 tracking-tight">Experience You Can Count On</h3>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                When plumbing disasters strike, you need a team that arrives fast, diagnoses accurately, and fixes the problem permanently. That&apos;s the Gotcha guarantee.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Clock, title: "24/7 Availability", desc: "We're ready to respond to emergencies at any hour." },
                  { icon: ShieldCheck, title: "Licensed & Insured", desc: "Fully qualified master plumbers and gas fitters." },
                  { icon: ThumbsUp, title: "Satisfaction Guaranteed", desc: "We don't leave until the job is done perfectly." }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center border border-slate-700">
                      <feature.icon className="w-6 h-6 text-brand-orange" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{feature.title}</h4>
                      <p className="text-slate-400">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-orange to-brand-blue opacity-30 blur-2xl rounded-[3rem]"></div>
              <div className="relative bg-slate-800 border border-slate-700 rounded-3xl p-8 lg:p-12 overflow-hidden">
                <div className="text-center relative z-10">
                  <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-500 mb-4">10+</div>
                  <div className="text-xl font-bold text-brand-orange mb-8">Years of Experience</div>
                  <p className="text-slate-300 italic mb-8">
                    &quot;Gotcha Plumbing saved our house from a massive leak at 2 AM. Fast, professional, and surprisingly affordable for an emergency callout.&quot;
                  </p>
                  <div className="flex items-center justify-center gap-1 text-brand-orange">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNHYtNGgtMnY0aC00djJoNHY0aDJ2LTRoNHYtMmgtNHptMC0zMFYwaC0ydjRoLTR2Mmg0djRoMnYtNGg0VjRoLTR6TTYgMzR2LTRIMHY0aC00djJoNHY0aDJ2LTRoNHYtMmgtNHptMC0zMFYwaC0ydjRoLTR2Mmg0djRoMnYtNGg0VjRoLTR6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz48L2c+PC9zdmc+')]"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Need a Plumber Right Now?</h2>
          <p className="text-xl text-blue-100 mb-10">Don&apos;t wait for the damage to get worse. Our rapid response team is standing by.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0428592610" 
              className="inline-flex justify-center items-center gap-2 bg-brand-orange hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg hover:-translate-y-1"
            >
              <Phone className="w-5 h-5" />
              Call 0428 592 610
            </a>
            <Link 
              href="/contact" 
              className="inline-flex justify-center items-center gap-2 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 px-8 py-4 rounded-xl text-lg font-bold transition-all hover:-translate-y-1"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
