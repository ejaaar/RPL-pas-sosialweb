// dokumentasi RPL PAS

1. Penjelasan Fetch API: Aplikasi ini mengambil data pengguna secara asinkron (*asynchronous*) dari *endpoint* publik eksternal: `https://jsonplaceholder.typicode.com/users`.

2. Struktur Komponen & Fungsinya:
-Navbar: Menyediakan komponen navigasi atas statis dan identitas aplikasi.
-UserList: Berfungsi sebagai kontainer utama yang melakukan pemetaan (*mapping*) data array dari API untuk merender grid kartu pengguna.
-UserCard: Kartu representasi individual pengguna yang menangani interaksi tombol aksi (*Like* & *Follow*) serta memicu navigasi masuk ke detail profil.
-UserProfile: Halaman detail yang memuat biografi, informasi kontak, serta sistem tab navigasi internal untuk menyaring relasi data pengguna.
-Footer: Menampilkan catatan kaki dokumentasi hak cipta aplikasi di bagian bawah.

3. Implementasi React Hooks dan Bukti:
- React Hooks: Digunakan untuk mengelola status lokal yang dinamis di dalam komponen, seperti menyimpan data array mentah hasil penarikan API atau mengontrol navigasi tab aktif pada halaman profil.
