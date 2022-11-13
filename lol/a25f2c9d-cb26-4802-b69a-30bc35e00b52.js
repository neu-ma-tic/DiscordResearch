#In order for the code to work these packages need to be installed: (discord), (discord.py), (aiohttp), (ffmpeg), (PyNaCl) and (youtube_dl)

import discord
from discord.ext import commands
import youtube_dl

class music(commands.Cog):
  def __init__(self,client):
      self.client = client

      @client.command(pass_context=True)
      async def join(ctx):
        if (ctx.author.voice):
          channel = ctx.message.author.voice.channel
          await channel.connect()

      @client.command(pass_context=True)
      async def leave(ctx):
        await ctx.guild.voice_client.disconnect()
      

      @client.command(pass_context=True)
      async def play(ctx,url:str):
        ctx.voice_client.stop()
        FFMPEG_OPTIONS = {'before_options': '-reconnect 1 -reconnect_streamed 1 -reconnect_delay_max 5', 'options': '-vn'}
        YDL_OPTIONS = {'format':"bestaudio"}
        vc = ctx.voice_client
 
        with youtube_dl.YoutubeDL(YDL_OPTIONS) as ydl:
            info = ydl.extract_info(url, download=False)
            url2 = info['formats'][0]['url']
            source = await discord.FFmpegOpusAudio.from_probe(url2, **FFMPEG_OPTIONS)
            vc.play(source)
def setup(client):
    client.add_cog(music(client))

    client.run("") ##<-PutBotAPITokenHere