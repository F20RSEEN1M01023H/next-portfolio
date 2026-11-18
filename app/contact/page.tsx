import FadeIn from '../../src/components/FadeIn';

// This is the Server Action. It runs entirely on your Node backend.
async function sendMessage(formData: FormData) {
  'use server';
  const email = formData.get('email');
  const message = formData.get('message');

  // Simulate a database save or email dispatch
  console.log(`[Server] Message saved from: ${email}`);
  console.log(`[Server] Content: ${message}`);
}

export default function ContactPage() {
  return (
    <div className="max-w-xl space-y-8">
      <FadeIn>
        <h1 className="text-4xl font-bold text-white">Let's Connect</h1>
        <p className="text-slate-400 mt-2">
          Drop me a message and I'll get back to you within 24 hours.
        </p>
      </FadeIn>

      <FadeIn delay={0.2}>
        <form
          action={sendMessage}
          className="flex flex-col gap-5 p-8 rounded-2xl bg-slate-900 border border-slate-800"
        >
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-slate-300">Email Address</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
              placeholder="hello@example.com"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-slate-300">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            type="submit"
            className="mt-2 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-indigo-500/20 active:scale-[0.98]"
          >
            Send Message
          </button>
        </form>
      </FadeIn>
    </div>
  );
}
