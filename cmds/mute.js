const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	//console.log(message.member.hasPermission("ADMINISTRATOR"));
	let msg = message.content.split(" ");
	let perm = message.guild.roles.find(r => r.name === "admin");
	let toMute = message.guild.roles.find(r => r.name === "nadeko-mute");
	console.log(message.guild.member(message.mentions.users.first()).roles.has(toMute.id));
	/////////CHECK PERMISSION///////////////
	if (!message.member.hasPermission("ADMINISTRATOR") && !message.member.roles.has(perm.id)) 
		return message.channel.sendMessage("you don't have permission!");
	//////////MUTE || UNMUTE/////////////////
	if(msg[0]=="=mute"){
		if (!message.guild.member(message.mentions.users.first()).roles.has(toMute.id)){
	 await message.guild.member(message.mentions.users.first()).addRole(toMute);
	 message.channel.sendMessage(message.mentions.users.first()+" muted!");
	        }else{
	 	message.channel.sendMessage("this member already muted!");
	             }
	                   };
	    if(msg[0]=="=unmute"){         
	     if(message.guild.member(message.mentions.users.first()).roles.has(toMute.id)) {
	    await message.guild.member(message.mentions.users.first()).removeRole(toMute);
		message.channel.sendMessage(message.mentions.users.first()+" unmuted!");
	       } else{       
	     message.channel.sendMessage("this member already unmuted!");     	

	};
	console.log(perm.id);


}
}
module.exports.help = {
	name: "mute",
	name2:"unmute",
}
