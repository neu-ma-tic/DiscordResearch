module.exports.run = async (client, message, args, hex) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("🤦‍♂️ | You don't have permission to use this command");


    let toMute =message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if(!toMute) return message.reply("❌ | Please enter a user to mute");

    let role = await message.guild.roles.cache.find(r => r.name === "Muted")

    if(!role){
  
        try{
          message.channel.send("❌ | No muted role found, attempting to create one now. Please try the command again")
        let role = await message.guild.roles.create({ data: { name: 'Muted', permissions: []} });
            message.guild.channels.cache.forEach(async (channel, id)=>{
                await channel.updateOverwrite(role, {
                    SEND_MESSAGES: false,
                    SPEAK: false,
                    SEND_TTS_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch(e){
            message.channel.send("❌ | There was an error.")
        }
    }

    if(toMute.roles.cache.some(role => role.name === 'Muted')) return message.reply("🤦‍♂️ | That user is already muted");

    await toMute.roles.add(role).then(s=>{message.channel.send('✅ | Successfully muted user indefinently.')})

    return;

}
module.exports.help = {
 name: "ping",
  description: "Gets a ping",
  usage: "ping"
};