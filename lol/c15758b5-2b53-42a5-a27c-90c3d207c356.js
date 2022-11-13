const express = require("express");
const app = express();

app.listen(process.env.PORT, () => {
  console.log("Project is running!");
})

app.get("/", (req, res) => {
  res.send("Hello World!");
})


const Discord = require("discord.js");
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
  allowedMentions: ["users"]
});
const fs = require('fs');
const prefix = "/"
client.commands = new Discord.Collection();
const commands = fs.readdirSync("./Commands").filter(file => file.endsWith(".js"));
for (file of commands) {
  const commandName = file.split(".")[0]
  const command = require(`./Commands/${commandName}`)
  client.commands.set(commandName, command)
}



client.on("messageCreate", message => {
  if(message.content.startsWith(prefix)) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const commandName = args.shift()
    const command = client.commands.get(commandName)
    if (!command) return
    command.run(client, message, args)
  }
})

client.on("messageCreate", message => {
   if (message.author.bot) return;
  if(message.content.includes("dream")) {
   var msgnumber= (Math.floor((Math.random() * 2) + 1));
    console.log(msgnumber);
    if (msgnumber===1) {
         message.channel.send("did someone say dream!?");
    } else if (msgnumber===2) {
         message.channel.send("why we talkin' about dream... huh!?");
    }
  }
})

client.on('messageCreate', message => {
  if (message.content === '!ping') {  
    message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
  }
});

client.on("messageCreate", message => {
  if(message.content === "username") {
    message.channel.send("I've sent you a DM containing your username.")
    message.author.send("Your user is:" + " "+message.author.username)
  }
})

client.on('ready', () => {
  console.log('Bot is online!');
  client.user.setActivity('not being entertained', {type : 'PLAYING'} )
})

client.login(process.env.token);