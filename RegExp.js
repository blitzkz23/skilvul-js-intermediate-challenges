// Buat kode kamu di bawah ini
let string = "saya belajar di skilvul.com";
let pattern = new RegExp("skilvul.com");

let result = pattern.exec(string);

let status = pattern.test(string);

console.log(result);
console.log(status);