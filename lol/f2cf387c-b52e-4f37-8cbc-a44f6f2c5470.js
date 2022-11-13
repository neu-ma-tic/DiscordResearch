import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

var list = require('badwords-list'),
    array = list.array

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    console.log('The bot is ready')
})

client.on('messageCreate', (message) => {
    if(message.content == 'ping'){
        message.reply({
            content: 'pong'
        })
    }
})

client.on('messageCreate', (message) => {
    if(array.includes(message.content)){
        message.channel.send({
            content: 'kindly go wash out your dirty mouth'
        }) 
        message.delete()
    }
    if (message.content.startsWith('/dm ') && message.mentions.users.size) {
        var v=message.toString().split(' ').shift().shift().join(' ') // Takes the DM content from the message
        var member=message.mentions.users[0] // The mentioned user
        member.send(v) // send that user a DM
    }
        
})

client.login(process.env.TOKEN)
