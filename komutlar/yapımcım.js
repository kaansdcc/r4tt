const Discord = require("discord.js");

exports.run = (client, message, args) => {
  const mrt = new Discord.MessageEmbed()
    .setColor("#00ee00")
    .setDescription("> Yapımcım : <@823530737906090014>")
    .setFooter(" yapımcım ") ///İd nizi yukarı tarafa yazın
  message.channel.send(mrt);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yapımcım",
  description: "",
  usage: ""
};