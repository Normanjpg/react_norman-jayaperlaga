# react_norman-jaya
# (27) GraphQL Query and Mutation

## Query
Cara menggunakan Query dengan apollo client :
1.	Mengimport gql dan useQuery atau anda bisa langsung menyalin dari hasura.
2.	Mendapatkan data awal dengan memanggil useQuery pada project anda.
3.	Mengonsumsi data pada kode jsx, pastikan bahwa untuk permintaan pertama data adalah null sehingga perlu menggunakan rangkaian opsional agar menghindari kesalahan.

Penggunaan Query dengan Apollo Client – Lazy Query:

- useLazyQuery sangat cocok untuk mengeksekusi Query sebagai respons selain rendering komponen. Berbeda dengan useQuery, pemanggilan useLazyQuery, tidak akan segera mengeksekusi Query yang terkait. 

Penggunaan Query dengan Apollo Client – Refetching :

- Refetching merupakan sebuah proses yang memperbolehkan anda untuk menyegarkan hasil query sebagai respons pada tindakan seorang user. Refetching ini tidak menggunakan interval yang tetap. sehingga anda dapat memberikan cara kerja yang opsional yaitu dengan memberikan objek variabel baru ke fungsi refetch. Jika tidak, Query akan secara otomatis menggunakan variabel yang sama dengan yang digunakan dalam eksekusi sebelumnya

## Mutation
Cara menggunakan mutation dengan apollo client :
1.	Import useMutation hooks dari apollo client dan didefinisikan.

Penggunaan mutation insert data dengan apollo client :
1.	Aktifkan useMutation dan menggunakan array destruction define mutation handler(insertTodo).
2.	Panggil fungsi insertTodo dengan sebuah variabel.

Penggunaan mutation update data dengan apollo client :
1.	Definisikan update Query.
2.	Membuat mutation handler untuk mengupdate todo.
3.	Panggil fungsi update Query.

Penggunaan mutation delete data dengan apollo client :
1.	Definisikan delete Query.
2.	membuat mutation handler untuk delete todo.
3.	Panggil fungsi delete Query.
