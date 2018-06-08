const Discord = require("discord.js");
const png = require("fs");
function random(max) {
  return Math.floor(Math.random() * Math.floor(max));
 }
 //////////////////////////////////////////////////////////////
module.exports.run = async (bot, message, args) => {

        message.channel.sendFile("./random/smug.PNG")

}
// ///////////////////////////////////////////////////////////////////////


module.exports.help = {
    name: "smug" ,
	//help:"Write the one you want to boop or you gonna boop yourself!",
}