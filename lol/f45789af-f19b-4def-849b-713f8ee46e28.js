import os
import discord
from discord.ext import commands
from dotenv import load_dotenv

load_dotenv()
TOKEN = os.getenv('DISCORD_TOKEN')

bot = commands.Bot(command_prefix='!')


@bot.command(name='add')
async def add(ctx, num1: int, num2: int):
    response = num1 + num2
    await ctx.send(response)


@bot.command(name='subtract')
async def subtract(ctx, num1: int, num2: int):
    response = num1 - num2
    await ctx.send(response)


@bot.command(name='multiply')
async def multiply(ctx, num1: int, num2: int):
    response = num1 * num2
    await ctx.send(response)


@bot.command(name='divide')
async def divide(ctx, num1: int, num2: int):
    response = num1 / num2
    await ctx.send(response)


bot.run(TOKEN)