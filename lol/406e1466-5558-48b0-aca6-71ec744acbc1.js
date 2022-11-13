const Discord = module.require("discord.js");

module.exports.run = async (client, message, args, hex) => {
if (!message.member.hasPermission(['BAN_MEMBERS']) && !message.member.hasPermission(['ADMINISTRATOR'])) return;
  const target = message.mentions.members.first() || await message.guild.members.fetch(args[0])

  try {
    await target.ban()
  } catch {
    return message.channel.send("❌ | Error banning user, check if I have appropriate permission or if you're missing args"); 
  }

const embed = new Discord.MessageEmbed()
.setTitle(`✅ | ${target.user.tag} was successfully banned`)
.setColor(hex)
message.channel.send(embed)
}

module.exports.help = {
  name: "ping",
  description: "Gets a ping",
  usage: "ping"
};