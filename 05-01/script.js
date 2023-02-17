// let sum_numbers = () => {
//     let sum = 0;
//     for (let i = -10; i < 10; i += 1) {
//         sum += i;
//     }
//     return sum;
// }
// console.log(sum_numbers());


// let sum_odd_numbers = () => {
//     let sum = 0;
//     for (let i = -10; i <= 10; i += 1) {
//         if ( i % 2 != 0) {
//             sum += i;
//         }
//     }
//     return sum;
// }
// console.log(sum_odd_numbers());

// let sum_even_numbers = () => {
//     let sum = 0;
//     for (let i = -10; i <= 10; i += 2) {
//         if ( i % 2 == 0) {
//             sum += i;
//         }
//     }
//     return sum;
// }
// console.log(sum_even_numbers());


// Tugas
// const jml = (callBack) => {
//     let jmlHasil = 0;
//     for (let i = -10; i <= 10; i += 2) {
//         if ( i % 2 == 0) {
//             jmlHasil += i;
//         }
//     }
//     callBack(jmlHasil)
// };

// const jmlHasil = (hasil) => {
//     console.log(hasil);
// };

// jml(jmlHasil)  

// Luas
// const rumusLuasPersegiPanjang = (panjang, lebar, callBack) => {
//     if (typeof panjang != 'number') throw 'x harus number';
//     if (typeof lebar !='number') throw 'x harus number';

//     callBack(panjang * lebar);
// };

// const luasPersegiPanjang = (hasil) => {
//     console.log(hasil)
// }

// rumusLuasPersegiPanjang(5, 10, luasPersegiPanjang);


// Nilai

// const gradeNilai = (nilaiPraktek, callBack) => {
//     // if (typeof nilaiPraktek != 'number') throw 'nilaiPraktek harus number';

//     if (nilaiPraktek >= 80) {
//         return callBack ('A');
//     } 
    
//     if (nilaiPraktek >= 60 && nilaiPraktek <= 79) {
//         return callBack ('B');
//     } 
    
//     if (nilaiPraktek >= 40 && nilaiPraktek <= 59) {
//         return callBack ('C');
//     } 
    
//     if (nilaiPraktek >= 1 && nilaiPraktek <= 39) {
//         return callBack ('D');
//     } 

//     if (nilaiPraktek === 0) {
//         return callBack ('E');
//     } 
    
//     throw 'nilaiPraktek tidak valid';

// }

// gradeNilai('ADA', (hasilNilai) => {
//     console.log(hasilNilai)
// })

// Callback dipakai ketika return sudah mentok
// Return bisa dipakai untuk mengakhiri fungsi

const sum_odd_numbers = (callBack) => {
    let sum = 0; // 2
    (console.log(2));
    for (let i = -10; i <= 10; i += 1) {
        if ( i % 2 != 0) {
            sum += i;
    
        }
    }
    (console.log(3)) // 
    callBack(sum);
}



(console.log(1)) // 1
sum_odd_numbers((hasil) => {
(console.log(4)) // 4
    console.log(hasil)
})