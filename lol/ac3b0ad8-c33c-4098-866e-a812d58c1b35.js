#discord bot first

import discord
import os
client = discord.Client()

@client.event
async def on_ready():
  print('we have logged in as {0.user}'
  .format(client))

@client.event
async def on_message(message):
  if message.author == client.user:
    return
    
  if message.content.startswith('hi'):
    await message.channel.send("radhey noob and keyan noob")




client.run(os.getenv('TOKEN'))