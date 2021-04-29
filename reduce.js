let nilai = [100, 80, 80, 70, 90];

// Buat kode kamu di bawah ini
nilai.reduce((total, item) => {
    return total + item;
})

let jumlahNilai = nilai.reduce((total, item) => {
    return total + item;
})

let rataRata = jumlahNilai/nilai.length;

console.log(rataRata);