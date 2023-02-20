// Tugas OOP Menggunakan Inheritance
// Segitiga A
class BangunDatar {
    constructor(sisi) {
        this.sisi = sisi;
    }

    keliling() {
        return (this.sisi + this.sisi) * 2
    }
    luas() {
        return this.sisi * this.sisi
    }
}

const BgnDtr = new BangunDatar(5)
console.log(BgnDtr.keliling())
console.log(BgnDtr.luas())

class Segitiga extends BangunDatar {
    // constructor
    constructor(sisi, alas, tinggi) {
        super(sisi);
        this.alas = alas;
        this.tinggi = tinggi;
    }
    
    // method as Getter
    keliling () {
        return this.sisi * 3
    }
    luas () {
        return (this.alas * this.tinggi ) / 2
    }
}

const Sgtg = new Segitiga(2, 4, 8)
console.log(Sgtg.keliling())
console.log(Sgtg.luas())


class Persegi extends BangunDatar {
    constructor(sisi) {
        super(sisi)
    }

    // keliling () {
    //     return (this.sisi + this.sisi) * 2
    // }
    // luas () {
    //     return this.sisi * this.sisi
    // }
}

const Psg = new Persegi(6)
console.log(Psg.keliling());
console.log(Psg.luas());


class PersegiPanjang extends BangunDatar {
    constructor(sisi, sisi2) {
        super(sisi)
        this.sisi2 = sisi2;
        // this.lebar = lebar;
    }

    keliling () {
        return (this.sisi + this.sisi2) * 2 
    }
    luas () {
        return this.sisi * this.sisi2
    }
}

const PsgPjg = new PersegiPanjang(18, 10)
console.log(PsgPjg.keliling())
console.log(PsgPjg.luas())


class Lingkaran extends BangunDatar {
    constructor(radius) {
        super(sisi)
        // this.sisi = sisi
    }

    keliling () {
        return 22/7 * 2 * this.sisi
    }
    luas () {
        return 22/7 * this.sisi ** 2
    }
}

const Lngkrn = new Lingkaran(7)
console.log(Lngkrn.keliling())
console.log(Lngkrn.luas())