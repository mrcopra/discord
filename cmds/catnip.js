const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {

//let target =message.guild.members.find(r => r.id === message.mentions.users.first().id);


//console.log(message.mentions.users.first())
if (message.mentions.users.first()){
		if (message.mentions.users.first()==message.author) return message.channel.send(`${message.mentions.users.first()}, you got a :herb: from ${message.client.user.username}

(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ :herb:`);
	message.channel.send(`${message.mentions.users.first()}, you got a :herb: from ${message.author.username}

(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ :herb:`);
} 
	else{message.channel.send("Please mention the member!")}
	



}

module.exports.help = {
	name: "catnip",
}