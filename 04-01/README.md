MINGGU 4 ( DAY - 1 )

Pengambilan Keputusan & Percabangan
- if 
- switchcase

contoh : proses login -> Berhasil & Gagal berdasarkan username & password
                         Warna tombol like

1. If 
   Komponen if () {}
   () -> Untuk boolean -> Kondisi
   {} -> Output yang akan kita mau jika kondisi terpenuhi

Jika false ada di dalam kurung maka tidak akan dijalankan

if (false) {
    let a = 1;
    let b = 2
}

2. Switch-case -> seperti saklar
Jika satu kondisi memenuhi, maka kondisi di bawahnya juga akan ikut seperti efek domino.
Break -> untuk langsung lompat ke penutup kurawal dan lanjut di bawahnya.

Titik koma untuk memisahkan eksekusi kode.

- IF & ELSE
<!-- Contoh Kode -->
if (false) {
    let a = 1;
    let b = 3;
    hasil = a + b * 20;
    console.log('berhasil', hasil)
} -> undefined

<!-- Contoh Kode -->
if (true) {
    let a = 1;
    let b = 3;
    hasil = a + b * 20;
    console.log('berhasil', hasil)
} -> hasil ditampilkan karena kondisi true

<!-- Contoh Kode -->
let hasil = 40;

if (hasil > 50) {
    console.log('berhasil', hasil);
}

if (hasil < 50) {
    console.log('maaf, coba lagi', hasil);
} -> maaf, coba lagi 40

<!-- Contoh Kode -->
let hasil = 50;

if (hasil > 50) {
    console.log('berhasil', hasil);
}

if (hasil < 50) {
    console.log('maaf, coba lagi', hasil);
} -> undefined

<!-- Contoh Kode -->
let hasil = 50;

if (hasil > 50) {
    console.log('berhasil', hasil);
} else {
    console.log('maaf, coba lagi', hasil);
} -> maaf, coba lagi 50

<!-- Contoh Kode -->
let email = 'alexander@gmail.com';
let password = '123456';

if (email == 'johnthor@gmail.com' && password == '123456') {
    console.log('Berhasil Masuk');
} else {
    console.log('Email atau password tidak valid')
} -> Email atau password tidak valid

<!-- Contoh Kode -->
let email = 'alexander@gmail.com';
let password = '123456';

if (email != 'johntor@gmail.com') {
    console.log('Email tidak valid');
} else if (password != '123456') {
    console.log('Password tidak valid');
}
else {
    console.log('Selamat berhasil masuk');
} -> Email tidak valid

<!-- Contoh Kode -->
let email = 'johntor@gmail.com';
let password = '1234567';

if (email != 'johntor@gmail.com') {
    console.log('Email tidak valid');
} else if (password != '123456') {
    console.log('Password tidak valid');
}
else {
    console.log('Selamat berhasil masuk');
} -> Password tidak valid

<!-- Contoh Kode -->
let email = 'johntor@gmail.com';
let password = '123456';

if (email != 'johntor@gmail.com') {
    console.log('Email tidak valid');
} else if (password != '123456') {
    console.log('Password tidak valid');
}
else {
    console.log('Selamat berhasil masuk');
} ->  Selamat berhasil masuk


- SWITCH CASE

<!-- Contoh Kode -->
switch(1) {
    case 1 :
        console.log('nyala 1');
    case 2 :
        console.log('nyala 2');
    case 3 :
        console.log('nyala 3');
    case 4 :
        console.log('nyala 4');
} 

nyala 1
nyala 2
nyala 3
nyala 4

<!-- Contoh Kode -->
switch(2) {
    case 1 :
        console.log('nyala 1');
    case 2 :
        console.log('nyala 2');
    case 3 :
        console.log('nyala 3');
    case 4 :
        console.log('nyala 4');
} 

nyala 2
nyala 3
nyala 4

<!-- Contoh Kode -->
switch(4) {
    case 1 :
        console.log('nyala 1');
    case 2 :
        console.log('nyala 2');
    case 3 :
        console.log('nyala 3');
    case 4 :
        console.log('nyala 4');
} 

nyala 4

<!-- Contoh Kode -->
switch(5) {
    case 1 :
        console.log('nyala 1');
    case 2 :
        console.log('nyala 2');
    case 3 :
        console.log('nyala 3');
    case 4 :
        console.log('nyala 4');
    default :
        console.log('gak bener nih');
} 

gak bener nih

<!-- Contoh Kode -->
switch(5) {
    case 1 :
        console.log('nyala 1');
    default :
        console.log('gak bener nih');
    case 2 :
        console.log('nyala 2');
    case 3 :
        console.log('nyala 3');
    case 4 :
        console.log('nyala 4');
} 

gak bener nih
nyala 2
nyala 3
nyala 4

<!-- Contoh Kode -->
switch(2) {
    case 1 :
        console.log('nyala 1');
        break;
    case 2 :
        console.log('nyala 2');
        break;
    case 3 :
        console.log('nyala 3');
        break;
    case 4 :
        console.log('nyala 4');
        break;
    default:
        console.log('gak bener nih');
} 

Nyala 2

<!-- Contoh Kode -->
let lamp = '3';

switch(lamp) {
    case 1 :
        console.log('nyala 1');
        break;
    case 2 :
        console.log('nyala 2');
        break;
    case 3 :
        console.log('nyala 3');
        break;
    case 4 :
        console.log('nyala 4');
        break;
    default:
        console.log('gak bener nih');
}

console.log('selesai')

gak bener nih
selesai

<!-- Contoh Kode -->
let lamp = 3;

switch(lamp) {
    case 1 :
        console.log('nyala 1');
        break;
    case 2 :
        console.log('nyala 2');
        break;
    case 3 :
        console.log('nyala 3');
        break;
    case 4 :
        console.log('nyala 4');
        break;
    default:
        console.log('gak bener nih');
}

console.log('selesai')

nyala 3
selesai