import discord
import requests

client = discord.Client()

@client.event
async def on_ready():
    print('holaaaaaaaaa'.format(client))

@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if message.content.startswith('tefi'):
        await message.channel.send('<3')     

    if message.content.startswith('que'):
        await message.channel.send('so') 

    if message.content.startswith('svstatus'):
        await message.channel.send('cerra el ojete')

    if message.content.startswith('infinite poop'):
        await message.channel.send('?') 
     
client.run('')