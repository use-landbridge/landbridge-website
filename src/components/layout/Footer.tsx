import { Facebook, Instagram } from "lucide-react";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="bg-bg-primary border-t border-white/10 py-10">
      <Container>
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          {/* Logo */}
          <a href="/" className="font-heading text-xl font-bold text-white">
            Landbridge
          </a>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com/uselandbridge"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 transition-colors hover:text-white"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://instagram.com/uselandbridge"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 transition-colors hover:text-white"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>

          {/* Legal */}
          <div className="flex items-center gap-6 text-xs text-white/50 font-body">
            <a href="/privacy" className="hover:text-white/80 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white/80 transition-colors">
              Terms &amp; Conditions
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-white/40 font-body">
          &copy; {new Date().getFullYear()} Landbridge &mdash; All Rights Reserved
        </p>
      </Container>
    </footer>
  );
}
