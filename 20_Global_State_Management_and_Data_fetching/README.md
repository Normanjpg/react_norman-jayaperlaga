# react_norman-jaya
# (20) Global State Management

## Global State Introduction
Global State Management merupakan sebuah sarana yang digunakan untuk mengelola data dalam aplikasi, sehingga membuatnya semakin mudah untuk digunakan dan juga mengakses semua komponen dalama aplikasi.

Waktu yang tepat dalam menggunakan redux :

-	Banyak state yang perlu ditaruh di banyak tempat
-	State pada app sering berubah
-	Logic untuk mengubah state kompleks
-	Ukuran codebase yang sedang-besar, dan dikerjakan oleh banyak orang.
-	Perlu untuk mengetahui bagaimana state diupdate seiring dengan waktu.

Redux Libraries dan Tools :
1.	React-Redux
2.	Redux Toolkit
3.	Redux DevTools Extension

Komponen penting di Redux :
-	Actions : Digunakan untuk memberi informasi dari aplikasi ke store
-	Reducer : Pure JavaScript functions yang mengambil state aplikasi dan object action lalu mengembalikannya ke state aplikasi terbaru.
-	Store : Obyek sentral yang menyimpan state pada aplikasi

Kesimpulan :
-	Redux merupakan sebuah library untuk manajemen state global
-	Redux menggunakan struktur “One-way data flow”
-	Redux menggunakan beberapa tipe code.

## Redux Thunk
Thunk Middleware adalah redux yang memungkinkan kita untuk membuat action creator yang mengembalikan function dan bukan action.

Digunakan Untuk:
- untuk menghandle side effect logic kompleks seperti logic synchronous 
- untuk logic async seperti request data.

Install redux thunk : npm install redux-thunk
## Persisted State
persisted state merupakan sebuah redux yang digunakan untuk menyimpan state ke storage.

Install redux persist : npm install redux-persist
