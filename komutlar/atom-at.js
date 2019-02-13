﻿const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('Atom Atmak')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== '..') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor('Yavaş Ol Lan Hangi Düğmeye Bastın.')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('HarmonyBot:tm: Sponsored')
       .setImage(`https://media.giphy.com/media/XUFPGrX5Zis6Y/giphy.gif`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'atom-at',
  description: 'Atatürk resmi',
  usage: 'atom-at'
};