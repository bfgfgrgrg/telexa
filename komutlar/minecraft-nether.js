const Discord = require("discord.js");

exports.run = async (client, message) => {
  let dönme = await message.channel.send({
    embed: {
      color: 0x00ae86,
      description: `${message.author.tag} Nethera Gidiyor!`,
      image: {
        url: "https://media.discordapp.net/attachments/805151134926110788/813093608269545522/InfamousComfortableGalapagossealion-size_restricted.gif"
      }
    }
  });

  let bitiş = Math.random() * (60 - 5 + 1) + 5;
  setTimeout(() => {
    dönme.edit({
      embed: {
        color: 0x00ae86,
        description: `${message.author.tag}, Nether Fazla Durdun Sanki${bitiş.toFixed(
          2
        )} saatte döndün.`
      }
    });
  }, 5 * 1000);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["nether"],
  permLevel: 0
};

exports.help = {
  name: "nether",
  description: "nethera gidrsiniz",
  usage: "nether"
};