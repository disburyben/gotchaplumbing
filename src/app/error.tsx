"use client";

import { AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[70vh] bg-slate-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-12 rounded-3xl shadow-lg border border-slate-100 text-center max-w-lg">
        <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-10 h-10" />
        </div>
        <h2 className="text-3xl font-black text-slate-900 mb-4">Something went wrong</h2>
        <p className="text-slate-600 mb-8 leading-relaxed">
          We apologize, but an unexpected error has occurred. Our team has been notified.
        </p>
        <button
          onClick={() => reset()}
          className="inline-block bg-brand-orange hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:-translate-y-1"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
