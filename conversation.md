## Berikan saya code nodejs basic untuk mengirim pesan ketika user menchat : /start

Berikut adalah contoh code NodeJS basic untuk mengirim pesan ketika user menchat "/start":

```javascript
const Telegraf = require('telegraf');

// Buat bot dengan token Telegram Anda
const bot = new Telegraf('YOUR_TELEGRAM_BOT_TOKEN');

// Command handler untuk "/start"
bot.command('start', (ctx) => {
  // Kirim pesan ke user
  ctx.reply('Halo! Selamat datang di bot Telegram saya.');
});

// Jalankan bot
bot.launch();
```

**Penjelasan code:**

* `require('telegraf')`: Import library Telegraf.
* `const bot = new Telegraf('YOUR_TELEGRAM_BOT_TOKEN')`: Buat bot dengan token Telegram Anda.
* `bot.command('start', (ctx) => {})`: Command handler untuk "/start".
* `ctx.reply('Halo! Selamat datang di bot Telegram saya.')`: Kirim pesan ke user.
* `bot.launch()`: Jalankan bot.

**Catatan:**

* Ganti `YOUR_TELEGRAM_BOT_TOKEN` dengan token Telegram Anda.
* Anda dapat mengubah pesan yang dikirim ke user.
* Anda dapat menambahkan lebih banyak command handler untuk bot Anda.

**Contoh penggunaan:**

1. Jalankan code di atas dengan NodeJS.
2. Buka Telegram dan chat dengan bot Anda.
3. Ketik "/start" di chat.
4. Bot akan membalas pesan "Halo! Selamat datang di bot Telegram saya.".

**Semoga contoh ini membantu!**

**Tips:**

* Untuk mempelajari lebih lanjut tentang Telegraf, kunjungi website resmi dan dokumentasi API.
* Anda dapat menemukan banyak contoh code Telegraf online.
* Bergabunglah dengan komunitas Telegraf untuk mendapatkan bantuan dan support.
