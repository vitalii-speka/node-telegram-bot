const TelegramBot = require("node-telegram-bot-api");

require("dotenv").config();

console.log("BOT has been started ...");

const bot = new TelegramBot(process.env.TOKEN, {
  polling: {
    interval: 300,
    autoStart: true,
    params: {
      timeout: 10,
    },
  },
});

// console.log("🚀 ~ bot:", bot);

bot.on("polling_error", (err) => console.log(err.data.error.message));

// bot.on("text", async (msg) => {
//   console.log(msg);
// });

function debugFn(obj = {}) {
  return JSON.stringify(obj, null, 4);
}

bot.on("message", async (msg) => {
  const { id } = msg.chat;
  //   await bot.sendMessage(id, ` :) ${msg.from.first_name}, Привіт старий!`);
  await bot.sendMessage(id, debugFn(msg));
  //   await bot.sendMessage(msg.chat.username, msg.chat.username);
  //   await bot.sendMessage(msg.chat.id, msg.text);
});
