'use client';

import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '62851337988206';
  const message = encodeURIComponent('Halo, saya ingin menanyakan tentang layanan Cuervo');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center text-white"
        aria-label="Hubungi Customer Service"
      >
        <MessageCircle size={24} />
      </button>

      {/* Tooltip / Menu */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 bg-white dark:bg-dark-card rounded-lg shadow-xl p-4 w-64 animate-fade-in">
          <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Hubungi Customer Service</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Tim support kami siap membantu Anda 24/7
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
          >
            <MessageCircle size={18} />
            Chat WhatsApp
          </a>
        </div>
      )}

      {/* Click outside to close */}
      {isOpen && (
        <button
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-30"
          aria-hidden="true"
        />
      )}
    </>
  );
}
