import discord
from discord.ext import commands

bot = commands.Bot(command_prefix='!')

@bot.event
async def on_ready():
    print("봇이 시작되었습니다.")


@bot.command()

async def 안녕(message):
    await message.send('반갑습니다')

bot.run('ODE1MTgxMjA5NzYwMDM4OTQy.GiplX6.M3lwupXTKfuOdCAguLCIiiAKgdxXLhuOXBPTJ4')