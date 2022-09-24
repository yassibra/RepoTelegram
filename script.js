const { Telegraf } = require('telegraf');
var bot = new Telegraf('5521931503:AAGDYHLUuBYcIKT68jy7gYZUAduJEqH6uzE') // We saved our bot token to the bot variable
bot.start(ctx => ctx.reply(`
   Hi, I'm a simple bot
`))
bot.launch();