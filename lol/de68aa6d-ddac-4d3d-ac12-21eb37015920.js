const Discord = module.require("discord.js");

module.exports.run = async (client, message, args, hex) => {
const embed = new Discord.MessageEmbed()
.setThumbnail(client.user.avatarURL())
.setTitle("**Pecala Help**")
.setDescription('**Commands** \n \n ✨ `$ban` \n ✨ `$kick` \n ✨ `$avatar` \n ✨ `$membercount`\n ✨ `$mute` \n \n  **Fun** \n\n ✨ `$8ball` \n ✨ `$emojify` \n ✨ `$clap`\n\n \n New commands daily, check $help daily to see the command progress.')
.setColor(hex)
.setFooter("Created by exploitt#0001")
message.channel.send(embed)
}

module.exports.help = {
  name: "ping",
  description: "Gets a ping",
  usage: "ping"
};