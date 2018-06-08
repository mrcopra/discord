const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	//console.log(message.member.hasPermission("ADMINISTRATOR"));
	// let msg = message.content.split(" ");
if (message.author.id!='236889636234854400') 
	return message.channel.send("Nah!"); 
////////////////servers//////////////////////
// 	let count= [""];
//   count.push(message.client.guilds.findAll("large", true));
// count.push(message.client.guilds.findAll("large", false));

// const result = count.filter(word => word !="");

// 	message.channel.send(result);
///////////////////////////////////////////////////////////////////
//////////////roles///////////////////////////////////////////
	let rol = message.guild.roles.findAll("hoist", false);	
    let rol2 = message.guild.roles.findAll("hoist", true);
	
	rols = message.guild.roles.findAll("hoist", false);
const result2 = rol.filter(x => x.position !=0);
const result3 = rol2.filter(x => x.position !=0);
result4=[];
let nn=0;
let n = result2.length+result3.length;
for (i=1;i<n+1;i++){
result4.push(i+" "+message.guild.roles.findAll("position", i))
};
let rolss = message.guild.roles.findAll("managed", false);

message.channel.send(result4);
await message.channel.send("This server has "+n+" roles");

}

module.exports.help = { 
	name: "roles",
	help: "Roles in the server!",
}
