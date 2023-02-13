// Latihan

function luasPersegiPanjang (panjang, lebar) {
    if (typeof panjang != 'number') throw 'x harus number';
    if (typeof lebar !='number') throw 'x harus number';

    let hasil = panjang * lebar;
    return hasil // Langsung Rumus aja
}

let luas = luasPersegiPanjang(5, 10)
console.log(luas);

function luasPersegi (sisi) {
    if (typeof sisi != 'number') throw 'x harus number';

    let hasilPersegi = sisi ** 2;
    return hasilPersegi
}

let luasPP = luasPersegi(10)
console.log(luasPP);

function luasLingkaran (radius) {
    if (typeof radius != 'number') throw 'x harus number';

    let hasilLingkaran = 22/7 * radius ** 2;
    return hasilLingkaran
}

let luasLngkrn = luasLingkaran(7)
console.log(luasLngkrn);

// Tugas 

// If
function gradeNilai (nilaiPraktek) {
    // if (typeof nilaiPraktek != 'number') throw 'nilaiPraktek harus number';

    if (nilaiPraktek >= 80) {
        return 'A';
    } 
    
    if (nilaiPraktek >= 60 && nilaiPraktek <= 79) {
        return 'B';
    } 
    
    if (nilaiPraktek >= 40 && nilaiPraktek <= 59) {
        return 'C';
    } 
    
    if (nilaiPraktek >= 1 && nilaiPraktek <= 39) {
        return 'D';
    } 

    if (nilaiPraktek === 0) {
        return 'E';
    } 
    
    throw 'nilaiPraktek tidak valid';
}

console.log(gradeNilai(90));



// For
let sum_numbers = function () {
    let sum = 0;
    for (let i = -10; i < 10; i += 2) {
        sum += i;
    }
    return sum;
}
console.log(sum_numbers());


let sum_odd_numbers = function () {
    let sum = 0;
    for (let i = -10; i < 10; i += 2) {
        console.log(i)
    }
    return sum;
}
console.log(sum_odd_numbers());

let sum_even_numbers = function () {
    let sum = 0;
    for (let i = -10; i <= 10; i += 1) {
        if ( i % 2 == 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(sum_even_numbers());

// Function tidak bisa digunakan untuk menyebutkan rentang nilai tertentu tanpa array karena cuma bisa return 1 nilai

let numbers = function () {
    for (let i = -10; i < 10; i += 2) {
        console.log(i)
    }
}
console.log(numbers());