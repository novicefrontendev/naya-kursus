Universal Javascript 

- Awalnya JS hanya untuk web browser agar tampilan interaktif lalu dikembangkan agar JS bisa dijalankan 
di luar web browser sehingga dibuat NodeJS, NodeJS bukan framework tapi lebih tepat dikatakan sebagi runtime, tugasnya seperti JS.

- Frontend juga butuh NodeJS untuk tooling bundler.

- Di web browser this adalah window, sedangkan di NodeJS adalah global, global.console.log().

- Document tidak berlaku di Node.JS, yang dikelola adalah sistemnya pada NodeJS

NPM

- require butuh relative atau absolute path.

- Ditandai dengan adanya file package.json dengan npm init

- npm punya banyak modul untuk digunakan sesuai fungsinya, contohnya nodemon. Kalau di install ada file node_modules & package-lock.json

- devDependencies tidak di deploy, sedangkan Dependencies dipakai. Nodemon agar ketika diedit scriptnya langsung jalan otomatis.

- npm i akan masuk ke dependencies

Environment Variable

- Variable yang ada dalam sistem komputer kita, variable yang ada di sistem bisa dibaca oleh Javascript

File System

- writeFileSync -> menimpa file, appendFileSync -> menambah

- rmdirSync -> menghapus folder dari dalam baru keluar


