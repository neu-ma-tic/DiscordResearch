const discord = require("discord.js")
const client = new Discord.Client()
const token = "89517333ad294326d3e83d253fc667798c0d10959cc96359688a4aede09138d9"

client.on("ready", () =>{
  console.log('Logged in as ${client.user.tag}!')
})

client.on("message", msg => {
  if(msg.content ===  "hey"){
    msg.reply("hi")
  }
})

client.login(token)