import os
import discord
from discord.ext import commands

from keepalive import keep_alive

bot = commands.Bot(command_prefix="!")

@bot.command()
async def hello(ctx):
  await ctx.reply('Hello!')


my_secret = os.environ['Token']


keep_alive()
bot.run(my_secret)