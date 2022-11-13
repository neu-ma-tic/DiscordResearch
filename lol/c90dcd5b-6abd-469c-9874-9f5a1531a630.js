const Discord = require("discord.js");
const { readdorSync } = require("fs");

module.exports.run = async (bot, message, args) => {
  let embed = new Discord.MessageEmbed()
  .setTitle("Hello!")
  .setColor("RANDOM")

  message.channel.send(embed);
}

module.exports.help = {
  name: "sayhi",
  description: "Bot says hello to you",
  usage: "!sayhi",
  category: "fun",
  aliases: [""]
};