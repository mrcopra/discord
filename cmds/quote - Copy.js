const Discord = require("discord.js");
const png = require("fs");
const allpng = require("fs");
let c = 0;	
function random(max) {
  return Math.floor(Math.random() * Math.floor(max));
 };
module.exports.run = async (bot, message, args, con) => {
	


	let file = "./quote/";
let names = "";
	const z = [];

let nme = "";
let afs = 0;
 embed = new Discord.RichEmbed();
png.readdir(file, (err, files) =>{

	for(x=0; x<files.length; x++){
		
		let allFiles = "./quote/"+files[x];
		afs = files[x];
		
		nme = message.guild.members.find(x =>x.user.id == afs);
	
		if (nme){
			

		
				allpng.readdir(allFiles, (err, fls) =>{
					let userid = message.guild.member(allFiles.slice(8)).user.id;
					console.log(message.guild.member(allFiles.slice(8)).user.id)
		 con.query(`SELECT * FROM quote WHERE ID = ${userid}`, (err, rows) =>{
    	if(err) throw err;

    	let sql;
console.log("rows "+rows.length);
    	if(rows.length < 1){
    		sql = `INSERT INTO quote (ID, username, total) VALUES (${userid}, '${message.guild.member(allFiles.slice(8)).user.username}',${fls.length})`;

    	} else{
    		let total = fls.length;
    		sql = `UPDATE quote SET total = ${total} WHERE ID = ${userid}`;
			sql = `UPDATE quote SET username = '${message.guild.member(allFiles.slice(8)).user.username}' WHERE ID = ${userid}`;
									}
	    	con.query(sql); 

    });
		 
			
		//message.channel.send(message.guild.member(allFiles.slice(8)).user.id+" "+fls.length);
	
		//	embed.addField(message.guild.member(allFiles.slice(8)).user.username,fls.length);
			//embed.addField("h", true);
//if (c==allFiles[0].length){message.channel.sendEmbed(embed);

//console.log(c+" "+x);
//}
c=c+1;	
		})
		
			
		}
	
	}
return;	

});



 

};



module.exports.help = {
	name: "aq",
}