# react_norman-jaya
# (12) Clean Code

## Pengertian
Merupakan sebuah istilah yang digunakan oleh programmer pada sebuah kode yang mudah dipahami, dibaca, dan mudah diubah oleh programmer lainnya.

### Kenapa menggunakan clean code?
- Karena untuk mempermudah kerja sama antar programmer lainnya sehingga kode lebih mudah dimengerti.
- dapat dikembangkan lebih cepat dikarenakan sudah rapih dan mudah dilakukan penambahan kode yang.

## 9 Karakteristik dari Clean Code
1.	Mudah dipahami 
2.	Mudah dieja dan dicari 
3.	Singkat namun mendeksrpsikan konteks
4.	Konsisten 
5.	Menghindari penambahan yang tidak diperlukan.
6.	Adanya komentar yang membantu mendeksripsikan konteks.
7.	Good function.
8.	Menggunakan konvensi.
9.	Formatting 

## KISS (Keep It So Simple)
Merupakan sebuah prinsip yang diterapkan pada clean code dimana arti dari KISS adalah Keep It So Simple dimana arti nya adalah untuk menghindari membuat fungsi yang dibuat untuk melakukan A, sekaligus memodifikasi B dan mengecek fungsi C. 
Tips prinsip KISS:
- Fungsi dan class harus kecil.
- Fungsi dibuat untuk melakukan 1 tugas saja.
- Jangan menggunakan terlalu banyak argument dalam 1 fungsi.
- Memperhatikan kondisi dalam menulis kode agar selalu seimbang, kecil dan jumlahnya minimal.

## DRY (Don't Repeat Yourself)
Merupakan singkatan yang berarti Don’t Repeat Yourself. Yang mengingatkan kita untuk tidak melakukan banyak duplikasi kode dengan sering copy paste. Untuk menghindari masalah duplikasi ini maka buatlah sebuah fungsi kode yang dapat digunakan secara berulang-ulang.

## Refactoring 
Merupakan proses restrukturisasi kode yang dibuat dengan mengubah struktur internal tanpa mengubah perilaku eksternal. Prinsip KISS dan DRY dapat dicapai dengan cara refactor. Teknik yang digunakan:
-	Membuat sebuah abstraksi.
-	Memecah kode dengan fungsi/class.
-	Perbaiki penamaan dan lokasi kode.
-	Deteksi kode yang memiliki duplikasi.
