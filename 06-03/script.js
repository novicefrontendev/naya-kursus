// Soal No. 1
const invalidOperation = 'InvalidOperation';
const invalidDataTypes = 'InvalidDataTypes';

const operasiPembagian = (x, y) => {
    return new Promise((resolve, reject) => {
             if (y === 0) {
                const err = new Error();
                err.name = invalidOperation;
                reject(err);
                // console.log(1)
            }
            else if ( typeof x != 'number' || typeof y != 'number') {
                const err = new Error();
                err.name = invalidDataTypes;
                reject(err);
                // console.log(2)
            }
            else {
                setTimeout(() => {
                    resolve(x / y); 
                }, 4000);
                // console.log(3)
            }
        });
        // console.log(4)
    }

const main = async () => {
    try {
        const hasil = await operasiPembagian('1', 1);
        console.log(hasil);
        // console.log(5)
    } catch (err) {
        if(err.name == invalidOperation) {
            console.log('Pembagi tidak boleh 0');
        } 
        if(err.name == invalidDataTypes) {
            console.log('Tipe Data harus angka');
        }
        // console.log(6)
    }
}

main()

// Soal Promise All
// const operasiPembagian = (x, y) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (y === 0) {
//                 const err = new Error();
//                 err.name = invalidOperation;
//                 reject(err);
//             }
//             else if ( typeof x != 'number' || typeof y != 'number') {
//                 const err = new Error();
//                 err.name = invalidDataTypes;
//                 reject(err);
//             }
//             else {
//                 resolve(x / y);
//             }
//         }, 4000);
//         console.log(4)
//     })
// }

// const main = async () => {
//     try {
//         const hasil = await Promise.all([
//             operasiPembagian(1, 1),
//             operasiPembagian(1, 2),
//             operasiPembagian(1, 3),
//             operasiPembagian(1, 4),
//             operasiPembagian(1, 5),
//         ]);
//         console.log(hasil);
//     } catch (err) {
//         if(err.name == invalidOperation) {
//             console.log('Pembagi tidak boleh 0');
//         } 
//         if(err.name == invalidDataTypes) {
//             console.log('Tipe Data harus angka');
//         }
//     }
// }

// main()

// Soal Promise Race
// const operasiPembagian = (x, y) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (y === 0) {
//                 const err = new Error();
//                 err.name = invalidOperation;
//                 reject(err);
//             }
//             else if ( typeof x != 'number' || typeof y != 'number') {
//                 const err = new Error();
//                 err.name = invalidDataTypes;
//                 reject(err);
//             }
//             else {
//                 resolve(x / y);
//             }
//         }, 4000);
//         console.log(4)
//     })
// }


// const main = async () => {
//     try {
//         const hasil = await Promise.race([
//             operasiPembagian(1, 1),
//             operasiPembagian(1, 2),
//             operasiPembagian(1, 3),
//             operasiPembagian(1, 4),
//             operasiPembagian(1, 5),
//         ]);
//         console.log(hasil);
//     } catch (err) {
//         if(err.name == invalidOperation) {
//             console.log('Pembagi tidak boleh 0');
//         } 
//         if(err.name == invalidDataTypes) {
//             console.log('Tipe Data harus angka');
//         }
//     }
// }

// main()

// // Soal Promise All Settled
// const operasiPembagian = (x, y) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (y === 0) {
//                 const err = new Error();
//                 err.name = invalidOperation;
//                 reject(err);
//             }
//             else if ( typeof x != 'number' || typeof y != 'number') {
//                 const err = new Error();
//                 err.name = invalidDataTypes;
//                 reject(err);
//             }
//             else {
//                 resolve(x / y);
//             }
//         }, 4000);
//     })
// }


// const main = async () => {
//     try {
//         const hasil = await Promise.allSettled([
//             operasiPembagian(1, 0),
//             operasiPembagian(1, '2'),
//             operasiPembagian(1, 3),
//             operasiPembagian(1, 4),
//             operasiPembagian(1, 5),
//         ]);
//         hasil.filter(h => h.status == 'fulfilled').forEach(h => {
//             console.log(h.value)
//             console.log(h)
//         });
//     } catch (err) {
//         if(err.name == invalidOperation) {
//             console.log('Pembagi tidak boleh 0');
//         } 
//         if(err.name == invalidDataTypes) {
//             console.log('Tipe Data harus angka');
//         }
//     }
// }

// main()