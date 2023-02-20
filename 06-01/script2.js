// Tugas OOP Menggunakan Constructor
// Segitiga A
class Segitiga {
    // constructor
    constructor(alas, tinggi, sisi) {
        this.alas = alas;
        this.tinggi = tinggi;
        this.sisi = sisi;
    }
    
    // method as Getter
    keliling () {
        return this.sisi * 3
    }
    luas () {
        return (this.alas * this.tinggi ) / 2
    }
}

const Sgtg = new Segitiga(8, 4, 2)
console.log(Sgtg.keliling())
console.log(Sgtg.luas())


class Persegi {
    constructor(sisi) {
        this.sisi = sisi
    }

    keliling () {
        return (this.sisi + this.sisi) * 2
    }
    luas () {
        return this.sisi * this.sisi
    }
}

const Psg = new Persegi(6)
console.log(Psg.keliling());
console.log(Psg.luas());

class PersegiPanjang {
    constructor(panjang, lebar) {
        this.panjang = panjang;
        this.lebar = lebar;
    }

    kelilingPsgPjg () {
        return (this.panjang + this.lebar) * 2 
    }
    luasPsgPjg () {
        return this.panjang * this.lebar
    }
}

const PsgPjg = new PersegiPanjang(18, 10)
console.log(PsgPjg.kelilingPsgPjg())
console.log(PsgPjg.luasPsgPjg())
