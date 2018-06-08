const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	if(!message.mentions.users.first()) {
	 avatar = message.author.avatarURL
	 username = message.author.username
	 id = message.author.id
	 discriminator = message.author.discriminator
	}else {
	 avatar = message.mentions.users.first().avatarURL
	 username = message.mentions.users.first().username
	 id = message.mentions.users.first().id
	 discriminator = message.mentions.users.first().discriminator} 
		let embed = new Discord.RichEmbed()

		//console.log(Discord.Client().users)
		.setImage(avatar)
		    .setAuthor(username)
		    .setDescription("this is the user's info!")
		    .setColor("RED")
		    .addField("User Name", `${username}#${discriminator}`)
		    .addField("ID", id)
		    .setURL("https://cdn.discordapp.com/embed/avatars/0.png")

		    message.channel.sendEmbed(embed);

}

module.exports.help = {
	name: "info",
	help: "To show the profile of mentioned member or your if you didn't mention anyone!",

}