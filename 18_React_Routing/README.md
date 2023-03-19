# react_norman-jaya
# (18) React Routing

## Pengertian Router
Router merupakan modul dalam react yang berfungsi untuk melakukan proses navigasi pada SPA(Single Page Application)

## MPA VS SPA
Multi Page Application merupakan jenis aplikasi website dimana perlu memuat ulang seluruh halaman web setiap kali membuat permintaan baru dan juga sering disebut sebagai (tradisional web app).

Single Page Application merupakan salah satu jenis aplikasi website dimana hanya ada 1 halaman yang menangani semua aktifitas yang terjadi dalam aplikasi tersebut.

### Keunggulan SPA
- waktu loading lebih cepat
- tidak ada query tambahan ke server
- front-end yang cepat dan responsif
- meningkatkan pengalaman pengguna (user experience)

### Keunggulan MPA
- SEO website akan lebih mudah dioptimalkan
- memudahkan mengubah halaman tertentu untuk kebutuhan yang berbeda
- menggunakan tools analisis seperti google analytic yang terintregasi pada website

### Keunggulan SPA
- tidak baik dalam SEO
- berat saat diload pertama kali
- kurang aman dibanding web biasa
- masalah kompatibilitas browser

### Keunggulan MPA
- kecepatan download website lebih lama dari SPA
- perlu integrasi antara backend dan frontend
- lebih sering membutuhkan maintance

## React Router
BrowserRouter digunakan sebagai router yang menggunakan API history dari html 5 sehingga dapat menggunakan location untuk sinkronisasi UI dengan URL. 

Switch digunakan sebagai pengarah jalannya lalu lintas suatu aplikasi web. 

Route digunakan untuk membungkus kumpulan beberapa component Route.

Link digunakan untuk berpindah antar halaman, dimana property to merujuk pada path diroute yang akan dituju.

## Perbedaan *Link* dan *Redirect*
Link :
- Dapat digunakan pada kondisi apapun
- Memberikan history baru pada browser
- Bereaksi dengan klik serupa a href

Redirect :
- Lebih sering digunakan pada halaman 404
- Menimpa history pada browser
- bereaksi dengan suatu kondisi

## Hook Routing React
useHistory memberi kita akses ke instance riwayat yang dapat digunakan untuk bernavigasi, contoh:
- length
- go
- goBack
- goForward
- Push

useParams mengembalikan objek pasangan kunci atau parameter URL. digunakan untuk mengakses match.params dari Route saat ini.

useRouteMatch mencoba mencocokan URL saat ini dengan cara yang sama seperti Route. ini sebagian besar berguna untuk mendapatkan akses ke data kecocokan tanpa benar-benar merender route.



