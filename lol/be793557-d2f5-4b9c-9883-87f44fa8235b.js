import discord
import json
import os
import aiohttp
import requests
import google.oauth2.credentials
import asyncio

from discord import Webhook, AsyncWebhookAdapter
from googleapiclient.discovery import build
from urllib.error import HTTPError
from google.cloud import storage



from discord.ext import commands
from discord.ext import tasks

youtube = build('youtube', 'v3', developerKey=os.environ['YTKEY'])

plooId = "UCluIhbYRvztbXK1PF7Zr4wg"
ACITIVTY = discord.Activity(name='ur mom', type=discord.ActivityType.watching)
 # channel ID goes here
PREFIX = '.'
intents = discord.Intents.all()
client = commands.Bot(activity=ACITIVTY, command_prefix=PREFIX, intents=intents)

# #google cloud
google_client = storage.Client()
# https://console.cloud.google.com/storage/browser/youtube-notifications
bucket = google_client.get_bucket('youtube-notifications')


class myBot(commands.Bot):
    def __init__(self, command_prefix=PREFIX, *args, **kwargs):
        super().__init__(command_prefix=PREFIX, *args, **kwargs)
        self.general = None

    async def on_ready(self):
        print('Logged in as')
        print(self.user.name)
        print(self.user.id)
        print('------')
        self.general = self.get_channel(606181832395849730)
        self.poll_channel.start(plooId)

    # async def set_description(self, channel_id):

    @tasks.loop(seconds=60) # task runs every 60 seconds
    async def poll_channel(self, channel_id):
      try:
        blob = bucket.get_blob(f'ploo.txt')
        file_latest_vid = blob.download_as_text()
        
        # f = open("ploo.txt", "r+")
        # file_latest_vid = f.read()
        latest_vid = get_latest_vid(channel_id)
       
        print(file_latest_vid)
        print(latest_vid)

        if (latest_vid != file_latest_vid):
          await self.general.send("@everyone NEWEST UPLOAD! Wet's watch it soon pwease! 🥺🦦 " + latest_vid)
          # f.write(latest_vid)
          blob.delete()
          blob = bucket.blob("ploo.txt")
          blob.upload_from_string(latest_vid)

      except Exception as e:
        print(e)
        # f.close()

def dad(string):
  return "Hi Dad! I'm {0}".format(string)

#kills bot
@client.command(name='kill', help='kills my bot')
@commands.is_owner()
async def kill(ctx):
    if await client.is_owner(ctx.message.author):
      print("closing...")
      await client.close()
    else:
      await ctx.send("You can't do that!")

@client.command(pass_context=True)
async def test(ctx):
    await ctx.send("Hello")

#f bot webhook
@client.command(name='f')
async def f(ctx):
    async with aiohttp.ClientSession() as session:
        webhook = Webhook.from_url(os.environ['MYDISCORDWEBHOOK'], adapter=AsyncWebhookAdapter(session))
        await webhook.send('f', username='f bot')

@client.command()
async def add(ctx, a: dad):
    await ctx.send(a)

@client.event
async def on_message(message):
  if message.author == client.user:
    return

  if "ploo" in message.content:
    request = youtube.channels().list(part='contentDetails',id=plooId)

    try:
      response = request.execute()
    except HTTPError as e:
      print('Error response status code : {0}, reason : {1}'.format(e.status_code, e.error_details))

    playlistID = response["items"][0]["contentDetails"]["relatedPlaylists"]["uploads"]
    uploads_req = youtube.playlistItems().list(part='contentDetails', maxResults=1, playlistId=playlistID)
    uploads_thumb_req = youtube.playlistItems().list(part='snippet',maxResults=1, playlistId=playlistID)

    try:
      upload_resp = uploads_req.execute()
    except HTTPError as e:
      print('Error response status code : {0}, reason : {1}'.format(e.status_code, e.error_details))
    try:
      upload_thumb_resp = uploads_thumb_req.execute()
    except HTTPError as e:
      print('Error response status code : {0}, reason : {1}'.format(e.status_code, e.error_details))
    print("PLAYLIST: " + json.dumps(upload_thumb_resp, indent=4, sort_keys=True))
    newestUpload = upload_resp["items"][0]["contentDetails"]["videoId"]
    thumb_url = upload_thumb_resp["items"][0]["snippet"]["thumbnails"]["maxres"]["url"]
    print("https://www.youtube.com/watch?v=" + newestUpload)
    await message.add_reaction('👍')
    emb = discord.Embed(title="ploo", description="This is ploo's newest video! Let's watch it soon!", color=0xe74421)

    emb.set_image(url=thumb_url)
    emb.set_thumbnail(url="https://heightzone.com/wp-content/uploads/2020/11/00caa72c24447403ba70b662fd304a.jpg")
    await message.channel.send("NEWEST UPLOAD! https://www.youtube.com/watch?v=" + newestUpload)

  await client.process_commands(message)

def get_latest_vid(channel_id):
    request = youtube.channels().list(part='contentDetails',id=channel_id)

    try:
      response = request.execute()
    except HTTPError as e:
      print('Error response status code : {0}, reason : {1}'.format(e.status_code, e.error_details))

    playlistID = response["items"][0]["contentDetails"]["relatedPlaylists"]["uploads"]
    uploads_req = youtube.playlistItems().list(part='contentDetails', maxResults=1, playlistId=playlistID)

    try:
      upload_resp = uploads_req.execute()
    except HTTPError as e:
      print('Error response status code : {0}, reason : {1}'.format(e.status_code, e.error_details))

    # print("PLAYLIST: " + json.dumps(upload_resp, indent=4, sort_keys=True))
    newestUpload = upload_resp["items"][0]["contentDetails"]["videoId"]
    url = "https://www.youtube.com/watch?v=" + newestUpload

    return url

client = myBot()   
client.run(os.environ['TOKEN'])
