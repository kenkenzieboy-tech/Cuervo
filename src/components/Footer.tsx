'use client';

import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-dark-card border-t border-gray-200 dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary dark:text-primary-light">Cuervo</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Platform marketplace digital premium untuk penyediaan Nomor Virtual Indonesia dan layanan freelance pembuatan email.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Produk</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="#" className="hover:text-primary dark:hover:text-primary-light">Nomor Virtual</Link></li>
              <li><Link href="#" className="hover:text-primary dark:hover:text-primary-light">Pembuatan Email</Link></li>
              <li><Link href="#" className="hover:text-primary dark:hover:text-primary-light">Harga</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Dukungan</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="#" className="hover:text-primary dark:hover:text-primary-light">Pusat Bantuan</Link></li>
              <li><Link href="#" className="hover:text-primary dark:hover:text-primary-light">FAQ</Link></li>
              <li><Link href="#" className="hover:text-primary dark:hover:text-primary-light">Live Chat</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/terms" className="hover:text-primary dark:hover:text-primary-light">Syarat & Ketentuan</Link></li>
              <li><Link href="/privacy" className="hover:text-primary dark:hover:text-primary-light">Kebijakan Privasi</Link></li>
              <li><Link href="/contact" className="hover:text-primary dark:hover:text-primary-light">Kontak</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-200 dark:border-dark-border pt-8 mb-8">
          <h4 className="font-semibold mb-4">Hubungi Kami</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-primary dark:text-primary-light" />
              <a href="https://wa.me/62851337988206" target="_blank" rel="noopener noreferrer" className="hover:text-primary dark:hover:text-primary-light">
                +62 851-3379-8206
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-primary dark:text-primary-light" />
              <a href="mailto:support@cuervo.id" className="hover:text-primary dark:hover:text-primary-light">
                support@cuervo.id
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 dark:border-dark-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Cuervo. Semua hak dilindungi.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light">
              Twitter
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light">
              Instagram
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
