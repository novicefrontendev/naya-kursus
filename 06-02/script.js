const invalidOperation = 'InvalidOperation';
const invalidDataTypes = 'InvalidDataTypes';

function operasiPembagian (x, y) {
    if (y === 0) {
        const err = new Error()
        err.name = invalidOperation
        throw err;
    }
    
    else if ( typeof x != 'number') {
        const err = new Error()
        err.name = invalidDataTypes
        throw err;
    }

    else if ( typeof y != 'number') {
        const err = new Error()
        err.name = invalidDataTypes
        throw err;
    }

    else {
        console.log(x / y)
    }
}

try {
    operasiPembagian('4', 1);
}
catch(err) {
    if(err.name == invalidOperation) {
        console.log('Pembagi tidak boleh 0')

    }
    if(err.name == invalidDataTypes) {
        console.log('Tipe Data harus angka')
    }
}

// const invalidOperation = 'InvalidOperation';
// const invalidDataTypes = 'InvalidDataTypes';


// function operasiPembagian (x, y) {

//     if (typeof x === 'number' && y !== 0) {
//         console.log( x / y)
//     }

//     else if (typeof y === 'number' && y !== 0) {
//         console.log( x / y)
//     }

//     else if (y === 0) {
//         const err = new Error()
//         err.name = invalidOperation
//         throw err;
//     }
    
//     else if ( typeof x != 'number') {
//         const err = new Error()
//         err.name = invalidDataTypes
//         throw err;
//     }

//     else if ( typeof y != 'number') {
//         const err = new Error()
//         err.name = invalidDataTypes
//         throw err;
//     }

// }

// try {
//     operasiPembagian('4', 1);
// }
// catch(err) {
//     if(err.name == invalidOperation) {
//         console.log('Pembagi tidak boleh 0')
        
//     }
//     if(err.name == invalidDataTypes) {
//         console.log('Tipe Data harus angka')
//     }
// }