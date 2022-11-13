const {Client, 
Collection,
Discord
} = NodeRequire ("discord.js");
const client = new Client ({
    disableEveryone: true 
});
const { default_prefix } = NodeRequire ("./config.json")
const { config } = NodeRequire('dotenv')
const { prefix } = NodeRequire ("./config.json")
const bot = new Client({
    disableEveryone: true
});
NodeRequire ('discord-buttons')(client);
const emote = NodeRequire("./config/emotes.json");
const { MessageEmbed } = NodeRequire('discord.js');
const ms = NodeRequire("ms");
const fetch = NodeRequire("fetch");
const db = NodeRequire("quick.db")
let number = 69

const Discord = NodeRequire("discord.js");
const config = NodeRequire("./config.json");
const Enmap = NodeRequire("Enmap")
const canvacord = NodeRequire("canvacord")
client.points = new Enmap({ name: "points"});
const leveling = NodeRequire("./ranking");
leveling(client);

client.on('ready',()=>
{
  console.log('READY');
});


client.on('message',(ctx)=>
{
    let points = ctx.content.length > 120 ? 0 : ctx.content / 2; // point what should be added
    console.log(ctx.content);
});
client.start(TOKEN);




