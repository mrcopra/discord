
const snekfetch = require("snekfetch");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	function random(max) {
  return Math.floor(Math.random() * Math.floor(max));

 }; 

   let api = `https://derpibooru.org/search/index.json?page=1&q=`;

  let tags=args[0];
  for (i=1; i<args.length;i++){
    tags =tags +"%2C+"+args[i];
    	    
}; 
  api = api+tags;
  //console.log(api);
    snekfetch.get(api).then(r => {
    	let body = r.body;
    	
    	if (body.search.length<1) return message.channel.send("No result!");
    	let page = r.pages;

      if (body.total>=15){
   rand = random(body.total/15).toFixed()
}else if(body.total == 1){
  rand = 1
} else{
  rand = random(body.total).toFixed()
};

    //	let rand = random(body.total/15).toFixed();
    	let api = `https://derpibooru.org/search/index.json?page=${rand}&q=${tags}`;

//console.log(api);

    	    snekfetch.get(api).then(r => {
    	let body = r.body;

//console.log(api=api+"%2C+")
if (body.total>=15){
   rnd = random(15);
}else if(body.total == 1){
  rnd = 0
} else{
  rnd = random(body.total)
};
let result = "https:"+body.search[rnd];
let b = body.search[rnd];
 //message.channel.send("https:"+body.search[rnd].image);
 //console.log(body.search.length+" "+rnd)
 let si = "https:"+b.representations.full;
let embed = new Discord.RichEmbed()
.setAuthor(b.uploader)
.setDescription(b.description)
.addField("Score", b.score, true)
.addField("Upvotes", b.upvotes, true)

.setImage(si)

 message.channel.send(embed);


      // message.channel.send({files:[
      // {
      // url: "https:"+body.search[rnd].image,
      //   name: "avatar.png"
      // }
      // ]});
    })


    });


};
module.exports.help = {
	name: "d",
	help: "search images: write command =d and write what you want to search in derpibooru (put + instead of space for full name of character)!" 

}