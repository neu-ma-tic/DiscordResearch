const Discord = module.require("discord.js");

module.exports.run = async (client, message, args, hex) => {
 let mc = message.guild.memberCount;
 const embed = new Discord.MessageEmbed()
 .setTitle("Membercount")
 .setColor(hex)
 .setDescription(mc)
 .setTimestamp()
 message.channel.send(embed)
}

module.exports.help = {
 name: "ping",
  description: "Gets a ping",
  usage: "ping"
};