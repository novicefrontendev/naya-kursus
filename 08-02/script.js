let identitas = {
    nama: 'Adli',
    asal: 'Yogyakarta',
    alamat: 'Jl. Timoho'
};
let key = document.getElementById('key')
let button = document.getElementById('sb');

function searchFun() {
    if (Object.keys(identitas).indexOf(key.value) === -1) {
        document.write(key.value + " <b>Not Found</b>")
    } 
    else {
        document.write("<b>Element Found at " + ' ' + Object.keys(identitas).indexOf(key.value) + " Position</b>"  )
    }
}