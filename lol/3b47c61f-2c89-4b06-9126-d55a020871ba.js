import discord
from discord.ext import commands
import json
import random
import os
import keep_alive

with open('setting.json','r', encoding='utf8') as jfile:
    jdata = json.load(jfile)


intents = discord.Intents.default()
intents.members = True
bot = commands.Bot(command_prefix='!' , guild_subscriptions=True , intents=intents)


@bot.event
async def on_ready():
    print(">> Bot is online<<")


@bot.command()
async def 指令(ctx):
        await ctx.send(jdata['command'])       

@bot.command()
async def load(ctx, extension):
    bot.load_extension(f'cmds.{extension}')
    await ctx.send(f'Loaded {extension} done.')

@bot.command()
async def unload(ctx, extension):
    bot.unload_extension(f'cmds.{extension}')
    await ctx.send(f'Un - loaded {extension} done.')

@bot.command()
async def reload(ctx, extension):
    bot.reload_extension(f'cmds.{extension}')
    await ctx.send(f'Re - loaded {extension} done.')


for filename in os.listdir('./cmds'):
    if filename.endswith('.py'):
        bot.load_extension(f'cmds.{filename[:-3]}')



if __name__ == "__main__":
    keep_alive.keep_alive()
    bot.run(jdata['TOKEN'])