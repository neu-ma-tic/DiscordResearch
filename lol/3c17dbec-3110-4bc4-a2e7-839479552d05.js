const { Console } = require('console');
const Discord = require('discord.js');
const keep_alive = require('./keep_alive.js')
const client = new Discord.Client({
    ws: {
    intents: ['GUILD_MESSAGES', 'GUILDS', 'GUILD_MESSAGE_REACTIONS']
  },
  partials: ["MESSAGE", "CHANNEL", "USER", "REACTION"]
});

const fs = require('fs');

client.commands = new Discord.Collection();

const ServerID = '860579360976011274';
const RoleChannelID ='866832101852708866';
const AnnouncementsChannelID = '860579360976011276';
const TeamMessageID = '866836608439025665';
const RandomPingsMessageID = '866836059835596810';
const SpoofersMessageID = '867043206306201600';
const GendersMessageID = '862101968570417185';

const RedEmojiName = 'valorAnimated';
const BlueEmojiName = 'mysticAnimated';
const YellowEmojiName = 'instinctAnimated';
const RandomPingsEmojiName = 'GlaceonSip';
const SpoofersEmojiName = 'RaidPasses';
const MaleEmojiName = 'SS_PurpleHeart';
const FemaleEmojiName = 'SS_RedHeart';

const RedRoleName = '🔥Team Valor';
const BlueRoleName = '❄️Team Mystic';
const YellowRoleName = '⚡️Team Instinct';
const RandomPingsRoleName = 'Random Pings';
const SpoofersRoleName = 'Spoofers';
const MaleRoleName = 'He/Him';
const FemaleRoleName = 'She/Her';

client.on("ready", async () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('Pokémon Go', { type: 'PLAYING' })
  .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
  .catch(console.error);

  this.Server = await client.guilds.fetch(ServerID).catch(error => { console.log(error) });
  this.RoleChannel = await client.channels.fetch(RoleChannelID).catch(error => { console.log(error) });
  this.AnnouncementsChannel = await client.channels.fetch(AnnouncementsChannelID).catch(error => { console.log(error) });

  this.TeamMessage = await this.RoleChannel.messages.fetch(TeamMessageID).catch(error => { console.log(error) });
  this.RandomPingsMessage = await this.RoleChannel.messages.fetch(RandomPingsMessageID).catch(error => { console.log(error) });
  this.SpoofersMessage = await this.RoleChannel.messages.fetch(SpoofersMessageID).catch(error => { console.log(error) });
  this.GendersMessage = await this.AnnouncementsChannel.messages.fetch(GendersMessageID).catch(error => { console.log(error) });

  this.RedEmoji = await client.emojis.cache.find(emoji => emoji.name == RedEmojiName);
  this.BlueEmoji = await client.emojis.cache.find(emoji => emoji.name == BlueEmojiName);
  this.YellowEmoji = await client.emojis.cache.find(emoji => emoji.name == YellowEmojiName);
  this.RandomPingsEmoji = await client.emojis.cache.find(emoji => emoji.name == RandomPingsEmojiName);
  this.SpoofersEmoji = await client.emojis.cache.find(emoji => emoji.name == SpoofersEmojiName);
  this.MaleEmoji = await client.emojis.cache.find(emoji => emoji.name == MaleEmojiName);
  this.FemaleEmoji = await client.emojis.cache.find(emoji => emoji.name == FemaleEmojiName);

  this.RedRole = await this.Server.roles.cache.find((role) => role.name == RedRoleName);
  this.BlueRole = await this.Server.roles.cache.find((role) => role.name == BlueRoleName);
  this.YellowRole = await this.Server.roles.cache.find((role) => role.name == YellowRoleName);
  this.RandomPingsRole = await this.Server.roles.cache.find((role) => role.name == RandomPingsRoleName);
  this.SpoofersRole = await this.Server.roles.cache.find((role) => role.name == SpoofersRoleName);
  this.MaleRole = await this.Server.roles.cache.find((role) => role.name == MaleRoleName);
  this.FemaleRole = await this.Server.roles.cache.find((role) => role.name == FemaleRoleName);

  this.TeamMessage.react(this.RedEmoji.id);
  this.TeamMessage.react(this.BlueEmoji.id);
  this.TeamMessage.react(this.YellowEmoji.id);
  this.RandomPingsMessage.react(this.RandomPingsEmoji.id);
  this.SpoofersMessage.react(this.SpoofersEmoji.id);
//  this.GendersMessage.react(this.FemaleEmoji.id);
//  this.GendersMessage.react(this.MaleEmoji.id);

  this.RedEmojiReaction = await this.TeamMessage.reactions.cache.get(this.RedEmoji.id);
  this.BlueEmojiReaction = await this.TeamMessage.reactions.cache.get(this.BlueEmoji.id);
  this.YellowEmojiReaction = await this.TeamMessage.reactions.cache.get(this.YellowEmoji.id);
  this.RandomPingsEmojiReaction = await this.RandomPingsMessage.reactions.cache.get(this.RandomPingsEmoji.id);
  this.SpoofersEmojiReaction = await this.SpoofersMessage.reactions.cache.get(this.SpoofersEmoji.id);
//  this.MaleEmojiReaction = await this.GendersMessage.reactions.cache.get(this.MaleEmoji.id);
//  this.FemaleEmojiReaction = await this.GendersMessage.reactions.cache.get(this.FemaleEmoji.id);

  this.RedMembers = await this.RedEmojiReaction.users.fetch();
  this.BlueMembers = await this.BlueEmojiReaction.users.fetch();
  this.YellowMembers = await this.YellowEmojiReaction.users.fetch();
  this.RandomPingsMembers = await this.RandomPingsEmojiReaction.users.fetch();
  this.Spoofers = await this.SpoofersEmojiReaction.users.fetch();
//  this.Males = await this.MaleEmojiReaction.users.fetch();
//  this.Females = await this.FemaleEmojiReaction.users.fetch();

  for await (user of this.RedMembers) {
    if (user.bot) continue;
    try {
      const member = await this.TeamMessage.guild.members.fetch(user.id);
      member.roles.remove(this.BlueRole);
      member.roles.remove(this.YellowRole);
      this.BlueEmojiReaction.users.remove(user.id);
      this.YellowEmojiReaction.users.remove(user.id);
      member.roles.add(this.RedRole);
    } catch (error) {
      throw new Error(error);
      continue;
    }
  }

  this.RedMembers.each(async (user) => {
    if (!user.bot) {
      try {
        const member = await this.TeamMessage.guild.members.fetch(user.id);
        member.roles.remove(this.BlueRole);
        member.roles.remove(this.YellowRole);
        this.BlueEmojiReaction.users.remove(user.id);
        this.YellowEmojiReaction.users.remove(user.id);
        member.roles.add(this.RedRole);
      } catch (error) {
        throw new Error(error);
        return;
      }
    }
  });
  this.BlueMembers.each(async (user) => {
    if (!user.bot) {
      try {
        const member = await this.TeamMessage.guild.members.fetch(user.id);
        member.roles.remove(this.RedRole);
        member.roles.remove(this.YellowRole);
        this.RedEmojiReaction.users.remove(user.id);
        this.YellowEmojiReaction.users.remove(user.id);
        member.roles.add(this.BlueRole);
      } catch (error) {
        throw new Error(error);
        return;
      }
    }
  });
  this.YellowMembers.each(async (user) => {
    if (!user.bot) {
      try {
        const member = await this.TeamMessage.guild.members.fetch(user.id);
        member.roles.remove(this.BlueRole);
        member.roles.remove(this.RedRole);
        this.BlueEmojiReaction.users.remove(user.id);
        this.RedEmojiReaction.users.remove(user.id);
        member.roles.add(this.YellowRole);
      } catch (error) {
        throw new Error(error);
        return;
      }
    }
  });
  this.RandomPingsMembers.each(async (user) => {
    if (!user.bot) {
      try {
        const member = await this.TeamMessage.guild.members.fetch(user.id);
        member.roles.add(this.RandomPingsRole);
      } catch (error) {
        throw new Error(error);
        return;
      }
    }
  });
  this.Spoofers.each(async (user) => {
    if (!user.bot) {
      try {
        const member = await this.TeamMessage.guild.members.fetch(user.id);
        member.roles.add(this.SpoofersRole);
      } catch (error) {
        throw new Error(error);
        return;
      }
    }
  });
  this.Males.each(async (user) => {
    if (!user.bot) {
      try {
        const member = await this.GendersMessage.guild.members.fetch(user.id);
      member.roles.remove(this.FemaleRole);
      this.FemaleEmojiReaction.users.remove(user.id);
      member.roles.add(this.MaleRole);
      } catch (error) {
        throw new Error(error);
        return;
      }
    }
  });
  this.Females.each(async (user) => {
    if (!user.bot) {
      try {
        const member = await this.GendersMessage.guild.members.fetch(user.id);
      member.roles.remove(this.MaleRole);
      this.MaleEmojiReaction.users.remove(user.id);
      member.roles.add(this.FemaleRole);
      } catch (error) {
        throw new Error(error);
        return;
      }
    }
  });
});



client.on('messageReactionAdd', async (reaction, user) => {
  if (reaction) await reaction.fetch();
  if (user.bot) return;
  try {
  const member = await reaction.message.guild.members.cache.get(user.id);
  if (reaction.message.channel == this.RoleChannel) {
    if (reaction.message == this.TeamMessage || reaction.message == this.RandomPingsMessage || reaction.message == this.SpoofersMessage) {
      if (reaction.message == this.TeamMessage) {
        if (reaction.emoji == this.YellowEmoji) {
          this.BlueEmojiReaction.users.remove(user.id);
          this.RedEmojiReaction.users.remove(user.id);
          member.roles.add(this.YellowRole);
          console.log('\nAdded to Yellow: ' + member.displayName);
          return;
        } else if (reaction.emoji == this.RedEmoji) {
          this.BlueEmojiReaction.users.remove(user.id);
          this.YellowEmojiReaction.users.remove(user.id);
          member.roles.add(this.RedRole);
          console.log('\nAdded to Red: ' + member.displayName);
          return;
        } else if (reaction.emoji == this.BlueEmoji) {
          this.YellowEmojiReaction.users.remove(user.id);
          this.RedEmojiReaction.users.remove(user.id);
          member.roles.add(this.BlueRole);
          console.log('\nAdded to Blue: ' + member.displayName);
          return;
        } else {
          reaction.message.reactions.resolve(reaction).users.remove(user);
          reaction.message.channel.send('<@' + user.id + '>That is not a valid Reaction!').then(msg=>msg.delete({timeout:"3000"}));
          return;
        } 
      } else if (reaction.message == this.RandomPingsMessage && reaction.emoji == this.RandomPingsEmoji) {
        member.roles.add(this.RandomPingsRole);
        console.log('\nAdded to RandomPings: ' + member.displayName);
        return;
      } else if (reaction.message == this.SpoofersMessage && reaction.emoji == this.SpoofersEmoji) {
        member.roles.add(this.SpoofersRole);
        console.log('\nAdded to Spoofers: ' + member.displayName);
        return;
      } else {
        reaction.message.reactions.resolve(reaction).users.remove(user);
        reaction.message.channel.send('<@' + user.id + '>That is not a valid Reaction!').then(msg=>msg.delete({timeout:"3000"}));
        return;
      }
    } else return;
  }// else if (reaction.message.channel == this.AnnouncementsChannel) {
  //  if (reaction.message == this.GendersMessage) {
  //    if (reaction.emoji == this.MaleEmoji) {
  //      member.roles.remove(this.FemaleRole);
  //      this.FemaleEmojiReaction.users.remove(user.id);
  //      member.roles.add(this.MaleRole);
  //    } else if (reaction.emoji == this.FemaleEmoji) {
  //      member.roles.remove(this.MaleRole);
  //      this.MaleEmojiReaction.users.remove(user.id);
  //      member.roles.add(this.FemaleRole);
  //    } else {
  //      reaction.message.reactions.resolve(reaction).users.remove(user);
  //      reaction.message.channel.send('<@' + user.id + '>That is not a valid Reaction!').then(msg=>msg.delete({timeout:"3000"}));
  //      return;
  //    }
  //  } else return;
  //} else return;
  } catch (error) {
    console.log(error);
      return;
  }
});

client.on('messageReactionRemove', async (reaction, user) => {
  if (reaction) await reaction.fetch();
  if (user.bot) return;
    try {
    const member = await reaction.message.guild.members.cache.get(user.id);
  if (reaction.message.channel == this.RoleChannel) {
    if (reaction.message == this.TeamMessage) {
      if (reaction.emoji == this.YellowEmoji) {
        member.roles.remove(this.YellowRole);
        console.log('\nRemoved from Yellow: ' + member.displayName);
      } else if (reaction.emoji === this.BlueEmoji) {
        member.roles.remove(this.BlueRole);
        console.log('\nRemoved from Blue: ' + member.displayName);
      } else if (reaction.emoji == this.RedEmoji) {
        member.roles.remove(this.RedRole);
        console.log('\nRemoved from Red: ' + member.displayName);
      } else return;
    } else if (reaction.message == this.RandomPingsMessage && reaction.emoji == this.RandomPingsEmoji) {
      member.roles.remove(this.RandomPingsRole);
      console.log('\nRemoved from RandomPings: ' + member.displayName);
    } else if (reaction.message == this.SpoofersMessage && reaction.emoji == this.SpoofersEmoji) {
      member.roles.remove(this.SpoofersRole);
      console.log('\nRemoved from Spoofers: ' + member.displayName);
    } else return;
  }// else if (reaction.message.channel == this.AnnouncementsChannel) {
  //  if (reaction.message == this.GendersMessage) {
  //    if (reaction.emoji == this.MaleEmoji) {
  //      member.roles.remove(this.MaleRole);
  //    } else if (reaction.emoji === this.FemaleEmoji) {
  //      member.roles.remove(this.FemaleRole);
  //    } else return;
  //  } else return;
  //} else return;
  } catch (error) {
    console.log(error);
      return;
  }
});

client.login();