import Link from 'next/link';
import './globals.css';
import { Briefcase, Home, Mail } from 'lucide-react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-200 font-sans min-h-screen selection:bg-indigo-500/30">
        {/* Glassmorphism Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80">
          <div className="max-w-4xl mx-auto px-8 h-16 flex items-center gap-8">
            <Link
              href="/"
              className="flex items-center gap-2 hover:text-indigo-400 font-medium transition-colors"
            >
              <Home size={18} /> Home
            </Link>
            <Link
              href="/projects"
              className="flex items-center gap-2 hover:text-indigo-400 font-medium transition-colors"
            >
              <Briefcase size={18} /> Projects
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 hover:text-indigo-400 font-medium transition-colors"
            >
              <Mail size={18} /> Contact
            </Link>
          </div>
        </nav>

        <main className="max-w-4xl mx-auto px-8 pt-32 pb-16">{children}</main>
      </body>
    </html>
  );
}
