const Discord = require("discord.js");
const png = require("fs");
module.exports.run = async (bot, message, args) => {
if (args[0]=='cleo'&&message.author.id==236889636234854400) return message.channel.sendFile("./random/nom_cleo.png");
png.readdir("./nom/", (err, files) =>{

	if(err) console.error(err);

const result = files.filter(word => word == message.author.id+".png");

    if(result.length <= 0){
    	message.channel.sendMessage("nope");
    	return;
    }

	message.channel.sendFile("./nom/"+result[0]);

});

}

module.exports.help = {
	name: "nom",
}