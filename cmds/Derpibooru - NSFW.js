//key=LKd2d92XEkeqyX2Ff4UP

const snekfetch = require("snekfetch");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  function random(max) {
  return Math.floor(Math.random() * Math.floor(max));

 }; 

   let api = `https://derpibooru.org/search/index.json?page=1&q=`;
let score = 0;
let tags = args[0];
  if (args[0]>0){
    tags=`score.gt:${args[0]}`;         
}else{
   tags = args[0];
};

  for (i=1; i<args.length;i++){

      if (args[i]>0){

        tags=tags+"%2C+"+"score.gt:"+args[i];  
                     }else{

tags = tags+"%2C+"+args[i];
 //console.log(tags);
                          }
          
};
  api = api+tags+"&key=LKd2d92XEkeqyX2Ff4UP";
  //console.log("new "+api);
    snekfetch.get(api).then(r => {
      let body = r.body;
   //   console.log(body.search.length);
      if (body.search.length<1) return message.channel.send("No result!");
      if(body.total<=15){
    let page = 1}else{
    let page = body.total}
    
      let rand = random(body.total/15).toFixed();
      let api = `https://derpibooru.org/search/index.json?page=${rand}&q=${tags}&key=LKd2d92XEkeqyX2Ff4UP`;

//console.log(api);
//message.channel.send(api)

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
 //console.log(b);
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
	name: "dn",
	help: "search images: write command =d and write what you want to search in derpibooru (put + instead of space for full name of character)!" 

}