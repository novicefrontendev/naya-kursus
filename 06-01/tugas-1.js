// Tugas OOP
// Segitiga A
class Segitiga {
    // property
    alasSgtg;
    tinggiSgtg;
    sisiSgtg;
    
    // method
    kelilingSegitiga () {
        return this.sisiSgtg * 3
    }
    luasSegitiga () {
        return this.alasSgtg * this.tinggiSgtg
    }
}

class Persegi {
    sisiPsg;

    kelilingPsg () {
        return (this.sisiPsg + this.sisiPsg) * 2
    }
    luasPsg () {
        return this.sisiPsg * this.sisiPsg
    }
}


class PersegiPanjang {
    panjangPsgPjg;
    lebarPsgPjg;

    kelilingPsgPjg () {
        return (this.panjangPsgPjg + this.lebarPsgPjg) * 2 
    }
    luasPsgPjg () {
        return this.panjangPsgPjg * this.lebarPsgPjg
    }
}

const Sgtg = new Segitiga()
Sgtg.alasSgtg = 8;
Sgtg.tinggiSgtg = 4;
Sgtg.sisiSgtg = 2;

console.log(Sgtg.kelilingSegitiga());
console.log(Sgtg.luasSegitiga());

const Psg = new Persegi()
Psg.sisiPsg = 6;

console.log(Psg.kelilingPsg())
console.log(Psg.luasPsg())

const PsgPjg = new PersegiPanjang()
PsgPjg.panjangPsgPjg = 5;
PsgPjg.lebarPsgPjg = 5;

console.log(PsgPjg.kelilingPsgPjg())
console.log(PsgPjg.luasPsgPjg())
