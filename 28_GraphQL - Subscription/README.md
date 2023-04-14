# react_norman-jaya
# (28) GraphQL - Subscription

# Setting Subscription
1. Menginstall subscription-transport-ws untuk mengaktifkan hubungan websocket.
2. Mengimport semua module yang diperlukan dan memisahkan antara http dan link websocket.
3. Membuat httpLink untuk query dan mutation. dan wslink untuk subscription. catatan: wss lebih aman daripada ws persis seperti bagaimana https lebih aman dari http.
4. Menambahkan split function dan use as link ketika membuat client. function split ini digunakan untuk mengkombinasi kedua link menjadi 1 link sesuai tipe operasi yang sedah diexsekusi. ketika operasi subscription kemudian gunakan wsLink dan ketika operasi query dan mutation menggunakan httpLink.

Penggunaan Subscription dengan useSubscription:

5. Mengimport useSubscription dari apollo client dan didefinisikan.
6. Mengaktifkan Subscription dan menggunakan data.

Penggunaan Subscription dengan subscribeToMore:

7. subscribeToMore Merupakan fungsi yang memperbolehkan anda untuk mengeksekusi sebuah subscription. biasanya untuk subscribe field spesifik yang termasuk dalam query. atau ketika server mengembalikan hanya 1 update data instead semua data. 