// Contoh Kode
// const cari = (a, b) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(a + b);
//         }, 3000);
//     });
// };

// const main = async () => {
//     try {
//         const hasil = await cari(1, 2);
//         console.log(hasil);
//     } catch (error) {
//         console.log('Walah')
//     }
// }
// main();

// Contoh Kode Promise All
// const cari = (a, b) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//            reject(new Error('Waduh'));
//             //resolve(a + b) 
//         }, 1000);
//     })
// }

// Promise.all([
//     cari(1, 2),
//     cari(1, 2),
//     cari(1, 2),
//     cari(1, 2),
//     cari(1, 2),
//     cari(1, 2),
//     cari(1, 2),
//     cari(1, 2),
// ])
// .then(hasil => {
//     console.log(hasil);
// })
// .catch(err => {
//     console.log('Aduh')
// })

// Contoh Kode Promise.race
// const cari = (a, b) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         //    reject(new Error('Waduh'));
//             resolve(a + b) 
//         }, 1000);
//     })
// }

// Promise.race([
//     cari(1, 2*2*2*2*2),
//     cari(1, 2*2*2),
// ])
// .then(hasil => {
//     console.log(hasil);
// })
// .catch(err => {
//     console.log('Aduh')
// })

// Contoh Kode Promise.allSettled
// const cari = (a, b) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         //    reject(new Error('Waduh'));
//             resolve(a + b) 
//         }, 1000);
//     })
// }

// Promise.allSettled([
//     cari(1, 2*2*2*2*2),
//     cari(1, 2*2*2),
// ])
// .then(hasil => {
//     hasil.filter(h => h.status == 'fulfilled').forEach(h => {
//         console.log(h);
//     })
// })
// .catch(err => {
//     console.log('Aduh')
// })

// // Contoh Kode Promise.allSettled Value
// const cari = (a, b) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         //    reject(new Error('Waduh'));
//         resolve(a + b) 
//         }, 1000);
//     })
// }

// Promise.allSettled([
//     cari(1, 2*2*2*2*2),
//     cari(1, 2*2*2),
// ])
// .then(hasil => {
//     const fullfilled = hasil.filter(h => h.status == 'fulfilled').forEach(h => {
//         if (fullfilled.length <=0) throw '';

//         hasil 
//         .filter(h => h.status == 'fulfilled')
//         .forEach(h => {
//             console.log(h.value);
//         })
//     })
// })
// .catch(err => {
//     console.log('Aduh')
// })

// Contoh Kode Promise.allSettled Value - 2
const cari = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        //    reject(new Error('Waduh'));
        resolve(a + b) 
        }, 1000);
    })
}

Promise.allSettled([
    cari(1, 2*2*2*2*2),
    cari(1, 2*2*2),
])
.then(hasil => {
    const fullfilled = hasil.filter(h => h.status == 'fulfilled').forEach(h => {
        if (fullfilled.length <=0) throw '';

        fullfilled.forEach(h => {
            console.log(h.value);
        })
    })
})
.catch(err => {
    console.log('Aduh')
})

// Exp. 1
// const greet = (x, y) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(x + ' ' + y)
//         }, 1000);
//     })
// }

// greet('Hello', 'World')
// .then((z) => {
//     console.log(z);
// })
// .catch((err) => {
//     console.log('Susah', err);
// });

// Exp. 2
// const greet = () => {
//     return new Promise((resolve, reject) => {
//             resolve('Hello World')
//     })
// }

// greet()
// .then((z) => {
//     console.log(z);
// })
// .catch((err) => {
//     console.log(err);
// });

// Exp. 3
// const greet = (x, y) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('hello world')
//         }, 2000);
//     })
// }

// greet()
// .then((z) => {
//     console.log(z);
// })
// .catch((err) => {
//     console.log('Susah', err);
// });

// Exp. 4
// function job() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('Hello World');
//       }, 2000);
//     });
// }
  
// async function asyncCall() {
//     console.log('calling');
//     const result = await job();
//     console.log(result);
//     // Expected output: "resolved"
// }
  
// asyncCall();

// Exp. 5
// function job() {
//     return 'hello world';
// }

// module.exports = job;

// function resolveAfter2Seconds() {
// return new Promise(resolve => {
//     setTimeout(() => {
//     resolve('resolved');
//     }, 2000);
// });
// }

// async function asyncCall() {
// console.log('calling');
// const result = await resolveAfter2Seconds();
// console.log(result);
// // Expected output: "resolved"
// }

// asyncCall();

// Exp. 6
// function job(data) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(typeof data === 'number') {
//                 reject('error')
//             }
//         });
//         setTimeout(() => {
//             if(data % 2 !== 0) {
//                 reject('odd')
//             }
//         }, 1000);
//         setTimeout(() => {
//             if (data % 2 === 0) {
//                 reject('even')
//             }
//         }, 2000);
//     });
// }

// // module.exports = job;

// Exp. 7
// function job(data) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(typeof data !== 'number') {
//                 reject('error')
//             }
//         });
//         setTimeout(() => {
//             if(data % 2 === 1) {
//                 resolve('odd')
//             }
//         }, 1000);
//         setTimeout(() => {
//             if (data % 2 === 0) {
//                 reject('even')
//             }
//         }, 2000);
//     });
// }