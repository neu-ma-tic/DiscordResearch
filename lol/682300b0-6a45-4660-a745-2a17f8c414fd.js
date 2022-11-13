import os
import asyncio
import discord
#from discord import Member, User
import csv
import random
from keep_alive import keep_alive


#phrases for showerthought phrases 
phrases = []
with open("phrases.csv") as csv_file:
  csv_reader = csv.reader(csv_file, delimiter=",")
  for row in csv_reader:
    phrases.append(row[1])

# checks if file exists, creates otherwise
try: 
  with open("teilnehmer1.txt", "r") as dabei_file:
    dabei = dabei_file.readlines()
except FileNotFoundError:
  dabei = []
f = open("teilnehmer1.txt", "a")


def add_user(user):
  if not str(user) in dabei:  
    f.writelines(str(user) + "\n")
    dabei.append(str(user))
    f.flush()


client = discord.Client()


@client.event
async def on_ready():
  print(f"{client.user} logged in now!")
  # await User.send(f"{User.name} meldet sich zum Dienst!")
  client.loop.create_task(status_task())


@client.event
async def on_message(message):
  if message.author.bot:
    return
  if message.content.startswith("$dabei"):
    msg = "Bist du wirklich dabei?, Falls ja, antworte mit JA"  # insert meta-infos here
    await message.author.send(msg)    # sends private message
    if message.content.lower == "ja" and message.channel.type == "private":
      add_user(message.author)
      await message.author.send("Auf geht's!")
    else:
      await message.author.send("Es ist ein Fehler aufgetreten? Bist du vielleicht schon angemeldet?")
      

  if message.content.startswith("$userinfo"):
    print("Message: ", message.content)
    server = message.guild     
    print("Guilde: ", server)
    print("Member1: ", message.guild.members[0])
    # print("Members: ", client.guild.members)
    # print("Members: ", message.guild.members[2])
    print(message.guild.member_count)
    member_list = [m.name for m in message.guild.members]
    print("Member_list", member_list)
    for member in message.guild.members:
      print("Member: ", member.name)
    #args = message.content.split(' ')
    #print(args)
    #print(args[1])
    #print(args[1].name)
    # if len(args) == 2:
      # member= discord.utils.find(lambda m: args[1] in m.name, message.guild.members)
      # print(member)
      #if member:
    embed = discord.Embed(title='Userinfo für {}'.format(message.author), description='Dies ist eine Userinfo für den User {}'.format(message.author), color=0x22a7f0)
    embed.add_field(name='Server beigetreten', value=message.author.joined_at.strftime('%d/%m/%Y, %H:%M:%S'), inline=True)
    embed.add_field(name='Discord beigetreten', value=message.author.created_at.strftime('%d/%m/%Y, %H:%M:%S'), inline=True)
    rollen = ''
    for role in message.author.roles:
        if not role.is_default():
            rollen += '{} \r\n'.format(role.mention)
    if rollen:
        embed.add_field(name='Rollen', value=rollen, inline=True)
    embed.set_thumbnail(url=message.author.avatar_url)
    embed.set_footer(text='Ich bin ein EmbedFooter.')
    mess = await message.channel.send(embed=embed)
    await mess.add_reaction('🚍')
    #await mess.add_reaction('a:tut_herz:662606955520458754')
  elif message.content.startswith("$greet"):
    # -5 to get rid of the user's #
    await message.channel.send(f"Hello! How are you, {str(message.author)[:-5]}?")
  elif "$thought" in message.content:
    response = phrases[random.randint(0, len(phrases)-1)]
    await message.channel.send(response)
  elif "$help" in message.content:
    await message.channel.send("**Hilfe zum DiscordBot**\r\n"
                               "**$help**\r - zeigt diese Hilfe an\n"
                               "**$userinfo** - zeigt Beitrittsdatum des Users\r\n"
                               "**$greet** - begrüßt den User\r\n"
                               "**$thought** - liefert einen showerthought\r\n")


async def status_task():
    while True:
      await client.change_presence(activity=discord.Activity(type=discord.ActivityType.watching, name='die Tür'), status=discord.Status.online)
      await asyncio.sleep(120)
      await client.change_presence(activity=discord.Game('mir das Lied vom Tod'), status=discord.Status.online)
      await asyncio.sleep(800)
      await client.change_presence(activity=discord.Game("5 gegen Willy"), status=discord.Status.online)
      await asyncio.sleep(60)
      await client.change_presence(status=discord.Status.idle, activity="Denkt über sein Leben nach")
      await asyncio.sleep(30)

#@client.command
#async def test(ctx, *args):
#  await ctx.send('{} arguments: {}'.format(len(args), ', '.join(args)))


  #await asyncio.sleep(10)
    
  #print(message.content)
  #print(dir(message))
  #await message.delete()  
my_secret = os.environ['TOKEN']
keep_alive()
client.run(my_secret)

