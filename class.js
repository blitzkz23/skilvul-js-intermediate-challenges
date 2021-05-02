// Buat kode kamu dibawah ini
class Orang {
    constructor(nama, umur) {
        this.nama = nama;
        this.umur = umur;
    }

    bekerja() {
        return`${this.nama} sedang bekerja seperti biasa`;
    }
}

let user1 = new Orang("auzan", 8);

console.log(user1.bekerja());