const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	//console.log(message.member.hasPermission("ADMINISTRATOR"));
	let msg = message.content.split(" ");
	let perm = message.guild.roles.find(r => r.name === "admin");
	let daRole = message.guild.roles.find(r => r.name === "DaBot");
	console.log(message.member.roles.has(perm.id));
	/////////CHECK PERMISSION///////////////
	if (!message.member.hasPermission("ADMINISTRATOR") && !message.member.roles.has(perm.id)) 
		return message.channel.sendMessage("you don't have permission!");
	//////////MUTE || UNMUTE/////////////////
	if(msg[0]=="=control"){
		if (!message.guild.member(message.mentions.users.first()).roles.has(daRole.id)){
	 await message.guild.member(message.mentions.users.first()).addRole(daRole);
	 message.channel.sendMessage(message.mentions.users.first()+" got the role!!");
	        }else{
	 	message.channel.sendMessage("this member already have the role!");
	             }
	                   } else {
	     if(!message.guild.member(message.mentions.users.first()).roles.has(daRole.id)) {
	     	message.channel.sendMessage("this member already don't have it!");
	     } else{            	
		await message.guild.member(message.mentions.users.first()).removeRole(daRole);
		message.channel.sendMessage(message.mentions.users.first()+" lost the role!");
	};
	//console.log(daRole);


}}

module.exports.help = { 
	name: "control",
	name2:"uncontrol",
	help: "Add the role to the mentioned member to control the bot",
}
