# react_norman-jaya
# (15) Event Handling

## Pengertian State
State merupakan data private dari sebuah komponen. Data ini hanya tersedia untuk komponen tersebut dan tidak bisa diakses dari komponen lainnya.


## Stateful Component
Merupakan sebuah komponen yang memiliki state. Komponen ini dibuat dengan class. kelebihan yang dimiliki adalah adanya lifecycle.

## Stateless Component
Merupakan sebuah komponen yang hanya punya props. Umumnya komponen ini dibuat dengan function karena codenya lebih ringkas.

## Perbedaan Stateful dan Stateless
Kedua komponen ini memiliki banyak nama berbeda:

1. Smart component & Dump component
2. Container component & Presentational component

Sifat yang dimiliki Stateless Component:
- Tidak tahu tentang aplikasi
- Tidak melakukan data fetching
- Tujuan utamanya adalah visualisasi
- Dapat digunakan kembali
- Hanya berkomunikasi dengan induk langsungnya

Sifat yang dimiliki Stateful Component:
- Mengerti tentang aplikasi
- Melakukan data fetching
- Berinteraksi dengan aplikasi
- Tidak dapat digunakan kembali
- Meneruskan status dan data ke anak-anaknya

## Handling Event
Merupakan suatu metode untuk menangani sebuah event yang diberikan pengguna pada suatu komponen.
