# 🎮 UTS Pemrograman Web - Game Database

Project ini dibuat untuk memenuhi Ujian Tengah Semester (UTS) mata kuliah Pemrograman Web.

- **Nama:** Grace Exauditha Nababan
- **NIM:** 123140115

---

## 🚀 Link Deployment

Aplikasi dapat diakses secara *live* melalui link Vercel berikut:

**[https://uts-pemweb-123140115.vercel.app/](https://uts-pemweb-123140115.vercel.app/)**

---

## 📖 Deskripsi Project

Aplikasi ini adalah sebuah *database* game yang dibangun menggunakan **React (Vite)** dan mengambil data secara *real-time* dari **RAWG.io API**. Aplikasi ini memungkinkan pengguna untuk menjelajahi, mencari, memfilter, dan melihat detail dari ribuan game.

---

## 🛠️ Fitur Utama

- **List Game Dinamis:** Menampilkan daftar game dalam format tabel (Cover, Judul, Rating, Tgl. Rilis).
- **Pencarian:** Fitur pencarian *real-time* untuk mencari game berdasarkan nama.
- **Filter Platform:** Filter game berdasarkan platform (PC, PlayStation, Xbox).
- **Sortir:** Mengurutkan game berdasarkan Rating atau Tanggal Rilis.
- **Halaman Detail:** Halaman detail untuk setiap game, menampilkan Deskripsi, Genre, dan *Screenshots*.
- **Loading State:** Menampilkan *loading indicator* saat data sedang diambil dari API.
- **Desain Responsif:** Tampilan dioptimalkan untuk *desktop* dan *mobile*.

---

## 💻 Teknologi yang Digunakan

- **React (Vite):** Library JavaScript untuk membangun UI.
- **React Hooks:** `useState` dan `useEffect` untuk *state management* dan *data fetching*.
- **Fetch API:** Untuk komunikasi dengan API eksternal (RAWG).
- **CSS Murni:** Styling kustom tanpa *framework* (menggunakan Flexbox & CSS Grid).
- **Vercel:** Platform untuk *deployment*.

---

## ⚙️ Cara Instalasi dan Menjalankan Lokal

1.  Clone repository ini (Aku tebak dari *screenshot* kamu ya, G!):
    ```bash
    git clone [https://github.com/14-115-Grace/uts-pemweb-123140115.git](https://github.com/14-115-Grace/uts-pemweb-123140115.git)
    ```

2.  Masuk ke direktori project:
    ```bash
    cd uts-pemweb-123140115
    ```

3.  Install semua *dependencies*:
    ```bash
    npm install
    ```

4.  Buat file `.env` di folder utama (root) project.

5.  Isi file `.env` dengan API Key kamu dari [RAWG.io](https://rawg.io/apidocs):
    ```.env
    VITE_RAWG_API_KEY=MASUKKAN_API_KEY_KAMU_DI_SINI
    ```

6.  Jalankan aplikasi di mode *development*:
    ```bash
    npm run dev
    ```

---

## 📸 Screenshot Aplikasi

**1. Halaman Utama (Loading & Data)**
![Tampilan saat loading data](./Image/Tampilan%20saat%20loading%20data.png)
![Tampilan utama menampilkan list game](./Image/Tampilan%20utama%20menampilkan%20list%20game.png)

**2. Fitur Pencarian**
![Tampilan hasil pencarian](./Image/Tampilan%20hasil%20pencarian.png)

**3. Halaman Detail Game**
![Tampilan halaman detail game](./Image/Tampilan%20halaman%20detail%20game.png)# 🎮 UTS Pemrograman Web - Game Database

Project ini dibuat untuk memenuhi Ujian Tengah Semester (UTS) mata kuliah Pemrograman Web.

- **Nama:** Grace Exauditha Nababan
- **NIM:** 123140115

---

## 🚀 Link Deployment

Aplikasi dapat diakses secara *live* melalui link Vercel berikut:

**[https://uts-pemweb-123140115.vercel.app/](https://uts-pemweb-123140115.vercel.app/)**

---

## 📖 Deskripsi Project

Aplikasi ini adalah sebuah *database* game yang dibangun menggunakan **React (Vite)** dan mengambil data secara *real-time* dari **RAWG.io API**. Aplikasi ini memungkinkan pengguna untuk menjelajahi, mencari, memfilter, dan melihat detail dari ribuan game.

Project ini dibuat tanpa menggunakan *dependency* eksternal tambahan seperti `axios` atau `react-router-dom`, dan sepenuhnya mengandalkan **React Hooks** (`useState`, `useEffect`) dan **Fetch API** bawaan *browser* untuk *state management* dan navigasi.

---

## 🛠️ Fitur Utama

- **List Game Dinamis:** Menampilkan daftar game dalam format tabel (Cover, Judul, Rating, Tgl. Rilis).
- **Pencarian:** Fitur pencarian *real-time* untuk mencari game berdasarkan nama.
- **Filter Platform:** Filter game berdasarkan platform (PC, PlayStation, Xbox).
- **Sortir:** Mengurutkan game berdasarkan Rating atau Tanggal Rilis.
- **Halaman Detail:** Halaman detail untuk setiap game, menampilkan Deskripsi, Genre, dan *Screenshots*.
- **Loading State:** Menampilkan *loading indicator* saat data sedang diambil dari API.
- **Desain Responsif:** Tampilan dioptimalkan untuk *desktop* dan *mobile*.

---

## 💻 Teknologi yang Digunakan

- **React (Vite):** Library JavaScript untuk membangun UI.
- **React Hooks:** `useState` dan `useEffect` untuk *state management* dan *data fetching*.
- **Fetch API:** Untuk komunikasi dengan API eksternal (RAWG).
- **CSS Murni:** Styling kustom tanpa *framework* (menggunakan Flexbox & CSS Grid).
- **Vercel:** Platform untuk *deployment*.

---

## ⚙️ Cara Instalasi dan Menjalankan Lokal

1.  Clone repository ini:
    ```bash
    git clone [https://github.com/14-115-Grace/uts-pemweb-123140115.git](https://github.com/14-115-Grace/uts-pemweb-123140115.git)
    ```

2.  Masuk ke direktori project:
    ```bash
    cd uts-pemweb-123140115
    ```

3.  Install semua *dependencies*:
    ```bash
    npm install
    ```

4.  Buat file `.env` di folder utama (root) project.

5.  Isi file `.env` dengan API Key kamu dari [RAWG.io](https://rawg.io/apidocs):
    ```.env
    3caa66a0b4a548658c6f4ddcc8d013e7
    ```

6.  Jalankan aplikasi di mode *development*:
    ```bash
    npm run dev
    ```

---

## 📸 Screenshot Aplikasi

**1. Halaman Utama (Loading & Data)**
![Tampilan saat loading data](./Image/Tampilan%20saat%20loading%20data.png)
![Tampilan utama menampilkan list game](./Image/Tampilan%20utama%20menampilkan%20list%20game.png)

**2. Fitur Pencarian**
![Tampilan hasil pencarian](./Image/Tampilan%20hasil%20pencarian.png)

**3. Halaman Detail Game**
![Tampilan halaman detail game](./Image/Tampilan%20halaman%20detail%20game.png)
