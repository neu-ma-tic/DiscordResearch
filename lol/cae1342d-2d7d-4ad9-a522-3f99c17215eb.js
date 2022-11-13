# Discord project developed by awsumturtle#6969, to make discord bots easier to learn to make.

import os # Imports the os library, also see https://docs.python.org/3/library/os.html

import discord # Imports the discord library, imports every function from the discord.py library.

from dotenv import load_dotenv # Imports the dotenv library, also see https://pypi.org/project/python-dotenv/

discord_bot_token = os.getenv('Nzk5MzA4OTI3MzgwNjE5MjY0.YABscg.9dqP8UMqb7fJi3gshkTrQX9iYb8') # Input your discord bot token, more about how to get the token on the project page.

client = discord.Client() # Gets the current discord client.

@client.event
async def ready():
  print(f"{client.user} ready to do stuff.") # When the bot is ready to be used, the bot will say your client name and ready to do stuff. (In the console)

client.run(discord_bot_token) # Runs the bot client by the token of the discord bot.