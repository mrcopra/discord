const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
	let msg = message.content.split(" ");
	// //console.log(message.content.slice(9));
	let chan = message.guild.channels.array()


//	console.log((chan.find(val => val.name== "test").name));
////////////////////////checks////////////////////////////
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission!");
      	 if (!args[0]) return message.channel.send("Dont forget to write something!");
      	      if(args[0].length>10 || args.length>1) return message.channel.send("Too long or it contain spaces!");
   /////////////////////////////////////////////////////////
     let  exist = chan.find(val => val.name== args[0]);
     
//  console.log("exist "+ chan.map());//(chan.find(val => val.name== args[0])).name);
//chan.deleteChannel();
       if(msg[0]=="=channel"){
if(exist) return message.channel.send("Already exist!");
      message.guild.createChannel(args[0]);
      message.channel.send("Done!");}
//                             else{
//                             	if(!exist) return message.channel.send("not exist!");
//     	//    if (!chan.find(val => val.name== args[0]))  return message.channel.send("Not exist!");
//       	message.channel.delete(args[0])}
                                                 
            }

module.exports.help = {
	name: "channel",
	//name2: "deleteChannel",
	help: "You need admin permission!",

}