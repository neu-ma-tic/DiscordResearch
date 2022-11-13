import discord
from discord.ext import commands
import music

cogs =  [music]

client = commands.bot(command_prefix='?', intents = discord.intents.all())

for i in range(len(cogs)):
  cogs[i].setup(client)


client.run("ODU4NTUzMDAwNTcwNTE5NTgz.YNfzyg.ss760WEXkg9iCz37HlReQCZipbk")