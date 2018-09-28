# Panduan berkontribusi
Terdapat tiga jalan bagi Anda jika berkontribusi melalui Github:
1. Memberi bintang ⭐️ pada repository ini.
1. Mengirimkan [issue](https://github.com/w3id/webunconfid-website/issues).
1. Jangan mengirimkan pull request tanpa ada issue agar tidak overlapping
1. Mengirimkan pull request ke branch `dev`. <br />
   Jika Anda mengirimkan pull request, pastikan fitur atau pembaharuan yang ingin Anda kerjakan tidak dilakukan pada branch master agar memudahkan maintainer project dan tidak mengganggu jalannya repository yang sedang dikerjakan.
   Nb: *Kebijakan ini kembali kepada maintainer project*.

## Panduan khusus untuk nomor 3
Jika Anda ingin berkontribusi melalui kode seperti menambah atau mengubah fitur, mohon lakukan petunjuk di bawah ini.
- Fork repository dan pastikan fork repo up to date melalui panduan [gist ini](https://gist.github.com/CristinaSolana/1885435) atau [backstroke](https://backstroke.co/).
- Git clone repository yang sudah di fork.
- Menginstal dependencies dengan perintah `npm install` atau `yarn` atau `yarn install`
- Buat branch baru sesuai dengan issue atau fitur yang ingin dikerjakan. Misalnya membuat service worker, maka buat branch: ```feature:add-service-worker```.
- Setelah selesai lakukan git push dan lakukan pull request.
