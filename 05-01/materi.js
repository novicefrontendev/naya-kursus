// Contoh Kode Salah
// function () {
//     console.log('Halo');
// };

// Contoh Kode
(function () {
    console.log('Halo');
});

1 + (10 * 2);

console.log(function () {
    console.log('Halo')
});

// Penulisan Yang Tepat
function proses() {
    console.log('Halo');
}

console.log('Proses');

// Contoh Kode
(function() {
    console.log('Halo');
})();

console.log(proses);

// IIF (Immidiately Invoked Function)
(function(x) {
    console.log('Halo', x);
})();

// IIF (Immidiately Invoked Function)
(function(x) {
    console.log('Halo', x);
})(10);

let hasil = (function(x) {
    return x * 2;
})(10);

console.log(hasil);

// Contoh Kode
let process = function() {
    console.log('Halo');
};

console.log(process);

// Anonymous Function
let proses = () => {
    console.log('Halo');
};

proses();

// Contoh Kode
const proses = () => {
    console.log('Halo');
};

proses();

// Anonymous Function
const persiapan = (x) => {
    return () => {}
};

// Anonymous Function
const preparation = (x) => {
    return () => {
        return x + 1;
    };
};

const increment = preparation(1);
console.log(increment());
console.log(increment());
console.log(increment());

// Anonymous Function
const preparation1 = (x) => {
    return () => {
        x = x + 1;
        return x;
    };
};

const increment1 = preparation1(1);
console.log(increment1());
console.log(increment1());
console.log(increment1());

//  Anonymous Function
const preparation2 = (x) => {
    return () => {
        x = x + 1;
        return x;
    };
};

const increment2 = preparation2(1);
increment2();
increment2();
console.log(increment2());

//  Anonymous Function
const prep = (x) => {
    return x();
};

const inc = prep(() => {
    x = x + 1;
    return x;
});
inc();
inc();
console.log(inc());

// Contoh Kode
const siap = (x) => {
    let x;
    return x();
};

const incr = siap(() => {
    x = x + 1;
    return x;
});
console.log(incr());

// Contoh Kode
const siap1 = (x) => {
    return x();
};

const incre = siap1(() => {
    return 1;
});

console.log(incre());
console.log(incre);

// Contoh Kode
const jml = () => {
    return 1;
};

const siap2 = () => {
    return jml();
};

const increm = siap2();

console.log(increm);

// Contoh Kode
const pers = (jml) => {
    return jml();
};

const increme = pers();

console.log(increme);

// Contoh Kode
function proses() {
    console.group('PROSES');
    console.log('Halo');
    console.groupEnd();
}

proses();

// Contoh Kode
const proses = function() {
    console.group('PROSES');
    console.log('Halo');
    console.groupEnd();
}

proses();

// Callback
const jml1 = (x, y, callback) => {
    return; 
};

console.log(jml);

// Contoh Kode
const jml2 = (x, y, callback) => {
};

jml2();

// Contoh Kode
const jml3 = (x, y, callback) => {
}

jml3(2, 3, () => {});

// Contoh Kode
const sum = (x, y, callback) => {
    callback();
};

sum(2, 3, () => {
    console.log('Halo');
});

// Contoh Kode
const sum1 = (x, y, callback) => {
    callback();
};

jml(2, 3, (hasil) => {
    console.log('Hasilnya', hasil);
})

// Contoh Kode
const sum2 = (x, y, callback) => {
    callback(x + y);
}

sum2(2, 3, (hasil) => {
    console.log('Dapet dong', hasil);
});

// Contoh Kode
const jumlah = (x, y, callback) => {
    return callback(x + y);
};

const dapet = jumlah(2, 3, (hasil) => {
    console.log('Hasilnya', hasil)
});

console.log(dapet);

// Contoh Kode
const jumlah1 = (x, y, callback) => {
    return callback(x + y);
};

const dapet1 = jumlah1(2, 3, (hasil) => {
    console.log('Hasilnya', hasil)
    return hasil;
});

console.log(dapet1);

// Contoh Kode
const jumlah2 = (x, y, callback) => {
    return callback(x + y, (hasil) => {
        return hasil;
    });
};

const dapet3 = jumlah2(2, 3, (hasil, callback) => {
    console.log('Hasilnya', hasil)
    return callback(hasil);
});

console.log(dapet3);

// Contoh Kode
const jumlah3 = (x, y, callback) => {
    callback(x + y);
};

const callbackHasil = (hasil) => {
    console.log('Hasilnya', hasil)
};

const dapet4 = jumlah3(2, 3, callbackHasil);

// Contoh Kode
const jumlah4 = (x, y) => {
    return x + y;
};

console.log(jumlah4(4, 3))

// Contoh Kode
const jumlah5 = (x, y) => x + y;


console.log(jumlah5(4, 3))

// Contoh Kode 
// const penjumlahan = (x + y) => console.log('Walah');

// console.log(penjumlahan(4, 3));

const jmlh = x => x ** 2;

console.log(jml(2));

