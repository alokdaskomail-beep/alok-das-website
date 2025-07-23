import Link from "next/link";
import { Linkedin, Facebook, Instagram } from 'lucide-react';

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="font-serif text-xl mb-4">Alok Das</h3>
          <p className="text-gray-400">Digital Transformation for the Travel & Hospitality Sector.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-gray-300 hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Connect</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-gray-300 hover:text-primary"><Linkedin size={24} /></a>
            <a href="#" className="text-gray-300 hover:text-primary"><Facebook size={24} /></a>
            <a href="#" className="text-gray-300 hover:text-primary"><Instagram size={24} /></a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 border-t border-gray-700 mt-8 pt-6">
        <p>&copy; {new Date().getFullYear()} Alok Das. All Rights Reserved.</p>
      </div>
    </footer>
  );
}