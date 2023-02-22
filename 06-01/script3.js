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

const bgnDtr = new BangunDatar('5')
console.log(`Keliling Bangun Datar adalah ${bgnDtr.keliling()}`)
console.log(`Luas Bangun Datar adalah ${bgnDtr.luas()}`)

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

const Sgtg = new Segitiga(0, 2, 8)
console.log(`Keliling Segitiga adalah ${Sgtg.keliling()}`)
console.log(`Luas Segitiga adalah ${Sgtg.luas()}`)


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
console.log(`Keliling Persegi adalah ${Psg.keliling()}`);
console.log(`Luas Persegi adalah ${Psg.luas()}`);


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
console.log(`Keliling Persegi Panjang adalah ${PsgPjg.keliling()}`)
console.log(`Luas Persegi Panjang adalah ${PsgPjg.luas()}`)


class Lingkaran extends BangunDatar {
    constructor(sisi) {
        super(sisi) // super()
        this.radius = sisi
        this.sisi = sisi
    }

    // setRadius() {
    //     this.phi = 22/7
    //     return this.phi
    // }

    // keliling () {
    //     return this.setRadius() * 2 * this.radius
    // }
    
    keliling () {
        return 22/7 * 2 * this.radius
    }

    luas () {
        return 22/7 * this.radius ** 2
    }
}

const Lngkrn = new Lingkaran(7)
console.log(Lngkrn)
console.log(`Keliling Lingkaran adalah ${Lngkrn.keliling()}`)
console.log(`Luas Lingkaran adalah ${Lngkrn.luas()}`)