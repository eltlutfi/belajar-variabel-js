// String
const folder = "catatan"
const file = "tools & website"

// Template Literal
console.log(`ini adalah folder ${folder} , yang berisi file ${file} sebagai pendukung untuk Web Developer`)

// Number
let nilaiKegunaanCatatan = 60;
nilaiKegunaanCatatan = 88.5;
console.log(nilaiKegunaanCatatan);

// Boolean
const bagiSayaCatatanIniPenting = true;
const bagiSayaCatatanIniTidakPenting = false;

console.log (bagiSayaCatatanIniPenting);
console.log (bagiSayaCatatanIniTidakPenting);

// Object literal
const data = {
    folder: "catatan",
    alamat: {
        jalan: "Jl. Web browser",
        "rt/rw": "04/04"
    },
    fungsi: [
        "image and video free",
        "free illustration",
        "fonts and icons",
        "design and mockup"
    ]
};

console.log(data.folder)
console.log(data["alamat"]["rt/rw"])
console.log(data.alamat["rt/rw"])

// Array di dalam Object
data.fungsi.forEach(function(item) {
    console.log(`${item} termasuk list dalam ${data.folder}`)
}) 