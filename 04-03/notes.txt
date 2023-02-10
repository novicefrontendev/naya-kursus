Function :
Kumpulan Proses yang diberi nama

Penulisan Function -> function name() {}
    Contoh :
        function tampilKalauGenap() {
            let x = 10;
            if (x % 2 ==0) {
                console.log('Ini Genap)
            }
        }

    Memanggil Function

    tampilKalauGenap()

Struktur Function :
function name (parameter -> nilai yang ingin di input) {
    proses yang ingin dijalankan
}

name (argument -> nilai yang menjadi inputan)

function iniApa (x) {
    if (x % 2 == 0) {
        console.log('genap');
    } else {
        console.log('ganjil');
    }
}

iniApa(11) -> Ganjil
iniApa(10) -> Genap
iniApa(7)  -> Ganjil

function jml(x, y) {
    console.log(x + y)
}

jml(4, 5);
jml(8, 6);
jml(9, 2);
jml(4); -> Undefined

Biar gak undefined 
function jml(x, y = 0) {
    console.log(x + y)
}

jml(4);


function iniApa (x) {
    if (x % 2 == 0) {
        console.log('genap');
    } else if (x % 2 == 1) {
        console.log('ganjil);
    } else {
        console.log('aduh gak tau');
    }
}

iniApa();

function iniApa(x) {
    if (typeof x != 'number') throw 'x harus number';

    if (x % 2 ==0) {
        console.log('genap');
    } else if (x % 2 == 1) {
        console.log('ganjil');
    } else {
        console.log('aduh gak tau')
    }
}

iniApa('11') -> error throw

function jml(x, y = 0) {
    if (typeof x != 'number') throw 'x harus number';
    if (typeof y != 'number') throw 'y harus number';

    console.log(x + y)
}

jml(4)
jml(8, 6)
jml(9, 2)

if jika hanya satu titik koma maka tidak perlu diberi kurung

if (true) console.log('ayam');

if (false) {}
    console.log('ayam');
console.log('ayam');

Return

Return akan memberi nilai jika dipanggil, prinsipnya return akan memberi nilai lalu lompat ke penutup kurawal dan lanjut ke baris di bawahnya

function jml(x, y = 0){
    if (typeof x != 'number') throw 'x harus number';
    if (typeof y != 'number') throw 'y harus number';

    let hasil = x + y;
    return hasil;

}

function jml(x, y = 0){
    if (typeof x != 'number') throw 'x harus number';
    if (typeof y != 'number') throw 'y harus number';

    let hasil = x + y;
    return hasil;

}

console.log(jml(4));

function jml(x, y = 0){
    if (typeof x != 'number') throw 'x harus number';
    if (typeof y != 'number') throw 'y harus number';

    let hasil = x + y;
    return hasil;

}

let hasil4 = jml(4);
console.log(jml(4));

function jml(x, y = 0){
    if (typeof x != 'number') throw 'x harus number';
    if (typeof y != 'number') throw 'y harus number';

    let hasil = x + y;
    // return hasil
}

let hasil4 = jml(4) + jml(5, 1);
console.log(jml(4));

function jml(x, y = 0){
    if (typeof x != 'number') throw 'x harus number';
    if (typeof y != 'number') throw 'y harus number';

    let hasil = x + y;
    return hasil
}

let hasil4 = jml(jml(4), jml(5, 1));
console.log(jml(4));

function iniApa(x) {
    if (typeof x != 'number') throw 'x harus number';

    if (x % 2 ==0) {
        return 'genap';
    } else if (x % 2 == 1) {
        return 'ganjil';
    } else {
        throw 'x tidak valid';
    }
}


console.log(iniApa(11));
iniApa(10);
iniApa(12);

function iniApa(x) {
    if (typeof x != 'number') throw 'x harus number';

    if (x % 2 ==0) {
        return 'genap';
    } 
    
    if (x % 2 == 1) {
        return 'ganjil';
    }

    throw 'x tidak valid';
}

console.log(iniApa(11));
iniApa(10);
iniApa(12);

function iniApa(x) {
    if (typeof x != 'number') throw 'x harus number';

    if (x % 2 ==0) {
        return 'genap';
    } 
    
    if (x % 2 == 1) {
        return 'ganjil';
    }

    throw 'x tidak valid';
}

let hasil4 = jml(jml(4), jml(5, 1));
console.log(iniApa(hasil4));
iniApa(10);
iniApa(12);