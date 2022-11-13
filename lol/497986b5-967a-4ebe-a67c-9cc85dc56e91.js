import random as r
import asyncio, time
import os
import os.path
import discord
from discord.ext import commands
import requests
import json

sleepVar = 0.5

intents = discord.Intents.all()

bot = commands.Bot(command_prefix='!logan', intents=intents)


@bot.event
async def on_connect():
  print("Bot is Online")


@bot.command()
async def Message(ctx):
  await ctx.send("Logan is the best")


@bot.command()
async def Help(ctx):
  await ctx.send(
    "```Commands with bot\nPrefix: !logan\n1. !loganMessage\n2. !loganRps (rock, paper, scissors, plays)\n3. !loganAdd (value1, value2)\n4. !loganSub (value1, value2)\n5. !loganMult (value1, value2\n6. !loganDiv (value1, value2)\n7. !loganName (name)\n8. !loganTime (time, Am or Pm)\n9. !loganBanana\n10. !loganRandomSesame\n11. !loganEightBall (Phrase)\n12. !loganDance (Number of dances)```"
  )


@bot.command(aliases=["rps", "RPS"])
async def Rps(ctx, message):
  answer = message.lower()
  possible = ["rock", "paper", "scissors"]
  botAnswer = r.choice(possible)
  if answer not in possible:
    if answer == "plays":
      file_open = open("NumberOfTimesRun.txt", "r")
      read = file_open.read()
      await ctx.send("I've played rock, paper, scissors " + read + " times!")
    else:
      await ctx.send("Input not understood. Try Again")
  else:
    file_open = open("NumberOfTimesRun.txt", "r")
    read = file_open.read()
    x = int(read) + 1
    file_open.close()
    file_open = open("NumberOfTimesRun.txt", "w")
    file_open.write(str(x))
    file_open.close()
    await ctx.send("Your input: " + answer)
    await asyncio.sleep(sleepVar)
    await ctx.send("Bot's input: " + botAnswer)
    await asyncio.sleep(sleepVar)
    if botAnswer == answer:
      await ctx.send("You tied, both with " + answer)
    elif botAnswer == "rock":
      if answer == "scissors":
        await ctx.send("You lost, as " + botAnswer + " beats " + answer)
      elif answer == "paper":
        await ctx.send("You Won, as " + answer + " beats " + botAnswer)
    elif botAnswer == "paper":
      if answer == "scissors":
        await ctx.send("You Won, as " + answer + " beats " + botAnswer)
      elif answer == "rock":
        await ctx.send("You lost, as " + botAnswer + " beats " + answer)
    elif botAnswer == "scissors":
      if answer == "rock":
        await ctx.send("You Won, as " + answer + " beats " + botAnswer)
      elif answer == "paper":
        await ctx.send("You lost, as " + botAnswer + " beats " + answer)


@bot.command()
async def Add(ctx, value1, value2):
  if value1.strip('-').isnumeric() and value2.strip('-').isnumeric():
    sum = int(value1) + int(value2)
    await ctx.send(str(value1) + " + " + str(value2) + " = " + str(sum))
  else:
    await ctx.send("Answer couldn't be computed")


@bot.command()
async def Sub(ctx, value1, value2):
  if value1.strip('-').isnumeric() and value2.strip('-').isnumeric():
    sum = int(value1) - int(value2)
    await ctx.send(str(value1) + " - " + str(value2) + " = " + str(sum))
  else:
    await ctx.send("Answer couldn't be computed")


@bot.command()
async def Mult(ctx, value1, value2):
  if value1.strip('-').isnumeric() and value2.strip('-').isnumeric():
    sum = int(value1) * int(value2)
    await ctx.send(str(value1) + " * " + str(value2) + " = " + str(sum))
  else:
    await ctx.send("Answer couldn't be computed")


@bot.command()
async def Div(ctx, value1, value2):
  if value1.strip('-').isnumeric() and value2.strip('-').isnumeric():
    sum = int(value1) / int(value2)
    await ctx.send(str(value1) + " / " + str(value2) + " = " + str(sum))
  else:
    await ctx.send("Answer couldn't be computed")


@bot.command()
async def Name(ctx, name):
  await ctx.send("Hello " + name + "!")


@bot.command()
async def Time(ctx, time, amPm):
  if amPm.lower() == "am":
    if time in ["12", "1", "2", "3", "4"]:
      await ctx.send("Good Night!")
    elif time in ["5", "6", "7", "8", "9", "10", "11"]:
      await ctx.send("Good Morning!")
  elif amPm.lower() == "pm":
    if time in ["12", "1", "2", "3", "4", "5"]:
      await ctx.send("Good Afternoon!")
    elif time in ["6", "7", "8", "9", "10", "11"]:
      await ctx.send("Good Night!")


@bot.command()
async def Banana(ctx):
  await ctx.send(
    "https://domf5oio6qrcr.cloudfront.net/medialibrary/6372/202ebeef-6657-44ec-8fff-28352e1f5999.jpg"
  )


@bot.command()
async def RandomSesame(ctx):
  imageList = [
    "https://static.wikia.nocookie.net/muppet/images/5/5a/Elmo-elmo-elmo.jpg/revision/latest/scale-to-width-down/280?cb=20110917000614",
    "https://static.wikia.nocookie.net/muppet/images/0/08/CookieMonsterWaving.jpg/revision/latest/scale-to-width-down/280?cb=20120128192952",
    "https://static.wikia.nocookie.net/muppet/images/9/92/Bigbirdnewversion.png/revision/latest/scale-to-width-down/280?cb=20120128201030",
    "https://static.wikia.nocookie.net/muppet/images/e/e1/Bert_smile.png/revision/latest/scale-to-width-down/280?cb=20110630173259",
    "https://static.wikia.nocookie.net/muppet/images/c/c3/Oscar-can2.jpg/revision/latest/scale-to-width-down/280?cb=20090819003837",
    "https://static.wikia.nocookie.net/muppet/images/f/f7/GroverFullFigure2.png/revision/latest/scale-to-width-down/280?cb=20190222025220"
  ]
  x = r.randint(0, int(len(imageList)) - 1)
  await ctx.send(imageList[x])


@bot.command()
async def EightBall(ctx, *, phrase: str):
  ouputList = [
    "Without a Doubt", "Yes definitely", "As I see it, yes", "Yes",
    "Ask again later", "Cannot predict now", "My reply is no",
    "Outlook not so good"
  ]
  rand = r.randint(0, int(len(ouputList)) - 1)
  output = ouputList[rand]
  await ctx.send(phrase + " : " + output)


@bot.command()
async def Dance(ctx, times):
  if times.isnumeric():
    messages = ["┏(・o･)┛", "┗( ･o･)┓"]
    for x in range(int(times)):
      message = await ctx.send(messages[x % 2])
      await asyncio.sleep(.5)
      await message.delete()
  else:
    await ctx.send("Command was not understood")


@bot.command()
async def Joke(ctx):

  # created variable for the joke api url
  url = "https://official-joke-api.appspot.com/random_joke"

  # contact url
  req = requests.get(url)

  # get data from joke url
  data = req.json()

  # the data
  setup = data["setup"]
  punchLine = data["punchline"]

  await ctx.send(setup)
  await asyncio.sleep(2)
  await ctx.send(punchLine)


@bot.command()
async def Weather(ctx, zip):
  my_API = os.environ['WeatherAPIkey']
  url = "https://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",US&appid=" + my_API

  req = requests.get(url)

  data = req.json()

  description = data["weather"][0]["description"]
  temp = data["main"]["temp"]
  celsisus = float(temp) - 273.16
  faren = (celsisus * 1.8) + 32
  temp = round(faren, 1)
  await ctx.send(zip + "'s' description is " + description +
                 ", and it has a temp of " + str(temp) +
                 " degrees fahrenheit right now")



# opponents attacks
def Battle(name):
  if os.path.exists(name):
    open_file = open(name, "r")
    enemy = open_file.readline()
    enemyHealth = open_file.readline()
    personHealth = open_file.readline()
    open_file.close()
    if enemy == "L\n":
      open_file = open(name, "w")
      newHealth = int(personHealth) - 20
      fileWriting = "L\n" + str(enemyHealth) + str(newHealth)
      open_file.write(fileWriting)
      open_file.close()
      return "Lizard Used Tail Swipe\nYour Health: " +  str(newHealth)+"\nEnemy Health: " + str(enemyHealth)

# person attack
@bot.command()
async def Slap(ctx):
  if os.path.exists(str(ctx.author.name)):
    open_file = open(str(ctx.author.name), "r")
    enemy = open_file.readline()
    enemyHealth = open_file.readline()
    personHealth = open_file.readline()
    open_file.close()
    if enemy == "L\n":
      if int(enemyHealth.strip("\n")) > 0:
        newEnemyHealth = int(enemyHealth) - 35
        if newEnemyHealth > 0:
          fileWriting = "L\n" + str(newEnemyHealth) + "\n"+str(personHealth)
          open_file = open(str(ctx.author.name),"w")
          open_file.write(fileWriting)
          open_file.close()
          await ctx.send("```You used Slap\nYour Health: " +  str(personHealth)+"\nEnemy Health: " + str(newEnemyHealth)+"```")
          time.sleep(2)
          attack = Battle(str(ctx.author.name))
          await ctx.send("```"+attack+ "\nYour Abilites:\n !loganSlap\n\t-Deal 35 damage""```")
        else:
          await ctx.send("```You've Won\nLizard has been defeated```")
          os.remove(str(ctx.author.name))
  else:
    await ctx.send("```Not Currently Fighting any Enemy```")


# control center of the fight

@bot.command()
async def Fight(ctx, message):
  if message.lower() == "lizard":
    open_file = open(str(ctx.author.name), "w")
    open_file.write("L\n300\n500")
    open_file.close()
    attack = Battle(str(ctx.author.name))
    await ctx.send("```"+attack+ "\nYour Abilites:\n !loganSlap\n\t-Deal 35 damage""```")
    
  else:
    await ctx.send("Please Choose a Viable enemy")

# regular definition using api key
@bot.command()
async def Def(ctx, message):

  url = "https://master-dictionary.p.rapidapi.com/"+ message
  
  my_secret = os.environ['DefKey']
  headers = {
  	"X-RapidAPI-Key": my_secret,
  	"X-RapidAPI-Host": "master-dictionary.p.rapidapi.com"
  }
  
  response = requests.request("GET", url, headers=headers)
  data = response.json()
  definition = data[0]["meanings"][0]["definitions"][0]["definition"]

  await ctx.send("The definition to ***" + message + "*** is\n\t-***" +definition + "***")



#urban dictionary 
@bot.command()
async def UrbanDef(ctx, message):
  
  url = "https://mashape-community-urban-dictionary.p.rapidapi.com/define"
  querystring = {"term":message}
  
  my_secret = os.environ['DefKey']
  headers = {
  	"X-RapidAPI-Key": my_secret,
  	"X-RapidAPI-Host": "mashape-community-urban-dictionary.p.rapidapi.com"
  }
  
  response = requests.request("GET", url, headers=headers, params=querystring)
  data = response.json()
  definition = data["list"][0]["definition"]
  
  await ctx.send("The definition to ***" + message + "** is\n\t-"+definition)


my_secret = os.environ['TOKEN']
bot.run(my_secret)
