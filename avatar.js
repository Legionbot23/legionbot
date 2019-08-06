const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let a = message.author
    let embed = new Discord.RichEmbed()
.setThumbnail(a.avatarURL)

bot.send(embed);

};
module.exports.help = {
name: "avatar"
};