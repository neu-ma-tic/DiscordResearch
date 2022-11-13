import discord
from discord.ext import commands
from discord.ext.commands.core import Command
from core.classes import Cog_Extension
import random
import json

with open('setting.json','r', encoding='utf8') as jfile:
    jdata = json.load(jfile)

class React(Cog_Extension):


    @commands.command()
    async def bee(self, ctx):
        random_pic = random.choice(jdata['pic'])
        pic = discord.File(random_pic)
        await ctx.send(file = pic)   
    
    @commands.command()
    async def 劉品言(self, ctx):
        random_chig = random.choice(jdata['chig'])
        chig = discord.File(random_chig)
        await ctx.send(file = chig)

    @commands.command()
    async def dinner(self, ctx):
        random_dinner = random.choice(jdata['dinner'])
        await ctx.send(random_dinner)

    @commands.command()
    async def 武漢(self, ctx):
        await ctx.send('https://attach.setn.com/newsimages/2020/01/26/2378111-XXL.jpg')




def setup(bot):
    bot.add_cog(React(bot))