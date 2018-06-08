const serverId = "417036333152862228"; // the id of your server 
const channelId = "417160243126992898"; // the id of the channel 

const Discord = require("discord.js");
function random(max) {
return Math.floor(Math.random() * Math.floor(max))};
 // new Discord.Client(options);
module.exports.run = async (bot, message, args) => {
	
//message.awaitReactions('👌',"236889636234854400" );
// Create a reaction collector 
const filter = (reaction, user) => 

reaction.emoji.name === 'YHKM'// && user.id === '236889636234854400' 
message.awaitReactions(filter, { time: 15000 }) 
.then(collected => 

console.log(`Collected ${collected.size} reactions`)) 
.catch(console.error);
//console.log(message.channel.lastMessage.emojis.find("emoji","👌"))
        };

module.exports.help = {
	name: "r",
	//help: "write yr name for show your avatar or mention the one you wanna show his/her avatar!",

}