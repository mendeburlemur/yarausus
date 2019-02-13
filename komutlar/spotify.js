const Discord = require('discord.js');

exports.run = (client, message, args) => {

    var user = message.mentions.users.first() || message.author;

    if (user.presence.game.name === 'Spotify' && user.presence.game.type === 2) {
        try {
            var trackImg = user.presence.game.assets.largeImageURL;
            var trackUrl = `https://open.spotify.com/track/${user.presence.game.syncID}`;
            var trackName = user.presence.game.details;
            var trackAlbum = user.presence.game.assets.largeText;
            var trackAuthor = user.presence.game.state;

            const embed = new Discord.RichEmbed()
                .setAuthor('Spotify Şarkı Bilgi')
                .setColor('FF0000')
                .setThumbnail(trackImg)
                .setDescription(`
\`🎵\` **Şarkı Adı :**  \`${trackName}\`
\`📀\` **Albüm :**  \`${trackAlbum}\`
\`🎤\` **Yapımcı :**  \`${trackAuthor}\`
`)
                .addField('Listen to this track :', `[${trackUrl}](${trackUrl})`, false);

            return message.channel.send(embed);

        } catch (error) {
            return message.channel.send(`\`[ERROR ❌]\`, ${user.username} may not be listening to a registered sound`);
        }

    } else {
        return message.channel.send(`${user.username} is not listening to spotify`);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'spotify',
  description: 'İstediğiniz kişiyi  susturur.',
  usage: 'sustur [kullanıcı] [sebep]'
};