"use client";

import { useState } from "react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/21541113/uvenois/";

      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        e.currentTarget.reset();
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === "success") {
    return (
      <div className="bg-emerald-50 text-emerald-800 p-8 rounded-2xl text-center border border-emerald-100">
        <h3 className="text-2xl font-bold mb-2">Message Received!</h3>
        <p>Thank you for reaching out. Our team will be in touch shortly.</p>
        <button
          onClick={() => setSubmitStatus("idle")}
          className="mt-6 text-brand-blue font-bold hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="firstName" className="text-sm font-bold text-slate-700">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
            placeholder="John"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="lastName" className="text-sm font-bold text-slate-700">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
            placeholder="Doe"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-bold text-slate-700">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
            placeholder="0400 000 000"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-bold text-slate-700">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="service" className="text-sm font-bold text-slate-700">Service Required</label>
        <select
          id="service"
          name="service"
          required
          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all appearance-none"
        >
          <option value="">Select a service...</option>
          <option value="Emergency Plumbing">Emergency Plumbing</option>
          <option value="General Maintenance">General Maintenance</option>
          <option value="Gas Fitting">Gas Fitting</option>
          <option value="Blocked Drains">Blocked Drains</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-bold text-slate-700">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all resize-none"
          placeholder="Tell us about your plumbing issue..."
        ></textarea>
      </div>

      {submitStatus === "error" && (
        <p className="text-red-500 text-sm font-semibold">
          There was an error sending your message. Please try again or call us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-brand-blue hover:bg-blue-900 text-white font-bold py-4 rounded-xl transition-all shadow-[0_8px_30px_rgba(30,58,138,0.2)] hover:shadow-[0_8px_30px_rgba(30,58,138,0.3)] hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
