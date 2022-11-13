import discord
from discord.ext import commands
import asyncio
from webserver import keep_alive
import os


client = commands.Bot(command_prefix = "!")
client.remove_command('help')

@clint.event
async def on_ready():
  print("Bot is currently online!")


  #Help command
  @client.command(pass_context=True)
  async def help(ctx):
        author = ctx.message.author

        embed = discord.Embed(
        colour = discord.Colour.orange()
        )

        embed.set_author(name="help:")
        embed.add_field(name="!help",value="Help Command", inline=False)

        await client.send_message(author, embed-embed)
        await client.say("Message sent to your DMs! :thumbsup:")

keep_alive()
TOKEN = os.environ.get("DISCORD_BOT_SECRET")
client.run(TOKEN)