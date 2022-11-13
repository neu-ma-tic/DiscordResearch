require('http').createServer((req, res) => res.end(`
 |-----------------------------------------|
 |              Informations               |
 |-----------------------------------------|
 |• Alive: 24/7                            |
 |-----------------------------------------|
 |• Author: Xalbador                   |
 |-----------------------------------------|
 |• Server: https://discord.gg/gU7XAxTpX5  |
 |-----------------------------------------|
 |• Github: https://github.com/diwasatreya |
 |-----------------------------------------|
 |• License: Apache License 2.0            |
 |-----------------------------------------|
`)).listen(3000) //Dont remove this

var dbd = require("dbd.js")
var fs = require("fs")

const bot = new dbd.Bot({
token: process.env.TOKEN,
prefix: "$getServerVar[prefix]"
})
 
//bot status
bot.status({
  text: process.env.BOT_ACTIVITY_TEXT,
  type: process.env.BOT_ACTIVITY_TYPE,
  time: 12
})
 
bot.onMessage()

//variable
bot.variables({
 prefix: process.env.PREFIX,
 bank:"0",
 cash:"0",
 padi:"0",
 surya:"0",
 diamond:"0",
 ikan:"0",
 pancing:"0",
 vestic:"0",
 rkk:"0",
 ganja:"0",
 rumah:"0",
 laptop:"0",
 bensin:"15",
 health:"100",
 hungry:"100",
 thirsty:"100",
 nasipadang:"0",
 hm:"0",
 susu:"0",
 daily: process.env.DAILY_SALARY,
 monthly: process.env.MONTHLY_SALARY
})
  
 //commands handler
var reader = fs.readdirSync("./economy/").filter (file => file.endsWith(".js"))
for(const file of reader) {
  const command = require(`./economy/${file}`)
  bot.command({
name: command.name, 
aliases: command.aliases,
code: command.code
  })
}

//help command here
bot.command({

name: "roleplay",
code: `$title[$userTag[$clientID] ROLEPLAY MENU]

$description[**$getServerVar[prefix]help** - Menu
**$getServerVar[prefix]uang/money** - Uang Kamu
**$getServerVar[prefix]tas** - Inventory Kamu.
**$getServerVar[prefix]deposit** - Deposit cash to bank/menabung.
**$getServerVar[prefix]menarik-saldo** - Mengambil Uang Dari Bank.
**$getServerVar[prefix]daily** - Daily.
**$getServerVar[prefix]bulanan** - Menerima Uang Setiap 1 Bulan Sekali.
**$getServerVar[prefix]rampok-bank** - Perampokan bank internasional?
**$getServerVar[prefix]give** - Berikan uang kepada seseorang.
**$getServerVar[prefix]warung** - Pasar. (lebih banyak perintah untuk membeli, makan, dll di sini!)

**__PERKEJAAN__**
**$getServerVar[prefix]berkerja** -  Untuk Mendapatkan uang.
**$getServerVar[prefix]kerja-tambang**
**$getServerVar[prefix]mancing** - Memancing Ikan
**$getServerVar[prefix]kerja-petani**
**$getServerVar[prefix]kerja-ojek**

**__PEKERJAAN KRIMINAL__**
**$getServerVar[prefix]rampok-bank**
**$getServerVar[prefix]hack-bank**]


$color[RANDOM]
$footer[Martin Bot]
$addTimestamp`
})
