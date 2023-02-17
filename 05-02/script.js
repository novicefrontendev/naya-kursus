// Menambah & Menghapus Data dari Depan serta Belakang

const sayurMayur = ['tomat', 'kentang', 'seledri', 'kangkung', 'mangga']

// pop -> mengambil data dari belakang
console.log(sayurMayur.pop())
console.log(sayurMayur)

// push -> menaruh data dari belakang
console.log(sayurMayur.push('cabai'))
console.log(sayurMayur)

// shift -> mengambil data dari depan
console.log(sayurMayur.shift())
console.log(sayurMayur)

// unshift -> menaruh data dari depan
console.log(sayurMayur.unshift('sawi'))
console.log(sayurMayur)

// Splice -> Menghapus atau Menambah Data berdasarkan indeks
const months = ['January', 'February', 'March', 'Madu', 'Sutena']

// Menghapus Mulai dari indeks 3 
console.log(months.splice(3))
console.log(months)

// Menghapus Sejumlah Data Tertentu (3) mulai dari Indeks 0
const namaBulan = ['Januari', 'Februari', 'Maret', 'Bulanan', 'Sabit']
const bukanNamaBulan = namaBulan.splice(3, 2)
console.log(namaBulan)

// Menghapus Data dan Menambah Data
namaBulan.splice(0, 2, 'April')
console.log(namaBulan)

namaBulan.splice(2, 2, "November", "Desember")
console.log(namaBulan)

// Map 
const firstName = ['Megawati', 'Sukmawati', 'Rachmawati']
const lastName = ['Soekarnoputri']

// const anakSoekarno = firstName.map((v) => {
//     return v + ' ' + lastName
// })

const anakSoekarno = firstName.map(v => v + ' ' + lastName)

console.log(anakSoekarno)

// Reduce
const namaLengkap = ['Adli',' ' ,'Rahadyan' ,' ' ,'Irfree']
// const programmerZamanNow = namaLengkap.reduce((result, item) => {
//     return result + item }, '')
// console.log(programmerZamanNow)

const namaKu = namaLengkap
.reduce((result, item) => result + item , '')
console.log(namaKu)

// Accumulator
const scores = [10, 20, 30]

let acc = 0;

for (let i = 0; i < scores.length; i++) {
    acc = acc + scores[i]
}

console.log(acc)

