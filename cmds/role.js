const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	//console.log("args[1]"+args[1]);
	
	let msg = message.content.split(" ");
	let perm = message.guild.roles.find(r => r.name === "admin");
	let toGive = message.guild.roles.findAll("position", 1);
	let target = message.guild.member(message.mentions.users.first());
	console.log("YESSS "+ message.member.roles.has(toGive.id));
	message.channel.sendMessage(target.roles.has(toGive));
	/////////CHECK PERMISSION///////////////
	if (!message.member.hasPermission("ADMINISTRATOR") && !message.member.roles.has(perm.id)) 
		return message.channel.sendMessage("you don't have permission!");
	//////////MUTE || UNMUTE/////////////////
	if(msg[0]=="=giverole"){
		if (!message.guild.member(message.mentions.users.first()).roles.has(toGive)){
	 await message.guild.member(message.mentions.users.first()).addRole(toGive);
	 message.channel.sendMessage(message.mentions.users.first()+" got " + toGive + " role!");
	        }else{
	 	message.channel.sendMessage("this member already have "+ toGive);
	             }};

	    if(msg[0]=="=takerole") {
	    if (message.guild.member(message.mentions.users.first()).roles.has(toGive)){
	     			await message.guild.member(message.mentions.users.first()).removeRole(toGive);
		message.channel.sendMessage(message.mentions.users.first()+" lost the role!");
	     } else{            	
	     	message.channel.sendMessage("this member already don't have it!");
	}};
	console.log("what"+message.guild.member(message.mentions.users.first()));
};




module.exports.help = {
	name: "giverole",
	name2:"takerole",
	help:"give role",
}
