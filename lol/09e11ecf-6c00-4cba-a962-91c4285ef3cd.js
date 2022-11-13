import discord
from discord import embeds
#from dotenv import load_dotenv
TOKEN = 'ODQ3MTU4OTkxNzE3MDA3NDAw.YK6ASw.8mwBVnvhMtutkkEOP0zKKaMNXgE'
from discord.ext import commands

intents=discord.Intents.all()
bot = commands.Bot(command_prefix='!!',intents=intents)
@bot.command()
async def on_message( message ):

    if message.author.bot:
        return

    else:

        member = message.author.name
        msg_len = len(message.content)
        rand_number_1 = randint( 1, 10 )
        exp_first = msg_len * rand_number_1
        coins_first = exp_first // 10

        data_levels_member_first = { 'exp': 0, 'coins': 0, 'level': 0}

        filename = f'./Data/Profiles/Profile{message.author.name}{message.guild}.json'

        try:

            data = load( filename )

        except Exception:
            dump( filename, data_levels_member_first )

            data = load( filename )

        exp_member = data['exp']
        coins_member = data['coins']
        lvl_member = data['level']
        exp = exp_first + exp_member
        coins = coins_first + coins_member

        lvl = exp ** (1/4)

        if lvl_member < lvl:
            lvl_member += 1
            print('You lvl up!')

        data_levels_member = { 'exp': exp, 'coins': coins, 'level': lvl_member}
        dump( filename, data_levels_member )

        await client.process_commands(message)

bot.run(TOKEN)