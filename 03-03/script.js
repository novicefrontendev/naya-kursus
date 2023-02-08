// Segitiga (Keliling & Luas)
const alasSgtg = 3;
const tinggiSgtg = 4;

    // Keliling Segitiga
    const kelilingSgtg = alasSgtg * 3;
    console.log(`Keliling segitiga yang memiliki ${alasSgtg} cm dan ${tinggiSgtg} cm adalah ${kelilingSgtg} cm`);
    document.writeln(`Keliling segitiga yang memiliki ${alasSgtg} cm dan ${tinggiSgtg} cm adalah ${kelilingSgtg} cm <br>`)
    
    // Luas Segitiga
    const luasSgtg = 0.5 * alasSgtg * tinggiSgtg;
    console.log(`Luas segitiga yang memiliki ${alasSgtg} cm dan ${tinggiSgtg} cm adalah ${luasSgtg} cm²`);
    document.writeln(`Luas segitiga yang memiliki ${alasSgtg} cm dan ${tinggiSgtg} cm adalah ${luasSgtg} cm² <br>`)

// Persegi Panjang (Keliling & Luas)
const pjgPP = 4;
const lbrPP = 6;

    // Keliling Persegi Panjang
    const kelilingPP = (pjgPP + lbrPP) * 2;
    console.log(`Keliling persegi panjang yang memiliki ${pjgPP} cm dan ${lbrPP} cm adalah ${kelilingPP} cm`);
    document.writeln(`Keliling persegi panjang yang memiliki ${pjgPP} cm dan ${lbrPP} cm adalah ${kelilingPP} cm <br>`)

    // Luas Persegi Panjang
    const luasPP = pjgPP * lbrPP
    console.log(`Luas persegi panjang yang memiliki ${pjgPP} cm dan ${lbrPP} adalah ${luasPP} cm²`);
    document.writeln(`Luas persegi panjang yang memiliki ${pjgPP} cm dan ${lbrPP} adalah ${luasPP} cm² <br>`)

// Lingkaran (Keliling & Luas)
const jariLngkrn = 7

    // Keliling Lingkaran
    const kelilingLngkrn = 22/7 * jariLngkrn * 2
    console.log(`Keliling lingkaran yang memiliki ${jariLngkrn} cm adalah ${kelilingLngkrn} cm`)
    document.writeln(`Keliling lingkaran yang memiliki ${jariLngkrn} cm adalah ${kelilingLngkrn} cm <br>`)

    // Luas Lingkaran 
    const luasLngkrn = 22/7 * (jariLngkrn ** 2)
    console.log(`Luas lingkaran yang memiliki ${jariLngkrn} cm adalah ${luasLngkrn} cm²`)
    document.writeln(`Luas lingkaran yang memiliki ${jariLngkrn} cm adalah ${luasLngkrn} cm² <br>`)

// Balok (Keliling & Volume)
const panjangBlk = 6
const lebarBlk = 4
const tinggiBlk = 8

    // Keliling Balok 
    const kelilingBlk = 4 * (panjangBlk + lebarBlk + tinggiBlk)
    console.log(`Keliling balok yang memiliki ${panjangBlk} cm dan ${lebarBlk} cm serta ${tinggiBlk} cm adalah ${kelilingBlk} cm`)
    document.writeln(`Keliling balok yang memiliki ${panjangBlk} cm dan ${lebarBlk} cm serta ${tinggiBlk} cm adalah ${kelilingBlk} cm <br>`)

    // Volume Balok 
    const volumeBlk = panjangBlk * lebarBlk * tinggiBlk
    console.log(`Volume balok yang memiliki ${panjangBlk} cm dan ${lebarBlk} cm serta ${tinggiBlk} cm adalah ${volumeBlk} cm³`)
    document.writeln(`Volume balok yang memiliki ${panjangBlk} cm dan ${lebarBlk} cm serta ${tinggiBlk} cm adalah ${volumeBlk} cm³ <br>`)

// Tabung (Keliling & Volume)
const jariTbg = 14
const tinggTbg = 10

    // Keliling Tabung
    const kelilingTbg = 2 * (jariTbg + tinggTbg)
    console.log(`Keliling tabung yang memiliki ${jariTbg} cm dan ${tinggTbg} cm adalah ${kelilingTbg} cm`)
    document.writeln(`Keliling tabung yang memiliki ${jariTbg} cm dan ${tinggTbg} cm adalah ${kelilingTbg} cm <br>`)

    // Volume Tabung
    const volumeTbg = 22/7 * (jariLngkrn ** 2) * tinggTbg
    console.log(`Volume tabung yang memiliki ${jariTbg} cm dan ${tinggTbg} cm adalah ${volumeTbg} cm³`)
    document.writeln(`Volume tabung yang memiliki ${jariTbg} cm dan ${tinggTbg} cm adalah ${volumeTbg} cm³ <br>`)