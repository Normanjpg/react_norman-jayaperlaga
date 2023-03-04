# react_norman-jaya
# (11) Introduction Data Structures (javascript)

## Pengenalan Data Structure
Data adalah sebuah cangkupan luas yang merujuk pada semua tipe informasi yang tersimpan dalam memory computer. Data ini dapat dikelola dengan berbagai cara. Data structure ini merupakan sebuah cara menyimpan, mengorganisir data yang ada didalam memory computer.

Kelebihan dari Data structure 
-	Mengerti kualitas dari kode yang telah dibuat
-	Kode lebih efisien
Basic data structure ini terbagi menjadi 2 yaitu array dan set. Sedangkan operasi data structure terbagi manjadi 4, yaitu : Read, Search, Insert, dan Delete.

## Mengukur kecepatan operasi
Pengukuran operasi ini tergantung pada banyak sedikitnya Langkah-langkah yang digunakan dimana semakin sedikit dan pendek langkahnya maka operasi tersebut termasuk sangat cepat.

## Array 
Merupakan data structure yang paling dasar dan serbaguna. Dalam array Langkah operasi yang dilakukan sebagai berikut:
- Reading = Reading adalah sebuah operasi yang efisien dan tercepat karena hanya memerlukan 1 step saja. Pada reading ini akan melihat data apa yang terkandung pada indexk tertentu didalam array. Hal ini dimudahkan karena setiap cell pada memory memiliki alamat yang diwakilkan angka.

- Searching = Searching merupakan kebalikan dari reading yang mana Ketika melakukan searching tidak dapat melompat secara langsung menuju alamat yang dituju seperti reading. Namun searching akan mencari nilai dengan mengecek satu persatu isi array sehingga akan membutuhkan banyak Langkah dalam operasi mencari data ini. Karena itu operasi ini kurang efisien dibandingkan dengan reading.

- Insertion = Insertion merupakan sebuah proses memasukan suatu value pada akhir array yang hanya memerlukan 1 langkah. Namun efisiensi dari proses ini tergantung dimana kita mau memasukan value kemana.

- Deletion = Deletion meripakan sebuah proses menghilangkan value dari suatu indeks. Deletion sendiri membutuhkan jumlah N steps untuk array yang mengandung N data.

## Set
Merupakan data structure yang serupa array namun memiliki perbedaan dimana set tidak dapat menduplikasi value yang akan dimasukan dalam indeksnya. Langkah operasi yang dilakukan sebagai berikut:
- Reading = serupa dengan array namun dalam set ini tidak diizinkan adanya duplikat value didalam set. Dalam set juga dapat menggunakan ForEach.

- Searching = serupa dengan array dan dalam set akan menggunakan method.

- Insertion = Memerlukan sebuah steps tambahan untuk memastikan bahwa value yang ingin dimasukkan tidak berada didalam set. Maka dari itu operasi searching akan dijalankan terlebih dahulu untuk melihat value yang akan dimasukkan. Setelah value dirasa tidak ada didalam indeks, maka value akan dapat dimasukkan. 

- Deletion = dapat menggunakan method delete.

## Kesimpulan
-	Menganalisa jumlah Langkah operasi sangat penting untuk mengetahui efesiensi performa data structure dalam aplikasi.
-	Reading, searching, dan deletion pada array dan set memiliki efisiensi yang sama, yaitu : I steps, N steps, dan N steps.
-	Disarankan menggunakan array apabila tidak memerlukan pemeriksaan duplikasi
-	Set penting apabila kita menginginkan data structure yang bebas dari duplikasi namun akan sedikit lebih lambat operasinya dibandingkan dengan array.
