const Discord = require("discord.js");
module.exports.run = async (bot, message, args, con) => {
  //  if(message.author.id!=236889636234854400) return;
    con.query('SELECT * FROM xp ORDER BY xp DESC',(err,rows)=>{});
    let msg = message.content.split(" ");
  //  console.log("args0 "+msg[0]);
    let target = message.mentions.users.first() || message.guild.members.get(args[1]) || message.author;
if(msg[0]=="=lv"){
    con.query(`SELECT * FROM xp WHERE id = '${target.id}'`, (err, rows) =>{
        if(err) throw err;
     
        if(!rows[0]) return message.channel.send("This user has no XP on record!");
       let lv = Math.sqrt(rows[0].xp/5).toFixed();
        message.channel.send(target.username+"'s LEVEL = "+lv);
    })} else {
            con.query('SELECT * FROM xp ORDER BY xp DESC', (err, rows) =>{

        if(err) throw err;

     embed = new Discord.RichEmbed();
     let n = 0;
	 let po = 0;
	 let first = 0;
    //message.channel.send(message.guild.members.get('236889636234854400'));
      for (i=0; i<rows.length; i++){

      let xp = rows[i].xp;
      let id = rows[i].id;
      let nm = `${message.guild.members.get(id)}`;
	  
      if(message.guild.members.exists("id", id)){
		  first = first + 1;
		  po = po+1;
        n=n+1;
               let lv = Math.sqrt(xp/5).toFixed();
      //  message.channel.send(`${message.guild.members.get(id)}`+"'s xp = "+xp);
        embed.addField(po+`- ${message.guild.members.get(id).user.username}`,`Level: ${lv}                   XP: ${xp}`)//message.guild.member(message.guild.members.findAll("id", id)).user.username);
      if(n==5){
        message.channel.sendEmbed(embed);
        embed = new Discord.RichEmbed();
		return;
      }
      }}
//
    message.channel.sendEmbed(embed);
    })

}}

module.exports.help = {
	name: "l",
    name2: "lbd",
    help: "nothing yet!",

}