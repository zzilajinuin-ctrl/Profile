# AZRE / Personal Portfolio

Starter website portofolio multi-halaman dengan HTML, CSS, dan JavaScript murni.

## Struktur
- `index.html` — halaman utama
- `about.html` — profil dan prinsip
- `projects.html` — daftar proyek dengan filter kategori
- `contact.html` — tautan kontak (masih placeholder)
- `css/style.css` — seluruh sistem desain dan responsive layout
- `js/main.js` — navigasi mobile dan utilitas umum
- `js/projects.js` — pemuatan data dan filter proyek
- `data/projects.json` — konten proyek terpisah

## Menjalankan
Karena halaman proyek mengambil JSON menggunakan `fetch`, jalankan lewat local server.
Contoh dengan Python:
```bash
python -m http.server 8000
```
Lalu buka `http://localhost:8000`.

## Kustomisasi penting
1. Ganti teks profil dan proyek dengan pengalaman/karya asli.
2. Ubah tautan placeholder di `contact.html`.
3. Tambahkan gambar karya ke folder `assets/`, lalu gunakan sebagai `background-image` atau elemen `<img>`.
4. Jangan masukkan alamat rumah, nomor pribadi, atau informasi sensitif ke situs publik.

Tidak menggunakan framework atau backend; formulir kontak dan hosting belum dikonfigurasi.

## Foto yang perlu ditambahkan
Lihat `assets/FOTO-README.txt` untuk nama file, format, dan rasio gambar. Masukkan foto langsung ke folder `assets/`.
