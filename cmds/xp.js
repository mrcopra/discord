module.exports.run = async (bot, message, args, con) => {
    let msg = message.content.split(" ");
  //  console.log("args0 "+msg[0]);
    let target = message.mentions.users.first() || message.guild.members.get(args[1]) || message.author;
if(msg[0]=="=xp"){
    con.query(`SELECT * FROM xp WHERE id = '${target.id}'`, (err, rows) =>{
        if(err) throw err;
        
        if(!rows[0]) return message.channel.send("This user has no XP on record!");
        let xp = rows[0].xp;
        message.channel.send(target.username+"'s XP = "+xp);
    })} 
//     else{
//         con.query(`DELETE FROM xp`);
//         message.channel.send("xp deleted");

//     }

 }

module.exports.help = {
	name: "xp",
    name2: "clearXp",
    help: "nothing yet!",

}