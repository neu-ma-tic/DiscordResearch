const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const prefix = '*';
const token = 'OTc2ODQ3NzQ0NzEyOTgyNTgw.GFqkRZ.JUEkqgfT4qSO9WmqgJqVhNULFXtvgsnWx-R9s0';

const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.once('ready', () => {
  console.log('Félicitations, votre bot Discord a été correctement initialisé !');
});
client.on("messageCreate", message => {
  dictionary(message);

  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'kick') {
    client.commands.get('kick').execute(message, args);
  } else if (command === 'ban') {
    client.commands.get('ban').execute(message, args);
  } else if (command === 'ping') {
    client.commands.get('ping').execute(message, args);
  } else if (command === 'clear') {
    client.commands.get('clear').execute(message, args);
  } else if (command === 'mute') {
    client.commands.get('mute').execute(message, args);
    const channel = client.channels.cache.find(channel => channel.name === 'avertissements')
    channel.send(`<@${message.mentions.users.first()}> a été muté ! \nResponsable : <@${message.author.id}>`);
  } else if (command === 'unmute') {
    client.commands.get('unmute').execute(message, args);
  }
})

function dictionary(message) {
  if (message.content.toLowerCase().includes('fdp')) {
    message.channel.send('Attention au Language !');
  } else if (message.content.toLowerCase().includes('pedro')) {
    client.users.fetch('240755025129897984', false).then((user) => {
      user.send(`Tu as été cité dans ${message.channel}, par ${message.author}!`)
    })
  } else if (message.content.toLowerCase().includes('adc' || 'adrien')) {
    client.users.fetch('426036648183070723', false).then((user) => {
      user.send(`Tu as été cité dans ${message.channel}, par ${message.author}!`)
    })
  }
}

client.login(token);
