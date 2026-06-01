import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { Navbar, Footer, WhatsAppWidget } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cuervo - Platform Marketplace Digital Premium',
  description: 'Dapatkan nomor virtual Indonesia murah dan layanan email profesional berkualitas tinggi',
  keywords: ['nomor virtual', 'email premium', 'marketplace digital', 'Indonesia'],
  openGraph: {
    title: 'Cuervo - Platform Marketplace Digital Premium',
    description: 'Dapatkan nomor virtual Indonesia murah dan layanan email profesional',
    type: 'website',
    locale: 'id_ID',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <WhatsAppWidget />
      </body>
    </html>
  );
}
