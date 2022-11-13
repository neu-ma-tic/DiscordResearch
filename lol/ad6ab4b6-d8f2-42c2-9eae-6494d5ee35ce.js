import discord
import os
import requests
import json
from keep_alive import keep_alive
from bs4 import BeautifulSoup

client = discord.Client()


def get_bitcoin():
    response = requests.get(
        'https://api.coindesk.com/v1/bpi/currentprice.json')
    json_data = json.loads(response.text)
    bitcoin_price = json_data['bpi']['USD']['rate']
    return (bitcoin_price + " USD")


def get_lostark():
    response = requests.get(
        'https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?format=json&appid=1599340'
    )
    json_data = json.loads(response.text)
    players = json_data['response']['player_count']
    return (players)


def get_poe():
    response = requests.get(
        'https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?format=json&appid=238960'
    )
    json_data = json.loads(response.text)
    players = json_data['response']['player_count']
    return (players)


def get_csgo():
    response = requests.get(
        'https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?format=json&appid=730'
    )
    json_data = json.loads(response.text)
    players = json_data['response']['player_count']
    return (players)


def get_dota():
    response = requests.get(
        'https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?format=json&appid=570'
    )
    json_data = json.loads(response.text)
    players = json_data['response']['player_count']
    return (players)


def scraping():
    stickers1 = 'http://steamcommunity.com/market/priceoverview/?appid=730&currency=3&market_hash_name=Sticker | Natus Vincere (Holo) | 2020 RMR'
    stickers2 = 'http://steamcommunity.com/market/priceoverview/?appid=730&currency=3&market_hash_name=Sticker | Fnatic (Foil) | 2020 RMR'
    stickers3 = 'http://steamcommunity.com/market/priceoverview/?appid=730&currency=3&market_hash_name=Sticker | Natus Vincere (Foil) | 2020 RMR'
    response1 = requests.get(stickers1)
    json1 = json.loads(response1.text)
    pret1 = json1['lowest_price']
    pret1 = pret1[:-1]
    pret1 = pret1.replace(",", ".")

    response2 = requests.get(stickers2)
    json2 = json.loads(response2.text)
    pret2 = json2['lowest_price']
    pret2 = pret2[:-1]
    pret2 = pret2.replace(",", ".")

    response3 = requests.get(stickers3)
    json3 = json.loads(response3.text)
    pret3 = json3['lowest_price']
    pret3 = pret3[:-1]
    pret3 = pret3.replace(",", ".")

    return (
        "Detalii aici: https://dekolor.ro/lab/steam/ \n [Sticker | Natus Vincere (Holo) | 2020 RMR] Cel mai mic pret acum: "
        + pret1 + ", cumparat cu 0.61 eur. \n" +
        "[Sticker | Fnatic (Foil) | 2020 RMR] Cel mai mic pret acum: " +
        pret2 +
        ", cumparat cu 1.65 eur. \n [Sticker | Natus Vincere (Foil) | 2020 RMR] Cel mai mic pret acum: "
        + pret3 + ", cumparat cu 2.56 eur")


@client.event
async def on_ready():
    print('We have logged in as {0.user}'.format(client))


@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if message.content.startswith('.help'):
        await message.channel.send(
            '.hello .bitcoin .stickers .muie .vali .marti .poe .csgo .dota .inferno .dust2 .mirage .overpass .nuke .vertigo .ancient .cache .train .sofrone .lostark .vremea'
        )

    if message.content.startswith('.caine'):
        await message.channel.send('cainele mananca salam')

    if message.content.startswith('.status'):
        await message.channel.send('https://stats.uptimerobot.com/PWOMQI0y4g')

    if message.content.startswith('.hello'):
        await message.channel.send('Hello!')

    if message.content.startswith('.bitcoin'):
        bitcoin = get_bitcoin()
        await message.channel.send(bitcoin)

    # csgo price tracker
    # if message.content.startswith('.stickers'):
    #   stickers = scraping()
    #   await message.channel.send(stickers)

    if message.content.startswith('.muie'):
        await message.channel.send("muie")

    if message.content.startswith('.vali'):
        await message.channel.send("https://i.imgur.com/9ih0xFT.png")

    if message.content.startswith('.marti'):
        await message.channel.send("https://i.imgur.com/JsA4vC9.png")

    if message.content.startswith('.poe'):
        poe = get_poe()
        await message.channel.send(
            str(poe) +
            " de jucatori in poe acum \n https://steamcharts.com/app/238960")

    if message.content.startswith('.csgo'):
        csgo = get_csgo()
        await message.channel.send(
            str(csgo) +
            " de jucatori in csgo acum \n https://steamcharts.com/app/730")

    if message.content.startswith('.lostark'):
        lostark = get_lostark()
        await message.channel.send(
            str(lostark) +
            " de jucatori in Lost Ark acum \n https://steamcharts.com/app/1599340"
        )

    if message.content.startswith('.ark'):
        lostark = get_lostark()
        await message.channel.send(
            str(lostark) +
            " de jucatori in Lost Ark acum \n https://steamcharts.com/app/1599340"
        )

    if message.content.startswith('.dota'):
        dota = get_dota()
        await message.channel.send(
            str(dota) +
            " de jucatori in dota2 acum \n https://steamcharts.com/app/570")

    if message.content.startswith('.inferno'):
        await message.channel.send("https://www.csgonades.com/maps/inferno")

    if message.content.startswith('.dust2'):
        await message.channel.send("https://www.csgonades.com/maps/dust2")

    if message.content.startswith('.mirage'):
        await message.channel.send("https://www.csgonades.com/maps/mirage")

    if message.content.startswith('.overpass'):
        await message.channel.send("https://www.csgonades.com/maps/overpass")

    if message.content.startswith('.nuke'):
        await message.channel.send("https://www.csgonades.com/maps/nuke")

    if message.content.startswith('.vertigo'):
        await message.channel.send("https://www.csgonades.com/maps/vertigo")

    if message.content.startswith('.ancient'):
        await message.channel.send("https://www.csgonades.com/maps/ancient")

    if message.content.startswith('.cache'):
        await message.channel.send("https://www.csgonades.com/maps/cache")

    if message.content.startswith('.train'):
        await message.channel.send("https://www.csgonades.com/maps/train")

    if message.content.startswith('.sofrone'):
        await message.channel.send("https://i.imgur.com/zhu7gR6.png")

    # pentru live 24/7
    # if message.content.startswith('.shashumga'):
    #   await client.change_presence(activity=discord.Streaming(name="maneaua otelul galati 24/7", url="https://www.youtube.com/watch?v=mfsH82XLnaQ"))

    if message.content.startswith('amongass'):
        await message.channel.send(
            "https://media.discordapp.net/attachments/362257960564555779/1004293074505170964/904135329999630396.gif"
        )

    if message.content.startswith('.vremea'):

        if str(message.author.id) == "949329684561285130":
            #stefan
            response = requests.get(
                "https://api.openweathermap.org/data/2.5/weather?lat=44.29030522853782&lon=28.613193735810942&units=metric&appid="
                + os.getenv("weather"))
            vremea = json.loads(response.text)
            await message.channel.send(
                "Vremea pentru " + str(vremea['name']) + ": " +
                str(vremea['main']['temp']) + "°C (" +
                str(vremea['weather'][0]['description']) +
                ") \n https://openweathermap.org/city/680963")
        if str(message.author.id) == "223409283293773824":
            #paul
            response = requests.get(
                "https://api.openweathermap.org/data/2.5/weather?lat=44.487272737968844&lon=26.175253649385745&units=metric&appid="
                + os.getenv("weather"))
            vremea = json.loads(response.text)
            await message.channel.send(
                "Vremea pentru " + str(vremea['name']) + ": " +
                str(vremea['main']['temp']) + "°C (" +
                str(vremea['weather'][0]['description']) + ")")
        if str(message.author.id) == "208103569574854656":
            #iulian
            response = requests.get(
                "https://api.openweathermap.org/data/2.5/weather?lat=44.395638155730964&lon=26.09327736134241&units=metric&appid="
                + os.getenv("weather"))
            vremea = json.loads(response.text)
            await message.channel.send(
                "Vremea pentru " + str(vremea['name']) + ": " +
                str(vremea['main']['temp']) + "°C (" +
                str(vremea['weather'][0]['description']) + ")")
        if str(message.author.id) == "145283900178956288":
            #mofrone
            response = requests.get(
                "https://api.openweathermap.org/data/2.5/weather?lat=44.23564942464506&lon=26.461350936576967&units=metric&appid="
                + os.getenv("weather"))
            vremea = json.loads(response.text)
            await message.channel.send(
                "Vremea pentru " + str(vremea['name']) + ": " +
                str(vremea['main']['temp']) + "°C (" +
                str(vremea['weather'][0]['description']) + ")")
        if str(message.author.id) == "231797592017731584":
            #leo
            response = requests.get(
                "https://api.openweathermap.org/data/2.5/weather?lat=44.45854780868243&lon=26.122374940203386&units=metric&appid="
                + os.getenv("weather"))
            vremea = json.loads(response.text)
            await message.channel.send(
                "Vremea pentru " + str(vremea['name']) + ": " +
                str(vremea['main']['temp']) + "°C (" +
                str(vremea['weather'][0]['description']) + ")")
        if str(message.author.id) == "191637851379728384":
            #vali
            response = requests.get(
                "https://api.openweathermap.org/data/2.5/weather?lat=44.43935805972991&lon=26.155933388842374&units=metric&appid="
                + os.getenv("weather"))
            vremea = json.loads(response.text)
            await message.channel.send(
                "Vremea pentru " + str(vremea['name']) + ": " +
                str(vremea['main']['temp']) + "°C (" +
                str(vremea['weather'][0]['description']) + ")")


keep_alive()
client.run(os.getenv('TOKEN'))
