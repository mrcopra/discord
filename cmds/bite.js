const Discord = require("discord.js");
const png = require("fs");
function random(max) {
  return Math.floor(Math.random() * Math.floor(max));
 }
 //////////////////////////////////////////////////////////////
module.exports.run = async (bot, message, args) => {
    

 png.readdir("./bite/", (err, files) =>{

    if(err) console.error(err);
    var boop = "./bite/";
let rand=random(files.length);
let target = message.mentions.users.first() || message.author;

 //    if (target.id == 317755379356532736){
        
	// return message.channel.sendFile("./random/dont_boop.png")};


    if (!message.mentions.users.first() || target.id == message.author.id){
        message.channel.sendFile("./random/self_bite.gif")
        return message.channel.sendMessage("pfft");}else{
        	

    	let ext = files[rand].split(".").pop();

    	message.channel.sendFile(boop+files[rand],"bite."+ext);

        }
});
}
// ///////////////////////////////////////////////////////////////////////


module.exports.help = {
    name: "bite" ,
	help:"Write the one you want to bite or you gonna bite yourself!",
}