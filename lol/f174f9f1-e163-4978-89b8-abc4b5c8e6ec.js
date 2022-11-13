const Discord = module.require("discord.js");

module.exports.run = async (client, message, args, hex) => {

 let msg = ""
 args.forEach(i=>{
   msg = msg + "👏" + " " + i + " "
  
 })
 msg += "👏"
 if (msg.length > 1999) {message.channel.send("🤦‍♂️ I can't clapify ")}
 message.channel.send(msg)
}

module.exports.help = {
 name: "ping",
  description: "Gets a ping",
  usage: "ping"
};