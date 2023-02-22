Object 
- Merupakan struktur data, object bisa diisi object.

- Untuk memanggil object menggunakan key sebagai label, bukan pakai index. Key pakai strings penulisannya. 

const siswa = {nama : 'Hamdan', usia : 18};

console.log(siswa['nama']);
console.log(siswa['usia']);

console.log(siswa.nama);
console.log(siswa.usia);

- Untuk memanipulasi object -> siswa.nama = 'Rizal';

<!-- const ; ngunci di = bukan di objectnya ({}) atau di array ([]) -->

- Menambah property di object 
    siswa.alamat = 'Bandung';
    console.log(siswa);

- Menghapus property di object
    delete siswa.kelas;

- Mengambil keys
    console.log(Object.keys(siswa))

- Mengambil values 
    console.log(Object.values(siswa))

.keys berisi array dan bisa diakses kayak array. Sifat key kalau ada dia akan mengubah nilai, tapi kalau belum dia akan menambah

Object tidak punya keys, tapi bisa pake Object.keys dengan metode menaruh keys di array lalu array mempunya property length.

Kalau sudah ada keys pasti bisa dapet valuenya, tetapi value belum bisa dapet key

Object bisa ngerefer kayak array karena struktur data, tetapi kalau data (single) tidak bisa.


