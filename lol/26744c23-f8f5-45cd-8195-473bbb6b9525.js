#In order for the code to work these packages need to be installed: (discord), (discord.py), (aiohttp), (ffmpeg), (PyNaCl) and (youtube_dl)

import discord
from discord.ext import commands
import music

cogs = [music]

client = commands.Bot(command_prefix='!', intents = discord.Intents.all())

for i in range(len(cogs)):
    cogs[i].setup(client)



client.run("") ##<-PutBotAPITokenHere