const help = (ctx) => {
 // Isi pesan bantuan
 const helpMessage = `Halo! \n\n
 Berikut adalah beberapa hal yang dapat saya lakukan:\n\n
 * /hello - Sapa saya!
 * /quote - Dapatkan kutipan inspiratif atau lucu.
 * /fact - Dapatkan fakta menarik.
 * /weather - Dapatkan informasi cuaca untuk lokasi Anda.
 * /translate - Terjemahkan teks dari satu bahasa ke bahasa lain.
 * /poll - Buat polling atau survei untuk user.
 * /help - Tampilkan pesan bantuan ini.

 Untuk informasi lebih lanjut tentang fitur tertentu, gunakan command terkait dengan tambahan /info. Contoh: /info weather\n\n
 Selamat menikmati bot saya! `;

 // Kirim pesan bantuan
 ctx.reply(helpMessage);
};

module.exports = { help };