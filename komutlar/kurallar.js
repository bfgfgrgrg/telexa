const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let user = message.mentions.users.first() || message.author;

  const exampleEmbed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`${client.user.username}`)
    .setDescription(
      `**:ZilX:Kurallar:ZilX:**
      
:okX:**Küfür Etmek= **:Ban1:

:okX:**Sunucu Patlatma Denemesi= **:Ban1:

:okX:**Çok Fazla Etiket Atmak= **:Ban1:

:okX:**Reklam Yapmak= **:Ban1:

:okX:**Emoji Spam= **:Ban1:

:okX:**Kavga Etmek Tartışmak Yasak= **:Ban1:

:okX:**Cinsel İçerikli Fotoraf/Gif Paylaşmak= **:Ban1:
`
    )
    .setImage(
      "https://media.discordapp.net/attachments/662285852856287243/662309298411536394/OrDie.gif"
    );
  message.channel.send(exampleEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "kurallar",
  description: "kurallar",
  usage: "kurallar"
};