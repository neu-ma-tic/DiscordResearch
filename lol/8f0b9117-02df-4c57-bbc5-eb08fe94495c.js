onst discord = require('discord.js')
const client = new discord.Client()
const express = require('express')
const app = express()
const config = require('./config.json')
const Database = require("@replit/database")
const db = new Database()
require('dotenv').config()

app.get("/", (req, res) => {
  res.sendStatus(200)
})

app.listen(3000, () => {
  console.log("Express-Server aktiv")
})

client.commands = new discord.Collection();
client.aliases = new discord.Collection();

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on("ready", () => {
  console.log("Bot ist aktiv")
})

client.on("message", async (message) => {
  if (message.author.bot) return;
  if (!message.guild) return
  let prefix = config.prefix
  if(message.content.indexOf(prefix) == 0) {
    if (!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase().replace(prefix, "")
    if (cmd.length === 0) return;
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));
    if (command) {
      command.run(client, message, args, config ,db);
    }
  }
})

client.on("guildMemberAdd", async (member) => {
  let guild = member.guild
  db.get(`joinchannel_${guild.id}`).then(chx => {
    db.get(`join-message_${guild.id}`).then(msg => {
      if(!chx || !msg) return
      let channel = guild.channels.cache.get(chx)
      let embed = new discord.MessageEmbed()
      embed.setColor("GREEN")
      embed.setAuthor(member.user.username, member.user.avatarURL())
      embed.setTitle(member.user.username + " hat den Server betreten")
      embed.setDescription(msg.replace(/%user%/g, member.user.username))
      embed.setThumbnail(member.user.avatarURL())
      channel.send(embed)
    });
  });
})

client.on("guildMemberRemove", async (member) => {
  let guild = member.guild
  db.get(`leavechannel_${guild.id}`).then(chx => {
    db.get(`leave-message_${guild.id}`).then(msg => {
      if(!chx || !msg) return
      let channel = guild.channels.cache.get(chx)
      let embed = new discord.MessageEmbed()
      embed.setColor("RED")
      embed.setAuthor(member.user.username, member.user.avatarURL())
      embed.setTitle(member.user.username + " hat den Server verlassen")
      embed.setDescription(msg.replace(/%user%/g, member.user.username))
      embed.setThumbnail(member.user.avatarURL())
      channel.send(embed)
    });
  });
})

client.login(process.env.token)