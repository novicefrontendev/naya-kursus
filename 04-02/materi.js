// // Akan muncul hasil '10 Belajar Perulangan For'

// for (let i=0;i < 10; i++) {
//     console.log('Belajar Perulangan For')
// } 

//     // atau

//     for (let i=0;i < 10; i++) {
//         console.log('Belajar Perulangan For')
//         console.log('')
//     } 

// // Tidak akan muncul apa-apa 

// for (let i=0;false; i++) {
//     console.log('Belajar Perulangan For')
// } 

// Menggunakan continue -> hasilnya 10 Belajar Perulangan For
for (let i=0;i < 10; i++) {
    console.log('Belajar Perulangan For')
    continue
} 

    // Menggunakan continue, jika i=5 maka akan diskip lalu lanjut ke baris awal
    for (let i=0;i < 10; i++) {
        if (i == 5) {
            continue
        }

        console.log('Belajar Perulangan For', i)
    } 

    // Saat nilai i=5 maka akan lompat ke kurawal penutup dan lanjut ke bawahnya
    for (let i=0;i < 10; i++) {
        if (i == 5) {
            break
        }

        console.log('Belajar Perulangan For', i)
    } 

    // Tanpa menggunakan trigger kondisi
    for (let i=0;; i++) {
        if (i >= 10) {
            break
        }

        console.log('Belajar Perulangan For', i)
    } 

    // Modifikasi -> Error
    // for (;;) {
    //     if (i >= 10) {
    //         break;
    //     }

    //     console.log('Bisa!');

    //     i++;
    // }

    // Biar gak error
    let i = 0;
    for (;;) {
        if (i >= 10) {
            break;
        }

        console.log('Bisa!')

        i++;
    }

    // let i = 0;
    // for(;;) {
    //     if (i < 10) {
    //         console.log('Bisa!');
    //     } else {
    //         break;
    //     }
        
    //     i++;
    // }

    for (let i =0;;) {
        if (i < 10) {
            console.log('Bisa!');
        } else {
            break
        }

        i++
    }

let x = 0;    
while (x < 10) {
    console.log('Bisa!')
    x++
}

let y = 0;
do {
    console.log('Bisa!', y);
    y++;
} while (y < 10)

// Perbedaan i++ & ++i
let a = 1;

a++;
console.log(a);

++a;
console.log(a);

let b = 1;
console.log(b++); // Yang ditampilkan nilai b sebelum ditambahkan
console.log(++b);