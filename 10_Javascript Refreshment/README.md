# react_norman-jaya
# (10) Javascript Refreshment

## Pendahuluan Javascript
Javascript merupakan sebuah Bahasa pemrograman yang high level dimana artinya Bahasa tinggi ini merupakan Bahasa yang lebih mudah dipahami manusia. Javascript ini dibuat untuk membuat interaksi apapun yang dilakukan didalam halaman web. Javascript ini juga memiliki sifat untyped yang artinya tidak mempengaruhi type data. Sehingga javascript ini akan mudah digunakan dalam mendeveloping web dimana dengan javascript ini website yang dibuat akan dapat digunakan di berbagai browser.

## Var, Let, Const
Declaration merupakan sebuah proses pembuatan variable yang digunakan untuk menyimpan data.
- Var = Sudah jarang digunakan
- Let = Digunakan Ketika kita membutuhkan nilai yang dapat diubah
- Const = Digunakan Ketika kita membutuhkan nilai yang tidak bisa di reassign lagi.

Scoping berfungsi untuk menentukan dimana variable dan fungsi diatur dan dapat diakses dalam kode kita.
- Global = Variabel dapat diakses dalam setiap kondisi saat menulis kode.
- Function = Variabel tidak dapat diakses diluar function itu.
- Block = Variabel yang diberikan akses tutup dengan tanda kurung.

Hoisting berfungsi untuk membuat beberapa jenis variable atau fungsi yang dapat diakses didalam kode sebelumnya.
- Var dan function = hoisted
- Let dan const = Tidak hoisted.

## Value & Reference
JavaScript mempunyai 2 kategori dalam tipe data, yaitu primitive dan object.
- Primitive dalam pemrograman adalah unit pemrosesan terkecil dan elemen paling sederhana yang tersedia dalam bahasa pemrograman.
- Object adalah unit yang menyimpan property dan fungsi (method).
Aturan sederhana untuk meneruskan value adalah bahwa semua nilai primitive dalam JavaScript diteruskan oleh value. Sedangkan untuk meneruskan reference bagaimanapun akan memberikan reference yang sama.

## Destructuring
Merupakan sebuah eksperesi yang mana javascript akan menyalin nilai dari array atau property dr suatu objeck ke dalam variable yang berbeda.

## Method
Merupakan sebuah fungsi yang berkaitan dengan object yaitu dimana membuat program secara sederhana sesuai dengan kegunaan nya masing-masing. Method ini terbagi menjadi beberapa bagian.
- Concat= menggabungkan 2 array atau lebih array dan mengembalikan Salinan array yang digabung.
- Map	= Membuat array baru dengan hasil memanggil fungsi untuk setiap elemen array.
- Foreach = Memanggil fungsi untuk setiap elemen array.
- Slice	= Memilih bagian dari array dan mengembalikan array baru.
- Filter	= Membuat array baru dengan setiap elemen dalam array yang lulus seleksi.
- Reduce  = Melakukan operasi pada setiap elemen array menjadi nilai tunggal.

## Control Flow
Control flow digunakan untuk mengatur alur eksekusi pada statement serta untuk programnya sesuai dengan keinginan user.
Normal flow merupakan pengeksekusian statement dari atas ke bawah atau kiri ke kanan yang dilakukan secara berurutan

## Function
Function merupakan sebuah objek di dalam javasript dikarenakan dia memiliki properti dan method di dalamnya. Function digunakan untuk melakukan serangkaian komputasi / prosedur berulangkali.
Deklarasi fungsi:
- Nama fungsi
- Parameter
- Area fungsi 
- Memanggil fungsi

## Async – Await
- Synchronous : mengeksekusi setiap perintah secara berurutan dari atas kebawah
- Asynchronous : mengeksekusi setiap perintah tidak selalu secara berurutan
- Callback : Fungsi yang berperan sebagai parameter untuk fungsi yang dijalankan lainnya.
- Promise : Objek yang memastikan suatu keberhasilan dan kegagalan dalam asynchronous.
- Await : Menghentikan proses eksekusi dengan menunggu promise selesai. 

## Classes
- Class : sebuah prototype dari suatu object
- Constructor : method yang berada didalam class yang akan dipanggil pertama kali
- Method : fungsi yang berada di dalam class
- Attributes : kumpulan variabel yang membentuk object di dalam suatu class
- Extend : elemen yang digunakan untuk membuat kelas anak dari sebuah kelas induk

## DOM
DOM merupakan sebuah API HTML yang merepresentasikan halaman web dari sebuah dokumen menjadi sebuah object.
- Selection Method
- Manipulation
- Event
