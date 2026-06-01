'use client';

import { useAuthStore } from '@/store';
import Link from 'next/link';
import { Menu, X, LogOut, User } from 'lucide-react';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuthStore();

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-dark-card shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">🦅</span>
            </div>
            <span className="font-bold text-xl text-primary dark:text-primary-light">Cuervo</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light">
              Fitur
            </Link>
            <Link href="#pricing" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light">
              Harga
            </Link>
            <Link href="#faq" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light">
              FAQ
            </Link>
            <Link href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light">
              Kontak
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            
            {isAuthenticated && user ? (
              <div className="hidden md:flex items-center gap-3">
                <Link href="/dashboard" className="btn-primary">
                  Dashboard
                </Link>
                <button
                  onClick={logout}
                  className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-dark-border"
                  title="Logout"
                >
                  <LogOut size={20} />
                </button>
              </div>
            ) : (
              <div className="hidden md:flex items-center gap-3">
                <Link href="/login" className="btn-secondary">
                  Login
                </Link>
                <Link href="/register" className="btn-primary">
                  Daftar
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-dark-border"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-dark-border py-4 space-y-3">
            <Link href="#features" className="block px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-bg rounded">
              Fitur
            </Link>
            <Link href="#pricing" className="block px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-bg rounded">
              Harga
            </Link>
            <Link href="#faq" className="block px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-bg rounded">
              FAQ
            </Link>
            
            {isAuthenticated && user ? (
              <>
                <Link href="/dashboard" className="block px-4 py-2 text-primary dark:text-primary-light font-semibold">
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 dark:hover:bg-dark-bg rounded"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="block px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-bg rounded">
                  Login
                </Link>
                <Link href="/register" className="block px-4 py-2 bg-primary text-white rounded font-semibold">
                  Daftar
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
