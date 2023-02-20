// Soal No. 1 -> Membuat fungsi apakah object mempunyai key atau tidak

const biodataPemain = {
    nama: 'Bukayo Saka',
    asal: 'Inggris',
    klub: 'Arsenal',
    umur: 21,
    posisi: 'Gelandang',
}

// Jika Tanpa Fungsi
const validasiKey6 = 'nama' in biodataPemain;

if(validasiKey6) {
    console.log('Ada Kok')
} else {
    console.log('Gak Ada')
}

// Pake Fungsi
const validasiKey4 = (objectName, keyName) => {
    let adaKeyNih = Object.keys(objectName).some(key => key === keyName);
    return adaKeyNih;
}

console.log(validasiKey4(biodataPemain, 'name'))

// Dibuat function
const hasKey = (objectName, keyName) => {
    if(Object.keys(objectName).indexOf(keyName) === 1) {
        return 'Ada Kok'
    } else {
        return 'Gak Ada'
    }
}

console.log(hasKey(biodataPemain, 'age'));


// Soal No. 2 -> Menjumlahkan value di object tetapi hanya yang number
const angka = {
    x : 'abc',
    y : 10,
    z : 20,
}

let sum = 0;
for (let key in angka) {
    if (typeof angka[key] === 'number') {
        sum += angka[key];
    }
}

console.log(sum)

// Alternatif
// Langkah Pertama mengubah object menjadi key/value array
const asArray = Object.values(angka)
console.log(asArray)
// Melakukan filter berdasarkan tipe data
const filteredArray = asArray.filter(value => typeof value === 'number')
console.log(filteredArray)
// Menghitung array
let acc = 0;
for (let i = 0; i < filteredArray.length; i++) {
    acc = acc + filteredArray[i]
}

console.log(acc)

// obj[key] -> Mengecek array true atau false bukan ada isinya apa enggak key





