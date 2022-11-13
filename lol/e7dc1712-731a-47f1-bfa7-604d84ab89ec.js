import discord
from discord.ext import commands
from core.classes import Cog_Extension

class Main(Cog_Extension):


    @commands.command()
    async def ping(self, ctx):
        await ctx.send(f'{round(self.bot.latency*1000)} (ms)')


    @commands.command()
    async def hihi(self, ctx):
        await ctx.send('1234321')        

def setup(bot):
    bot.add_cog(Main(bot))