'use client';

import { useThemeStore } from '@/store';
import { Moon, Sun } from 'lucide-react';
import { useEffect } from 'react';

export function ThemeToggle() {
  const { isDark, toggleTheme } = useThemeStore();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-200 dark:bg-dark-card hover:bg-gray-300 dark:hover:bg-dark-border transition-all"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
