const express = require("express");
const app = express()

app.listen(3000, () => {
  console.log("Project is running!");
})

app.get("/", (req, res) => {
  res.send("Hello World!");
})

const Discord = require("Discord.js")
const client = new Discord.client({intents:["GUILDS", "GUILD_MESSAGES"]});

client.on("message", message => {
  if(message.content === "!hw") {
    message.channel.send(
      "Math Scale SLS\
      HCL Compo & SLS\
      I&E Branding Quiz"
                         )
  }
})

client.login(process.env.token);