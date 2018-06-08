module.exports.run = async (bot, message, args, con) => {
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
    	    con.query('SELECT * FROM xp', (err, rows) =>{
        if(err) throw err;
     console.log(rows.length)
      let xp = [];
      for (i=0; i<rows.length; i++){
      	xp.push(rows[i].xp);
      	       let lv = Math.sqrt(rows[i].xp/5).toFixed();
       // await message.channel.send(message.guild.members.get(rows[i].id).user.username+"'s LEVEL = "+rows[i].xp);
      }
//
    
    })

}}

module.exports.help = {
	name: "lv",
	name2: "lb",
    help: "nothing yet!",

}