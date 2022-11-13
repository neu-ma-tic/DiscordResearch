const Discord = require('discord.js');
const client = new Discord.Client();
const player = require('discordjs-ytdl-advanced')
const keepAlive = require('./server.js')
const quiz = require("./quiz.json");
const ytch = require('yt-channel-info')
const fs = require('fs')
module.exports = client;
const disbut = require('discord-buttons');
disbut(client);

client.on('ready', () => {
  console.log(`${client.user.tag}에 로그인하였습니다!`);
});

client.on('message', msg => {
  if (msg.content === '핑') {
    msg.reply('퐁!');
  }
});


client.on('message', async msg => {
  if (msg.content === '야') {
    msg.reply('옹!');
  }
  if (msg.content === '!신고하기') {
    let button = new disbut.MessageButton()
      .setLabel("유튜브 신고")
      .setStyle("LINK")
      .setURL('https://forms.gle/brukBLnqnx9mMw5J6')
    let button2 = new disbut.MessageButton()
      .setLabel("디스코드 신고")
      .setStyle("LINK")
      .setURL('https://forms.gle/szu8R1EAMJRSheek8')
    const em = new Discord.MessageEmbed()
      .setTitle('**🚨 | 신고**')
      .setColor('RED')
      .setDescription('아래버튼을 눌러 원하는 신고를 해주세요')
    msg.channel.send(em, {
      buttons: [button, button2]
    });
  }
  if (msg.content === '!명령어') {
    const embed = new Discord.MessageEmbed()
      .setTitle("**명령어**")
      .setColor('RANDOM')
      .addField("!신고하기", "신고하는 명령어입니다.")
      .addField("!정보", "봇 정보를 보는  명령어입니다.")
      .addField("!코드사용", "코드를 알게되었다면 여기서 사용법을 알려드립니다.")
      .addField("!음악명령어", "음악명령어를 보는 명령어입니다.")
      .setFooter('더 추가될 예정')
    msg.reply(embed)
  }
  if (msg.content === '!!시크릿코드사용') {
    const embed = new Discord.MessageEmbed()
      .setTitle("**사용 하실 코드를 메시지에 입력해 주세요.**")
      .setColor('RANDOM')
      .addField("사용하신 후", "메시지를 삭제해주세요")
      .addField("!!하신후", "코드를 입력해주세요!")
      .addField("알림", "현재 시크릿 코드는 1개 있습니다.")
    msg.reply(embed)
  }


  if (msg.content === '!!'+process.env.code) { 
    const embed = new Discord.MessageEmbed()
      .setTitle("**코드 사용이 완료되었습니다.**")
      .setColor('RANDOM')
      .addField("코드 사용으로 10000원이 적립되었습니다.")
      .addField("현재 돈은", "`${howMuch}원 입니다.")
    msg.reply(embed)
  }

  if (msg.content === '!코드사용') {
    const mySecret = process.env['code']
    const embed = new Discord.MessageEmbed()
      .setTitle("**코드 사용 방법**")
      .setColor('RANDOM')
      .addField("!!시크릿코드사용", "스크릿 코드 사용하실때는 사용하신 후 메시지를 삭제해 주세요!")
      //봇토큰????????
      .setFooter('더 추가될 예정')//
    msg.reply(embed)
  }//



  if (msg.content === '!정보') {
    const embed = new Discord.MessageEmbed()
      .setTitle("**봇 정보**")
      .setColor('RANDOM')
      .addField("👑제작자 : AppleCrepe", "⚒️부제작자 : 안녕이")
      .setFooter('🪄버전 ver : Beta')
    msg.reply(embed)
  }

  if (msg.content === '!음악명령어') {
    const embed = new Discord.MessageEmbed()
      .setTitle("**음악 명령어 **")
      .setColor('RANDOM')
      .addField("!play (음악 이름)", "음악을 재생하는 명령어입니다.")
      .addField("Pause (버튼)", "음악을 정지하는 버튼입니다.")
      .addField("Skip (버튼)", "음악을 처음 부터 다시 재생하는 버튼입니다.")
      .addField("Loop (버튼)", "음악을 반복 재생하는 버튼입니다. ")
      .addField("Resume (버튼)", "음악을 다시 재생하는 버튼입니다.")
      .setFooter('사과크림_AppleCream 음악 봇은 사과크림이 만든 봇이 아닙니다!')
    msg.reply(embed)
  }

  if (msg.content === '!퇴장') {
    const embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .addField("안녕히계세요")
    msg.reply(embed)
  }
  if (msg.content === '멍') {
    msg.reply('멍');
  }
  if (msg.content.startsWith("!재생")) {
    if (msg.member.voice.channel) {
      const args = msg.content.split(" ").slice(1)
      if (!args[0]) return msg.channel.send('재생할 음악을 입력하세요!')
      const SONG = await player(args.join(" "))
      const connection = await msg.member.voice.channel.join()
      SONG.play(connection) //PLAYS SONG
      let button = new disbut.MessageButton()
        .setLabel("영상 링크")
        .setStyle("LINK")
        .setURL(SONG.url)
      msg.reply("🎶 | 현재 **" + SONG.title + '**(을)를 재생합니다', button) //Outputs Song Title
    } else {
      return msg.reply('먼저 음성채널에 들어가시죠.')
    }
  }
  if (msg.content === "!퇴장") {
    if (msg.member.voice.channel) {
      await msg.member.voice.channel.leave()

    } else {
      return msg.reply('먼저 음성채널에 들어가시죠.')
    }
  }

  if (msg.content === "!들어와") {
    if (msg.member.voice.channel) {
      await msg.member.voice.channel.join()

    } else {
      return msg.reply('먼저 음성채널에 들어가시죠.')
    }
  }
  if(msg.content === "!구독자"){

    const channelId = 'UCQPWmJFGKH_nTPKCORPCzKQ'

    ytch.getChannelInfo(channelId, 1).then((response) => {
    const embed = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle('사과크림_AppleCream 구독자')
    .setThumbnail('https://yt3.ggpht.com/YpPfiwwiKmLnctqiEVkJ8H3aWNC61ghWdsgMEJeqTZp2rQf1g5HDnD9p4DNaQAWCD2uRE8bjmw=s176-c-k-c0x00ffffff-no-rj')
    .addField('구독자',response['subscriberCount']+"명",true)
    .addField('설명',response['description'],true)
    msg.reply(embed)
    }).catch((err) => {
    console.log(err)
    })
  }

});

client.on('message', msg => {
  if (msg.author.bot) return;
  if (msg.author.id === client.user.id) return;

  const id = msg.author.id;
  const name = msg.author.username;

  const filePath = `./data/${id}.json`;

  !fs.existsSync(filePath) ? fs.writeFileSync(filePath, JSON.stringify({})) : null; // 파일이 없다면 생성

  const user = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const today = new Date();
  const date = "" + today.getFullYear() + today.getMonth() + today.getDate();
  const howMuch = 5000;
  let saveUser

  if (msg.content === "!돈줘") {

    if (user.id) {
      if (user.date === date) {
        msg.reply(`오늘은 이미 받았잖아? 내일 받아!`);
        saveUser = user;
      }
      else {
        msg.reply(`${howMuch}원이 지급됐어!\n${name}의 현재 잔액은 ${user.money} -> ${user.money + howMuch}이야!`);
        saveUser = {
          id,
          name,
          date,
          money: user.money + howMuch,
        }
      }
    }
    else {
      msg.reply(`${name}!! 시작하는걸 환영해! ${howMuch}원이 지급됐어!`);
      saveUser = { id, name, date, money: howMuch };
    }

    fs.writeFileSync(filePath, JSON.stringify(saveUser));
  }

  if (msg.content === "!내돈") {
    user.id ? msg.reply(`${name}의 현재 잔액은 ${user.money}이야!`) : msg.reply(`등록되지 않은 유저야! \`!돈줘\` 를 입력해봐!`);
  }

});

keepAlive()
client.login(process.env.token)

