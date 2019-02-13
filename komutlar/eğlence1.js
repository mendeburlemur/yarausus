const Discord = require('discord.js');


exports.run = function(client, message, args) {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send(
new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('HarmonyBot Eğlence Komutları 1')
.setDescription('`h!1vs1 @kullanıcı @kullanıcı` **Etiketlediğin 2 Kişi 1vs1 Atar.**\n`h!aşkölçer @kullanıcı` **Etiketlediğin Kişiyi Ne Kadar Sevdiğini Söyler.**\n`h!atasözü` **Rastgele Atasözü Söyler.**\n`h!atatürk` **Atatürk Gifleri Atar.**\n`h!ateş-et @kullanıcı` **Etiketlediğin Kişiye Ateş Edersin.**\n`h!atom-at` **Atom Bombası Atar.**\n`h!avatar @kullanıcı` **Etiketlediğin Kişinin Discord Avatarını Gösterir.**\n`h!balık-tut` **Balık Tutarsın.**\n`h!bayrak` **Türk Bayrağı Gifi Atar.**\n`h!cool` **Cool Resimler Atar.**\n`h!csgo <Hesap İsmi>` **Seçtiğin CSGO Hesabının İstatistiklerini Gösterir.**\n`h!çay-doldur`**Çay Doldrursun.**\n`h!çay-iç` **Çay İçersin.**\n`h!espri` **Rastgele Espri Söyler.**\n`h!evlen` **Evlenirsin <3 **\n`h!fortnite <Hesap İsmi>` **Seçtiğin Fortnite Hesabının İstatistiklerini Gösterir.**\n`h!google <kelime>` **Googleden Kelime Aratırsın.**\n`h!hackle` **Heçkır Olursun.**\n`h!havadurumu <Şehir>` **Arattığınız Şehirin Hava Durumuna Bakar. (Türkçe Harf Kullanmayın.)**\n`h!stresçarkı` **Stres Atarsın.**\n`h!sunucu-davet` **Bulunduğun Sunucunun Davet Linkini Atar.**\n`h!tarih` **Tarihe Bakarsın.**\n`h!uzaya-çık` **Uzaya Çıkarsın.**\n`h!yardım` **Botun Komutlarını Gösterir.**\n`h!yazıtura` **Yazı Tura Atarsın.**\n `h!kedi` **Rastgele Kedi Resimleri Atar.**\n `h!kediadı` **Rastgele Kedi İsmi Söyler.**'));
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription('`h!1vs1 @kullanıcı @kullanıcı` **Etiketlediğin 2 Kişi 1vs1 Atar.**\n`h!aşkölçer @kullanıcı` **Etiketlediğin Kişiyi Ne Kadar Sevdiğini Söyler.**\n`h!atasözü` **Rasthgele Atasözü Söyler.**\n`h!atatürk` **Atatürk Gifleri Atar.**\n`h!ateş-et @kullanıcı` **Etiketlediğin Kişiye Ateş Edersin.**\n`h!atom-at` **Atom Bombası Atar.**\n`h!avatar @kullanıcı` **Etiketlediğin Kişinin Discord Avatarını Gösterir.**\n`h!balık-tut` **Balık Tutarsın.**\n`h!bayrak` **Türk Bayrağı Gifi Atar.**\n`h!cool` **Cool Resimler Atar.**\n`h!csgo <Hesap İsmi>` **Seçtiğin CSGO Hesabının İstatistiklerini Gösterir.**\n`h!çay-doldur`**Çay Doldrursun.**\n`h!çay-iç` **Çay İçersin.**\n`h!espri` **Rastgele Espri Söyler.**\n`h!evlen` **Evlenirsin <3 **\n`h!fortnite <Hesap İsmi>` **Seçtiğin Fortnite Hesabının İstatistiklerini Gösterir.**\n`h!google <kelime>` **Googleden Kelime Aratırsın.**\n`h!hackle` **Heçkır Olursun.**\n`h!havadurumu <Şehir>` **Arattığınız Şehirin Hava Durumuna Bakar. (Türkçe Harf Kullanmayın.)**')
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
  name: 'eğlence',
  description: 'Bot için tavsiye bildirirsiniz',
  usage: 'h!eğlence'
};