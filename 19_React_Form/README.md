# react_norman-jaya
# (19) React Form

# Form 
Merupakan salah satu hal krusial dalam pengembangan aplikasi website. Form dapat digunakan untuk menghandle inputan dari user.
Kita sering kali menemukan Form dalam upaya kita untuk login, feedback, hingga mengisi alamat pengisian pengiriman paket kita. Dalam react Sendiri kita dapat mempelajari banyak hal dari form seperti bagaimana menghandle inputan yang diterima sehingga bagaimana cara memvalidasi inputan tersebut.

Macam form:
- Elemen input digunakan untuk inputan yang tidak terlalu panjang.
- Elemen textarea digunakan untuk inputan yang panjang.
- Elemen select digunakan untuk inputan yang isinya sudah ditentukan macam dropdown menu.
- Elemen radio button digunakan dimana kita hanya dapat memilih 1 pilihan diantara beberapa pilihan yang ada dengan radiobutton.
- Elemen Checkbox digunakan untuk memilih lebih dari 1 pilihan berbeda dengan checkbox.

Selain macam elemen form diatas masih ada banyak lagi elemen form yang lainnya.

# Controlled Component
Merupakan sebuah hal yang kita lakukan untuk menggabungkan cara menyimpan dan memperbarui state di html dan react. dimana nantinya komponen react akan merender form dan juga mengontrol apa yang terjadi dalam from tersebut serta masukan pengguna selanjutnya.

## Textarea pada HTML vs React
Pada Html elemen ini mendefinisikan text didalamnya sebagai elemen anaknya, namun direact textarea menggunakan atribut value sehingga sebuah form yang menggunakan textarea dapat ditulis dengan cara yang mirip dnegan sebuah form yang menggunakan input 1 baris.

## Select pada HTML vs React
Pada html elemen ini membuat daftar dropdown. namun direact alih alih menggunakan atribut selected namun menggunakan atribut value ditag select sehingga lebih mudah mengubahnya.

# Uncontrolled Component
Adalah alternaif lain dari controlled componnect dimana data form akan ditangani oleh DOMnya sendiri. untuk menulis uncontrolled component alih alih menulis event handler untuk setiap pembaruan state namun kita menggunakan ref untuk mendapatkan nilai form dari DOM. sehingga lebih mudah menggunakan uncontrolled component pada form react dan non react karena hanya akan ada lebih sedikit code yang kita tulis meski tidak rapi.

## Atribut Default
Pada lifecycle rendering react, atribut value pada form akan menimpa nilai pada DOM. untuk itu kita menggunakan atribut default value untuk menangani masalah dimana kita ingin react menentukan nilai awal tetapi pembaruan selanjutnya dilakukan secara uncontrolled component.

# Basic Validation learning
Digunakan dikarenakan keperluan untuk memvalidasi form yang akan disubmit karena:
- Mencari input data yang benar dan sesuai format. 
- Melindungi akun pengguna
- Melindungi sistem dan aplikasi

Tipe validasi data form:
- Client side validation
- Server Side validation

## Built-in Form validation
- required digunakan untuk menentukan field form perlu diisi sebelum formulir dapat dikirimkan.
- minlength dan maxlength digunakan untuk menentukan jumlah minimal dan maksimal karakter yang dapat dimasukan. jika belum sesuai ketentuan maka akan memunculkan pemberitahuan.
- min dan max digunakan untuk menentukan nilai minimum dan maksimum angka yang bisa dimasukan.
- type digunakan untuk menentukan jenis data apakah berupa angka, email, password, atau text biasa.
- pattern digunakan untuk menentukan regex yang mendefinisikan pola data yang boleh dimasukan.

