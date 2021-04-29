// Buat kode kamu di bawah ini
function balikKata(str) {
    if (str == "") {
        return ""
    } else {
        return balikKata(str.substr(1)) + str[0];
    }
}

console.log(balikKata("Skilvul"));