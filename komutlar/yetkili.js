const Discord = require('discord.js');


exports.run = function(client, message, args) {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send(
new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('HarmonyBot Yetkili Komutları')
.setDescription('`h!çekiliş` **Çekiliş Yaparsın.**\n`h!emojiyazı <yazı>` **Emoji İle Yazılar Yazdırırsın.**\n`h!istatistik` **Botun İstatistiğine Bakarsın.**\n`h!oylama` **Oylama Yaparsın.**\n`h!ping` **Botun Pingine Bakarsın.**\n`h!temizle <0/100>` **Sohbeti Temizler.**\n`h!ban @kullanıcı <sebep>` **Kullanıcıyı Sunucudan Yasaklarsın.**\n`h!kick @kullanıcı <sebep>` **Kullanıcıyı Sunucudan Atarsın.**\n`h!kilit <süre>` **Belirlediğin Süre Kadar Komutu Yazdığın Kanalı Kilitler.**\n`h!rol-ver @kullanıcı @rol` **Kullanıcıya Rol Verir.**\n`h!yavaşmod <süre>` **Komutu Kullandığın Kanalda Yavaş Modu Belirlediğin Süre Kadar Açar.**\n`h!sustur @kullanıcı <sebep>` **Seçtiğin Kullanıcıyı Susturur.(Kullanmak İçin `Susturulmuş` Diye Rol Oluşturup Yetkisini Ayarlamanız Gerekir.)**'));
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription('')
message.channel.send(embed)
const embed2 = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**${message.author.tag}** adlı kullanıcı yardım komutunu kullandı.`)
.addField(`Kulanıcı Bilgileri`, `Kullanıcı ID: ${message.author.id}\nKullanıcı Adı: ${message.author.username}\nKullanıcı Tagı: ${message.author.discriminator}`)
.addField("HarmonyBot:tm:", type)
.setThumbnail(message.author.avatarURL)

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yetkili',
  description: 'Bot için tavsiye bildirirsiniz',
  usage: 'h!yetkili'
};