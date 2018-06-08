const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {

//let target =message.guild.members.find(r => r.id === message.mentions.users.first().id);


//console.log(message.client.user)
if (message.mentions.users.first()){
	if (message.mentions.users.first()==message.author) return message.channel.send(`${message.mentions.users.first()}, you got a :wine_glass: from ${message.client.user.username}

(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ :wine_glass:`);
	message.channel.send(`${message.mentions.users.first()}, you got a :wine_glass: from ${message.author.username}

(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ :wine_glass:`);
} 
	else{message.channel.send("Please mention the member!")}
	



}

module.exports.help = {
	name: "blood",
}