const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	let link = await bot.generateInvite(["ADMINISTRATOR"]);
	message.channel.sendMessage(link)

}

module.exports.help = {
	name: "invite",
	help:"To post the link of bot to invite!",

}