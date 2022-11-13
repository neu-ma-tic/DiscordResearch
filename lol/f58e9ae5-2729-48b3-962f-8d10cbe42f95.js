const Discord = module.require("discord.js");

module.exports.run = async (client, message, args, hex) => {
  var outcomes = ['Outlook good', 'My sources say no', 'Better not tell you now', 'Reply hazy try again', 'Outlook not so good', 'Very doubtful','My reply is no', 'Concentrate and ask again', 'Signs point to yes', 'im not sure but ur def stupid', 'honestly i dont care lol']
  const choice = await outcomes[Math.floor(Math.random() * outcomes.length)];
  message.channel.send("🎱 | " + choice + ", **" + message.author.username + "**")
}

module.exports.help = {
 name: "ping",
  description: "Gets a ping",
  usage: "ping"
};