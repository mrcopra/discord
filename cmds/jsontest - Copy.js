const api = "http://thecatapi.com/api/images/get?results_per_page=";
const snekfetch = require("snekfetch");
const Discord = require("discord.js");
	function random(max) {
  return Math.floor(Math.random() * Math.floor(max));

 };
module.exports.run = async (bot, message, args) => {
    snekfetch.get(api).then(r => {
let body = r.body;
//console.log(body.length)

let embed = new Discord.RichEmbed()

.setImage(api+random(body.length)) 


message.channel.send({embed: embed}); 
        });
}

module.exports.help = {
	name: "cat",

}