MINGGU 3 ( DAY - 2 )

Mempelajari Dasar-dasar Javascript (Variable)

Dasar Javascript
- Bahasa Pemrograman : Kumpulan perintah untuk nantinya dijalankan komputer.
- JS bisa dijalankan di browser.
- Javascript & Web Assembly (Low Level) untuk dijalankan browser.
- Javascript ditulis di halaman HTML sebelum closing tag <body> setelah konten HTML
- Menampilkan sesuatu di konsol -> console.log('Aku pasti bisa jadi Software Engineer')

Variable (Data yang punya nama)
- Wadah dimana nilai disimpan dan diberi nama untuk nantinya dipanggil dan digunakan berulangkali tanpa harus ditulis ulang.
- Bersifat sementara, ketika direfresh akan hilang.

Cara menuliskan variable ;
    - var ; var x = 1; Bisa pake 2 kali nama sama nilai beda, bisa diubah
                console.log(x);
                var x = 1; -> undefined, Hoisting : Yang kita dibuat di bawah bisa kita gunakan di atas, selain var ada juga function.
    - let ; let x = 1; Gak bisa pake 2 kali nama sama nilai beda, kalau pakai maka akan terjadi error. Tetapi bisa diubah, Let digunakan untuk menjaga kejelasan. 
                        Komputer akan menyiapkan ruang untuk perubahan ketika menggunakan let.
    - const ; const x = 1; untuk nilai yang konstan dan tidak bisa diubah. Disarankan pake const.

Aturan penulisan nama variable :
- Angka tidak boleh di depan
- Hanya _ & $ boleh di depan
- Camel Case ; jmlBuku
- Javascript bersifat sensitive case

Variable dibuat ketika kita membutuhkan data yang dipakai berulang-ulang sehingga ketika data diubah tidak perlu ditulis berulang-ulang lagi.

- Tipe Data 
1. Number (Integer & Float) -> type of (40) ; ngecek tipe data
2. Boolean
3. Strings - menyisipkan variable di dalam strings bisa menggunakan ``
             menyisipkan simbol ' di dalam ' menggunakan \(simbol)

Kumpulan data akan menjadi informasi.