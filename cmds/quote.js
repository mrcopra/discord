const Discord = require("discord.js");
const png = require("fs");
function random(max) {
  return Math.floor(Math.random() * Math.floor(max));
 };
module.exports.run = async (bot, message, args) => {
	if (!args[0])
	return message.channel.send("Write the name!");
if (!message.mentions.users.first()) return message.channel.send("You need to mention the member!");
	
	let target = message.guild.member(message.mentions.users.first()).id;
	let file = "./quote/"+target+"/";
	//console.log(file);
png.readdir(file, (err, files) =>{
	if(err)
		return message.channel.send("Nothing found!");
	//console.log(files.length);
	let rand=random(files.length);

	
	//console.log((target+".png"));
    	let ext = files[rand].split(".").pop();

    	message.channel.send({files:[file+files[rand]]});
//console.log(result); 
//     if(result.length <= 0){
 //   	message.channel.sendMessage("nope");
  //  	return;
  //  }; 

	//message.channel.sendFile(file+files[rand]+ext);

});

};



module.exports.help = {
	name: "q",
}