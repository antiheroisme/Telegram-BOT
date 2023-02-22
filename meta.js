const TelegramBot = require('node-telegram-bot-api');

// Token bot Telegram, dapatkan dari @BotFather saat membuat bot baru
const token = 'YOUR API-KEY'; // masukin apikey nya disini

// Buat instance bot Telegram
const bot = new TelegramBot(token, { polling: true });

// Fungsi untuk notifikasi koneksi
console.log('Terhubung ke perangkat')

// Fungsi untuk menangani perintah "start"
function handleStart(msg) {
  const chatId = msg.chat.id;
  const message = 'Halo! Selamat datang di bot kami.';
  bot.sendMessage(chatId, message, {
    reply_markup: {
      keyboard: [
        [{ text: 'Rules' }],
        [{ text: 'About' }], 
        [{ text: 'Sosmed' }],
      ],
      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
}

// Fungsi untuk menangani perintah "rules"
function handleRules(msg) {
  const chatId = msg.chat.id;
  const message = 'Ini adalah rules dari kami...';
  bot.sendMessage(chatId, message);
}
  
// Fungsi untuk menangani perintah "about"
function handleAbout(msg) {
  const chatId = msg.chat.id;
  const message = 'Ini adalah tentang kami...';
  bot.sendMessage(chatId, message);
}

// Fungsi untuk menangani perintah "sosmed"
function handleSosmed(msg) {
  const chatId = msg.chat.id;
  const message = 'Ini adalah sosial media kami...';
  bot.sendMessage(chatId, message);
}

// Fungsi untuk menangani pesan yang masuk
function handleMessage(msg) {
  const chatId = msg.chat.id;
  const text = msg.text.toString().toLowerCase();
  const date = new Date(msg.date * 1000); // Ubah Unix timestamp ke Date object
  const dateString = date.toLocaleString(); // Format tanggal ke string

  console.log(`[${dateString}] Pesan dari ${msg.from.first_name} (${chatId}): ${text}`); // Tampilkan pesan di terminal

  switch (text) {
    case 'start':
      handleStart(msg);
      break;

    case 'rules':
      handleRules(msg);
      break;

    case 'about':
      handleAbout(msg);
      break;

    case 'sosmed':
      handleSosmed(msg);
      break;

    default:
      const message = 'Maaf, perintah yang Anda masukkan tidak valid.';
      bot.sendMessage(chatId, message);
      break;
  }
}

// Panggil fungsi handleMessage ketika pesan diterima
bot.on('message', handleMessage);