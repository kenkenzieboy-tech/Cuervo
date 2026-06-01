import { HeroSection } from '@/components';
import { CheckCircle, Zap, Shield, Users, TrendingUp, Award } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const features = [
    {
      icon: Zap,
      title: 'Proses Cepat',
      description: 'Dapatkan nomor virtual dalam hitungan menit tanpa verifikasi rumit',
    },
    {
      icon: Shield,
      title: 'Aman & Terpercaya',
      description: 'Semua transaksi dilindungi dengan enkripsi tingkat enterprise',
    },
    {
      icon: Users,
      title: 'Tim Support 24/7',
      description: 'Customer service siap membantu Anda kapan saja melalui WhatsApp',
    },
    {
      icon: TrendingUp,
      title: 'Harga Terjangkau',
      description: 'Mulai dari Rp4.000 untuk nomor virtual dan Rp3.500 untuk email',
    },
    {
      icon: Award,
      title: 'Terpercaya',
      description: 'Telah melayani ribuan pengguna dengan rating tinggi',
    },
  ];

  const products = [
    {
      icon: '📱',
      name: 'Nomor Virtual Indonesia',
      price: 'Rp4.000',
      description: 'Nomor resmi Indonesia untuk SMS, WhatsApp, dan verifikasi aplikasi',
      features: ['Nomor valid Indonesia', 'Bisa menerima SMS', 'Masa aktif 30 hari', 'Instant delivery'],
    },
    {
      icon: '📧',
      name: 'Email Premium',
      price: 'Rp3.500+',
      description: 'Email profesional dengan custom domain dan fitur lengkap',
      features: ['Domain custom', 'Storage unlimited', 'POP3/IMAP access', 'SSL certificate'],
    },
    {
      icon: '🔑',
      name: 'Akun Reseller',
      price: 'Hubungi CS',
      description: 'Jadi reseller dan dapatkan komisi menarik untuk setiap penjualan',
      features: ['Komisi 20-30%', 'Dashboard reseller', 'Support prioritas', 'Marketing materials'],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section id="features" className="py-20 bg-white dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Mengapa Memilih Cuervo?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Platform marketplace digital yang menyediakan solusi lengkap untuk kebutuhan nomor virtual dan email profesional Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="card hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-primary/10 dark:bg-primary-light/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-primary dark:text-primary-light" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="pricing" className="py-20 bg-gray-50 dark:bg-dark-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Produk Kami
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Pilih paket yang sesuai dengan kebutuhan bisnis Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="card border border-gray-200 dark:border-dark-border hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{product.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                  {product.name}
                </h3>
                <p className="text-3xl font-bold text-primary dark:text-primary-light mb-4">
                  {product.price}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{product.description}</p>

                <ul className="space-y-3 mb-6">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <CheckCircle size={18} className="text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/dashboard"
                  className="w-full inline-block text-center py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-all duration-300"
                >
                  Pesan Sekarang
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">10K+</p>
              <p className="text-lg opacity-90">Pengguna Aktif</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">50K+</p>
              <p className="text-lg opacity-90">Transaksi Sukses</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">99.9%</p>
              <p className="text-lg opacity-90">Uptime Guarantee</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">24/7</p>
              <p className="text-lg opacity-90">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-dark-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Siap Memulai?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Daftar sekarang dan dapatkan bonus Rp5.000 untuk pembelian pertama Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth/register"
              className="inline-block px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-all duration-300"
            >
              Daftar Gratis
            </Link>
            <Link
              href="#contact"
              className="inline-block px-8 py-4 border-2 border-primary text-primary hover:bg-primary/10 font-bold rounded-lg transition-all duration-300"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
