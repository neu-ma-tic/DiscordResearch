import discord
from discord.ext import commands
import json
from core.classes import Cog_Extension

with open('setting.json','r', encoding='utf8') as jfile:
    jdata = json.load(jfile)


class Event(Cog_Extension):
    @commands.Cog.listener()
    async def on_member_join(self, member):
        channel = self.bot.get_channel(int(jdata['Welcome_channel']))
        await channel.send(f'{member}  安安泥好~')

    @commands.Cog.listener()
    async def on_message(self, msg):
        if "小蜜蜂" in msg.content.lower()  and msg.author != self.bot.user:
            await msg.channel.send('嗡嗡嗡~(*ﾟ∀ﾟ)')

    @commands.Cog.listener()
    async def on_message(self, msg):
        if "下棋" in msg.content.lower()  and msg.author != self.bot.user:
            await msg.channel.send('下棋下棋٩(ﾟ∀ﾟ)و ')

    @commands.Cog.listener()
    async def on_message(self, msg):
        if "lol" in msg.content.lower()  and msg.author != self.bot.user:
            await msg.channel.send('打嘍囉 σ ﾟ∀ ﾟ) ﾟ∀ﾟ)σ  ')

 
def setup(bot):
    bot.add_cog(Event(bot))       