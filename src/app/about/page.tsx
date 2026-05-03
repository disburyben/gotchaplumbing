import { Trophy, Users, Heart, Target } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "About Us | Gotcha Plumbing & Gas",
  description: "Learn about our commitment to quality plumbing and our support for the Mito Foundation.",
};

export default function About() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-brand-blue pt-20 pb-32 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight relative z-10">About Gotcha</h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto relative z-10">
          More than just plumbers. We are a locally owned team dedicated to serving our community and delivering excellence.
        </p>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Gotcha Plumbing & Gas was founded with a simple mission: to provide the Greater Adelaide region with transparent, high-quality, and reliable plumbing services.
                </p>
                <p>
                  We understood that calling a plumber can often be a stressful experience, especially during emergencies. That&apos;s why we&apos;ve built our company around the core values of rapid response, honest pricing, and unparalleled workmanship.
                </p>
                <p>
                  Today, our team of fully licensed master plumbers and gas fitters continues to set the standard for service excellence in South Australia.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Trophy, label: "Quality Work", desc: "Guaranteed" },
                { icon: Users, label: "Local Team", desc: "Adelaide Based" },
                { icon: Target, label: "Fast Response", desc: "24/7 Service" },
                { icon: Heart, label: "Community", desc: "Proudly Supporting" }
              ].map((stat, i) => (
                <div key={i} className="bg-slate-50 rounded-2xl p-6 text-center border border-slate-100">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mx-auto mb-4 text-brand-orange">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900">{stat.label}</h3>
                  <p className="text-sm text-slate-500 font-medium mt-1">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mito Foundation Section */}
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 to-brand-blue rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 lg:p-16 flex flex-col justify-center">
              <div className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm font-bold mb-8 backdrop-blur-sm w-fit border border-white/20">
                Community Focus
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Proudly Supporting The Mito Foundation</h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Gotcha Plumbing & Gas is committed to giving back. We proudly support The Bloody Long Walk to raise vital funds and help find a cure for mitochondrial disease.
              </p>
              <a 
                href="https://www.mito.org.au/bloodylongwalk/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-brand-blue hover:bg-slate-50 px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:-translate-y-1 w-fit"
              >
                Learn More About The Cause
              </a>
            </div>
            
            <div className="relative min-h-[300px] lg:min-h-full bg-slate-800">
              <div className="absolute inset-0 bg-brand-orange mix-blend-multiply opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center p-8 bg-white/5 backdrop-blur-sm">
                <div className="bg-white rounded-2xl w-full h-full flex items-center justify-center p-6 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <Image src="/images/charity-logo.jpg" alt="The Bloody Long Walk" width={400} height={400} className="max-w-[90%] max-h-[90%] object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
