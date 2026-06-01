# 🦅 Cuervo - Platform Marketplace Nomor Virtual Indonesia

Cuervo adalah platform marketplace digital premium untuk penyediaan Nomor Virtual Indonesia (Nokos) dan layanan freelance pembuatan email dengan harga terjangkau.

## 🎯 Fitur Utama

### Untuk Customer
- ✅ Registrasi & Login aman
- ✅ Verifikasi email
- ✅ Dashboard pengguna modern
- ✅ Sistem saldo (deposit mulai Rp10.000)
- ✅ Riwayat transaksi lengkap
- ✅ Beli Nomor Virtual Indonesia (Nokos) mulai Rp4.000
- ✅ Layanan pembuatan email mulai Rp3.500
- ✅ Notifikasi real-time
- ✅ Sistem referral & voucher
- ✅ Live chat & FAQ
- ✅ Dark mode & Light mode

### Untuk Admin
- 🔧 Dashboard admin premium
- 📊 Statistik & grafik pendapatan
- 📦 Kelola produk & stok
- 👥 Kelola pengguna
- 💰 Kelola deposit & transaksi
- 📢 Kelola pengumuman
- 📋 Sistem tiket bantuan

### Keamanan
- 🔒 JWT Authentication
- 🔐 Password hashing (bcryptjs)
- 🛡️ CAPTCHA on login/register
- 🚫 Anti-spam protection
- 🔑 Email verification

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **State Management**: Zustand
- **Forms**: React Hook Form, Zod
- **UI Components**: Lucide React, Sonner
- **Charts**: Recharts
- **Authentication**: JWT, bcryptjs

## 📦 Instalasi

```bash
# Clone repository
git clone https://github.com/kenkenzieboy-tech/cuervo.git
cd cuervo

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local

# Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

## 🚀 Build & Deploy

```bash
# Build untuk production
npm run build

# Jalankan production server
npm start
```

### Deploy ke Vercel

```bash
npm i -g vercel
vercel
```

## 📁 Struktur Project

```
cuervo/
├── src/
│   ├── app/              # App router pages
│   ├── components/       # React components
│   ├── hooks/           # Custom hooks
│   ├── lib/             # Utilities & helpers
│   ├── store/           # Zustand stores
│   ├── types/           # TypeScript types
│   └── styles/          # Global styles
├── public/              # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 💰 Harga Produk

| Produk | Harga | Deskripsi |
|--------|-------|----------|
| Nomor Virtual Indonesia (Nokos) | Rp4.000 | Nomor resmi Indonesia legal |
| Pembuatan Email (Gmail) | Rp3.500+ | Freelance service |

## 🤝 Customer Service

📞 **WhatsApp**: +62 851-3379-8206

## 📝 Lisensi

Ini adalah project proprietary. Semua hak dilindungi.

## 👨‍💻 Author

Dikembangkan dengan ❤️ oleh Cuervo Team

---

**Note**: Website ini dirancang dengan standar premium tahun 2026 dengan fokus pada UX/UI modern, keamanan, dan performa tinggi.
