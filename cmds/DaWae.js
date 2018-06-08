const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	message.channel.sendFile("./random/Da_Wae.png")

}

module.exports.help = {
	name: "dawae",

}