const Discord = require('discord.js')

exports.run = async (client, message, args) => {

    const { MessageEmbed } = require('discord.js')
    const revengecode = new MessageEmbed()
    .setTitle('TeleXaV2 - Davet Linkleri')
    .setDescription(`
    [BOTU DAVET ETMEK İÇİN TIKLA](https://discord.com/oauth2/authorize?client_id=1085533918205333524&scope=bot&permissions=27917299726)
    [BOTUN DESTEK SUNUCUSUNA GELMEK İÇİN TIKLA](https://discord.gg/EgDwJvcSCd)`)
    message.channel.send(revengecode)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["deneme-davet"],
    permLevel: 0
  };
  
  exports.help = {
    name: "davet",
    description: "Botun Davet Bilgileri",
    usage: "davet"
  };