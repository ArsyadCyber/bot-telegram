const info = (ctx) => {
 const command = ctx.message.text.split(' ')[1];

 // Menentukan informasi untuk command
 let infoText;
 switch (command) {
   case 'weather':
     infoText = `Fitur cuaca memungkinkan Anda mendapatkan informasi cuaca terkini untuk lokasi Anda.

**Cara menggunakan:**

1. Kirim command \`/weather\`.
2. Bot akan meminta izin untuk mengakses lokasi Anda.
3. Bot akan menampilkan informasi cuaca seperti suhu, kelembapan, angin, dan prakiraan cuaca.

**Opsi tambahan:**

* Anda dapat menambahkan nama kota setelah command \`/weather\` untuk mendapatkan informasi cuaca di lokasi tersebut. Contoh: \`/weather Jakarta\`.
* Anda dapat menggunakan unit pengukuran Celcius atau Fahrenheit. Ubah unit dengan command \`/weather unit <celsius/fahrenheit>\`.

**Contoh:**

* \`/weather\` - Menampilkan informasi cuaca untuk lokasi Anda.
* \`/weather Jakarta\` - Menampilkan informasi cuaca untuk kota Jakarta.
* \`/weather unit fahrenheit\` - Mengubah unit pengukuran ke Fahrenheit.
`;
     break;
   default:
     infoText = `Informasi untuk command \`${command}\` tidak tersedia.`;
 }

 // Kirim informasi command
 ctx.reply(infoText);
};

module.exports = { info };
