// Soal No. 1 -> Membuat fungsi apakah object mempunyai key atau tidak

const biodataPemain = {
    nama: 'Bukayo Saka',
    asal: 'Inggris',
    klub: 'Arsenal',
    umur: 21,
    posisi: 'Gelandang',
}

console.log(biodataPemain?.nama);
console.log(biodataPemain?.name);

function validasiKey (key) {
    if (biodataPemain?.nama !== undefined) {
        return 'Key ada di dalam object Biodata Pemain'
    }
}

console.log(validasiKey())