import { Link } from "react-router-dom";
import { Linkedin, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl container-px py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-accent-gradient text-white font-display font-bold">S</span>
            <span className="font-display text-lg font-semibold">SmartSense Technologies</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-primary-foreground/70">
            Intelligent digital experiences for brands, institutions and governments across Africa. Get Smarter.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a href="https://linkedin.com" aria-label="LinkedIn" className="rounded-md p-2 bg-white/5 hover:bg-white/10 transition"><Linkedin className="h-4 w-4" /></a>
            <a href="https://x.com" aria-label="X" className="rounded-md p-2 bg-white/5 hover:bg-white/10 transition"><Twitter className="h-4 w-4" /></a>
            <a href="https://youtube.com" aria-label="YouTube" className="rounded-md p-2 bg-white/5 hover:bg-white/10 transition"><Youtube className="h-4 w-4" /></a>
          </div>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/about" className="hover:text-primary-foreground">About</Link></li>
            <li><Link to="/solutions" className="hover:text-primary-foreground">Solutions</Link></li>
            <li><Link to="/solutions/mixed-reality" className="hover:text-primary-foreground">Mixed Reality Experiences</Link></li>
            <li><Link to="/government" className="hover:text-primary-foreground">Government & Public Sector</Link></li>
            <li><Link to="/innovation-portfolio" className="hover:text-primary-foreground">Innovation Portfolio</Link></li>
            <li><Link to="/industries" className="hover:text-primary-foreground">Industries</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/contact" className="hover:text-primary-foreground">Contact</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-primary-foreground">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl container-px py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} SmartSense Technologies. All rights reserved.</p>
          <p>Get Smarter.</p>
        </div>
      </div>
    </footer>
  );
}
