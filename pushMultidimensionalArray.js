let buah = [
    ["Apel", 7],
    ["Jeruk", 4],
    ["Mangga", 2],
  ];
  
  // Kolom 0, nama buah
  // Kolom 1, buah yang sudah dimakan
  // Tulis kode kamu di bawah ini
  
  buah.forEach(item => {
    let sisa = 50 - item[1];
    item.push(sisa);
  });
  console.log(buah);
  