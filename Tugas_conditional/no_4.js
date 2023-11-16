// 4. Gunakan switch case untuk membuat sebuah game sederhana.
// UP -> Karakter berjalan keatas
// RIGHT -> Karakter berjalan kekanan
// BOTTOM -> Karakter berjalan kebawah
// LEFT -> Karakter berjalan kekiri

var arah = "Kanan";

switch (arah) {
  case "UP": { console.log("Karakter berjalan keatas"); break;}
  case "RIGHT": { console.log("Karakter berjalan kekanan"); break;}
  case "BOTTOM": { console.log("Karakter berjalan kebawah"); break;}
  case "LEFT": { console.log("Karakter berjalan kekiri"); break;}
  default: { console.log("Tidak terdeteksi"); }
  }