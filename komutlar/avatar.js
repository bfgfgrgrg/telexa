const discord = require('discord.js');
exports.run = async(client, message, args) => {
return message.channel.send(message.author.displayAvatarURL())
}
exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: ["av"]
}
exports.help = {
name: "avatar"
}