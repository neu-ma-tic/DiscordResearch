const express = require('express');
const app = express();
const port = 3000;
try{
app.get('/', (req, res) => res.send('Hello World!'));
1/0
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
1/0


// discord bot code



const DiscordJS = require('discord.js')
const WOKCommands = require('wokcommands')
const path = require('path')
const { Intents } = DiscordJS
const client = new DiscordJS.Client({
  // These intents are recommended for the built in help menu
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
})
client.on('ready', () => {
  new WOKCommands(client, {
    // The name of the local folder for your command files
    commandsDir: path.join(__dirname, 'commands'),
    // What guilds your slash commands will be created in
    testServers: ['904346698074165278','885308470302244914']
  })
})
client.login(process.env.BOTTOKEN)
}catch{
  console.log('broke')
}