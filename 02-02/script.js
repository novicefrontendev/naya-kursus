// Menulis Variable Dengan Var Tipe Number
var usiaku = 27;
console.log(usiaku);
    // Memanggil Variable Dengan Nama Sama Nilai Berbeda
    var usiaku = 28;
    console.log(usiaku);
    // Mengubah Nilai Langsung
    usiaku = 29;
    console.log(usiaku);
// Menulis Variable Dengan Var Tipe Boolean
var opinion = false;
console.log(opinion);
// Menulis Variable Dengan Var Tipe Strings
var kataIbu = 'Jangan Lupa Makan';
console.log(kataIbu);

// Menulis Variable Dengan Let Tipe Number
let ukuranSepatu = 41;
console.log(ukuranSepatu);
    // Memanggil Variable Dengan Nama Sama Nilai Berbeda -> Error
    // let ukuranSepatu = 28;
    // console.log(ukuranSepatu);
    // Mengubah Nilai Langsung
    ukuranSepatu = 41.5;
    console.log(ukuranSepatu);
// Menulis Variable Dengan Let Tipe Boolean
let argument = true;
console.log(argument);
// Menulis Variable Dengan Let Tipe Strings
let judulBuku = 'Mahir HTML & CSS';
console.log(judulBuku);

// Menulis Variable Dengan Const Tipe Number
const nomorRumah = 41;
console.log(nomorRumah);
        // Memanggil Variable Dengan Nama Sama Nilai Berbeda -> Error
        // const nomorRumah = 42;
        // console.log(nomorRumah);
        // Mengubah Nilai Langsung -> Error
        // nomorRumah = 43;
        // console.log(nomorRumah);
// Menulis Variable Dengan Const Tipe Boolean
const argumenPerempuan = true;
console.log(argumenPerempuan);
// Menulis Variable Dengan Const Tipe Strings
const namaSaudara = 'Bambang Widodo';
console.log(namaSaudara);

// Mengecek Tipe Data
console.log(typeof(namaSaudara))

// Menuliskan Simbol
console.log('Baris Pertama \nBaris Baru')
console.log('Kata Ibu \'Jangan Nakal\'')
console.log('Kata Mentor \'Buka Direktori \\Home\\Documents\'')

// Membuat variable
var namaLengkap = 'Adli Rahadyan';

// Menggunakan Variable
console.log(`My name is ${namaLengkap}. My house number is ${nomorRumah}. My shoes size is ${ukuranSepatu}.`)