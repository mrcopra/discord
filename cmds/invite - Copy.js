const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	 console.log(bot.get_all_channels);
	let gld = bot.guilds.findAll("large",false);
	if(message.content=="=servers"){
	if(message.author.id==236889636234854400){
	   
	    for (x=0; x<gld.length; x++){
	    message.channel.send(gld[x].name + " "+gld[x].id)}
	}
    }else{
    	toleave = client.get_server(args[0]) 
    	await client.leave_server(toleave)
    }


}

module.exports.help = {
	name: "servers",
	name2:"leave",
	//help:"To post the link of bot to invite!",

}