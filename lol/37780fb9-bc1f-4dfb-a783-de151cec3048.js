const Discord = module.require("discord.js");

module.exports.run = async (client, message, args, hex) => {
const user = message.mentions.users.first() || message.author;
  const embed = new Discord.MessageEmbed()
  .setTitle(user.username)
	.setImage(user.displayAvatarURL({ dynamic:true}))
  message.channel.send(embed)
}

module.exports.help = {
 name: "ping",
  description: "Gets a ping",
  usage: "ping"
};