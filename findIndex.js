let angka = [14, 24, 55, 60, 32, 85];

// Buat kode kamu di bawah ini
let cariIndexAngka = angka.findIndex(item => {
    return (item % 5 == 0 && item % 10 == 0)
});

console.log(cariIndexAngka);