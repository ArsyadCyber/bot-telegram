const help = require('./help');

module.exports = {
  // Buat fungsi untuk setiap fitur bot
 

 
  // Contoh:
  sayHello: (ctx) => {
    ctx.reply('Selamat datang, ke Bot Telegram kami! Kami senang melihat Anda tertarik dengan kami dan bergabung menjadi bagian dari komunitas kami. Kami akan selalu siap membantu Anda dengan segala kebutuhan Anda. sehingga pastikan untuk terus mengecek Bot Telegram kami. Kami akan selalu berusaha memberikan konten yang menarik dan berguna, agar Anda dapat mendapatkan manfaat yang optimal dari waktu Anda bermain di sini. Jika Anda memiliki pertanyaan atau ada yang ingin kami bantu, jangan ragu untuk menghubungi kami. Kami akan selalu siap membantu Anda dengan senyum. Terima kasih atas partisipasi Anda, dan semoga Anda menikmati waktu bermain di Bot Telegram kami!');
  },
 help,
 info: require('./info'),
  // ...

  // Ekspor fungsi sebagai objek
};
