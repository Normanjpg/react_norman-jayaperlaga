# summary/resume/rangkuman
## Version Control and Branch Management

•	Versioning

Merupakan sebuah pengaturan versi dari source code program. Contohnya Ketika sedang melakukan revisi dalam dokumen proposal yang kita buat, dimana kita tidak langsung mengganti dokumen proposal kita. Namun kita akan memantau apa saja perubahan yang kita buat. Bila tidak kita pantau maka akan membuat kita dan orang lain mudah bingung karena itu lah dilakukan version control system agar revisi yang kita lakukan pada dokumen menjadi lebih tercatat, jelas, dan rapih bagaimana saja revisi yang dilakukan. Alat-alat yang digunakan dalam melakukan pencatatan ini contohnya adalah Version Control System(VCM), Source Code Manager(SCM), Revision Control System (RCM). 
Sejarah penggunaan VCM adalah Single user (1972-1982), Centralized (1986-2005), Distributed(2005-Sekarang). Git merupakan salah satu penggunaan VCM yang cukup popular digunakan saat ini namun selain Git juga terdapat beberapa bentuk penerapan VCM lainnya.

•	Git Install & Setting UP

Instal git terlebih dahulu kemudian dapat dilakukan configurasi dengan memasukan email dan username beserta password github. 
Kemudian kita sudah dapat memulai membuat clone ataupun melakukan git remote terhadap repository yang kita perlukan.
Contoh command yang dapat digunakan dalam git:
- “$ git diff –staged” Berfungsi untuk Menunjukan perbedaan yang ada pada area staging.
- “$ git stash” Berfungsi untuk menyimpan pada stash area.
- “$ git stash apply” Berfungsi untuk memanggil yang telah tersimpan dalam stash area.
- “$ git log --oneline” Berfungsi untuk menampilkan commit yang telah dilakukan dan idnya. 
- “$ git checkout” Berfungsi untuk menavigasi antara branch yang sudah dibuat dalam git.
- “$ git reset” Berfungsi untuk mengembalikan keadaan ke titik sebelumnya.
- “$ git remote” Berfungsi untuk membuat, melihat, dan mendelete konseksi pada suatu repository.
- “$ git pull origin master” Berfungsi untuk mengambil commit dan file dari repository yang dituju untuk dimasukan dan mengupdate local repository.
- “$ git push origin master” Berfungsi untuk mengupload local repository kepada remote repository yang dituju.
- “$ git branch --list” Berfungsi untuk melist terdapat branch apa saja yang ada pada repository.
- “$ git branch <nama branch>” Berfungsi untuk membuat branch git baru dalam repository.
- “$ git branch -D <nama branch>” Berfungsi untuk menghapus branch git dalam repository.
- “$ git status” Berfungsi untuk menampilkan keadaan working directory dan staging area.
- “$ git add .” Berfungsi untuk menambahkan semua file yang sudah dimodifikasi.
- “$ git commit -m <”pesan commit”> ” Berfungsi untuk melakukan commit dan juga memberikan pesan commit terhadap file yang dimodifikasi.

•	Catatan tambahan:
- Branch master jangan diubah ubah bila belum final.
- Buat branch development untuk menggabungkan setiap branch feature lain sebelum dimerge ke branch master. 
- Apabila menambahkan atau mengubah usahakan membuat branch baru dahulu sebelum meminta pull request ke branch development.
