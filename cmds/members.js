const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
//if (message.author.id!='236889636234854400') 
//	return message.channel.send("Nah!"); 
let toMute = message.guild.roles.find(r => r.name === "nadeko-mute");
let member = message.guild.member;
let members = message.guild.memberCount;
//console.log(message.guild.members);
let count1 = message.guild.members.findAll("speaking", false);
let count2 = message.guild.members.findAll("speaking", true);
let notBot = [];
let names = [];
let bots = [];
	for (i=0; i<members; i++){
  if(!message.guild.member(count1[i]).user.bot){
  notBot.push(count1[i]);
names.push(message.guild.member(count1[i]).user.username)}else{
bots.push(message.guild.member(count1[i]).user.username)
  };
}



let n = count1.length+count2.length;
//console.log(message.member);
await message.channel.send("```Humans```");
await message.channel.send(names);
await message.channel.send(notBot.length+" are humans!");
await message.channel.send("```Bots```");
await message.channel.send(bots);

 await message.channel.send(`${members-notBot.length}`+" are bots!");
// await message.channel.send("The total are "+members)
//await message.channel.send("This server has "+n+" roles");
}

module.exports.help = { 
	name: "members",
	//help: "The Servers which the bot joined!",
}
