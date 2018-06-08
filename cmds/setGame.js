const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
	//console.log(message.client.user.username);
	console.log(message.content.slice(9));
   		let perm = message.guild.roles.find(r => r.name === "DaBot");
		if (!message.member.hasPermission("ADMINISTRATOR") && !message.member.roles.has(perm.id))
		return message.channel.send("You don't have permission!");
    if(!args[0]) return message.channel.send("Dont forget to write something!");
    if(args[0].length>20) return message.channel.send("Too long!");
    
	message.client.user.setGame(message.content.slice(9));
	message.channel.send("The status changed successfully!");
 
}

module.exports.help = {
	name: "setgame",
	help:"To change what the bot playing in it's status!",

}