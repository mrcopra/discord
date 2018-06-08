const botSettings = require("./botSettings.json");
const Discord = require("discord.js");
const fs = require("fs");
const mysql = require("mysql");
const prefix = botSettings.prefix;


const bot = new Discord.Client({disableEveryone: true})
bot.commands = new Discord.Collection();

fs.readdir("./cmds/", (err, files) =>{
	if(err) console.error(err);

	let jsfiles = files.filter(f => f.split(".").pop()==="js");
    if(jsfiles.length <= 0){
    	console.log("no commands load!!");
    }

   // console.log(`loading ${jsfiles.length} commands!`);
    let help = "[];"
//var newLength = help.push('Orange');
    	jsfiles.forEach((f, i) =>{
    		let props = require(`./cmds/${f}`);
    	//	console.log(`${i + 1}: ${f} loaded!`);
    		bot.commands.set(props.help.name, props);
    		bot.commands.set(props.help.name2, props);
    	})
});


bot.on("ready", async () =>{
	//console.log(`Bot is ready! ${bot.user.username}`);
	//console.log(bot.commands);
console.log("The Bot is Ready!")
	//bot.user.setActivity("Wero",{type: "Kisses"});
	//try {
//		let link = await bot.generateInvite(["ADMINISTRATOR"]);
	//	console.log(link);
	//} catch(e){
		//console.log(e.stack);
//	}

});

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"1234",
    database: "sadb",
});

con.connect(err => {
	if(err) throw err;
	console.log("connected to database!");
//	con.query("SHOW TABLES")//, console.log);
});

function generateXp(){
	let min = 20;
	let max = 30;
	return Math.floor(Math.random() * (max - min +1))+ min;
}

//bot.on('message', message => 
//{ message.reactions;
//console.log(message.author.lastMessage)}).author.username+" "+ message.content) });

bot.on("message", async message =>{
	if(message.author.bot) return ;
    ////000000///////
// let chan = message.client.guilds.find(x=>x.id == 417036333152862228).channels.find(y=>y.name ==message.guild.id)
// //let  exist = chan.find(val => val.name== message.guild.id);
// //console.log(chan)
// if(chan){
//     message.client.guilds.find(x=>x.id == 417036333152862228).channels.find(y=>y.name == message.guild.id).send("**"+message.author.username+ "** "+ message.content); 

// } else {
//  await   message.client.guilds.find(x=>x.id == 417036333152862228).createChannel(message.guild.id);
//   await  message.client.guilds.find(x=>x.id == 417036333152862228).channels.find(y=>y.name == message.guild.id).send("**"+message.author.username+ "** "+message.content)
// }

    ///////////0/////
    //message.channel.send(message.guild.id)
  //  console.log(message.client.guilds.find(x=>x.id == 417036333152862228).channels.find(y=>y.name =='msg'))
  //  message.client.guilds.find(x=>x.id == 417036333152862228).channels.find(y=>y.name =='msg').send(message.content); 
	if(message.channel.type ==="dm") return message.reply("FK OFF!");
//	if(message.content=="howdy"){message.channel.send("Howdy partner! ^^")}; 
//if(message.content("
	//if(message.content=="I am bored"||message.content=="i am bored"||message.content=="I am bored"||message.content=="i'm bored"||message.content=="I'm bored"||message.content=="im bored"){
// message.channel.send("Hello bored!")};
    con.query(`SELECT * FROM xp WHERE id = '${message.author.id}'`, (err, rows) =>{
    	if(err) throw err;

    	let sql;
//console.log("rows "+rows.length);
    	if(rows.length < 1){
    		sql = `INSERT INTO xp (id, xp) VALUES ('${message.author.id}', ${generateXp()})`;

    	} else{ 
    		let xp = rows[0].xp;
    		sql = `UPDATE xp SET xp = ${xp + 1} WHERE id = '${message.author.id}'`;
    	}
    	con.query(sql);

    });
	let messageArray = message.content.split(" ");
	let command = messageArray[0].toLowerCase();
	let args = messageArray.slice(1);

	if(!command.startsWith(prefix)) return;
    
    let cmd = bot.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(bot, message, args, con);
    if(command === `${prefix}help`){
    	
    	fs.readdir("./cmds/", (err, files) =>{
	if(err) console.error(err);

	let jsfiles = files.filter(f => f.split(".").pop()==="js");
    if(jsfiles.length <= 0){
    	  console.log("no commands load!!");
    }

    console.log(`loading ${jsfiles.length} commands!`);
    	let embed = new Discord.RichEmbed()
let help = [];
let count = 0,l;
    	jsfiles.forEach((f, i) =>{

    		let props = require(`./cmds/${f}`);
    		    		    				    embed.addField(props.help.name, props.help.help)
		    // embed.addField("Desc", "props.help.help")
    	//	console.log(`${i + 1}: ${f} loaded!`);
    		bot.commands.set(props.help.name, props);
    		bot.commands.set(props.help.name2, props);
    		bot.commands.set(props.help.help, props);
			count = count + 1;
if(count==10){message.channel.sendEmbed(embed);
count=0;
embed = new Discord.RichEmbed()};
    		// newLength = help.push(props.help.name,props.help.help);
    	})

 	

// 		//console.log(Discord.Client().users)


// 		    .setURL("https://cdn.discordapp.com/embed/avatars/0.png")

 		    message.channel.sendEmbed(embed);

    	//message.channel.send(help);
   // 	console.log(help)
});
};

// 	if(command === `${prefix}info`){
// 	//	if(!message.mentions.users.first()) return ;

// 	if(!message.mentions.users.first()) {
// 	 avatar = message.author.avatarURL
// 	 username = message.author.username
// 	 id = message.author.id
// 	 discriminator = message.author.discriminator
// 	}else {
// 	 avatar = message.mentions.users.first().avatarURL
// 	 username = message.mentions.users.first().username
// 	 id = message.mentions.users.first().id
// 	 discriminator = message.mentions.users.first().discriminator} 
// 		let embed = new Discord.RichEmbed()

// 		//console.log(Discord.Client().users)
// 		.setImage(avatar)
// 		    .setAuthor(username)
// 		    .setDescription("this is the user's info!")
// 		    .setColor("RED")
// 		    .addField("User Name", `${username}#${discriminator}`)
// 		    .addField("ID", id)
// 		    .setURL("https://cdn.discordapp.com/embed/avatars/0.png")

// 		    message.channel.sendEmbed(embed);


// 		    return;
// }
// 		    if (command === `${prefix}mute`)
// 		    {
// 		    	//get the mentioned user. return if none
// 		    	if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("weak!")
// 		    	//if (message.channel.permission(message.member).hasPermission("MUTE"))

// 		    	let toMute = message.mentions.users.first() || message.guild.members.get(args[0]);
// 		    	if(!toMute) return message.channel.sendMessage("not found!");

// 		    	return message.reply(toMute.username || toMute.user.username);
// 		    	//check if command executor has the right permission to do this command
// 		    	//if the muter has the same or higher role than the muter, return
		    

// 		    // bot.guilds.get("id");
// 		    // bot.guilds.find(guild => guild.members.size >= 10)
// 		    // bot.guilds.has("id");
// 		    // bot.guilds.exists(guild => guild.name === "YouTube")

//        return;
// 	        }
// // let msg = message.channel;

// // 	        if (command = `${prefix}lewd`)
// // 	        {
// // 	        	await message.channel.sendMessage("hehe");
// // 	        	await message.channel.sendFile("./lewd.png");
// // 	        	await msg.sendMessage("it worked");
// // 	        //	await msg.sendFile("./cute.jpg");

// // 	        }

});

bot.login(botSettings.token);