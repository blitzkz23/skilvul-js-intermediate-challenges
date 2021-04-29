let inventory = [
    ["Kaos Polos", 21],
    ["Jaket Hoodie", 13],
    ["Topi", 7],
  ];
  
  let item = inventory[2][0];
  let jumlahTerjual = inventory[2][1];
  
  // Buat kode kamu di bawah ini
  inventory.splice(1, 1)
  console.log(inventory);
  console.log(`Total penjualan ${item} ada sebanyak ${jumlahTerjual} item`);

// ┌─────────┬─────────────┬───┐
// │ (index) │      0      │ 1 │
// ├─────────┼─────────────┼───┤
// │    0    │   'Work'    │ 9 │
// │    1    │    'Eat'    │ 1 │
// │    2    │  'Commute'  │ 2 │
// │    3    │ 'Play Game' │ 1 │
// │    4    │   'Sleep'   │ 7 │
// └─────────┴─────────────┴───┘