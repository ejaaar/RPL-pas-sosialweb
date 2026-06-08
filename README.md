// dokumentasi RPL PAS

1. Penjelasan Fetch API: Aplikasi ini mengambil data pengguna secara asinkron (*asynchronous*) dari *endpoint* publik eksternal: `https://jsonplaceholder.typicode.com/users`.

2. Struktur Komponen & Fungsinya:
-Navbar: Menyediakan komponen navigasi atas statis dan identitas aplikasi.
-UserList: Berfungsi sebagai kontainer utama yang melakukan pemetaan (*mapping*) data array dari API untuk merender grid kartu pengguna.
-UserCard: Kartu representasi individual pengguna yang menangani interaksi tombol aksi (*Like* & *Follow*) serta memicu navigasi masuk ke detail profil.
-UserProfile: Halaman detail yang memuat biografi, informasi kontak, serta sistem tab navigasi internal untuk menyaring relasi data pengguna.
-Footer: Menampilkan catatan kaki dokumentasi hak cipta aplikasi di bagian bawah.

3. Implementasi React Hooks

a. useState: Digunakan untuk mengelola status lokal yang dinamis di dalam komponen, seperti menyimpan data array mentah hasil penarikan API atau mengontrol navigasi tab aktif pada halaman profil.
[code] (<img width="380" height="72" alt="usestate" src="https://github.com/user-attachments/assets/b0761300-1707-4839-b6d4-c72595bc5f8d" />)


b. useEffect: Digunakan untuk menangani siklus hidup komponen, tepatnya untuk mengeksekusi fungsi asinkron penarikan data dari API server hanya satu kali saat aplikasi pertama kali dimuat .
[code] (<img width="497" height="145" alt="useeffect" src="https://github.com/user-attachments/assets/fb83c185-bc07-4548-acbf-e3a8ca90dffd" />)


c. useContext: Digunakan untuk mengaktifkan mekanisme manajemen status global (SocialContext) guna menghindari kendala transfer data berlapis. Melalui hook ini, status data interaksi tombol dari komponen UserCard dapat langsung disinkronkan secara real-time ke komponen UserProfile.
[code] (<img width="457" height="85" alt="usecontext" src="https://github.com/user-attachments/assets/8940253f-02a6-4d90-aa15-54d2f4f01ff1" />)


d. useRef: Digunakan untuk memegang referensi langsung ke elemen DOM fisik tanpa memicu proses perenderan ulang (re-render) komponen, salah satunya untuk memberikan fokus otomatis pada kolom input pencarian data pengguna saat aplikasi selesai dimuat.
[code] (<img width="603" height="258" alt="useref" src="https://github.com/user-attachments/assets/8d9d002c-de30-48cf-beed-6570111ff9ba" />)


