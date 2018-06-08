const Discord = require("discord.js");
const png = require("fs");
const allpng = require("fs");

let c = 0;	
function random(max) {
  return Math.floor(Math.random() * Math.floor(max));
 };
module.exports.run = async (bot, message, args, con) => {
	
// 	let file = "./quote/";
// let names = "";
// 	const z = [];

// let nme = "";
// let afs = 0;
//  //embed = new Discord.RichEmbed();
// png.readdir(file, (err, files) =>{

// 	for(x=0; x<files.length; x++){
// 	//	console.log("first "+files.length);
// 		let allFiles = "./quote/"+files[x];
// 		afs = files[x];
		
// 		nme = message.guild.members.find(x =>x.user.id == afs);
	
// 		if (nme){
// 		//	 console.log("second nme  "+nme);

		
// 				allpng.readdir(allFiles, (err, fls) =>{
// 				//	console.log("third "+fls.length);
// 					let total = fls.length;
// 					let userid = message.guild.member(allFiles.slice(8)).user.id;
// 				//	console.log(message.guild.member(allFiles.slice(8)).user.id)
// 		 con.query(`SELECT * FROM quote WHERE ID = ${userid} `, (err, rows) =>{
//     	if(err) throw err;

//     	let sql;
// //console.log("rows "+rows.length);
//     	if(rows.length < 1){
//     		sql = `INSERT INTO quote (ID, username, total) VALUES (${userid}, '${message.guild.member(allFiles.slice(8)).user.username}',${fls.length})`;
// console.log("Added new user!");
//     	} else{
//     		//userid = message.guild.member(allFiles.slice(8)).user.id;
//     		sql = `UPDATE quote SET total = ${total} WHERE ID = ${userid}`
// 			con.query(sql); 
// 			//console.log(sql);
// 			sql = `UPDATE quote SET username = '${message.guild.member(allFiles.slice(8)).user.username}' WHERE ID = ${userid}`;
// 						//console.log(userid+" Values updated!"+total);
// 									con.query(sql); 
// 									}
// 	    	con.query(sql); 

//     });
		 

// c=c+1;	
// 		})
		
			
// 		}
	
// 	}


// });
//     let msg = message.content.split(" ");
//   //  console.log("args0 "+msg[0]);
//     let target = message.mentions.users.first() || message.guild.members.get(args[1]) || message.author;
 
// 	let embed = new Discord.RichEmbed();
// //	time.sleep(5)
//     con.query(`SELECT * FROM quote ORDER BY total DESC`, (err, rows) =>{
//         if(err) throw err;
        
//         if(!rows[0]) return message.channel.send("This user has no quotes on record!");
//         let total = rows[0].total;
// 		for(x=0; x<rows.length; x++){
// 			//console.log(rows[x].total);
// 			embed.addField(rows[x].username,rows[x].total,true)
// 		} 
// 		embed.setAuthor("Quote's victims");
//      message.channel.send(embed);
// 	 embed = new Discord.RichEmbed();
// 	})
	
}

module.exports.help = {
	name: "qs",
  
    help: "nothing yet!",

}