import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us | Gotcha Plumbing & Gas",
  description: "Get in touch with Gotcha Plumbing & Gas. We are available 24/7 for emergency plumbing in Adelaide.",
};

export default function Contact() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-brand-blue pt-20 pb-32 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Contact Us</h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
          We&apos;re here to help. Reach out for a quote, to schedule maintenance, or for immediate emergency assistance.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <div className="grid lg:grid-cols-5 gap-8">
          
          {/* Contact Information Cards */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-brand-orange text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
              <h2 className="text-2xl font-black mb-6 relative z-10">Emergency Service</h2>
              <p className="mb-8 text-orange-50 relative z-10">
                Plumbing emergency? Don&apos;t wait. We have plumbers on standby across Adelaide 24/7.
              </p>
              <a 
                href="tel:0428592610" 
                className="relative z-10 flex items-center justify-between bg-white text-brand-orange px-6 py-4 rounded-xl font-bold hover:bg-orange-50 transition-colors shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <span className="text-xl">0428 592 610</span>
                </div>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Contact Details</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center shrink-0 border border-blue-100">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Email</h3>
                    <a href="mailto:gotchaplumbingandgas@gmail.com" className="text-slate-600 hover:text-brand-orange transition-colors">
                      gotchaplumbingandgas@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-50 text-brand-orange rounded-xl flex items-center justify-center shrink-0 border border-orange-100">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Service Area</h3>
                    <p className="text-slate-600">Greater Adelaide Region<br />South Australia</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0 border border-emerald-100">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Hours</h3>
                    <p className="text-slate-600">24/7 Emergency Response<br />Standard: Mon-Fri 8am-5pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8 md:p-12 h-full">
              <h2 className="text-3xl font-black text-slate-900 mb-2">Send a Message</h2>
              <p className="text-slate-600 mb-8">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
              
              <ContactForm />
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Map Section - Placeholder */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-slate-200 rounded-3xl h-[400px] flex items-center justify-center border-4 border-white shadow-xl overflow-hidden relative">
           <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-blue via-transparent to-transparent"></div>
           <div className="text-center relative z-10">
             <MapPin className="w-12 h-12 text-brand-orange mx-auto mb-4" />
             <p className="font-bold text-slate-700 text-xl">Service Area Map</p>
             <p className="text-slate-500">Greater Adelaide Region</p>
           </div>
        </div>
      </div>
    </div>
  );
}
