import Link from "next/link";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-slate-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-12 rounded-3xl shadow-lg border border-slate-100 text-center max-w-lg">
        <div className="w-20 h-20 bg-orange-50 text-brand-orange rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="w-10 h-10" />
        </div>
        <h1 className="text-6xl font-black text-slate-900 mb-4 tracking-tighter">404</h1>
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Page Not Found</h2>
        <p className="text-slate-600 mb-8 leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          href="/" 
          className="inline-block bg-brand-blue hover:bg-blue-900 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:-translate-y-1"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
