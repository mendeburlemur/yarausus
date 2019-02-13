const Discord = require('discord.js');


exports.run = function(client, message, args) {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send(
new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('HarmonyBot Yardım')
.setDescription('`h!eğlence` **Eğlence Komutlarını Gösterir.**\n`h!eğlence2` **Eğlence Komutlarını Gösterir.**\n`h!yetkili` **Yetkili Komutlarını Gösterir.**\n`h!çerçeve` **Çerçeve Komutlarını Gösterir. (YAKINDA)**\n`h!m-yardım` **Müzik Komutlarını Gösterir. (YAKINDA)**\n`h!nsfw` **Rastgele NSFW Resimler Atar.(Kullanmak İçin `nsfw` Diye Kanal Açıp `+18` Özelliğini Aktif Etmen Gerekir.**\n`h!sunucu-davet` **Bulunduğun Sunucu İçin Davet Linki Oluşturur.**\n`h!davet` **Bot Davet Linkini DM Olarak Sana Atar.**'));
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription('`h!eğlence` **Eğlence Komutlarını Gösterir.**\n`h!eğlence2` **Eğlence Komutlarını Gösterir.**\n`h!yetkili` **Yetkili Komutlarını Gösterir.**\n`h!çerçeve` **Çerçeve Komutlarını Gösterir.**\n`h!m-yardım` **Müzik Komutlarını Gösterir. (YAKINDA)**')
message.channel.send(embed)
const embed2 = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**${message.author.tag}** adlı kullanıcı yardım komutunu kullandı.`)
.addField(`Kulanıcı Bilgileri`, `Kullanıcı ID: ${message.author.id}\nKullanıcı Adı: ${message.author.username}\nKullanıcı Tagı: ${message.author.discriminator}`)
.addField("HyRobot:tm:", type)
.setThumbnail(message.author.avatarURL)

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Bot için tavsiye bildirirsiniz',
  usage: 'h!yardım'
};