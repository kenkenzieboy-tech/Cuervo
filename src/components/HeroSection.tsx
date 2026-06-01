'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Zap, Shield, Smartphone } from 'lucide-react';

export function HeroSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary-dark to-black dark:from-dark-bg dark:via-dark-bg dark:to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-light opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20"
        >
          {/* Left Content */}
          <motion.div variants={item} className="space-y-6">
            <motion.div variants={item}>
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
                🚀 Platform Digital Premium 2026
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Layanan Nomor Virtual Indonesia{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary-light">
                Murah & Cepat
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-xl text-gray-300 leading-relaxed max-w-2xl"
            >
              Dapatkan nomor virtual resmi Indonesia mulai dari Rp4.000 dan layanan pembuatan email profesional mulai dari Rp3.500. Proses cepat, aman, dan terpercaya untuk kebutuhan bisnis Anda.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent/90 text-black font-bold rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Beli Nokos Sekarang
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/auth/register"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg border border-white/30 transform hover:scale-105 transition-all duration-300"
              >
                Daftar Gratis
              </Link>
            </motion.div>

            {/* Features */}
            <motion.div variants={item} className="grid grid-cols-3 gap-4 pt-6">
              <div className="p-3 bg-white/5 rounded-lg backdrop-blur">
                <Zap className="text-accent mb-2" size={20} />
                <p className="text-sm text-gray-300 font-semibold">Proses Cepat</p>
              </div>
              <div className="p-3 bg-white/5 rounded-lg backdrop-blur">
                <Shield className="text-accent mb-2" size={20} />
                <p className="text-sm text-gray-300 font-semibold">Aman Terpercaya</p>
              </div>
              <div className="p-3 bg-white/5 rounded-lg backdrop-blur">
                <Smartphone className="text-accent mb-2" size={20} />
                <p className="text-sm text-gray-300 font-semibold">24/7 Support</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            variants={item}
            className="relative h-96 lg:h-full hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full h-full">
              {/* Phone Mockup */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-64 h-96 bg-gradient-to-br from-gray-800 to-black rounded-3xl shadow-2xl p-3 border border-gray-700">
                  <div className="w-full h-full bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                    <span className="text-6xl font-bold text-white">🦅</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                animate={{
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute top-10 left-0 w-48 p-4 bg-white dark:bg-dark-card rounded-xl shadow-lg"
              >
                <p className="text-sm font-semibold text-gray-900 dark:text-white">Nomor Indonesia</p>
                <p className="text-2xl font-bold text-accent">Rp4.000</p>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                }}
                className="absolute bottom-10 right-0 w-48 p-4 bg-white dark:bg-dark-card rounded-xl shadow-lg"
              >
                <p className="text-sm font-semibold text-gray-900 dark:text-white">Email Premium</p>
                <p className="text-2xl font-bold text-accent">Rp3.500+</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="text-white text-center">
          <p className="text-sm mb-2">Scroll untuk melihat lebih banyak</p>
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
