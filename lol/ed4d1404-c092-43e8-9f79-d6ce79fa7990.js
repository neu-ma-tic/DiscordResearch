require("dotenv").config();
const Discord = require("discord.js");

const client = new Discord.Client({
  intents: 32767
})

client.on("ready", () => {
  console.log(`${client.user.username} is online`)
})

client.login(process.env.TOKEN)