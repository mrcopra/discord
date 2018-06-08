const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
		let perm = message.guild.roles.find(r => r.name === "DaBot");
		if (!message.member.hasPermission("ADMINISTRATOR") && !message.member.roles.has(perm.id))
		return message.channel.send("You don't have permission!");
    if(!args[0]) return message.channel.send("Please don't forget to add the link of image!");
await message.client.user.setAvatar(args[0])

   .then(user => console.log(`New avatar set!`)) 
  // .catch(message.channel.send("You change too fast, try again later!"));
message.delete();
message.channel.send("The avatar changed successfully!");

}

module.exports.help = {
	name: "setavatar",
    help: "To change the bot's avatar by write the link of the image!",

}