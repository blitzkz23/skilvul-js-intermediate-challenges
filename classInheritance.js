class Orang {
    constructor(nama, umur) {
      this.nama = nama;
      this.umur = umur;
    }
  
    tidur() {
      return `${this.nama} sedang tidur`;
    }
  
    makan() {
      return `${this.nama} sedang makan`;
    }
  }
  
  // Tulis kode kamu di bawah ini
  class Pelajar extends Orang {
    constructor(nama, umur, namaSekolah) {
      //inherit properti parents
      super(nama, umur);
      this.namaSekolah = namaSekolah;
    }
    //method baru
    belajar() {
      return `${this.nama} belajar di ${this.namaSekolah}`
    }
  }
  
  let user = new Pelajar("Terra", 17, "Skilvul");
  console.log(user);