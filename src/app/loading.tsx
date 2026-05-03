export default function Loading() {
  return (
    <div className="min-h-[70vh] bg-slate-50 flex flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center gap-6">
        <div className="w-16 h-16 border-4 border-slate-200 border-t-brand-orange rounded-full animate-spin"></div>
        <p className="text-slate-500 font-semibold uppercase tracking-widest text-sm animate-pulse">Loading...</p>
      </div>
    </div>
  );
}
