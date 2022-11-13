const Dicord =  require('discord.js')  
const client = new Discord.client();

client.on('ready', () => {
  console.log('I am ready to go')
  client.user.setActivity('I am Devil')
})

client.on('message')