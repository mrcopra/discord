const Discord = require("discord.js");
const png = require("fs");
function random(max) {
  return Math.floor(Math.random() * Math.floor(max));
 }


 //////////////////////////////////////////////////////////////
module.exports.run = async (bot, message, args) => {
let e = "";//Discord.Embed() 
e.set_image(url="https://discordapp.com/assets/e4923594e694a21542a489471ecffa50.svg")
// Async 
message.channel.sendFile(message.channel, "filepath.png", content="...", filename="...") 
	//  # Rewrite 
	//  file = Discord.File("filepath.png", filename="...") 
	//   message.channel.send("content", file=file)
console.log(content)
	  }

// ///////////////////////////////////////////////////////////////////////


module.exports.help = {
    name: "im" ,
	help:"Write the one you want to boop or you gonna boop yourself!",
}