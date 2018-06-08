const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	let target = message.guild.members.find(x=>x.id == 263410895705735178).user;
	//console.log(target.user.avatarURL)
message.channel.send(target.avatarURL)
}

module.exports.help = { 
	name: "evil",

}
