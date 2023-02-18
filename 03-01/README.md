MINGGU 3 ( DAY - 1 )

Mempelajari Git dengan Github.

Kegunaan Git :
- Untuk distribusi source code.
- Versioning Control -> Memanage perubahan-perubahan yang terjadi di dalam source code, baik kembali versi yang lama atau yang lebih baru.
- Tracking perubahan
- Ngetrack perubahan file bukan folder, otomatis kalau folder kosong tidak bisa
.gitkeep - untuk melakukan push folder kosong

Langkah 
- Masuk ke folder lalu terminal
- git init
- git status
- git add .
- git log/git log --oneline
- git config (untuk menset-up alamat email)
- git commit -m 'Initial commit' = menandai perubahan

Buka github
- Create repository
Push an existing repository from the command line
- add ssh key 
- git remote add origin git@github.com:novicefrontendev/coba-git-naya.git
- git push origin master

- git remote add origin https://github.com/novicefrontendev/coba-git-naya.git : Membuat salinan di github bukan di local (computer)
- git remote -v
- git push origin master

- git pull origin master (di directory project yang sama)


Coba asal git status tanpa git init -> You will get an error!

Versioning 
- git checkout -"commit hash"

Perubahan file
- git add .
- git commit -m
- git push

Origin & Master cuma nama aja bisa diubah

Perbedaan directory dan repository :
- directory = umum, parent
- repository = spesifik, child

Repository dibuat di dalam directory.