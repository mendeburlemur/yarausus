const Discord = require('discord.js');


exports.run = function(client, message, args) {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send(
new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('HarmonyBot Eğlence Komutları 2')
.setDescription('`h!topla <sayı> <sayı>` **Yazdığın Sayıları Toplar.**\n`h!çıkar <sayı> <sayı>` **Yazdığın Sayıları Çıkarır.**\n`h!böl <sayı> <sayı>` **Yazdığın Sayıları Böler.**\n`h!çarp <sayı> <sayı>` **Yazdığın Sayıları Çarpar.**\n`h!kaçcm` **Malafatın Boyunu Gösterir.**\n`h!korkut` **BÖÖ Koyktun muh!**\n`h!nahçek` **Nah Çekersin.**\n`h!öp` **Birini Öpersin.**\n`h!piyango` **Piyango Oynarsın.**\n`h!playstore <oyun>` **Yazdığın Oyunu PlayStorede Aratırsın.**\n`h!polis` **Polis Çağırırsın.**\n`h!roblox <Hesap İsmi>` **Seçtiğin Roblox Hesabının İstatistiklerini Gösterir.**\n`h!rolbilgi <Rol İsmi>` **Rolün Bilgilerine Bakarsın.**\n`h!saat` **Türkiye Saatine Bakarsın.**\n`h!sarıl` **Sarılırsın.**\n`h!sunucu-simgesi` **Sunucunun Simgesini Gösterir.**\n`h!sigara` **Sigara İçersin.**\n`h!simit-ye` **Simit Yersin.**\n`h!sins` **Sins Gifi Atar.**\n`h!slots` **Slot Oynarsın.**\n`h!şifre <uzunluk>` **Belirlediğin Uzunlukta Şifre Belirler.**\n`h!uyu` **Uyursun.**\n`h!windows` **Windows 10 Resmi Atar.**\n`h!wwe-gif` **WWE Gifleri Atar.**\n `h!köpek` **Rastgele Köpek Resmi Atar**\n `h!köpekadı` **Rastgele Köpek İsmi Söyler.**'));
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription('')
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
  name: 'eğlence2',
  description: 'Bot için tavsiye bildirirsiniz',
  usage: 'h!eğlence2'
};