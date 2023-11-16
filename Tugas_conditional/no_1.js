// Buat conditional IF .. ELSE IF yang menggambarkan divisi dan tugas divisi pada STARTUP.
// Contoh: Jika saya sebagai HR maka tugas saya adalah melakukan rekrutmen untuk calon pegawai baru


let posisi = 'HR';

if(posisi == 'HR') {
  console.log('Jika saya sebagai HR maka tugas saya adalah melakukan rekrutmen untuk calon pegawai baru');
} else if (posisi === 'PM') {
  console.log('Jika saya sebagai PM maka tugas saya adalah melakukan rapat dengan satekholder');
} else if (posisi === "Dev") {
  console.log('Jika saya sebagai Dev maka tugas saya adalah melakukan pembuatan code');
} else {
  console.log('Tidak terdaftar');
}