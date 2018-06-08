const Discord = require("discord.js");

 //////////////////////////////////////////////////////////////
module.exports.run = async (bot, message, args) => {
    if (message.author.id == 236889636234854400){
        message.channel.sendFile("./random/rp.png")
    }
    }
// ///////////////////////////////////////////////////////////////////////


module.exports.help = {
    name: "rp" ,
	help:"Write the one you want to boop or you gonna boop yourself!",
}