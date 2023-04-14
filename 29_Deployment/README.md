# react_norman-jaya
# (29) Deployment

## Build React App
Build dilakukan karena secara default React mengandung banyak pesan peringatan. peringatan-peringatan ini berguna dalam development (pengembangan aplikasi). Namun, karena itu juga membuat React menjadi lebih berat dan lambat. sehingga kita harus menggunakan versi Build(produksi) ketika akan mendeploy aplikasi React kita. Tujuan dilakukan Build ini agar aplikasi buatan kita menjadi versi produksi dimana pada versi ini performanya lebih ringan dan cepat dibandingkan versi developmentnya.

Cara melakukan Build:
- Tergantung kalian bagaimana kalian sebelumnya namun apa bila menggunakan Create React App kita hanya perlu merun "npm run build" yang akan membuat versi produksi aplikasi kita didalam folder dist/.

## Run Optimized App
untuk menjalankan aplikasi secara optimal dilokal komputer kita kita akan menggunakan serve. 

cara menginstall dan menjalankan serve:
- npm install -g serve
- serve -s build

## Deployment
merupakan sebuah kegiatan yang bertujuan untuk menyebarkan aplikasi yang sudah kita buat sebelumnya. diharapkan dengan kita mendeploy aplikasi ini di publik maka aplikasi ini akan dapat diakses dan dimanfaatkan oleh lebih banyak orang, tidak hanya oleh kita sendiri.

## Deployment dengan Surge:
Surge merupakan layanan penerbit website statik yang gratis untuk Front-End Developers. ketika kita menggunakan surge maka akan memiliki subdomain .surge.sh. Surge dapat menerima file html, css, dan js.

Cara menginstall Surge:

1. pastikan sudah node versi terbaru.
2. Menginstal surge "npm install --global surge"

Mendeploy dengan Surge:

3. menjalankan perintah "surge" diterminal.

Teardown Surge:

merupakan sebuah kejadian dimana kita tidak ingin mempublikasikan sebagian domain atau subdomain. untuk itu kita bisa menteardown project kita melalui surge cli agar menjadikan proyek kita offline.

## Deployment dengan Netlify CLI:
Netlify merupakan salah satu platform penyedia layanan build tools, sekaligus deployment. dengan Netlify kita dapat mempublish website statis secara gratis. Netlify ini juga sudah terintegrasi dengan Git Host semacam Github, Gitlab dan Bitbucket.

Cara menginstall Netlify:

1. Buat akun Netlify
2. Menginstal Netlify "npm install netlify-cli -g"

Mendeploy dengan Netlify:

3. menjalankan perintah "netlify deploy" diterminal.
4. Menverify akun melalui browser kemudian diAuthorize.
5. Pilih "Create & configure a new site"
6. Pilih lokasi file yang akan dideploy. 
