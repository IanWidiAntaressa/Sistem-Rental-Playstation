# Sistem Rental PS UNDIP Tembalang

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express">
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL">
  <img src="https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=white" alt="EJS">
  <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap">
  <img src="https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white" alt="Chart.js">
</p>

Aplikasi web internal untuk mengelola penyewaan konsol PlayStation di kawasan UNDIP Tembalang.  
Mencakup manajemen meja, reservasi pelanggan, pembayaran tunai (COD), serta dashboard analitik interaktif.

---

## Daftar Isi
- [Fitur Utama](#fitur-utama)
- [Tampilan Antarmuka](#tampilan-antarmuka)
- [Tech Stack](#tech-stack)
- [Persyaratan Sistem](#persyaratan-sistem)
- [Instalasi dan Menjalankan](#instalasi-dan-menjalankan)
- [Konfigurasi Environment](#konfigurasi-environment)
- [Struktur Proyek](#struktur-proyek)
- [Alur Penggunaan](#alur-penggunaan)
- [Lisensi](#lisensi)

---

## Fitur Utama

| Modul             | Deskripsi                                                                                                                  |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **Autentikasi**   | Login dan registrasi admin (halaman seeding pertama). Password di-hash dengan bcryptjs.                                    |
| **Dashboard**     | Statistik ringkas (total pelanggan, durasi rata-rata, pendapatan, meja aktif) dan grafik tren reservasi & konsol terlaris. |
| **Manajemen Meja**| CRUD meja PlayStation. Tersedia soft‑delete (pindah ke Recycle Bin) serta restore dan hapus permanen.                     |
| **Manajemen Reservasi** | Pencatatan pelanggan (auto‑create jika baru), pemesanan meja, durasi, biaya otomatis (Rp 25.000/jam). Filter dinamis berdasarkan nama, tanggal, status pembayaran. |
| **Konfirmasi Pembayaran** | Ubah status pembayaran dari "Unpaid" menjadi "Paid" (pembayaran tunai langsung).                                         |
| **Recycle Bin**   | Lihat data meja dan reservasi yang dihapus sementara, dengan opsi pemulihan atau penghapusan permanen.                     |
| **Keamanan**      | Session‑based authentication. Middleware memastikan hanya admin yang sudah login dapat mengakses panel.                    |

---

## Tampilan Antarmuka

- **Dashboard** – Info jam operasional, lokasi, fasilitas, kartu statistik, dan dua chart (line & doughnut).
- **Halaman Meja** – Tabel dengan ikon status, modal edit, konfirmasi hapus dengan SweetAlert2.
- **Halaman Reservasi** – Tabel reservasi lengkap, filter canggih, modal form pemesanan, auto‑kalkulasi biaya.
- **Recycle Bin** – Daftar item yang dihapus lengkap dengan tombol restore dan hapus permanen.

---

## Tech Stack

| Layer        | Teknologi                                                                                                          |
| ------------ | ------------------------------------------------------------------------------------------------------------------ |
| **Backend**  | [![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)](https://nodejs.org) [![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)](https://expressjs.com) |
| **Database** | [![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?logo=postgresql&logoColor=white)](https://www.postgresql.org) |
| **Frontend** | [![EJS](https://img.shields.io/badge/EJS-B4CA65?logo=ejs&logoColor=white)](https://ejs.co) [![Bootstrap 5](https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white)](https://getbootstrap.com) [![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?logo=chartdotjs&logoColor=white)](https://www.chartjs.org) |
| **Library Tambahan** | bcryptjs, dotenv, express‑session, pg, SweetAlert2, Font Awesome 6                                       |

---

## Persyaratan Sistem

- **Node.js** versi 18 atau lebih baru (sesuai dependensi Express 5).
- **PostgreSQL** minimal versi 12.
- **npm** (biasanya dibundel dengan Node.js).

---

## Instalasi dan Menjalankan

1. **Clone repositori**

   ```bash
   git clone https://github.com/username/sistem-rental-ps.git
   cd sistem-rental-ps
