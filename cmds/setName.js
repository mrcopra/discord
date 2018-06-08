const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
	console.log(message.content.slice(9));
			let perm = message.guild.roles.find(r => r.name === "DaBot");
		if (!message.member.hasPermission("ADMINISTRATOR") && !message.member.roles.has(perm.id))
		return message.channel.send("You don't have permission!");
    if(!args[0]) return message.channel.send("Dont forget to write something!");
    if(args[0].length>10) return message.channel.send("Too long!");
   if(message.client.user.username==message.content.slice(9)) return message.channel.send("ummm, that's already my name!");
   await message.client.user.setUsername(message.content.slice(9));//message.client.user.setGame(message.content.slice(9));
 
 message.channel.send("The name changed successfully!");
}

module.exports.help = {
	name: "setname",
	help: "To change the bot's name!",

}