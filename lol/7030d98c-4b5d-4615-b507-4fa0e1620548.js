const express = require("express")
const app = express()
const https = require('https');

app.get("/", (req, res) => {
  res.send("Hiya")
})

app.listen(3000, () => {
  console.log("hihihih")
})

let Discord = require("discord.js");
let client = new Discord.Client();
client.on("ready", () => {
	client.user.setPresence({ activity: { name: "with you ♥" }})
})

client.on("message", message => {
if (message.content.startsWith('..cum')) {
 let url = 'https://www.reddit.com/r/cumsluts/hot/.json?limit=100';
 https.get(url, result => {
 var body = '';
 result.on('data', chunk => {
 body += chunk;
 });
 result
 .on('end', () => {
 var response = JSON.parse(body);
 var index =
 response.data.children[Math.floor(Math.random() * 99) + 1].data;
 var link = 'https://reddit.com' + index.permalink;
 if (index.post_hint !== 'image') {
 var text = index.selftext;
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 var image = index.preview.images[0].source.url.replace('&amp;', '&');
 var title = index.title;
 var subRedditName = index.subreddit_name_prefixed;
 if (index.post_hint !== 'image') {
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 const imageembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setImage(image)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(imageembed);
 })
 .on('error', function(e) {
 console.log('Got an error: ', e);
 })
 })}
 
 if (message.content.startsWith('..asian')) {
 let url = 'https://www.reddit.com/r/asiansgonewild/hot/.json?limit=100';
 https.get(url, result => {
 var body = '';
 result.on('data', chunk => {
 body += chunk;
 });
 result
 .on('end', () => {
 var response = JSON.parse(body);
 var index =
 response.data.children[Math.floor(Math.random() * 99) + 1].data;
 var link = 'https://reddit.com' + index.permalink;
 if (index.post_hint !== 'image') {
 var text = index.selftext;
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 var image = index.preview.images[0].source.url.replace('&amp;', '&');
 var title = index.title;
 var subRedditName = index.subreddit_name_prefixed;
 if (index.post_hint !== 'image') {
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 const imageembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setImage(image)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(imageembed);
 })
 .on('error', function(e) {
 console.log('Got an error: ', e);
 });
 });
 }
 
 if (message.content.startsWith('..ass')) {
 let url = 'https://www.reddit.com/r/ass/hot/.json?limit=100';
 https.get(url, result => {
 var body = '';
 result.on('data', chunk => {
 body += chunk;
 });
 result
 .on('end', () => {
 var response = JSON.parse(body);
 var index =
 response.data.children[Math.floor(Math.random() * 99) + 1].data;
 var link = 'https://reddit.com' + index.permalink;
 if (index.post_hint !== 'image') {
 var text = index.selftext;
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 var image = index.preview.images[0].source.url.replace('&amp;', '&');
 var title = index.title;
 var subRedditName = index.subreddit_name_prefixed;
 if (index.post_hint !== 'image') {
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 const imageembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setImage(image)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(imageembed);
 })
 .on('error', function(e) {
 console.log('Got an error: ', e);
 });
 });
 }
 
 if (message.content.startsWith('..milf')) {
 let url = 'https://www.reddit.com/r/milf/hot/.json?limit=100'
 https.get(url, result => {
 var body = '';
 result.on('data', chunk => {
 body += chunk;
 });
 result
 .on('end', () => {
 var response = JSON.parse(body);
 var index =
 response.data.children[Math.floor(Math.random() * 99) + 1].data;
 var link = 'https://reddit.com' + index.permalink;
 if (index.post_hint !== 'image') {
 var text = index.selftext;
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 var image = index.preview.images[0].source.url.replace('&amp;', '&');
 var title = index.title;
 var subRedditName = index.subreddit_name_prefixed;
 if (index.post_hint !== 'image') {
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 const imageembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setImage(image)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(imageembed);
 })
 .on('error', function(e) {
 console.log('Got an error: ', e);
 });
 });
 }


 
 if (message.content.startsWith('..teen')) {
 let url = 'https://www.reddit.com/r/legalteens/hot/.json?limit=100'
 https.get(url, result => {
 var body = '';
 result.on('data', chunk => {
 body += chunk;
 });
 result
 .on('end', () => {
 var response = JSON.parse(body);
 var index =
 response.data.children[Math.floor(Math.random() * 99) + 1].data;
 var link = 'https://reddit.com' + index.permalink;
 if (index.post_hint !== 'image') {
 var text = index.selftext;
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 var image = index.preview.images[0].source.url.replace('&amp;', '&');
 var title = index.title;
 var subRedditName = index.subreddit_name_prefixed;
 if (index.post_hint !== 'image') {
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 const imageembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setImage(image)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(imageembed);
 })
 .on('error', function(e) {
 console.log('Got an error: ', e);
 });
 });
 }


 
 if (message.content.startsWith('..hentai')) {
 let url = 'https://www.reddit.com/r/hentai/hot/.json?limit=100'
 https.get(url, result => {
 var body = '';
 result.on('data', chunk => {
 body += chunk;
 });
 result
 .on('end', () => {
 var response = JSON.parse(body);
 var index =
 response.data.children[Math.floor(Math.random() * 99) + 1].data;
 var link = 'https://reddit.com' + index.permalink;
 if (index.post_hint !== 'image') {
 var text = index.selftext;
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 var image = index.preview.images[0].source.url.replace('&amp;', '&');
 var title = index.title;
 var subRedditName = index.subreddit_name_prefixed;
 if (index.post_hint !== 'image') {
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 const imageembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setImage(image)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(imageembed);
 })
 .on('error', function(e) {
 console.log('Got an error: ', e);
 });
 });
 }

 
 
 if (message.content.startsWith('..r34')) {
 let url = 'https://www.reddit.com/r/rule34lol/hot/.json?limit=100';
 https.get(url, result => {
 var body = '';
 result.on('data', chunk => {
 body += chunk;
 });
 result
 .on('end', () => {
 var response = JSON.parse(body);
 var index =
 response.data.children[Math.floor(Math.random() * 99) + 1].data;
 var link = 'https://reddit.com' + index.permalink;
 if (index.post_hint !== 'image') {
 var text = index.selftext;
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 var image = index.preview.images[0].source.url.replace('&amp;', '&');
 var title = index.title;
 var subRedditName = index.subreddit_name_prefixed;
 if (index.post_hint !== 'image') {
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 const imageembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setImage(image)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(imageembed);
 })
 .on('error', function(e) {
 console.log('Got an error: ', e);
 });
 });
 }
 
 if (message.content.startsWith('..bj')) {
 let url = 'https://www.reddit.com/r/blowjobs/hot/.json?limit=100';
 https.get(url, result => {
 var body = '';
 result.on('data', chunk => {
 body += chunk;
 });
 result
 .on('end', () => {
 var response = JSON.parse(body);
 var index =
 response.data.children[Math.floor(Math.random() * 99) + 1].data;
 var link = 'https://reddit.com' + index.permalink;
 if (index.post_hint !== 'image') {
 var text = index.selftext;
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 var image = index.preview.images[0].source.url.replace('&amp;', '&');
 var title = index.title;
 var subRedditName = index.subreddit_name_prefixed;
 if (index.post_hint !== 'image') {
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 const imageembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setImage(image)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(imageembed);
 })
 .on('error', function(e) {
 console.log('Got an error: ', e);
 });
 });
 }
 
 if (message.content.startsWith('..anal')) {
 let url = 'https://www.reddit.com/r/anal/hot/.json?limit=100';
 https.get(url, result => {
 var body = '';
 result.on('data', chunk => {
 body += chunk;
 });
 result
 .on('end', () => {
 var response = JSON.parse(body);
 var index =
 response.data.children[Math.floor(Math.random() * 99) + 1].data;
 var link = 'https://reddit.com' + index.permalink;
 if (index.post_hint !== 'image') {
 var text = index.selftext;
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 var image = index.preview.images[0].source.url.replace('&amp;', '&');
 var title = index.title;
 var subRedditName = index.subreddit_name_prefixed;
 if (index.post_hint !== 'image') {
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 const imageembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setImage(image)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(imageembed);
 })
 .on('error', function(e) {
 console.log('Got an error: ', e);
 });
 });
 }
 
 if (message.content.startsWith('..boob')) {
 let url = 'https://www.reddit.com/r/boobies/hot/.json?limit=100';
 https.get(url, result => {
 var body = '';
 result.on('data', chunk => {
 body += chunk;
 });
 result
 .on('end', () => {
 var response = JSON.parse(body);
 var index =
 response.data.children[Math.floor(Math.random() * 99) + 1].data;
 var link = 'https://reddit.com' + index.permalink;
 if (index.post_hint !== 'image') {
 var text = index.selftext;
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 var image = index.preview.images[0].source.url.replace('&amp;', '&');
 var title = index.title;
 var subRedditName = index.subreddit_name_prefixed;
 if (index.post_hint !== 'image') {
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 const imageembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setImage(image)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(imageembed);
 })
 .on('error', function(e) {
 console.log('Got an error: ', e);
 });
 });
 }
 
 if (message.content.startsWith('..bigboobs')) {
 let url = 'https://www.reddit.com/r/hugeboobs/hot/.json?limit=100';
 https.get(url, result => {
 var body = '';
 result.on('data', chunk => {
 body += chunk;
 });
 result
 .on('end', () => {
 var response = JSON.parse(body);
 var index =
 response.data.children[Math.floor(Math.random() * 99) + 1].data;
 var link = 'https://reddit.com' + index.permalink;
 if (index.post_hint !== 'image') {
 var text = index.selftext;
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 var image = index.preview.images[0].source.url.replace('&amp;', '&');
 var title = index.title;
 var subRedditName = index.subreddit_name_prefixed;
 if (index.post_hint !== 'image') {
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 const imageembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setImage(image)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(imageembed);
 })
 .on('error', function(e) {
 console.log('Got an error: ', e);
 });
 });
 }
 
 if (message.content.startsWith('..smallboobs')) {
 let url = 'https://www.reddit.com/r/aa_cups/hot/.json?limit=100';
 https.get(url, result => {
 var body = '';
 result.on('data', chunk => {
 body += chunk;
 });
 result
 .on('end', () => {
 var response = JSON.parse(body);
 var index =
 response.data.children[Math.floor(Math.random() * 99) + 1].data;
 var link = 'https://reddit.com' + index.permalink;
 if (index.post_hint !== 'image') {
 var text = index.selftext;
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 var image = index.preview.images[0].source.url.replace('&amp;', '&');
 var title = index.title;
 var subRedditName = index.subreddit_name_prefixed;
 if (index.post_hint !== 'image') {
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 const imageembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setImage(image)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(imageembed);
 })
 .on('error', function(e) {
 console.log('Got an error: ', e);
 });
 });
 }
 
 if (message.content.startsWith('..titfuck')) {
 let url = 'https://www.reddit.com/r/titfuck/hot/.json?limit=100';
 https.get(url, result => {
 var body = '';
 result.on('data', chunk => {
 body += chunk;
 });
 result
 .on('end', () => {
 var response = JSON.parse(body);
 var index =
 response.data.children[Math.floor(Math.random() * 99) + 1].data;
 var link = 'https://reddit.com' + index.permalink;
 if (index.post_hint !== 'image') {
 var text = index.selftext;
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 var image = index.preview.images[0].source.url.replace('&amp;', '&');
 var title = index.title;
 var subRedditName = index.subreddit_name_prefixed;
 if (index.post_hint !== 'image') {
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 const imageembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setImage(image)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(imageembed);
 })
 .on('error', function(e) {
 console.log('Got an error: ', e);
 });
 });
 }
 
 if (message.content.startsWith('..braces')) {
 let url = 'https://www.reddit.com/r/braceface/hot/.json?limit=100';
 https.get(url, result => {
 var body = '';
 result.on('data', chunk => {
 body += chunk;
 });
 result
 .on('end', () => {
 var response = JSON.parse(body);
 var index =
 response.data.children[Math.floor(Math.random() * 99) + 1].data;
 var link = 'https://reddit.com' + index.permalink;
 if (index.post_hint !== 'image') {
 var text = index.selftext;
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 var image = index.preview.images[0].source.url.replace('&amp;', '&');
 var title = index.title;
 var subRedditName = index.subreddit_name_prefixed;
 if (index.post_hint !== 'image') {
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 const imageembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setImage(image)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(imageembed);
 })
 .on('error', function(e) {
 console.log('Got an error: ', e);
 });
 });
 }
 
 if (message.content.startsWith('..thighs')) {
 let url = 'https://www.reddit.com/r/datgap/hot/.json?limit=100';
 https.get(url, result => {
 var body = '';
 result.on('data', chunk => {
 body += chunk;
 });
 result
 .on('end', () => {
 var response = JSON.parse(body);
 var index =
 response.data.children[Math.floor(Math.random() * 99) + 1].data;
 var link = 'https://reddit.com' + index.permalink;
 if (index.post_hint !== 'image') {
 var text = index.selftext;
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 var image = index.preview.images[0].source.url.replace('&amp;', '&');
 var title = index.title;
 var subRedditName = index.subreddit_name_prefixed;
 if (index.post_hint !== 'image') {
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 const imageembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setImage(image)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(imageembed);
 })
 .on('error', function(e) {
 console.log('Got an error: ', e);
 });
 });
 }
 
 if (message.content.startsWith('..feet')) {
 let url = 'https://www.reddit.com/r/feet/hot/.json?limit=100';
 https.get(url, result => {
 var body = '';
 result.on('data', chunk => {
 body += chunk;
 });
 result
 .on('end', () => {
 var response = JSON.parse(body);
 var index =
 response.data.children[Math.floor(Math.random() * 99) + 1].data;
 var link = 'https://reddit.com' + index.permalink;
 if (index.post_hint !== 'image') {
 var text = index.selftext;
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 var image = index.preview.images[0].source.url.replace('&amp;', '&');
 var title = index.title;
 var subRedditName = index.subreddit_name_prefixed;
 if (index.post_hint !== 'image') {
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 const imageembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setImage(image)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(imageembed);
 })
 .on('error', function(e) {
 console.log('Got an error: ', e);
 });
 });
 }
 
 if (message.content.startsWith('..pussy')) {
 let url = 'https://www.reddit.com/r/pussy/hot/.json?limit=100';
 https.get(url, result => {
 var body = '';
 result.on('data', chunk => {
 body += chunk;
 });
 result
 .on('end', () => {
 var response = JSON.parse(body);
 var index =
 response.data.children[Math.floor(Math.random() * 99) + 1].data;
 var link = 'https://reddit.com' + index.permalink;
 if (index.post_hint !== 'image') {
 var text = index.selftext;
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 var image = index.preview.images[0].source.url.replace('&amp;', '&');
 var title = index.title;
 var subRedditName = index.subreddit_name_prefixed;
 if (index.post_hint !== 'image') {
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 const imageembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setImage(image)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(imageembed);
 })
 .on('error', function(e) {
 console.log('Got an error: ', e);
 });
 });
 }
 
 if (message.content.startsWith('..tat')) {
 let url = 'https://www.reddit.com/r/hotchickswithtattoos/hot/.json?limit=100';
 https.get(url, result => {
 var body = '';
 result.on('data', chunk => {
 body += chunk;
 });
 result
 .on('end', () => {
 var response = JSON.parse(body);
 var index =
 response.data.children[Math.floor(Math.random() * 99) + 1].data;
 var link = 'https://reddit.com' + index.permalink;
 if (index.post_hint !== 'image') {
 var text = index.selftext;
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 var image = index.preview.images[0].source.url.replace('&amp;', '&');
 var title = index.title;
 var subRedditName = index.subreddit_name_prefixed;
 if (index.post_hint !== 'image') {
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 const imageembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setImage(image)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(imageembed);
 })
 .on('error', function(e) {
 console.log('Got an error: ', e);
 });
 });
 }
 
 if (message.content.startsWith('..thick')) {
 let url = 'https://www.reddit.com/r/curvy/hot/.json?limit=100';
 https.get(url, result => {
 var body = '';
 result.on('data', chunk => {
 body += chunk;
 });
 result
 .on('end', () => {
 var response = JSON.parse(body);
 var index =
 response.data.children[Math.floor(Math.random() * 99) + 1].data;
 var link = 'https://reddit.com' + index.permalink;
 if (index.post_hint !== 'image') {
 var text = index.selftext;
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 var image = index.preview.images[0].source.url.replace('&amp;', '&');
 var title = index.title;
 var subRedditName = index.subreddit_name_prefixed;
 if (index.post_hint !== 'image') {
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 const imageembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setImage(image)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(imageembed);
 })
 .on('error', function(e) {
 console.log('Got an error: ', e);
 });
 });
 }
 
 if (message.content.startsWith('..petite')) {
 let url = 'https://www.reddit.com/r/petite/hot/.json?limit=100';
 https.get(url, result => {
 var body = '';
 result.on('data', chunk => {
 body += chunk;
 });
 result
 .on('end', () => {
 var response = JSON.parse(body);
 var index =
 response.data.children[Math.floor(Math.random() * 99) + 1].data;
 var link = 'https://reddit.com' + index.permalink;
 if (index.post_hint !== 'image') {
 var text = index.selftext;
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 var image = index.preview.images[0].source.url.replace('&amp;', '&');
 var title = index.title;
 var subRedditName = index.subreddit_name_prefixed;
 if (index.post_hint !== 'image') {
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 const imageembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setImage(image)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(imageembed);
 })
 .on('error', function(e) {
 console.log('Got an error: ', e);
 });
 });
 }
 
 if (message.content.startsWith('..indian')) {
 let url = 'https://www.reddit.com/r/indianbabes/hot/.json?limit=100';
 https.get(url, result => {
 var body = '';
 result.on('data', chunk => {
 body += chunk;
 });
 result
 .on('end', () => {
 var response = JSON.parse(body);
 var index =
 response.data.children[Math.floor(Math.random() * 99) + 1].data;
 var link = 'https://reddit.com' + index.permalink;
 if (index.post_hint !== 'image') {
 var text = index.selftext;
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 var image = index.preview.images[0].source.url.replace('&amp;', '&');
 var title = index.title;
 var subRedditName = index.subreddit_name_prefixed;
 if (index.post_hint !== 'image') {
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 const imageembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setImage(image)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(imageembed);
 })
 .on('error', function(e) {
 console.log('Got an error: ', e);
 });
 });
 }
 
 if (message.content.startsWith('..ebony')) {
 let url = 'https://www.reddit.com/r/ebony/hot/.json?limit=100';
 https.get(url, result => {
 var body = '';
 result.on('data', chunk => {
 body += chunk;
 });
 result
 .on('end', () => {
 var response = JSON.parse(body);
 var index =
 response.data.children[Math.floor(Math.random() * 99) + 1].data;
 var link = 'https://reddit.com' + index.permalink;
 if (index.post_hint !== 'image') {
 var text = index.selftext;
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 var image = index.preview.images[0].source.url.replace('&amp;', '&');
 var title = index.title;
 var subRedditName = index.subreddit_name_prefixed;
 if (index.post_hint !== 'image') {
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 const imageembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setImage(image)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(imageembed);
 })
 .on('error', function(e) {
 console.log('Got an error: ', e);
 });
 });
 }
 
 if (message.content.startsWith('..ginger')) {
 let url = 'https://www.reddit.com/r/ginger/hot/.json?limit=100';
 https.get(url, result => {
 var body = '';
 result.on('data', chunk => {
 body += chunk;
 });
 result
 .on('end', () => {
 var response = JSON.parse(body);
 var index =
 response.data.children[Math.floor(Math.random() * 99) + 1].data;
 var link = 'https://reddit.com' + index.permalink;
 if (index.post_hint !== 'image') {
 var text = index.selftext;
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 var image = index.preview.images[0].source.url.replace('&amp;', '&');
 var title = index.title;
 var subRedditName = index.subreddit_name_prefixed;
 if (index.post_hint !== 'image') {
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 const imageembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setImage(image)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(imageembed);
 })
 .on('error', function(e) {
 console.log('Got an error: ', e);
 });
 });
 }
 
 if (message.content.startsWith('..latina')) {
 let url = 'https://www.reddit.com/r/latinas/hot/.json?limit=100';
 https.get(url, result => {
 var body = '';
 result.on('data', chunk => {
 body += chunk;
 });
 result
 .on('end', () => {
 var response = JSON.parse(body);
 var index =
 response.data.children[Math.floor(Math.random() * 99) + 1].data;
 var link = 'https://reddit.com' + index.permalink;
 if (index.post_hint !== 'image') {
 var text = index.selftext;
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 var image = index.preview.images[0].source.url.replace('&amp;', '&');
 var title = index.title;
 var subRedditName = index.subreddit_name_prefixed;
 if (index.post_hint !== 'image') {
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 const imageembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setImage(image)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(imageembed);
 })
 .on('error', function(e) {
 console.log('Got an error: ', e);
 });
 });
 }
 
 if (message.content.startsWith('..white')) {
 let url = 'https://www.reddit.com/r/pawg/hot/.json?limit=100'; 
 https.get(url, result => {
 var body = '';
 result.on('data', chunk => {
 body += chunk;
 });
 result
 .on('end', () => {
 var response = JSON.parse(body);
 var index =
 response.data.children[Math.floor(Math.random() * 99) + 1].data;
 var link = 'https://reddit.com' + index.permalink;
 if (index.post_hint !== 'image') {
 var text = index.selftext;
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 var image = index.preview.images[0].source.url.replace('&amp;', '&');
 var title = index.title;
 var subRedditName = index.subreddit_name_prefixed;
 if (index.post_hint !== 'image') {
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 const imageembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setImage(image)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(imageembed);
 })
 .on('error', function(e) {
 console.log('Got an error: ', e);
 });
 });
 }
 
 if (message.content.startsWith('..gif')) {
 let url = 'https://www.reddit.com/r/porn_gifs/hot/.json?limit=100';
 https.get(url, result => {
 var body = '';
 result.on('data', chunk => {
 body += chunk;
 });
 result
 .on('end', () => {
 var response = JSON.parse(body);
 var index =
 response.data.children[Math.floor(Math.random() * 99) + 1].data;
 var link = 'https://reddit.com' + index.permalink;
 if (index.post_hint !== 'image') {
 var text = index.selftext;
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 var image = index.preview.images[0].source.url.replace('&amp;', '&');
 var title = index.title;
 var subRedditName = index.subreddit_name_prefixed;
 if (index.post_hint !== 'image') {
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 const imageembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setImage(image)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(imageembed);
 })
 .on('error', function(e) {
 console.log('Got an error: ', e);
 });
 });
 }
 
 if (message.content.startsWith('..hardcore')) {
 let url = 'https://www.reddit.com/r/nsfwhardcore/hot/.json?limit=100';
 https.get(url, result => {
 var body = '';
 result.on('data', chunk => {
 body += chunk;
 });
 result
 .on('end', () => {
 var response = JSON.parse(body);
 var index =
 response.data.children[Math.floor(Math.random() * 99) + 1].data;
 var link = 'https://reddit.com' + index.permalink;
 if (index.post_hint !== 'image') {
 var text = index.selftext;
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 var image = index.preview.images[0].source.url.replace('&amp;', '&');
 var title = index.title;
 var subRedditName = index.subreddit_name_prefixed;
 if (index.post_hint !== 'image') {
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 const imageembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setImage(image)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(imageembed);
 })
 .on('error', function(e) {
 console.log('Got an error: ', e);
 });
 });
 }
 
 if (message.content.startsWith('..cuck')) {
 let url = 'https://www.reddit.com/r/cuckold/hot/.json?limit=100';
 https.get(url, result => {
 var body = '';
 result.on('data', chunk => {
 body += chunk;
 });
 result
 .on('end', () => {
 var response = JSON.parse(body);
 var index =
 response.data.children[Math.floor(Math.random() * 99) + 1].data;
 var link = 'https://reddit.com' + index.permalink;
 if (index.post_hint !== 'image') {
 var text = index.selftext;
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 var image = index.preview.images[0].source.url.replace('&amp;', '&');
 var title = index.title;
 var subRedditName = index.subreddit_name_prefixed;
 if (index.post_hint !== 'image') {
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 const imageembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setImage(image)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(imageembed);
 })
 .on('error', function(e) {
 console.log('Got an error: ', e);
 });
 });
 }
 
 if (message.content.startsWith('..cock')) {
 let url = 'https://www.reddit.com/r/massivecock/hot/.json?limit=100';
 https.get(url, result => {
 var body = '';
 result.on('data', chunk => {
 body += chunk;
 });
 result
 .on('end', () => {
 var response = JSON.parse(body);
 var index =
 response.data.children[Math.floor(Math.random() * 99) + 1].data;
 var link = 'https://reddit.com' + index.permalink;
 if (index.post_hint !== 'image') {
 var text = index.selftext;
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 var image = index.preview.images[0].source.url.replace('&amp;', '&');
 var title = index.title;
 var subRedditName = index.subreddit_name_prefixed;
 if (index.post_hint !== 'image') {
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 const imageembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setImage(image)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(imageembed);
 })
 .on('error', function(e) {
 console.log('Got an error: ', e);
 });
 });
 }
 
 if (message.content.startsWith('..gay')) {
 let url = 'https://www.reddit.com/r/gaybrosgonewild/hot/.json?limit=100';
 https.get(url, result => {
 var body = '';
 result.on('data', chunk => {
 body += chunk;
 });
 result
 .on('end', () => {
 var response = JSON.parse(body);
 var index =
 response.data.children[Math.floor(Math.random() * 99) + 1].data;
 var link = 'https://reddit.com' + index.permalink;
 if (index.post_hint !== 'image') {
 var text = index.selftext;
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 var image = index.preview.images[0].source.url.replace('&amp;', '&');
 var title = index.title;
 var subRedditName = index.subreddit_name_prefixed;
 if (index.post_hint !== 'image') {
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 const imageembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setImage(image)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(imageembed);
 })
 .on('error', function(e) {
 console.log('Got an error: ', e);
 });
 });
 }
 
 if (message.content.startsWith('..bigdick')) {
 let url = 'https://www.reddit.com/r/monsterdicks/hot/.json?limit=100';
 https.get(url, result => {
 var body = '';
 result.on('data', chunk => {
 body += chunk;
 });
 result
 .on('end', () => {
 var response = JSON.parse(body);
 var index =
 response.data.children[Math.floor(Math.random() * 99) + 1].data;
 var link = 'https://reddit.com' + index.permalink;
 if (index.post_hint !== 'image') {
 var text = index.selftext;
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 var image = index.preview.images[0].source.url.replace('&amp;', '&');
 var title = index.title;
 var subRedditName = index.subreddit_name_prefixed;
 if (index.post_hint !== 'image') {
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 const imageembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setImage(image)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(imageembed);
 })
 .on('error', function(e) {
 console.log('Got an error: ', e);
 });
 });
 } 
 
 if (message.content.startsWith('..goth')) {
 let url = 'https://www.reddit.com/r/gothsluts/hot/.json?limit=100';
 https.get(url, result => {
 var body = '';
 result.on('data', chunk => {
 body += chunk;
 });
 result
 .on('end', () => {
 var response = JSON.parse(body);
 var index =
 response.data.children[Math.floor(Math.random() * 99) + 1].data;
 var link = 'https://reddit.com' + index.permalink;
 if (index.post_hint !== 'image') {
 var text = index.selftext;
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 var image = index.preview.images[0].source.url.replace('&amp;', '&');
 var title = index.title;
 var subRedditName = index.subreddit_name_prefixed;
 if (index.post_hint !== 'image') {
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 const imageembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setImage(image)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(imageembed);
 })
 .on('error', function(e) {
 console.log('Got an error: ', e);
 });
 });
 }
 
 if (message.content.startsWith('..cosplay')) {
 let url = 'https://www.reddit.com/r/nsfwcosplay/hot/.json?limit=100';
 https.get(url, result => {
 var body = '';
 result.on('data', chunk => {
 body += chunk;
 });
 result
 .on('end', () => {
 var response = JSON.parse(body);
 var index =
 response.data.children[Math.floor(Math.random() * 99) + 1].data;
 var link = 'https://reddit.com' + index.permalink;
 if (index.post_hint !== 'image') {
 var text = index.selftext;
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 var image = index.preview.images[0].source.url.replace('&amp;', '&');
 var title = index.title;
 var subRedditName = index.subreddit_name_prefixed;
 if (index.post_hint !== 'image') {
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 const imageembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setImage(image)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(imageembed);
 })
 .on('error', function(e) {
 console.log('Got an error: ', e);
 });
 });
 }
 
 if (message.content.startsWith('..undies')) {
 let url = 'https://www.reddit.com/r/lingerie/hot/.json?limit=100';
 https.get(url, result => {
 var body = '';
 result.on('data', chunk => {
 body += chunk;
 });
 result
 .on('end', () => {
 var response = JSON.parse(body);
 var index =
 response.data.children[Math.floor(Math.random() * 99) + 1].data;
 var link = 'https://reddit.com' + index.permalink;
 if (index.post_hint !== 'image') {
 var text = index.selftext;
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 var image = index.preview.images[0].source.url.replace('&amp;', '&');
 var title = index.title;
 var subRedditName = index.subreddit_name_prefixed;
 if (index.post_hint !== 'image') {
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 const imageembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setImage(image)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(imageembed);
 })
 .on('error', function(e) {
 console.log('Got an error: ', e);
 });
 });
 }
 
 if (message.content.startsWith('..public')) {
 let url = 'https://www.reddit.com/r/publicsexporn/hot/.json?limit=100';
 https.get(url, result => {
 var body = '';
 result.on('data', chunk => {
 body += chunk;
 });
 result
 .on('end', () => {
 var response = JSON.parse(body);
 var index =
 response.data.children[Math.floor(Math.random() * 99) + 1].data;
 var link = 'https://reddit.com' + index.permalink;
 if (index.post_hint !== 'image') {
 var text = index.selftext;
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 var image = index.preview.images[0].source.url.replace('&amp;', '&');
 var title = index.title;
 var subRedditName = index.subreddit_name_prefixed;
 if (index.post_hint !== 'image') {
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 const imageembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setImage(image)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(imageembed);
 })
 .on('error', function(e) {
 console.log('Got an error: ', e);
 });
 });
 }
 
 if (message.content.startsWith('..trans')) {
 let url = 'https://www.reddit.com/r/tgirls/hot/.json?limit=100';
 https.get(url, result => {
 var body = '';
 result.on('data', chunk => {
 body += chunk;
 });
 result
 .on('end', () => {
 var response = JSON.parse(body);
 var index =
 response.data.children[Math.floor(Math.random() * 99) + 1].data;
 var link = 'https://reddit.com' + index.permalink;
 if (index.post_hint !== 'image') {
 var text = index.selftext;
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 var image = index.preview.images[0].source.url.replace('&amp;', '&');
 var title = index.title;
 var subRedditName = index.subreddit_name_prefixed;
 if (index.post_hint !== 'image') {
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 const imageembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setImage(image)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(imageembed);
 })
 .on('error', function(e) {
 console.log('Got an error: ', e);
 });
 });
 }
 
 if (message.content.startsWith('..trap')) {
 let url = 'https://www.reddit.com/r/traps/hot/.json?limit=100';
 https.get(url, result => {
 var body = '';
 result.on('data', chunk => {
 body += chunk;
 });
 result
 .on('end', () => {
 var response = JSON.parse(body);
 var index =
 response.data.children[Math.floor(Math.random() * 99) + 1].data;
 var link = 'https://reddit.com' + index.permalink;
 if (index.post_hint !== 'image') {
 var text = index.selftext;
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 var image = index.preview.images[0].source.url.replace('&amp;', '&');
 var title = index.title;
 var subRedditName = index.subreddit_name_prefixed;
 if (index.post_hint !== 'image') {
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(textembed);
 }
 const imageembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setImage(image)
 .setColor('FUSCHIA')
 .setURL(link);
 message.channel.send(imageembed);
 })
 .on('error', function(e) {
 console.log('Got an error: ', e);
 });
 });
 }

if(message.content === "..help") {
	let embed = new Discord.MessageEmbed()
	.setTitle("Help section")
	.setDescription("Need help finding what you need baby? I can help 😳")
  .setColor('FUSCHIA')
	.addFields(
		{ name: 'Gay', value: '..hgay' },
		{ name: 'Sex', value: '..hsex', inline: true },
		{ name: 'Race', value: '..hrace', inline: true },
		{ name: 'Kinks', value: '..hkink' },
		{ name: 'Age', value: '..hage', inline: true },
		{ name: 'Vanilla', value: '..hvanilla', inline: true },
  )
}

if(message.content === "..hgay") {
	let embed = new Discord.MessageEmbed()
	.setTitle("Gay nsfw commands")
	.setDescription("Let me help")
  .setColor('FUSCHIA')
	.addFields(
		{ name: 'Traps', value: '..trap' },
    { name: 'Trans', value: '..trans' },
    { name: 'Gay', value: '..gay' },
    { name: 'Big dicks', value: '..bigdick' },
    { name: 'Dicks', value: '..cock' },
  )
}

if(message.content === "..hsex") {
	let embed = new Discord.MessageEmbed()
	.setTitle("Sex nsfw commands")
	.setDescription("Let me help")
  .setColor('FUSCHIA')
	.addFields(
		{ name: 'Titty Fucking', value: '..titfuck' },
    { name: 'Hardcore', value: '..hardcore' },
    { name: 'Cuckold', value: '..cuck' },
    { name: 'Anal', value: '..anal' },
    { name: 'Blow Jobs', value: '..bj' },
  )
}

if(message.content === "..hrace") {
	let embed = new Discord.MessageEmbed()
	.setTitle("Race nsfw commands")
	.setDescription("Let me help")
  .setColor('FUSCHIA')
	.addFields(
		{ name: 'Asian', value: '..asian' },
    { name: 'Indian', value: '..indian' },
    { name: 'White', value: '..white' },
    { name: 'Hispanic', value: '..latina' },
    { name: 'Black', value: '..ebony' },
  )
}

if(message.content === "..hkink") {
	let embed = new Discord.MessageEmbed()
	.setTitle("Kinky nsfw commands")
	.setDescription("Let me help")
  .setColor('FUSCHIA')
	.addFields(
		{ name: 'Public Sex', value: '..public' },
    { name: 'Underwear Kink', value: '..undies' },
    { name: 'Goth Kink', value: '..goth' },
    { name: 'Cum Kink', value: '..cum' },
    { name: 'Braces Kink', value: '..braces' },
    { name: 'Foot Fetish', value: '..feet' },
    { name: 'Thigh Kink', value: '..thighs' },
    { name: 'Big Boobs', value: '..bigboobs' },
    { name: 'Small Boobs', value: '..smallboobs' },
    { name: 'Tattoo Kink', value: '..tat' },
    { name: 'Petite Fetish', value: '..petite' },
    { name: 'Thickness Kink', value: '..thick' },
    { name: 'Ginger Hair Kink', value: '..ginger' },
    { name: 'NSFW Cosplay', value: '..cosplay' },
    { name: 'Anime', value: '..hentai' },
    { name: 'Rule 34', value: '..r34' },
  )
}

if(message.content === "..hage") {
	let embed = new Discord.MessageEmbed()
	.setTitle("Age nsfw commands")
	.setDescription("Let me help")
  .setColor('FUSCHIA')
	.addFields(
		{ name: 'Milf', value: '..milf' },
    { name: '18-24', value: '..teen' },
  )
}

if(message.content === "..hvanilla") {
	let embed = new Discord.MessageEmbed()
	.setTitle("Vanilla nsfw commands")
	.setDescription("😒")
  .setColor('FUSCHIA')
	.addFields(
		{ name: 'Cum', value: '..cum' },
    { name: 'Ass', value: '..ass' },
    { name: 'Boobs', value: '..boob' },
    { name: 'Pussy', value: '..pussy' },
    { name: 'Porn Gifs', value: '..gif' },
  )
}})

client.login("ODMxMzY2OTc4MTY1NTM4ODE3.YHUM1Q.LLRxd4GnDUGiyRiVZNhp1UoJB4c");