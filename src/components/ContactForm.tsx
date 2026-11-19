'use client';

import { useRef, useState } from 'react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import { submitContact } from '../actions/submitContact';

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sent' | 'error'>('idle');

  async function handleAction(formData: FormData) {
    setLoading(true);
    setStatus('idle');
    const res = await submitContact(formData);
    setLoading(false);

    if (res.ok) {
      setStatus('sent');
      formRef.current?.reset();
    } else {
      setStatus('error');
    }
  }

  return (
    <form
      ref={formRef}
      action={handleAction}
      className="p-7 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300">Your Name</label>
          <input
            name="name"
            required
            placeholder="John Doe"
            className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300">Email Address</label>
          <input
            name="email"
            type="email"
            required
            placeholder="john@company.com"
            className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-slate-300">Project Details</label>
        <textarea
          name="message"
          rows={4}
          required
          placeholder="Tell me about your timeline, goals, or role..."
          className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 disabled:opacity-60 text-white text-sm font-bold flex items-center justify-center gap-2 transition"
      >
        {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
        {loading ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'sent' && (
        <p className="flex items-center gap-2 text-xs text-emerald-400 pt-1">
          <CheckCircle2 size={15} /> Message received! I will reply within 24 hours.
        </p>
      )}
      {status === 'error' && (
        <p className="text-xs text-rose-400 pt-1">Please check all fields and try again.</p>
      )}
    </form>
  );
}
