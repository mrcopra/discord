const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	if (message.author.id==263011994272006144) return message.channel.sendFile("./random/nazi.png");
}

module.exports.help = { 
	name: "nazi",

}
