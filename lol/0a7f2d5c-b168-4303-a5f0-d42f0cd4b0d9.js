const Discord = module.require("discord.js");

module.exports.run = async (client, message, args, hex) => {
if (!message.member.hasPermission(['KICK_MEMBERS']) && !message.member.hasPermission(['KICK_MEMBERS'])) return;
  const target = message.mentions.members.first() || await message.guild.members.fetch(args[0])

  try {
    await target.kick()
  } catch {
    return message.channel.send("❌ | Error kicking user, check if I have appropriate permission"); 
  }

const embed = new Discord.MessageEmbed()
.setTitle(`✅ | ${target.user.tag} was successfully kicked`)
.setColor(hex)
message.channel.send(embed)
}

module.exports.help = {
  name: "ping",
  description: "Gets a ping",
  usage: "ping"
};