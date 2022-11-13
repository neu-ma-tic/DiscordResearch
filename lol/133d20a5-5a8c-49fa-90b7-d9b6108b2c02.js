const Discord = require("discord.js");
const bot = new Discord.Client;
const mySecret = process.env['token']

bot.login(mySecret)
