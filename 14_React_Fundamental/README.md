# react_norman-jaya
# (14) React Fundamental

## JSX 
Merupakan sebuah singkatan dari javascript XML yang juga berfungsi sebagai ekstensi pada javascript.

Alasan menggunakan JSX:
- JSX dibuat berdasarkan fakta bahwa logika rendering sangat terikat dengan logika UI
- Separation of technology => Separation of concerns

Spesifikasi jenis Elemen React
-	Kapitalisasi untuk komponen React 
-	Huruf kecil (lowecase) untuk komponen bawaan.


JSX adalah expression Setelah dikompilasi, exspresi dari JSX akan menjadi panggilan fungsi JavaScript biasa dan menjadi objek JavaScript.

Menaruh expression pada JSX dilakukan dengan menaruh ekespresi JS yang valid pada JSX dengan menggunakan kurung kurawal.

Menentukan atribut dengan JSX : 
-	Tanda kutip untuk menentukan string literal
-	Kurung kurawal untuk menyematkan ekspresi JavaScript
-	React DOM menggunakan camelCase sebagai konvensi penamaan.

## Pengenalan React Component
Komponen React merupakan bagian dari kode yang dapat dipanggil kembali untuk menentukan tampilan, behavior, dan state pada UI. Didalam Komponen terapat suatu Props => State => Dom.

Contoh Membagi UI menjadi beberapa component :
-	Filerable Product label
-	Search Bar
-	Product Table
-	Product Category Row
-	Product Row

Semua komponen tersebut dapat digunakan beberapa kali sesuai dengan kebutuhan yang digunakan.

## Component Composite
Props merupakan singkatan dari properties, yang membuat kita dapat memberikan argumen / data pada component. Props digunakan untuk membantu untuk membuat komponen menjadi lebih dinamis dan juga dapat digunakan untuk mengoper ke component yang sama seperti memberikan atribut pada tag html. Props pada component adalah read-only dan tidak dapat diubah.

One Way data Flow secara umum artinya adalah data hanya 1 dan hanya memiliki 1 cara untuk di transfer ke bagian yang lain.
Komposisi komponen :
-	Kontainmen
-	Spesialisasi

## React Lifecycle
Merupakan sederetan event yang terjadi pada saat aplikasi itu muncul sampai aplikasi tersebut menghilang. 

Event tersebut terbagi menjadi 3 :
-	Mounting (lahir)
-	Updating (tumbuh/berkembang)
-	Unmounting (mati)

Pada setiap event akan terbagi menjadi 3 fase :
-	Render phase
-	Pre-commit phase
-	Commit phase

Lifecycle method yang umum digunakan :
1.	render()
- Fungsi dari render sering dipakai 
- Required pada class component, 
- Pure function yaitu tidak boleh ada setState().

2.	componentDidMount()
- Sebuah method yang dipanggil ketika komponen sudah di render untuk pertama kali 
- Merupakan tempat untuk pemanggilan API 
- Boleh terdapat setState().

3.	componentDidUpdate()
- Komponen yang dipanggil ketika terjadi update (props atau state berubah)

4.	componentWillUnmount()
- Dipanggil ketika sebuah component akan dihancurkan 
- Sangat cocok untuk clean up actions

## Conditional and List
Render Bersyarat : Membuat komponen berbeda yang mencangkup perilaku yang dibutuhkan, lalu kita dapat me-render hanya beberapa bagian saja, berdasarkan state aplikasi anda.

-	Menggunakan If
-	Inline If dengan operator &&
-	Inline If-Else dengan ternary conditional operator
-	Mencegah komponen untuk rendering

Render List : membangun koleksi dari beberapa elemen dan menyertakannya dalam JSX menggunakan tanda kurung kurawal {}.

Key membantu react untuk mengidentifikasi item mana yang telah diubah, ditambahkan, atau dihilangkan.

## Directory Structure
React tidak memiliki pendapat tentang bagaimana cara memasukkan file ke folder. Karena merupakan sebuah library. 

hal-hal yang perlu dihindari dalam struktur direktori :
-	Hindari terlalu banyak nesting
-	Jangan terlalu memikirkannya
