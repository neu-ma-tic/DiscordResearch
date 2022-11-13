import discord
import asyncio
from discord.ext import commands
from discord.ext.commands import has_permissions

intents = discord.Intents.all()
bot = commands.Bot(command_prefix="-", intents=intents)

@bot.command(pass_context=True)
async def DM(ctx, user: discord.User, *, message=None):
    message = message or "This Message is sent via DM"
    await bot.send_message(user, message)
bot.run('Nzk0OTgwNjMwNzQzMDg5MTgy.X_CtaA.8eaSZ4yhsHur0rudT0hhN5UdhCI')