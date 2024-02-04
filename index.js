const { Telegraf } = require('telegraf')

const plugins = require('./plugin');
const { help: helpFunction } = require('./plugin/help');
const { info: infoFunction } = require('./plugin/info');

const bot = new Telegraf('6910857254:AAG31FrXK9p4Xbl81AZq9HIFH09EGODB_xE');

// Gunakan fungsi plugin di bot Anda
bot.command('start', (ctx) => {
  plugins.sayHello(ctx);
});

bot.command('help', (ctx) => {
  helpFunction(ctx);
});

bot.command('info', (ctx) => {
  infoFunction(ctx); // Panggil fungsi info dari plugins
});

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))