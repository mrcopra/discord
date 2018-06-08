const Discord = require("discord.js");
const png = require("fs");
const allpng = require("fs");
const ms = require("ms");
let embed = new Discord.RichEmbed();	
let file = "./quote/";
let c = 0;

module.exports.run = async (bot, message, args, con) => {
	console.log(bot.guild)

	if(message.content="=qss"){
console.log(message.content)
///////////////////START/////////////////////////////
png.readdir(file, (err, files) =>{
//////////////////////////////////////////

for (i=0; i < files.length; i++){
	console.log("c= "+ i +" "+c)
	id = files[i];
	let allimgs = `./quote/${files[i]}`

allpng.readdir(allimgs, (err, fls) =>{

	
afs = allimgs.slice(8);
//	console.log(afs)

//if(!rows[c]){
//	console.log("not available!")
	 name = message.guild.members.find(x =>x.user.id == allimgs.slice(8));
	// console.log("after name "+ !name.user.username)
 con.query(`SELECT * FROM quote WHERE ID = ${allimgs.slice(8)} `, (err, rows) =>{
	    	if(err) throw err;
	    	name = message.guild.members.find(x =>x.user.id == allimgs.slice(8));
	 //   	console.log(name.user.username)
	   	if(rows.length<1 && !name )
	    		{console. log('nothing in sql & server');
	    	console.log(fls.length)
   sql = `INSERT INTO quote (ID, username, total) VALUES (${allimgs.slice(8)}, 'Not available',${fls.length})`;
   con.query(sql); 
   message.channel.send('New member added '+ allimgs.slice(8))
	     }else if(rows.length<1 && name) {
	     		console. log(name.user.username+' not sql');
   sql = `INSERT INTO quote (ID, username, total) VALUES (${allimgs.slice(8)}, '${name.user.username}',${fls.length})`;
   con.query(sql);
      message.channel.send('New member added '+ name.user.username)
    } else if(name){
    	if(rows[0].username !=name.user.username ){
    		if(err) throw err;
  //  con.query(`SELECT * FROM quote WHERE ID = ${allimgs.slice(8)} `, (err, rows) =>{
	    	
    	//console.log("last one "+name.user.username+allimgs.slice(8))
    	sql = `UPDATE quote SET username = '${name.user.username}' WHERE ID = ${allimgs.slice(8)}`;
				//		console.log(userid+" Values updated!"+total);
									con.query(sql) ;

    //  message.channel.send(`Member's name updated ${name.user.username}`)

  }
  //)} 
								}

							  
	    })
    




//////////////////////////
})
c=c+1;
}
c = 0;
////////////////////////////////
});

////////////////////SQL////////////////////////////
con.query(`SELECT * FROM quote`, (err, rows) =>{

//console.log(rows);
})} else{
	console.log(message.content)
			if (!message.member.hasPermission("ADMINISTRATOR")) 
		return message.channel.sendMessage("you don't have permission!");
	//////////MUTE || UNMUTE/////////////////
	con.query(`DELETE FROM quote`, (err, rows) =>{
	    	})
}
//////////////////END SQL/////////////////////////

//////////////////END/////////////////////////  
}

module.exports.help = {
	name: "qss",
  name:"qd",
    help: "nothing yet!",

}