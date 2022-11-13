const Discord = module.require("discord.js");

module.exports.run = async (client, message, args, hex) => {
  if (message.author.id != owner) return;
 message.channel.send(args.slice(0).join(" "))
}

module.exports.help = {
 name: "ping",
  description: "Gets a ping",
  usage: "ping"
};