const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	console.log("done")
message.channel.sendFile("./random/true_art.png")
}

module.exports.help = { 
	name: "trueart",

}
