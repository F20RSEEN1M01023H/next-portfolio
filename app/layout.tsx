import './globals.css';
import Navbar from '../src/components/Navbar';
import { PROFILE } from '../src/lib/portfolioData';

export const metadata = {
  title: `${PROFILE.name} — ${PROFILE.role}`,
  description: PROFILE.tagline,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-200 font-sans antialiased selection:bg-indigo-500/30">
        <Navbar />
        <main className="max-w-5xl mx-auto px-6 pt-28 pb-20">{children}</main>
        <footer className="border-t border-slate-800/80 py-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} {PROFILE.name}. Built with Next.js, Tailwind CSS & Framer
          Motion.
        </footer>
      </body>
    </html>
  );
}
